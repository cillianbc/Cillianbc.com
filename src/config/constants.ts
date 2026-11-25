/**
 * Cloudflare Turnstile site key for the /contact form. This is a public value.
 * Set PUBLIC_TURNSTILE_SITE_KEY in Cloudflare Pages → Settings → Variables and Secrets.
 * Outside production builds it falls back to Cloudflare's always-pass test key,
 * so the form works locally. Production builds fail if the variable is missing
 * (see src/pages/contact.astro), so the live form can never ship without spam protection.
 */
const TURNSTILE_TEST_SITE_KEY = '1x00000000000000000000AA';

export const TURNSTILE_SITE_KEY: string =
  import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || (import.meta.env.PROD ? '' : TURNSTILE_TEST_SITE_KEY);

/** Anchor every "Send a message" CTA links to. */
export const CONTACT_FORM_URL = '/contact/#contact-form';
