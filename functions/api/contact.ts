/**
 * POST /api/contact — Cloudflare Pages Function behind the /contact form.
 *
 * Flow: honeypot check → field validation → Turnstile verification → email via
 * Cloudflare Email Service (REST API — Pages Functions can't use the send_email binding).
 * Always responds with JSON: { ok: true } or { ok: false, error, fields? }.
 *
 * Environment variables (Cloudflare Pages → Settings → Variables and Secrets):
 *   TURNSTILE_SECRET_KEY  (secret)   Turnstile widget secret key
 *   CF_EMAIL_API_TOKEN    (secret)   Cloudflare API token with the "Email Sending Write" permission
 *   CF_ACCOUNT_ID         (text)     Cloudflare account ID that owns the Email Service domain
 *   CONTACT_TO            (optional) Recipient, defaults to info@cillianbc.com. Must be a verified
 *                                    destination address in the account (required on Workers Free).
 *   CONTACT_FROM          (optional) Sender on a domain onboarded to Email Sending,
 *                                    defaults to forms@cillianbc.com
 */

interface Env {
  TURNSTILE_SECRET_KEY?: string;
  CF_EMAIL_API_TOKEN?: string;
  CF_ACCOUNT_ID?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

interface CloudflareSendResponse {
  success?: boolean;
  errors?: { code?: number; message?: string }[];
  result?: {
    message_id?: string;
    delivered?: string[];
    queued?: string[];
    permanent_bounces?: string[];
    suppressed_recipients?: string[];
  } | null;
}

interface PagesContext {
  request: Request;
  env: Env;
}

type FieldErrors = Partial<Record<'name' | 'email' | 'company' | 'message', string>>;

const DEFAULT_TO = 'info@cillianbc.com';
const DEFAULT_FROM = 'forms@cillianbc.com';
const MAX_BODY_BYTES = 32 * 1024;
const LIMITS = { name: 100, email: 254, company: 200, messageMin: 10, messageMax: 5000 };
const EMAIL_PATTERN = /^[^\s@<>(),;:"]+@[^\s@<>(),;:"]+\.[^\s@<>(),;:"]{2,}$/;

function json(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

/** Trims, normalises line endings and drops control characters (keeps \n for the message). */
function clean(value: FormDataEntryValue | null, multiline = false): string {
  if (typeof value !== 'string') return '';
  let text = value.replace(/\r\n?/g, '\n');
  text = multiline
    ? text.replace(/[\u0000-\u0009\u000B-\u001F\u007F]/g, '')
    : text.replace(/[\u0000-\u001F\u007F]/g, ' ');
  return text.trim();
}

function validate(name: string, email: string, company: string, message: string): FieldErrors {
  const errors: FieldErrors = {};
  if (!name) errors.name = 'Please enter your name.';
  else if (name.length > LIMITS.name) errors.name = `Please keep your name under ${LIMITS.name} characters.`;

  if (!email) errors.email = 'Please enter your email address.';
  else if (email.length > LIMITS.email || !EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address.';

  if (company.length > LIMITS.company) errors.company = `Please keep this under ${LIMITS.company} characters.`;

  if (message.length < LIMITS.messageMin) errors.message = 'Please add a little more detail to your message.';
  else if (message.length > LIMITS.messageMax) errors.message = `Please keep your message under ${LIMITS.messageMax} characters.`;

  return errors;
}

async function verifyTurnstile(token: string, secret: string, ip: string | null): Promise<boolean> {
  const body = new FormData();
  body.append('secret', secret);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
    if (!res.ok) return false;
    const outcome = (await res.json()) as { success?: boolean };
    return outcome.success === true;
  } catch {
    return false;
  }
}

async function sendEmail(env: Env, fields: { name: string; email: string; company: string; message: string }): Promise<boolean> {
  const lines = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Company / website: ${fields.company || '—'}`,
    '',
    'Message:',
    fields.message,
    '',
    '—',
    `Sent from the contact form at cillianbc.com/contact/ on ${new Date().toISOString()}.`,
    'Reply to this email to respond directly to the sender.',
  ];

  const endpoint = `https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(env.CF_ACCOUNT_ID ?? '')}/email/sending/send`;

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.CF_EMAIL_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM || DEFAULT_FROM,
        to: [env.CONTACT_TO || DEFAULT_TO],
        reply_to: fields.email,
        subject: `Website enquiry from ${fields.name.slice(0, 80)}`,
        text: lines.join('\n'),
      }),
    });

    const outcome = (await res.json().catch(() => null)) as CloudflareSendResponse | null;
    if (!res.ok || !outcome?.success) {
      console.error('Cloudflare Email Service rejected the email', res.status, JSON.stringify(outcome?.errors ?? outcome));
      return false;
    }

    // A successful request can still drop the recipient (bounce or suppression list).
    const result = outcome.result;
    const accepted = (result?.delivered?.length ?? 0) + (result?.queued?.length ?? 0);
    if (result && accepted === 0) {
      console.error('Cloudflare Email Service accepted the request but did not deliver it', JSON.stringify(result));
      return false;
    }
    return true;
  } catch (err) {
    console.error('Cloudflare Email Service request failed', err);
    return false;
  }
}

export const onRequestPost = async ({ request, env }: PagesContext): Promise<Response> => {
  if (!env.TURNSTILE_SECRET_KEY || !env.CF_EMAIL_API_TOKEN || !env.CF_ACCOUNT_ID) {
    console.error('Contact form is missing TURNSTILE_SECRET_KEY, CF_EMAIL_API_TOKEN or CF_ACCOUNT_ID');
    return json({ ok: false, error: 'The form is not available right now. Please email info@cillianbc.com instead.' }, 503);
  }

  const declaredLength = Number(request.headers.get('Content-Length') || 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return json({ ok: false, error: 'That message is too long to send.' }, 413);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: 'Something went wrong reading the form. Please try again.' }, 400);
  }

  // Honeypot: real visitors never see or fill this field. Pretend success so bots move on.
  if (clean(form.get('website'))) {
    return json({ ok: true });
  }

  const name = clean(form.get('name'));
  const email = clean(form.get('email'));
  const company = clean(form.get('company'));
  const message = clean(form.get('message'), true);

  const fieldErrors = validate(name, email, company, message);
  if (Object.keys(fieldErrors).length > 0) {
    return json({ ok: false, error: 'Please check the highlighted fields.', fields: fieldErrors }, 400);
  }

  const ip = request.headers.get('CF-Connecting-IP');
  const token = clean(form.get('cf-turnstile-response'));
  if (!token || !(await verifyTurnstile(token, env.TURNSTILE_SECRET_KEY, ip))) {
    return json({ ok: false, error: 'The spam check did not complete. Please wait a moment and try again.' }, 403);
  }

  const sent = await sendEmail(env, { name, email, company, message });
  if (!sent) {
    return json({ ok: false, error: 'Your message could not be sent. Please try again, or email info@cillianbc.com.' }, 502);
  }

  return json({ ok: true });
};
