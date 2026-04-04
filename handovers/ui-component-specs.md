# UI/UX Component Specification
## cillianbc.com — AI Search Consultancy
### Version 1.0 | March 2026

---

> **How to use this document.** Every decision here is derivable from the brand style guide and content files. When a rationale is given, it exists to prevent a future developer or designer from "fixing" something that is working. The constraints are the design. Do not round them off.

---

## SECTION 1: AEO/GEO Component Library

---

### 1A. Snippet-Optimised Bullets

**Purpose and context.** The bulleted lists under each service in `services-ai-workflows.md` (e.g., "GEO work includes:", "AEO work includes:") serve two readers simultaneously: a human scanning for a specific deliverable, and an AI system parsing the page for extractable, citable content. The component must satisfy both without compromise. A default `<ul>` with disc bullets fails the AI reader because it provides no structural differentiation from prose. It fails the human reader because scanning speed depends on visual rhythm, not just indentation.

**HTML structure:**

```html
<ul class="snippet-bullets">
  <li>
    <strong>Content structure audit</strong> — reviewing existing content
    against the extractable paragraph standard...
  </li>
  <li>
    <strong>Definition block implementation</strong> — every page that defines
    a concept needs a clearly marked, precisely worded definition...
  </li>
</ul>
```

**Bullet marker.** Replace the default disc with a short horizontal rule rendered via `::before`. The marker is `2px × 12px`, background `--color-atlantic`, positioned at the vertical midpoint of the first line of text. This reads as a typographic dash rather than a decorative shape, which signals editorial precision and provides AI parsers with a visually consistent list structure that differs clearly from prose paragraphs.

Do not use a checkmark, an arrow, or any pictographic marker. The brand's iconography rules prohibit decorative icons next to content items.

**Left border treatment.** The `<ul>` itself carries a `3px solid --color-atlantic-mist` left border — enough to visually group the list items as a unit without drawing attention away from the content. On hover of the parent container (if the list appears inside a card or expandable section), this border transitions to `--color-atlantic` at 150ms ease.

**CSS custom properties and implementation:**

```css
.snippet-bullets {
  list-style: none;
  padding: 0;
  margin: var(--space-md) 0;
  border-left: 3px solid var(--color-atlantic-mist);
  padding-left: var(--space-lg);
}

.snippet-bullets li {
  position: relative;
  padding-left: var(--space-md);
  margin-bottom: var(--space-sm);
  font-size: var(--text-body);         /* 1rem / 16px, Inter 400 */
  line-height: 1.65;
  color: var(--color-primary-text);
}

.snippet-bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;                         /* vertical midpoint of cap height */
  width: 12px;
  height: 2px;
  background-color: var(--color-atlantic);
}

.snippet-bullets li strong {
  font-weight: 600;                    /* Inter SemiBold */
  color: var(--color-atlantic);
}

/* Spacing between items */
.snippet-bullets li + li {
  margin-top: var(--space-sm);         /* 8px — tight enough to read as a list, not paragraphs */
}

/* Interactive variant — hover/focus state */
.snippet-bullets.is-interactive li {
  cursor: pointer;
  transition: padding-left 150ms ease;
}

.snippet-bullets.is-interactive li:hover,
.snippet-bullets.is-interactive li:focus-within {
  padding-left: calc(var(--space-md) + 4px);
}

.snippet-bullets.is-interactive li:focus-within {
  outline: none;
  box-shadow: inset 0 0 0 2px var(--color-atlantic);
  border-radius: 2px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .snippet-bullets.is-interactive li {
    transition: none;
  }
}
```

**Typography.** Body text at `--text-body` (1rem / 16px, Inter 400, line-height 1.65). The bold term at the start of each item uses Inter SemiBold (600) in `--color-atlantic`. The em-dash separator (—) and the descriptive text following it remain in `--color-primary-text` at weight 400. This creates a two-tier visual scan: eye lands on the bold term first, reads the description second.

**Spacing between items.** `--space-sm` (8px) between list items. This is deliberately tighter than paragraph spacing (`--space-md` / 16px) to signal list membership and enable fast scanning.

**Keyboard navigation.** When rendered as an interactive variant (e.g., inside a collapsible section), each `<li>` receives `tabindex="0"`. Focus is indicated by an inset box-shadow using `--shadow-focus` (`0 0 0 3px rgba(29, 75, 82, 0.25)`), not an outline, to preserve the left-border visual treatment.

---

### 1B. Comparison Table

**Purpose and context.** The GEO vs SEO vs AEO table in `aeo-geo-pillar.md` has 5 rows × 4 columns (Dimension, Traditional SEO, GEO, AEO) plus a caption. The data exists to justify the entire strategic engagement: a reader who understands this table understands why they need all three disciplines. The "Irish market status" row — the final row — carries the most strategically important data ("Widely understood; competitive" / "Poorly understood; low adoption" / "Almost entirely unadopted") and must be visually distinct from the other rows.

**HTML structure:**

```html
<figure class="table-wrapper">
  <table class="comparison-table">
    <caption class="table-caption">
      This table compares three disciplines across five dimensions.
      Irish market status reflects the state of adoption as of March 2026.
    </caption>
    <thead>
      <tr>
        <th scope="col">Dimension</th>
        <th scope="col">Traditional SEO</th>
        <th scope="col">GEO</th>
        <th scope="col">AEO</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Primary goal</th>
        <td>Ranking in organic search results</td>
        <td>Being cited in AI-generated answers</td>
        <td>Appearing as the answer to direct questions</td>
      </tr>
      <tr>
        <th scope="row">Success metric</th>
        <td>Position in SERPs, organic traffic</td>
        <td>Citation frequency in AI Overviews, Perplexity, Gemini</td>
        <td>Featured snippet capture, voice answer rate</td>
      </tr>
      <tr>
        <th scope="row">Content requirement</th>
        <td>Relevant, well-structured, linked</td>
        <td>Extractable paragraphs, definition blocks, entity consistency</td>
        <td>FAQ structure, question-intent alignment</td>
      </tr>
      <tr>
        <th scope="row">Technical requirement</th>
        <td>Technical health, page speed, canonical structure</td>
        <td>Schema.org markup (Service, Article, FAQPage)</td>
        <td>FAQPage JSON-LD, Speakable schema</td>
      </tr>
      <tr class="row-emphasis">
        <th scope="row">Irish market status</th>
        <td>Widely understood; competitive</td>
        <td>Poorly understood; low adoption</td>
        <td>Almost entirely unadopted</td>
      </tr>
    </tbody>
  </table>
</figure>
```

**`scope` attribute implementation.** Every column header (`<th>` in `<thead>`) receives `scope="col"`. Every row header (the Dimension column, rendered as `<th>` in `<tbody>`) receives `scope="row"`. This is not optional — without scope, screen readers cannot associate data cells with their headers in a multi-dimensional table.

**Header row treatment.** `<thead>` background: `--color-atlantic`. Text: `--color-inverted-text` (`#F7F6F2`), Inter SemiBold (600), `--text-body-sm` (14px), letter-spacing 0.01em. Cell padding: `--space-md` (16px) vertical, `--space-lg` (24px) horizontal. The first column header ("Dimension") uses `text-align: left`. The remaining column headers are also left-aligned — centre-aligning table headers is a SaaS design pattern that conflicts with this brand's editorial quality.

**Row striping.** Odd body rows: `--color-off-white` background. Even body rows: `--color-warm-stone` background. This creates a subtle rhythm without using colour that competes with the row emphasis treatment below. The stripe contrast is intentionally low — `--color-off-white` (`#F7F6F2`) against `--color-warm-stone` (`#EEECE6`) — because the primary navigation aid is the row header, not the stripe.

**"Irish market status" row emphasis.** The final row (`class="row-emphasis"`) receives:
- Left border: `3px solid --color-amber` (`#C97D2E`) on the row header cell only
- Row background: `--color-atlantic-mist` (`#EAF2F3`) — distinguishable from the stripe without using a non-system colour
- Row header text: Inter SemiBold (600), `--color-atlantic`
- Cell text: `--color-primary-text`, Inter 500

This draws the eye to the "Irish market status" row without creating visual noise. The amber left border is the only amber on the table and serves the same function as it does on elevated cards: this is the detail that matters.

**Caption placement and style.** The `<caption>` is placed below the table (use CSS `caption-side: bottom`). Style: `--text-caption` (12px, Inter 500, line-height 1.5), `--color-muted-text` (`#8C887F`), `margin-top: var(--space-sm)`. Italics are not used — the brand's typography rules reserve italic for Fraunces in pull-quote contexts only. The caption is not a decorative label; it carries sourcing information that AI systems should parse.

**Overflow and scroll behaviour on mobile.** The `<figure class="table-wrapper">` establishes the scroll context. On viewports below 640px:

```css
.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 0 calc(-1 * var(--space-md));  /* bleed to viewport edge on mobile */
  padding: 0 var(--space-md);
}

/* Overflow shadow indicating more content to the right */
.table-wrapper::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 32px;
  background: linear-gradient(to right, transparent, var(--color-off-white));
  pointer-events: none;
}
```

The scroll shadow is a pure-CSS technique using a pseudo-element. It disappears when the user has scrolled to the rightmost column. The gradient uses `--color-off-white` as the terminal colour because that is the page background — the shadow blends into the page, not into a foreign colour.

Note: Section 4B of this document addresses the alternative card-stack layout for mobile at the pillar page level.

**Full CSS:**

```css
.table-wrapper {
  position: relative;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 6px;
  margin: var(--space-xl) 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-body);
  color: var(--color-primary-text);
  min-width: 600px;                   /* prevents the table collapsing unusably small */
}

.comparison-table caption {
  caption-side: bottom;
  font-size: var(--text-caption);
  font-weight: 500;
  color: var(--color-muted-text);
  text-align: left;
  padding-top: var(--space-sm);
  font-family: var(--font-inter);
}

.comparison-table thead tr {
  background-color: var(--color-atlantic);
}

.comparison-table thead th {
  color: var(--color-inverted-text);
  font-family: var(--font-inter);
  font-weight: 600;
  font-size: var(--text-body-sm);
  letter-spacing: 0.01em;
  padding: var(--space-md) var(--space-lg);
  text-align: left;
  border: none;
}

.comparison-table tbody tr:nth-child(odd) {
  background-color: var(--color-off-white);
}

.comparison-table tbody tr:nth-child(even) {
  background-color: var(--color-warm-stone);
}

.comparison-table tbody th[scope="row"] {
  font-family: var(--font-inter);
  font-weight: 500;
  color: var(--color-secondary-text);
  padding: var(--space-md) var(--space-lg);
  text-align: left;
  white-space: nowrap;
}

.comparison-table tbody td {
  padding: var(--space-md) var(--space-lg);
  color: var(--color-primary-text);
  font-size: var(--text-body);
  line-height: 1.5;
  vertical-align: top;
}

/* Irish market status row */
.comparison-table tbody tr.row-emphasis {
  background-color: var(--color-atlantic-mist);
}

.comparison-table tbody tr.row-emphasis th[scope="row"] {
  font-weight: 600;
  color: var(--color-atlantic);
  border-left: 3px solid var(--color-amber);
  padding-left: calc(var(--space-lg) - 3px);  /* compensate for border width */
}

.comparison-table tbody tr.row-emphasis td {
  font-weight: 500;
  color: var(--color-primary-text);
}

/* Focus state for keyboard navigation within table cells */
.comparison-table td:focus,
.comparison-table th:focus {
  outline: 2px solid var(--color-atlantic);
  outline-offset: -2px;
}
```

---

### 1C. 7-Item FAQ Accordion

**Purpose and context.** The FAQ sections in both `aeo-geo-pillar.md` and `services-ai-workflows.md` implement the `<section id="faq">` structure from the Content Engineering Handoff. The accordion serves AI parsers (clean, machine-readable Q&A structure), keyboard users (full navigability without a mouse), and human readers scanning for a specific answer. The component must work without JavaScript as a baseline and be enhanced progressively.

**HTML structure (no-JS baseline using `<details>`/`<summary>`):**

```html
<section id="faq" aria-labelledby="faq-heading">
  <h2 id="faq-heading">Frequently Asked Questions About GEO and AEO</h2>

  <div class="faq-list">

    <details class="faq-item" id="faq-what-is-geo">
      <summary class="faq-question">
        <h3>What is Generative Engine Optimisation (GEO)?</h3>
        <span class="faq-chevron" aria-hidden="true"></span>
        <a class="faq-anchor" href="#faq-what-is-geo" aria-label="Link to this question">#</a>
      </summary>
      <div class="faq-answer">
        <p><strong>Generative Engine Optimisation (GEO)</strong> is the practice of structuring
        content so that AI-powered search engines — including Google AI Overviews, Perplexity,
        and Gemini — retrieve and cite it when generating answers to user queries...</p>
      </div>
    </details>

    <!-- Additional items follow the same pattern -->

  </div>
</section>
```

**JavaScript progressive enhancement.** When JS is available, replace `<details>`/`<summary>` behaviour with an ARIA-driven accordion pattern that provides more control over animation:

```html
<!-- JS-enhanced version replaces details/summary with: -->
<div class="faq-item" id="faq-what-is-geo">
  <h3 class="faq-question">
    <button
      aria-expanded="false"
      aria-controls="faq-answer-what-is-geo"
      id="faq-btn-what-is-geo"
    >
      What is Generative Engine Optimisation (GEO)?
      <span class="faq-chevron" aria-hidden="true"></span>
    </button>
    <a class="faq-anchor" href="#faq-what-is-geo" aria-label="Link to this question">#</a>
  </h3>
  <div
    class="faq-answer"
    id="faq-answer-what-is-geo"
    role="region"
    aria-labelledby="faq-btn-what-is-geo"
    hidden
  >
    <p>...</p>
  </div>
</div>
```

**ARIA attributes required:**
- `aria-expanded="false"` on the button in collapsed state; `aria-expanded="true"` when expanded
- `aria-controls` pointing to the ID of the answer `<div>`
- `hidden` attribute on the answer `<div>` in collapsed state (removed by JS on expand, not CSS `display:none`)
- `role="region"` on the answer `<div>` when it contains substantial content
- `aria-labelledby` on the answer `<div>` pointing to the button ID
- `aria-hidden="true"` on the chevron element — it is decorative, not informational

**Collapsed state.** Question: Inter SemiBold (600), `--text-h4` (18px), `--color-atlantic`, padding `--space-md` (16px) top/bottom, `--space-lg` (24px) left, `--space-md` right. Bottom border: `1px solid --color-mid-stone`. Background: `--color-off-white`. Chevron: a right-pointing `>` shape rendered in pure CSS (or Lucide `chevron-right`), `--color-slate`, positioned flush right. The entire question row is the click/tap target — not just the text.

**Expanded state.** The `<button>` background shifts to `--color-atlantic-mist`. The bottom border moves from the question to the bottom of the answer panel. Chevron rotates 90 degrees to point downward.

**Chevron implementation:**

```css
.faq-chevron {
  display: inline-block;
  width: 20px;
  height: 20px;
  /* Using Lucide chevron-right as inline SVG or background-image */
  background-image: url("data:image/svg+xml,...");  /* Lucide chevron-right, --color-slate */
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
  transition: transform 200ms ease;
}

[aria-expanded="true"] .faq-chevron,
details[open] .faq-chevron {
  transform: rotate(90deg);
}

@media (prefers-reduced-motion: reduce) {
  .faq-chevron {
    transition: none;
  }
}
```

**Answer animation.** When JS is available, animate the answer reveal using `max-height` from `0` to the measured `scrollHeight` of the content. Duration: 250ms, easing: `cubic-bezier(0.16, 1, 0.3, 1)` (the brand's standard ease-out). Do not animate `height` directly — use `max-height` with `overflow: hidden` to avoid reflow. When `prefers-reduced-motion` is active, skip the animation entirely and toggle `hidden` directly.

**Answer typography.** `--text-body` (16px, Inter 400, line-height 1.65), `--color-primary-text`. Padding: `--space-lg` (24px) on all sides, with a `--space-md` (16px) top gap between the question border and the answer text. Bold terms within answers use Inter SemiBold (600), `--color-atlantic` — consistent with the snippet-bullet bold treatment.

**Border treatment.** Each FAQ item has a `1px solid --color-mid-stone` bottom border. The first item also has a top border. There is no border between the question and the answer when expanded — the background colour change provides sufficient visual separation.

**Focus ring for keyboard navigation.** The button element receives focus via Tab. Focus state: `box-shadow: var(--shadow-focus)` (`0 0 0 3px rgba(29, 75, 82, 0.25)`), `outline: none`. The focus ring must be visible against both `--color-off-white` (default) and `--color-atlantic-mist` (expanded) backgrounds — the Atlantic-derived shadow achieves this. Focus ring appearance: 100ms ease-out (from the brand's motion timing table).

**Anchor links for individual citability.** Each `<h3>` (or question button) carries a sibling anchor element:

```html
<a class="faq-anchor" href="#faq-what-is-geo" aria-label="Link to this question">#</a>
```

The anchor is hidden (`opacity: 0`, `focus` or `:hover on parent` makes it visible) and appears to the left of the question text. On hover of the `.faq-question` or `.faq-item`, the anchor transitions to `opacity: 1` at 150ms ease. On focus (keyboard), the anchor is immediately visible. The `#` character is set in `--color-amber` to use the accent sparingly and signal interactivity. Font: Inter 500, `--text-body-sm` (14px). This is the anchor link pattern used by technical documentation sites and long-form journalism — appropriate for a B2B consultancy producing citable content.

**Full CSS:**

```css
.faq-list {
  border-top: 1px solid var(--color-mid-stone);
  margin-top: var(--space-xl);
}

.faq-item {
  border-bottom: 1px solid var(--color-mid-stone);
}

.faq-question {
  margin: 0;
}

.faq-question button,
details.faq-item summary.faq-question {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  width: 100%;
  padding: var(--space-md) var(--space-lg);
  background: var(--color-off-white);
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: var(--font-inter);
  font-weight: 600;
  font-size: var(--text-h4);          /* 1.125rem / 18px */
  color: var(--color-atlantic);
  line-height: 1.4;
  transition: background-color 150ms ease;
  position: relative;
}

.faq-question button:hover,
details.faq-item summary.faq-question:hover {
  background-color: var(--color-atlantic-mist);
}

.faq-question button[aria-expanded="true"],
details.faq-item[open] summary.faq-question {
  background-color: var(--color-atlantic-mist);
}

.faq-question button:focus-visible,
details.faq-item summary.faq-question:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
}

.faq-anchor {
  opacity: 0;
  color: var(--color-amber);
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: var(--text-body-sm);
  text-decoration: none;
  transition: opacity 150ms ease;
  flex-shrink: 0;
  padding: var(--space-xs);
}

.faq-item:hover .faq-anchor,
.faq-anchor:focus {
  opacity: 1;
}

.faq-answer {
  padding: var(--space-lg);
  background-color: var(--color-off-white);
  font-size: var(--text-body);
  line-height: 1.65;
  color: var(--color-primary-text);
  overflow: hidden;
}

/* JS-enhanced animation */
.faq-answer.is-animating {
  transition: max-height 250ms cubic-bezier(0.16, 1, 0.3, 1);
}

@media (prefers-reduced-motion: reduce) {
  .faq-answer.is-animating,
  .faq-question button,
  details.faq-item summary.faq-question {
    transition: none;
  }
}
```

---

### 1D. Key Takeaways Block

**Purpose and context.** Every content page ends with a `<!-- id: key-takeaways -->` section. This is the Citable Summary Block from the Content Engineering Handoff — the section AI engines use as the "bottom line" of a page. It must be visually distinct from the Snippet-Optimised Bullets (Section 1A) for two reasons: (1) it serves a different semantic function — summary, not enumeration of deliverables — and (2) AI systems must be able to distinguish between "here is a list of what this service includes" and "here is the bottom-line claim of this page." Visual distinction reinforces structural distinction.

**Why numbered vs unordered.** The Key Takeaways block uses an ordered list (`<ol>`) rather than an unordered list (`<ul>`). The rationale: the takeaways are structured as a sequence of claims, each building on the authority of the previous. Numbering signals to AI systems that these items have a relationship of priority or sequence, not mere co-membership in a category. It also allows a reader to cite "the third takeaway from the AI Search page" precisely — which is exactly the citability this block is designed for.

**Why this must be visually different from Snippet-Optimised Bullets.** The Snippet-Optimised Bullets (1A) use a dash marker, a narrow left border in `--color-atlantic-mist`, and appear mid-content within service descriptions. The Key Takeaways Block uses a contained background, a stronger left border in `--color-atlantic`, and a distinct heading. A user or AI system encountering the Key Takeaways block must immediately recognise it as a different type of content from the service bullets — otherwise the page's information hierarchy collapses into visual sameness.

**HTML structure:**

```html
<section
  class="key-takeaways"
  id="key-takeaways"
  aria-label="Key takeaways from this page"
>
  <h2 class="key-takeaways__heading">Key Takeaways</h2>
  <ol class="key-takeaways__list">
    <li>
      <strong>AI-powered search is changing which businesses customers discover first</strong>,
      and Irish businesses are behind the curve on this by approximately 12–18 months
      compared to the US market.
    </li>
    <li>
      <!-- additional items -->
    </li>
  </ol>
</section>
```

**`aria-label` implementation.** The `aria-label="Key takeaways from this page"` on the `<section>` element is what the Content Engineering Handoff specifies. This provides a named landmark that screen readers announce when navigating by landmark (e.g., "Key takeaways from this page, region"). The `id="key-takeaways"` provides the fragment anchor (`#key-takeaways`) for direct citation.

**Visual container.** Background: `--color-atlantic-mist` (`#EAF2F3`). Left border: `3px solid --color-atlantic`. Border radius: `6px` on the right side only (right corners rounded, left corners flush with the left border — this is achieved with `border-radius: 0 6px 6px 0`). Internal padding: `--space-xl` (40px) on all sides on desktop; `--space-lg` (24px) on mobile.

**Heading treatment.** `--text-h3` (1.5rem / 24px, Fraunces 600). `--color-atlantic`. No amber accent above this heading — that treatment is reserved for section headings that need to draw the eye mid-page; the Key Takeaways block earns its own visual weight from the background and border.

**List treatment.** Numbered, 1-indexed. Counter rendered in `--color-atlantic`, Inter SemiBold (600), `--text-body-lg` (18px). Each item's text in `--text-body` (16px, Inter 400, `--color-primary-text`). Bold terms at the start of each takeaway in Inter SemiBold (600), `--color-atlantic`. Line height 1.65. `--space-md` (16px) between items.

**Full CSS:**

```css
.key-takeaways {
  background-color: var(--color-atlantic-mist);
  border-left: 3px solid var(--color-atlantic);
  border-radius: 0 6px 6px 0;
  padding: var(--space-xl);
  margin: var(--space-2xl) 0;
}

@media (max-width: 639px) {
  .key-takeaways {
    padding: var(--space-lg);
    margin: var(--space-xl) 0;
  }
}

.key-takeaways__heading {
  font-family: var(--font-fraunces);
  font-weight: 600;
  font-size: var(--text-h3);          /* 1.5rem / 24px */
  color: var(--color-atlantic);
  margin: 0 0 var(--space-lg) 0;
  line-height: 1.3;
  letter-spacing: -0.005em;
}

.key-takeaways__list {
  list-style: none;
  counter-reset: takeaway-counter;
  padding: 0;
  margin: 0;
}

.key-takeaways__list li {
  counter-increment: takeaway-counter;
  display: flex;
  gap: var(--space-md);
  align-items: flex-start;
  font-size: var(--text-body);
  line-height: 1.65;
  color: var(--color-primary-text);
  margin-bottom: var(--space-md);
}

.key-takeaways__list li:last-child {
  margin-bottom: 0;
}

.key-takeaways__list li::before {
  content: counter(takeaway-counter);
  font-family: var(--font-inter);
  font-weight: 600;
  font-size: var(--text-body-lg);     /* 1.125rem / 18px */
  color: var(--color-atlantic);
  min-width: 1.5em;
  flex-shrink: 0;
  line-height: 1.65;                  /* aligns with text baseline */
}

.key-takeaways__list li strong {
  font-weight: 600;
  color: var(--color-atlantic);
}
```

---

## SECTION 2: The Irish Trust Aesthetic — Full Design System

---

### 2A. Typography Implementation

**Font loading strategy.** Load all three typefaces via Google Fonts (Fraunces and Inter) and JetBrains' CDN, with `font-display: swap` to prevent invisible text during load. Preload the critical weights only.

```html
<!-- In <head>, before any CSS -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Fraunces: Light (300), SemiBold (600), Bold (700), optical size enabled -->
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,600;9..144,700&display=swap" rel="stylesheet">

<!-- Inter: Regular (400), Medium (500), SemiBold (600) -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<!-- Preload the most critical font file (Inter 400 — body copy) -->
<link rel="preload" as="font" type="font/woff2" crossorigin
  href="https://fonts.gstatic.com/s/inter/v13/...woff2">
```

**Fraunces optical sizing.** Fraunces supports the CSS `font-optical-sizing` property. Set `font-optical-sizing: auto` on any element using Fraunces. This instructs the browser to use the optical size axis of the variable font, which adjusts letterform details automatically as the rendered size changes — subtler at small sizes, more expressive at display sizes. This replaces the need for separate "display" and "text" font files.

```css
:root {
  font-optical-sizing: auto;   /* applies globally; Fraunces inherits it */
}

.fraunces-element {
  font-family: var(--font-fraunces);
  font-optical-sizing: auto;   /* explicit declaration for clarity */
}
```

**Fraunces usage rule.** Bold weight (700) is forbidden at display size. Use Light (300) for `--text-display` (hero statements). Use SemiBold (600) for H1–H3. Bold (700) is available for H3 in contexts where additional weight is needed (e.g., Key Takeaways heading against a tinted background) but defaults to 600.

**Fraunces fallback stack:**

```css
--font-fraunces: 'Fraunces', Georgia, 'Times New Roman', serif;
```

Georgia is the closest commonly available serif fallback in terms of x-height and reading weight. Times New Roman is the ultimate fallback. The brand tolerates these fallbacks — they are typographically coherent even if not ideal.

**Inter feature settings.** Each feature setting serves a specific disambiguation purpose:

- `cv02` — Alternate `a` form: replaces the double-story `a` with a single-story `a`. In UI contexts (navigation, labels), the single-story `a` is less likely to be confused with `o` at small sizes.
- `cv03` — Alternate `g` form: replaces the double-story `g` with a single-story `g`. Same rationale as `cv02` — cleaner at UI scale.
- `cv04` — Alternate `i` form: adds serifs to lowercase `i`. Disambiguates `i` from `l` and `1` in contexts where character clarity matters (code references, numeric identifiers).
- `cv11` — Alternate `@` symbol: a more open, legible at-sign, relevant for email addresses in contact contexts.
- `ss01` — Alternate digits: replaces tabular lining figures with proportional old-style figures where appropriate. For body text and prose, old-style figures are typographically correct and align with the brand's editorial quality signal. For tables and data displays, switch off `ss01` and use `font-variant-numeric: tabular-nums` instead.

```css
:root {
  --font-inter-features: "cv02" 1, "cv03" 1, "cv04" 1, "cv11" 1, "ss01" 1;
}

body,
.prose,
.faq-answer,
.snippet-bullets,
nav {
  font-family: var(--font-inter);
  font-feature-settings: var(--font-inter-features);
}

/* Tables: disable ss01, use tabular numerals */
.comparison-table,
.data-table {
  font-feature-settings: "cv02" 1, "cv03" 1, "cv04" 1, "cv11" 1;
  font-variant-numeric: tabular-nums;
}
```

**JetBrains Mono usage.** JetBrains Mono is used exclusively for code blocks and inline code references. It must not appear in navigation, body copy, headings, or any prose context.

```css
code,
kbd,
pre,
.code-block {
  font-family: var(--font-mono);
  font-size: var(--text-code);        /* 0.9375rem / 15px */
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0;
}

/* Inline code within prose */
p code,
li code {
  background-color: var(--color-warm-stone);
  border: 1px solid var(--color-mid-stone);
  border-radius: 3px;
  padding: 0.1em 0.35em;
  font-size: 0.9em;                   /* slightly smaller than surrounding prose */
}

/* Block code — schema examples on pillar page */
pre {
  background-color: var(--color-atlantic);
  color: var(--color-inverted-text);
  border-radius: 6px;
  padding: var(--space-lg);
  overflow-x: auto;
}

pre code {
  background: none;
  border: none;
  padding: 0;
  font-weight: 400;
}
```

**Prose width constraint.** The 68-character / `42rem` limit applies to all longform text content: body copy on all pages, service descriptions, FAQ answers, pillar page prose. It does not apply to navigation, tables (which require their full width), the comparison table, code blocks, or the Key Takeaways block (which is a contained component with its own padding logic).

```css
.prose {
  max-width: 42rem;              /* ~672px at 16px base — the 68-character measure */
}

/* The prose container is not always centered — it follows the page grid */
/* On standard content pages: left-aligned within the content column */
/* On the homepage hero: left-aligned, hero-width container handles the visual width */

article.prose,
.page-content .prose {
  max-width: 42rem;
}
```

**Full type scale as CSS custom properties:**

```css
:root {
  /* Type scale */
  --text-display:   4rem;       /* 64px — Fraunces 300, lh 1.1, ls -0.02em */
  --text-h1:        2.75rem;    /* 44px — Fraunces 600, lh 1.2, ls -0.015em */
  --text-h2:        2rem;       /* 32px — Fraunces 600, lh 1.25, ls -0.01em */
  --text-h3:        1.5rem;     /* 24px — Fraunces 600, lh 1.3, ls -0.005em */
  --text-h4:        1.125rem;   /* 18px — Inter 600, lh 1.4, ls 0 */
  --text-h5:        1rem;       /* 16px — Inter 600, lh 1.5, ls 0.01em */
  --text-h6:        0.875rem;   /* 14px — Inter 600, lh 1.5, ls 0.03em */
  --text-body-lg:   1.125rem;   /* 18px — Inter 400, lh 1.7, ls 0 */
  --text-body:      1rem;       /* 16px — Inter 400, lh 1.65, ls 0 */
  --text-body-sm:   0.875rem;   /* 14px — Inter 400, lh 1.6, ls 0.01em */
  --text-caption:   0.75rem;    /* 12px — Inter 500, lh 1.5, ls 0.02em */
  --text-code:      0.9375rem;  /* 15px — JetBrains Mono 400, lh 1.6, ls 0 */
  --text-label:     0.75rem;    /* 12px — Inter 600, lh 1.4, ls 0.08em, UPPERCASE only */

  /* Font stacks */
  --font-fraunces:  'Fraunces', Georgia, 'Times New Roman', serif;
  --font-inter:     'Inter', system-ui, -apple-system, sans-serif;
  --font-mono:      'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
}

/* Heading element defaults */
h1 {
  font-family: var(--font-fraunces);
  font-size: var(--text-h1);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.015em;
  color: var(--color-atlantic);
  font-optical-sizing: auto;
}

h2 {
  font-family: var(--font-fraunces);
  font-size: var(--text-h2);
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: var(--color-atlantic);
  font-optical-sizing: auto;
}

h3 {
  font-family: var(--font-fraunces);
  font-size: var(--text-h3);
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.005em;
  color: var(--color-atlantic);
  font-optical-sizing: auto;
}

h4 { font-family: var(--font-inter); font-size: var(--text-h4); font-weight: 600; line-height: 1.4; color: var(--color-atlantic); }
h5 { font-family: var(--font-inter); font-size: var(--text-h5); font-weight: 600; line-height: 1.5; letter-spacing: 0.01em; color: var(--color-atlantic); }
h6 { font-family: var(--font-inter); font-size: var(--text-h6); font-weight: 600; line-height: 1.5; letter-spacing: 0.03em; color: var(--color-atlantic); }
```

---

### 2B. Colour System Implementation

**All tokens as CSS custom properties:**

```css
:root {
  /* Primary */
  --color-atlantic:           #1D4B52;   /* WCAG AAA on white: 9.4:1 */
  --color-atlantic-mist:      #EAF2F3;   /* Section backgrounds, card fills */
  --color-slate:              #3D5560;   /* Secondary headings, hover states — 7.1:1 */
  --color-amber:              #C97D2E;   /* Accent only — 3.2:1 (AA Large only) */

  /* Neutrals */
  --color-off-white:          #F7F6F2;   /* Page background */
  --color-warm-stone:         #EEECE6;   /* Alternate section backgrounds */
  --color-mid-stone:          #D6D2C8;   /* Dividers, borders */
  --color-deep-stone:         #8C887F;   /* Placeholder, captions, metadata */

  /* Text */
  --color-primary-text:       #1A1917;   /* Body copy, main headings — 16.8:1 */
  --color-secondary-text:     #4A4742;   /* Supporting copy, labels — 8.1:1 */
  --color-muted-text:         #8C887F;   /* Captions, timestamps — 3.5:1 (AA Large) */
  --color-inverted-text:      #F7F6F2;   /* Text on dark backgrounds — 12.6:1 */

  /* Semantic */
  --color-success:            #2A6B4A;
  --color-warning:            #A0631A;
  --color-error:              #8B2A2A;
  --color-info:               #1D4B52;   /* Atlantic primary */

  /* Shadows (Atlantic-derived, not black) */
  --shadow-sm:    0 1px 3px rgba(29, 75, 82, 0.08);
  --shadow-md:    0 4px 12px rgba(29, 75, 82, 0.10);
  --shadow-lg:    0 8px 24px rgba(29, 75, 82, 0.12);
  --shadow-focus: 0 0 0 3px rgba(29, 75, 82, 0.25);
}
```

**Dark mode decision.** Do not implement dark mode for this site. The rationale is brand-specific, not technical: the colour system is built around the specific psychological signals of the Irish B2B trust aesthetic — the off-white page background, the Atlantic teal against warm neutrals, the amber accent as a rare emphasis device. In a dark mode, `--color-atlantic` becomes a light colour, `--color-off-white` becomes a dark background, and the careful warmth of the neutral palette inverts into a cold, agency-ish dark theme. The Irish CMO in Sandyford encounters this site in a professional context, typically on a desktop in a lit office. The system preference signal does not override the brand requirement here. If dark mode is revisited in a future version, it requires a complete re-evaluation of the colour system rather than CSS variable overrides.

**Amber usage rules in implementation terms.** Amber (`--color-amber`, `#C97D2E`) passes WCAG AA only at 18pt+ text or bold 14pt+ text. It does not pass for body copy. Specific approved uses:
- The `#` anchor link in FAQ items (rendered at `--text-body-sm`, but as a UI element, not body text — acceptable as an interactive indicator)
- The left border accent on the "Irish market status" table row
- Small decorative rules above section headings (2px × 32px horizontal rule, `--color-amber`, placed above an H2 to signal a new major topic — maximum once per page)
- Selected/active state in the Table of Contents (Section 4A)
- Icon accent in selected state (Lucide icons in the active navigation item)

Amber must never appear on:
- The Atlantic primary background (fails contrast entirely)
- Body text at any size
- Buttons (insufficient contrast for interactive affordance)
- The Mid Stone or Deep Stone backgrounds

---

### 2C. Whitespace and Spacing

**Spacing tokens:**

```css
:root {
  --space-xs:   0.25rem;    /* 4px  — icon-to-label, tight inline */
  --space-sm:   0.5rem;     /* 8px  — list item gaps, compact internal padding */
  --space-md:   1rem;       /* 16px — standard component padding, paragraph gaps */
  --space-lg:   1.5rem;     /* 24px — card padding, form field spacing */
  --space-xl:   2.5rem;     /* 40px — between related content sections */
  --space-2xl:  4rem;       /* 64px — between major page sections */
  --space-3xl:  6rem;       /* 96px — hero sections */
  --space-4xl:  8rem;       /* 128px — maximum section separation on desktop */
}
```

**Section padding by breakpoint:**

```css
.section {
  padding-top: var(--space-lg);        /* mobile: 24px */
  padding-bottom: var(--space-lg);
}

@media (min-width: 640px) {
  .section {
    padding-top: var(--space-xl);      /* tablet: 40px */
    padding-bottom: var(--space-xl);
  }
}

@media (min-width: 1024px) {
  .section {
    padding-top: var(--space-2xl);     /* desktop: 64px */
    padding-bottom: var(--space-2xl);
  }
}
```

**Content zone widths:**

```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;      /* mobile margin */
  padding-right: 20px;
}

@media (min-width: 640px) {
  .container {
    padding-left: 32px;    /* tablet margin */
    padding-right: 32px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: 48px;    /* desktop margin */
    padding-right: 48px;
  }
}

/* Narrow: prose */
.container--prose   { max-width: 42rem; }   /* 672px */

/* Standard: components */
.container--standard { max-width: 60rem; }  /* 960px */

/* Full: hero, full-bleed */
.container--full    { max-width: 75rem; }   /* 1200px */
```

**Card and component internal padding standards:**

| Component | Desktop padding | Mobile padding |
|-----------|----------------|----------------|
| Standard card | `--space-lg` (24px) all sides | `--space-md` (16px) all sides |
| Featured card | `--space-xl` (40px) all sides | `--space-lg` (24px) all sides |
| Key Takeaways block | `--space-xl` (40px) all sides | `--space-lg` (24px) all sides |
| FAQ answer | `--space-lg` (24px) all sides | `--space-md` (16px) all sides |
| FAQ question button | `--space-md` (16px) top/bottom, `--space-lg` (24px) left | Same |
| Navigation | `--space-md` (16px) top/bottom | `--space-md` top/bottom |
| Hero section | `--space-3xl` (96px) top/bottom | `--space-2xl` (64px) top/bottom |

**Paragraph spacing in prose.** The gap between paragraphs in body copy is `1em` (equivalent to the font size, approximately 16px at body scale). Do not use `margin-bottom` on `<p>` elements directly — set it on `.prose p + p` to target only consecutive paragraphs and avoid double-spacing around headings and lists.

```css
.prose p {
  margin: 0;
}

.prose p + p {
  margin-top: var(--space-md);         /* 16px between paragraphs */
}

.prose h2,
.prose h3 {
  margin-top: var(--space-2xl);        /* 64px before a new section heading */
  margin-bottom: var(--space-md);      /* 16px between heading and first paragraph */
}
```

---

### 2D. Navigation

**Structure.** The navigation is a fixed `<header>` with `position: sticky; top: 0; z-index: 100`. It does not use `position: fixed` — sticky allows the header to scroll with the page on very small viewports where the nav height would consume too much screen real estate, and then stick once it reaches the top of the viewport.

**Navigation items.** In document order: Logo (left), then: Home, Services, About, Insights, Contact (right-aligned group). The "Contact" item is styled as a primary button to provide one primary CTA in the viewport.

```html
<header class="site-nav" role="banner">
  <div class="container container--full">
    <nav class="site-nav__inner" aria-label="Main navigation">
      <a class="site-nav__logo" href="/" aria-label="Cillian BC — home">
        <!-- Wordmark or logotype — not an abstract icon -->
        <span class="site-nav__wordmark">Cillian BC</span>
      </a>

      <button
        class="site-nav__hamburger"
        aria-expanded="false"
        aria-controls="site-nav__menu"
        aria-label="Open navigation menu"
      >
        <!-- Lucide menu icon, 24px, --color-atlantic -->
      </button>

      <ul class="site-nav__menu" id="site-nav__menu" role="list">
        <li><a href="/" class="site-nav__link">Home</a></li>
        <li><a href="/services/" class="site-nav__link">Services</a></li>
        <li><a href="/about/" class="site-nav__link">About</a></li>
        <li><a href="/insights/" class="site-nav__link">Insights</a></li>
        <li>
          <a href="/contact/" class="btn btn--primary site-nav__cta">
            Start a conversation
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>
```

**Typography and spacing.** Nav links: Inter 500 (Medium), `--text-body` (16px), `--color-atlantic`. Letter-spacing: 0 (not spaced out — that is a SaaS pattern). No uppercase transformation. Padding on each nav link: `--space-sm` (8px) vertical, `--space-md` (16px) horizontal — generous enough to create a comfortable tap target on touch screens, not so generous that the nav feels bloated.

**What distinguishes this navigation from a SaaS template:**
- No backdrop blur (`backdrop-filter: blur(...)`) on scroll. The nav background either stays transparent (at page top) or becomes a solid `--color-off-white` with a `1px solid --color-mid-stone` bottom border on scroll. No blur, no glassmorphism.
- Inter Medium (500) rather than SemiBold (600) or Bold for nav links — the nav does not compete with the page content for weight.
- No icon decoration next to nav link text.
- The "Contact" CTA is a proper button element, not a `<a>` styled as a button — this is both semantically correct and prevents the "link that looks like a button" anti-pattern.

**Colour on scroll vs at page top.**

```css
.site-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: transparent;
  border-bottom: 1px solid transparent;
  transition: background-color 150ms ease, border-color 150ms ease;
}

.site-nav.is-scrolled {
  background-color: var(--color-off-white);
  border-bottom-color: var(--color-mid-stone);
}
```

The `.is-scrolled` class is toggled by JavaScript when `window.scrollY > 0`. At page top (hero visible), the nav is transparent — allowing the hero background to be the dominant visual. Once the user scrolls past the hero, the nav becomes opaque.

**Mobile hamburger behaviour.** Below 640px, the horizontal nav collapses. The hamburger button (`aria-expanded="false"`) is visible. When tapped, the menu opens as a full-width panel below the header (not an overlay that covers the page content). The menu slides in from above: `max-height: 0` to `max-height: [measured height]`, 250ms ease-in-out. The hamburger icon switches to a Lucide `x` icon. `aria-expanded` updates to `"true"`. The nav panel receives `id="site-nav__menu"` matching the button's `aria-controls`. Focus moves to the first menu item when the menu opens.

```css
@media (max-width: 639px) {
  .site-nav__menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--color-off-white);
    border-bottom: 1px solid var(--color-mid-stone);
    flex-direction: column;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 250ms ease-in-out;
  }

  .site-nav__menu.is-open {
    max-height: 400px;                  /* sufficient for 5 items */
  }

  .site-nav__menu .site-nav__link {
    display: block;
    padding: var(--space-md) var(--space-lg);
    border-bottom: 1px solid var(--color-mid-stone);
  }

  .site-nav__menu .site-nav__cta {
    margin: var(--space-md) var(--space-lg);
    display: block;
    text-align: center;
  }

  @media (prefers-reduced-motion: reduce) {
    .site-nav__menu {
      transition: none;
    }
  }
}
```

---

### 2E. Hero Section (Homepage)

**Layout.** Single column, left-aligned. No split layout (split layouts work when there is a high-quality photograph on one side; without a qualifying photograph, a split layout creates an asymmetric gap that draws attention to the missing content). The hero is contained within `.container--full` (75rem max-width) with a `.prose` child for the text content capped at `42rem`.

**No hero image.** The brand style guide specifies photography only if it passes the "taken in Ireland" test. Until a qualifying photograph is available, the hero uses a typographic treatment: the off-white (`--color-off-white`) page background continues into the hero with no background colour change. The visual interest comes from the Fraunces display typography at scale.

**Optional textured alternative.** If visual differentiation is needed at the hero level without photography, use a full-bleed section with `--color-atlantic-mist` background. This is not a gradient, not a pattern — it is the lightest teal in the system, which signals calm and grounds the eye before reading. The amber decorative rule (2px × 32px, `--color-amber`) appears above the H1 to signal the start of the primary content. This treatment must not appear on any other section of the homepage to preserve its distinctiveness.

**H1 treatment.** The H1 on the homepage is the page title from `homepage.md`: "AI Search Consultant for Irish Businesses | Cillian BC" — but the display text in the hero is the opening value statement: "Search has changed more in the last 18 months than in the previous decade." This is rendered as a `<p class="hero__statement">` at `--text-display` size, not as an H1 (the H1 in the document serves SEO and schema purposes but need not be the largest visible element). The visible display statement uses Fraunces Light (300), 4rem (64px), line-height 1.1, letter-spacing -0.02em, `--color-atlantic`.

Alternatively, if the page title itself is used as the H1, reduce to `--text-h1` (2.75rem / 44px, Fraunces 600) and use the value statement as a `<p class="hero__statement">` at `--text-display`.

**Lead paragraph treatment.** The three opening paragraphs from `homepage.md` (the bold statements beginning "Search has changed..." / "Cillian BC is..." / "I help Irish businesses...") form the hero body. Render at `--text-body-lg` (18px, Inter 400, line-height 1.7), `--color-primary-text`. The bold `<strong>` elements within these paragraphs use Inter SemiBold (600) — not a colour change, just weight.

**Primary CTA placement.** The "Start a conversation" button appears immediately below the lead paragraphs with `--space-xl` (40px) margin-top. It is the only primary button in the hero viewport. Its presence here means no other primary button appears above the fold.

**Hero padding.** `--space-3xl` (96px) top, `--space-2xl` (64px) bottom on desktop. On mobile: `--space-2xl` (64px) top, `--space-xl` (40px) bottom.

```css
.hero {
  padding-top: var(--space-3xl);
  padding-bottom: var(--space-2xl);
}

@media (max-width: 639px) {
  .hero {
    padding-top: var(--space-2xl);
    padding-bottom: var(--space-xl);
  }
}

.hero__statement {
  font-family: var(--font-fraunces);
  font-weight: 300;
  font-size: var(--text-display);     /* 4rem / 64px */
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-atlantic);
  font-optical-sizing: auto;
  margin: 0 0 var(--space-xl) 0;
  max-width: 42rem;
}

@media (max-width: 639px) {
  .hero__statement {
    font-size: var(--text-h1);        /* 2.75rem / 44px — scale down for mobile */
  }
}

.hero__lead {
  max-width: 42rem;
  font-size: var(--text-body-lg);
  line-height: 1.7;
  color: var(--color-primary-text);
  margin-bottom: var(--space-xl);
}

.hero__cta-group {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
}
```

---

## SECTION 3: The 'Coffee First' Conversion Flow

---

### 3A. Primary CTA — Global

**Button specification.** The primary CTA "Start a conversation" uses the standard primary button from the brand guide:

```css
.btn--primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-md) var(--space-xl);   /* 16px 40px */
  background-color: var(--color-atlantic);
  color: var(--color-inverted-text);
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: var(--text-body);                 /* 16px */
  line-height: 1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 200ms ease, transform 150ms ease;
}

.btn--primary:hover {
  background-color: var(--color-slate);
}

.btn--primary:active {
  transform: scale(0.98);
  transition-duration: 150ms;
}

.btn--primary:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
}

@media (prefers-reduced-motion: reduce) {
  .btn--primary {
    transition: none;
  }
}
```

No pill border-radius, no amber background, no uppercase text, no emoji. The text is "Start a conversation" — not "Book a call", not "Get in touch", not "Contact us". This specific phrasing signals that the interaction is human and non-committal. Do not alter it.

**Placement.** Primary CTA appears in:
1. The navigation (right-most item, styled as button)
2. The hero section (directly below the lead paragraphs)
3. The bottom of every content page (within the contact section)

One primary button per viewport. On the hero, the navigation CTA is the only visible primary button until the user scrolls past the navigation. When both appear visible simultaneously (e.g., on a very tall viewport where the hero is fully visible and the nav is sticky), the rule is: the hero CTA is the authoritative one. The navigation CTA is a persistent fallback.

**Framing sentence.** The CTA in the hero and at the bottom of service pages is not a naked button. It is preceded by a framing sentence that reduces the commitment. Based on the brand's Do/Don't examples, the framing is:

> Curious whether this applies to your situation?

Set in Fraunces 600, `--text-h3` (24px), `--color-atlantic`, followed by a second sentence in Inter 400, `--text-body-lg` (18px), `--color-secondary-text`:

> I do a free, no-obligation 30-minute call with any Irish business that's seriously considering this. No deck, no pitch — just a conversation to see if there's something worth exploring.

The button follows immediately below with `--space-lg` (24px) margin-top.

---

### 3B. Contact Section Design

**Format.** A single email address displayed plainly, with a Cal.com embed as a secondary option. Not a multi-field form. The rationale: the brand philosophy is "conversation first, not a sales funnel." A form with multiple fields signals that the consultant is managing volume — which contradicts the direct, solo-practice positioning of the About page. An email address signals directness.

**Layout.** The contact section sits at the bottom of the homepage and About page, above the footer. Background: `--color-atlantic-mist`. Padding: `--space-2xl` (64px) top/bottom on desktop. Content width: `42rem` (prose width, centred within the section).

**Framing copy.** The heading is set in Fraunces 600, `--text-h2` (32px), `--color-atlantic`:

> Let's work out if this is worth a conversation.

The subheading / framing paragraph uses Inter 400, `--text-body-lg` (18px), `--color-primary-text`, line-height 1.7:

> The first call is 30 minutes, free, and focused on your situation. If I'm not the right person, I'll tell you that and point you somewhere useful. No proposal until we've established there's something worth proposing.

**Contact methods displayed.** First: a plain-text email address in `--text-h4` (18px, Inter 600, `--color-atlantic`), rendered as an `<a href="mailto:...">` with no decoration beyond the font weight — no button wrapper, no email icon. Second: if a Cal.com embed is available, a secondary button ("Or pick a time →") in ghost button style below the email address. The secondary method must not compete visually with the email.

**Why not a form.** The brand guide specifies that forms are "high-stakes interactions where the visitor has decided to trust Cillian enough to make contact." A contact form at the bottom of the homepage occurs before that trust has been established. A form at this stage is a commitment extraction mechanism. An email address is an invitation.

```html
<section class="contact-section" id="contact">
  <div class="container container--prose">
    <h2 class="contact-section__heading">
      Let's work out if this is worth a conversation.
    </h2>
    <p class="contact-section__lead">
      The first call is 30 minutes, free, and focused on your situation.
      If I'm not the right person, I'll tell you that and point you somewhere useful.
      No proposal until we've established there's something worth proposing.
    </p>
    <div class="contact-section__methods">
      <a class="contact-section__email" href="mailto:hello@cillianbc.com">
        hello@cillianbc.com
      </a>
      <a class="btn btn--ghost" href="https://cal.com/cillianbc">
        Or pick a time →
      </a>
    </div>
  </div>
</section>
```

```css
.contact-section {
  background-color: var(--color-atlantic-mist);
  padding: var(--space-2xl) 0;
}

.contact-section__heading {
  font-family: var(--font-fraunces);
  font-weight: 600;
  font-size: var(--text-h2);
  color: var(--color-atlantic);
  margin-bottom: var(--space-lg);
}

.contact-section__lead {
  font-size: var(--text-body-lg);
  line-height: 1.7;
  color: var(--color-primary-text);
  margin-bottom: var(--space-xl);
  max-width: 42rem;
}

.contact-section__email {
  display: block;
  font-family: var(--font-inter);
  font-weight: 600;
  font-size: var(--text-h4);
  color: var(--color-atlantic);
  text-decoration: none;
  margin-bottom: var(--space-md);
  transition: color 150ms ease;
}

.contact-section__email:hover {
  color: var(--color-slate);
}

.contact-section__email:focus-visible {
  outline: 2px solid var(--color-atlantic);
  outline-offset: 2px;
  border-radius: 2px;
}
```

---

### 3C. In-Content CTAs

**Specification.** The services page and pillar page each contain one mid-content contextual CTA. This component is a styled `<aside>` — semantically an aside from the main content, which is accurate: it is a brief prompt adjacent to but not part of the main argument. It is not a banner. It is not a button. It is a single sentence that functions as an invitation and a link.

**Placement rule.** Appears once per long-form page, placed approximately two-thirds of the way through the main content — after the reader has enough context to recognise the relevance, before they reach the closing section. Never at the top of the content. Never immediately before or after a heading.

**Visual treatment.** No background. No border on all four sides. A single `2px solid --color-mid-stone` left border (consistent with the visual language of the elevated card, but lighter). Left padding: `--space-lg` (24px). No right border, no top border, no bottom border. The understatement is intentional.

**Copy pattern.** A single sentence in Fraunces italic (the one permitted use of Fraunces italic — pull-quote and prose-adjacent emphasis), `--text-body-lg` (18px), `--color-slate`, with an inline link at the key phrase:

> *If you want to know which of these applies to your situation, [that's what the first call is for](https://cal.com/cillianbc).*

The link uses the ghost button text treatment: `--color-atlantic`, Inter 500 (but here embedded in italic Fraunces prose, so the link text inherits the Fraunces italic and is underlined — the underline is the link affordance, not a colour change or arrow).

```html
<aside class="contextual-cta" aria-label="Invitation to continue the conversation">
  <p>
    <em>If you want to know which of these applies to your situation,
    <a href="/contact/">that's what the first call is for</a>.</em>
  </p>
</aside>
```

```css
.contextual-cta {
  border-left: 2px solid var(--color-mid-stone);
  padding-left: var(--space-lg);
  margin: var(--space-2xl) 0;
}

.contextual-cta p {
  font-family: var(--font-fraunces);
  font-style: italic;
  font-size: var(--text-body-lg);
  line-height: 1.6;
  color: var(--color-slate);
  margin: 0;
}

.contextual-cta a {
  color: var(--color-atlantic);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 150ms ease;
}

.contextual-cta a:hover {
  color: var(--color-slate);
}

.contextual-cta a:focus-visible {
  outline: 2px solid var(--color-atlantic);
  outline-offset: 2px;
  border-radius: 2px;
}
```

---

## SECTION 4: Mobile Data Density — AEO/GEO Pillar Page

---

### 4A. Sticky Table of Contents

**Desktop behaviour.** A sticky sidebar TOC that occupies the right column on the pillar page layout. On desktop (`min-width: 1024px`), the pillar page uses a two-column grid: prose content in the left column (`42rem` / 8 columns), TOC in the right column (`16rem` / 4 columns). The TOC is `position: sticky; top: calc([nav height] + var(--space-lg))`.

The TOC is a `<nav>` element with `aria-label="Table of contents"` — a named landmark, not just a decorative sidebar.

**TOC items.** Pulled from the H2 fragment IDs in the markdown. The items in order:

1. Definitions — `#definition`
2. What You Need to Know — `#summary-intro`
3. What Is GEO? — `#what-is-geo`
4. What Is AEO? — `#what-is-aeo`
5. GEO, AEO, and SEO — `#geo-vs-seo`
6. How AI Search Works — `#how-ai-search-works`
7. GEO and AEO for Irish Businesses — `#geo-aeo-ireland`
8. How to Optimise — `#how-to-optimise`
9. Frequently Asked Questions — `#faq`
10. Key Takeaways — `#key-takeaways`

**Active state tracking.** Use an `IntersectionObserver` to detect which H2 is currently in the upper portion of the viewport. The corresponding TOC item receives the active class. Active state: Inter SemiBold (600), `--color-amber` left border (2px), `--color-atlantic` text. Inactive state: Inter 400, `--color-secondary-text`, no border.

**TOC typography.** Inter 400, `--text-body-sm` (14px), `--color-secondary-text`. Active: Inter SemiBold (600), `--color-atlantic`. Line-height 1.5. `--space-sm` (8px) between items. No uppercase, no letter-spacing beyond the defaults for `--text-body-sm`.

```html
<nav class="toc" aria-label="Table of contents">
  <p class="toc__heading">Contents</p>
  <ol class="toc__list" role="list">
    <li class="toc__item">
      <a class="toc__link" href="#definition">Definitions</a>
    </li>
    <li class="toc__item">
      <a class="toc__link" href="#summary-intro">What You Need to Know</a>
    </li>
    <!-- ... -->
  </ol>
</nav>
```

```css
.toc {
  position: sticky;
  top: calc(64px + var(--space-lg));   /* 64px = estimated nav height */
  max-height: calc(100vh - 80px);
  overflow-y: auto;
}

.toc__heading {
  font-family: var(--font-inter);
  font-weight: 600;
  font-size: var(--text-label);        /* 12px, with 0.08em letter-spacing */
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted-text);
  margin-bottom: var(--space-sm);
}

.toc__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc__item {
  margin-bottom: var(--space-xs);
}

.toc__link {
  display: block;
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: var(--text-body-sm);
  color: var(--color-secondary-text);
  text-decoration: none;
  padding: var(--space-xs) var(--space-sm);
  border-left: 2px solid transparent;
  transition: color 150ms ease, border-color 150ms ease;
}

.toc__link:hover {
  color: var(--color-atlantic);
}

.toc__link.is-active {
  font-weight: 600;
  color: var(--color-atlantic);
  border-left-color: var(--color-amber);
}

.toc__link:focus-visible {
  outline: 2px solid var(--color-atlantic);
  outline-offset: 2px;
  border-radius: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .toc__link {
    transition: none;
  }
}
```

**Mobile behaviour.** Below 1024px, the TOC collapses to a disclosure widget at the top of the article, above the first H2. It is a `<details>` element (native, no JS required) with a `<summary>` that reads "Contents" and a Lucide `chevron-down` icon.

```html
<details class="toc-mobile">
  <summary class="toc-mobile__trigger">
    Contents
    <span class="toc-mobile__chevron" aria-hidden="true"></span>
  </summary>
  <nav aria-label="Table of contents">
    <ol class="toc__list" role="list">
      <!-- same items as desktop -->
    </ol>
  </nav>
</details>
```

The mobile TOC disclosure opens with a `max-height` animation when JS is available, or via the native `<details>` toggle without animation as the CSS-only fallback. The chevron rotates 90 degrees when open (same pattern as the FAQ chevron). Animation: 250ms, `cubic-bezier(0.16, 1, 0.3, 1)`.

```css
@media (min-width: 1024px) {
  .toc-mobile { display: none; }
}

@media (max-width: 1023px) {
  .toc { display: none; }       /* hide the sidebar TOC on mobile */

  .toc-mobile {
    background-color: var(--color-warm-stone);
    border: 1px solid var(--color-mid-stone);
    border-radius: 6px;
    margin-bottom: var(--space-xl);
  }

  .toc-mobile__trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-md) var(--space-lg);
    font-family: var(--font-inter);
    font-weight: 600;
    font-size: var(--text-body);
    color: var(--color-atlantic);
    cursor: pointer;
    list-style: none;
  }

  .toc-mobile[open] .toc-mobile__trigger {
    border-bottom: 1px solid var(--color-mid-stone);
  }

  .toc-mobile nav {
    padding: var(--space-md);
  }
}
```

---

### 4B. Comparison Table on Mobile

**Strategy selection: card-stack layout.** The card-stack approach is preferred over horizontal scroll for this table, for the following reasons:

1. The table has 4 columns but only 5 rows. The data structure is more "per-discipline, here are the facts" than "here is a spreadsheet of metrics." Each column (Traditional SEO, GEO, AEO) represents a complete discipline description — it reads naturally as a card.
2. The "Irish market status" row is the most strategically important data. In a horizontal scroll layout, users on mobile may not scroll far enough to reach the fourth column. In a card-stack layout, the Irish market status is visible on every card.
3. Horizontal scroll on a table of conceptual (not numeric) data creates a cognitive disconnect — the reader must scroll laterally to read text that belongs to a concept they are building up. Cards allow that concept to be built vertically.

**Card-stack implementation.** Below 640px, the table is visually replaced by three cards — one per discipline (Traditional SEO, GEO, AEO). Each card uses the row header labels ("Primary goal", "Success metric", etc.) as field labels within the card. The card title is the column header (Traditional SEO / GEO / AEO). The `<table>` element and its semantic structure is preserved in the DOM for accessibility — the card layout is achieved via CSS, not HTML restructuring. Screen readers continue to read the table as a table.

**"Irish market status" preservation.** In the card layout, the Irish market status row becomes the final field in each card, with the amber left-border treatment preserved via a `data-emphasis="true"` attribute on the `<td>` element.

```css
@media (max-width: 639px) {
  .comparison-table {
    min-width: unset;
  }

  .comparison-table thead {
    display: none;                    /* hide column headers — become card titles */
  }

  .comparison-table tbody {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  /* Each column becomes a card — achieved by restructuring display */
  /* This requires generating per-column card wrappers via JS,
     or using the CSS :nth-child approach for a 4-column table */

  /*
    Implementation note: for a pure CSS approach with a 5×4 table,
    use the `display: contents` technique on <tr> elements and
    group cells by column index via nth-child selectors.
    A JS-based approach that generates cards from table data
    is simpler to maintain. The table HTML remains unchanged.
  */

  .comparison-table tbody tr {
    display: contents;               /* dissolve the row into the grid */
  }

  /* Column-based card via JS — fallback is the scroll approach */
  .comparison-table--cards .discipline-card {
    background-color: var(--color-off-white);
    border: 1px solid var(--color-mid-stone);
    border-radius: 6px;
    overflow: hidden;
  }

  .discipline-card__header {
    background-color: var(--color-atlantic);
    color: var(--color-inverted-text);
    font-family: var(--font-inter);
    font-weight: 600;
    font-size: var(--text-body);
    padding: var(--space-md) var(--space-lg);
  }

  .discipline-card__row {
    display: flex;
    flex-direction: column;
    padding: var(--space-md) var(--space-lg);
    border-bottom: 1px solid var(--color-mid-stone);
  }

  .discipline-card__row:last-child {
    border-bottom: none;
  }

  .discipline-card__label {
    font-family: var(--font-inter);
    font-weight: 600;
    font-size: var(--text-body-sm);
    color: var(--color-secondary-text);
    margin-bottom: var(--space-xs);
  }

  .discipline-card__value {
    font-size: var(--text-body);
    color: var(--color-primary-text);
  }

  .discipline-card__row--emphasis {
    background-color: var(--color-atlantic-mist);
    border-left: 3px solid var(--color-amber);
    padding-left: calc(var(--space-lg) - 3px);
  }

  .discipline-card__row--emphasis .discipline-card__label {
    color: var(--color-atlantic);
  }
}
```

**JavaScript for card generation.** The JS that converts the table to cards reads the `<thead>` column headers as card titles, reads the `<tbody th[scope="row"]>` labels as field labels, and reads the `<tbody td>` values as field values. It generates card HTML and inserts it as a sibling to the `<figure class="table-wrapper">`, then hides the table wrapper. If JS is unavailable, the table falls back to horizontal scroll (the `.table-wrapper` overflow-x: auto handles this).

---

### 4C. FAQ Accordion on Mobile

**Progressive enhancement with `<details>`/`<summary>`.** The FAQ accordion uses `<details>`/`<summary>` as the CSS-only baseline. This works in all modern browsers without JavaScript. When JavaScript is available, the native behaviour is replaced with the ARIA-driven accordion for better animation control.

**Tap target sizes.** The `<summary>` element (or the JS-enhanced button) has a minimum height of 44px to satisfy WCAG 2.5.5 (Target Size). The padding specification (`--space-md` / 16px vertical, `--space-lg` / 24px horizontal) on a `--text-h4` (18px) line-height-1.4 element produces approximately 18px × 1.4 + 32px padding = ~57px — above the 44px minimum. Verify on mobile at production.

**Spacing between accordion items on mobile.** On mobile (below 640px), increase the bottom border to `8px solid --color-off-white` to create a more distinct visual gap between items — this is the same off-white as the page background, creating a gutter effect without introducing a new colour. On desktop, the `1px solid --color-mid-stone` border is sufficient.

```css
@media (max-width: 639px) {
  .faq-item {
    border-bottom: 8px solid var(--color-off-white);
    border-top: none;
  }

  .faq-question button,
  details.faq-item summary.faq-question {
    padding: var(--space-md) var(--space-lg);
    font-size: var(--text-body);      /* scale down from --text-h4 on mobile */
    min-height: 44px;
  }

  .faq-answer {
    padding: var(--space-md) var(--space-lg);
  }
}
```

**Answer reveal animation on mobile.** The `max-height` animation from Section 1C applies equally on mobile. Duration remains 250ms — do not increase for mobile, as slower animations feel sluggish on touch devices. The easing `cubic-bezier(0.16, 1, 0.3, 1)` produces an initial burst of speed that feels responsive to the tap, followed by a smooth deceleration.

---

### 4D. Reading Progress Indicator

**Specification.** A thin horizontal bar at the top of the viewport (below the sticky navigation, inside the `<main>` context) that fills from left to right as the user scrolls through the pillar page. Implemented on the `aeo-geo-pillar` page only — not on the homepage, services page, or about page, which are shorter and do not require progress signalling.

**Colour.** `--color-atlantic` (`#1D4B52`). Not amber. The rationale: the progress bar is a navigation aid, not an accent or emphasis device. Amber is the warmth register of the brand — the progress bar is utilitarian. Atlantic primary reads as calm, authoritative, and continuous — appropriate for a bar that signals "you are progressing through a serious piece of content." Amber would draw too much attention to itself and violate the 5% visual weight limit for the accent colour.

**Height.** 2px. Not 4px. The brand's whitespace philosophy is generous, and the progress bar should feel like a subtle indicator, not a navigation element. 4px is noticeable; 2px is felt but not noticed — consistent with the animation philosophy.

**Position and z-index.** `position: fixed; top: [nav height]; left: 0; right: 0; z-index: 99`. The z-index is one below the navigation (z-index: 100) so it slides under the nav rather than over it. On mobile, the nav height may differ — use a CSS custom property `--nav-height` set by JavaScript on load and on resize.

**Mobile vs desktop.** The reading progress bar appears on both mobile and desktop for the pillar page. The 2,600-word article with multiple sections benefits from a progress indicator on all viewports — mobile readers especially benefit from knowing how far through a long article they are.

```css
.reading-progress {
  position: fixed;
  top: var(--nav-height, 64px);       /* set by JS; fallback 64px */
  left: 0;
  width: 0%;                          /* JS updates this */
  height: 2px;
  background-color: var(--color-atlantic);
  z-index: 99;
  transition: width 50ms linear;      /* near-instant for scroll responsiveness */
}

@media (prefers-reduced-motion: reduce) {
  .reading-progress {
    transition: none;
  }
}
```

```javascript
// Reading progress indicator
const progressBar = document.querySelector('.reading-progress');
const article = document.querySelector('article.prose');

if (progressBar && article) {
  const updateProgress = () => {
    const articleTop = article.offsetTop;
    const articleHeight = article.offsetHeight;
    const scrolled = window.scrollY - articleTop;
    const percent = Math.min(100, Math.max(0, (scrolled / articleHeight) * 100));
    progressBar.style.width = `${percent}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();  // initialise on load
}
```

---

## SECTION 5: Component Inventory and Implementation Notes

---

### Component Inventory Table

| Component | Used on | HTML element(s) | Key CSS custom properties | WCAG considerations | Dependencies |
|-----------|---------|-----------------|--------------------------|---------------------|--------------|
| Snippet-Optimised Bullets | Services, Pillar page | `<ul>`, `<li>`, `::before` pseudo | `--color-atlantic`, `--color-atlantic-mist`, `--text-body`, `--space-sm`, `--space-md`, `--space-lg`, `--shadow-focus` | Focus state via `box-shadow`; keyboard nav with `tabindex="0"` on interactive variant | CSS only; JS only for interactive variant keyboard trap handling |
| Comparison Table | Pillar page | `<figure>`, `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<th scope>`, `<td>` | `--color-atlantic`, `--color-atlantic-mist`, `--color-off-white`, `--color-warm-stone`, `--color-amber`, `--color-mid-stone`, `--text-body`, `--text-body-sm`, `--space-md`, `--space-lg` | `scope="col"` and `scope="row"` on all headers; `overflow-x: auto` with visible scroll cue; min-width prevents collapse | CSS only (scroll fallback); JS optional for card-stack mobile layout |
| FAQ Accordion | Services page, Pillar page | `<section>`, `<details>`, `<summary>`, `<h3>`, `<button>`, `<div>` with `role="region"` | `--color-atlantic`, `--color-atlantic-mist`, `--color-off-white`, `--color-mid-stone`, `--color-amber`, `--text-h4`, `--text-body`, `--shadow-focus`, `--space-md`, `--space-lg` | `aria-expanded`, `aria-controls`, `hidden`, `role="region"`, `aria-labelledby`; 44px min tap target; `focus-visible` ring via `--shadow-focus` | CSS fallback (`<details>`); JS for ARIA-driven animation and `aria-expanded` management |
| FAQ Anchor Links | Services page, Pillar page | `<a>` | `--color-amber`, `--text-body-sm` | `aria-label="Link to this question"` on anchor; visible on focus for keyboard users | CSS only |
| Key Takeaways Block | All pages | `<section>`, `<h2>`, `<ol>`, `<li>` | `--color-atlantic-mist`, `--color-atlantic`, `--text-h3`, `--text-body`, `--text-body-lg`, `--space-xl`, `--space-md` | `aria-label="Key takeaways from this page"` on section; `id="key-takeaways"` for fragment; numbered list for citable structure | CSS only |
| Primary Button | All pages | `<button>` or `<a>` | `--color-atlantic`, `--color-slate`, `--color-inverted-text`, `--text-body`, `--space-md`, `--space-xl`, `--shadow-focus` | AA contrast (inverted text on Atlantic: 12.6:1); `focus-visible` via `box-shadow`; `aria-label` when button text alone is ambiguous | CSS only |
| Secondary Button | Services, Pillar page | `<button>` or `<a>` | `--color-atlantic`, `--color-atlantic-mist`, `--text-body`, `--space-md`, `--space-xl`, `--shadow-focus` | Same contrast requirement; 1.5px border sufficient for 3:1 UI component contrast | CSS only |
| Ghost Button / Text Link with Arrow | All pages | `<a>` | `--color-atlantic`, `--color-slate`, `--text-body`, `--space-xs` | Focus via `outline` or `box-shadow`; arrow (`→`) is decorative, not informational — do not put arrow in `aria-label` | CSS only |
| Site Navigation | All pages | `<header>`, `<nav>`, `<ul>`, `<li>`, `<a>`, `<button>` | `--color-off-white`, `--color-atlantic`, `--color-mid-stone`, `--text-body`, `--space-sm`, `--space-md`, `--space-lg`, `--shadow-sm` | `role="banner"` on header; `aria-label="Main navigation"` on nav; `aria-expanded` and `aria-controls` on hamburger; skip-to-content link required | JS for scroll class toggle and mobile menu toggle |
| Hero Section | Homepage | `<section>`, `<p class="hero__statement">`, `<p class="hero__lead">`, `<div class="hero__cta-group">` | `--text-display`, `--text-body-lg`, `--color-atlantic`, `--color-primary-text`, `--space-3xl`, `--space-2xl`, `--space-xl` | H1 in document (may not be the display statement) must be present for screen reader page title; `prefers-reduced-motion` respected for any entrance animation | CSS only; no entrance animation on hero statement per brand rules |
| Contact Section | Homepage, About | `<section>`, `<h2>`, `<p>`, `<a href="mailto:">`, `<a class="btn btn--ghost">` | `--color-atlantic-mist`, `--color-atlantic`, `--color-primary-text`, `--text-h2`, `--text-body-lg`, `--text-h4`, `--space-2xl` | `id="contact"` for fragment; email link requires no additional ARIA (self-describing); Cal.com embed must be accessible | CSS only; Cal.com embed JS loaded from external |
| Contextual CTA (In-content aside) | Services page, Pillar page | `<aside>`, `<p>`, `<a>` | `--color-mid-stone`, `--color-slate`, `--color-atlantic`, `--text-body-lg`, `--space-lg`, `--space-2xl` | `aria-label` on aside for screen reader landmark; Fraunces italic for prose context | CSS only |
| Table of Contents (Desktop) | Pillar page | `<nav>`, `<ol>`, `<li>`, `<a>` | `--color-atlantic`, `--color-amber`, `--color-secondary-text`, `--text-label`, `--text-body-sm`, `--space-xs`, `--space-sm` | `aria-label="Table of contents"` on nav; active link state must not rely on colour alone (weight change from 400 to 600 provides non-colour distinction) | JS for `IntersectionObserver` active state tracking |
| Table of Contents (Mobile disclosure) | Pillar page | `<details>`, `<summary>`, `<nav>`, `<ol>`, `<li>`, `<a>` | Same as desktop TOC plus `--color-warm-stone`, `--color-mid-stone`, `--space-md`, `--space-lg` | Native `<details>` requires no additional ARIA; chevron marked `aria-hidden="true"` | CSS only (native `<details>`); JS optional for enhanced animation |
| Reading Progress Bar | Pillar page | `<div class="reading-progress">` | `--color-atlantic`, `--nav-height` (set by JS) | No ARIA needed — decorative status indicator; `prefers-reduced-motion` removes transition | JS required for scroll calculation and width update |
| Standard Card | Services page | `<div class="card">` | `--color-off-white`, `--color-warm-stone`, `--color-mid-stone`, `--color-slate`, `--shadow-sm`, `--space-lg`, `--space-xl` | If card is interactive, requires keyboard focus state; inner content must maintain its own accessibility | CSS only |
| Code Block | Pillar page (schema examples) | `<pre>`, `<code>` | `--color-atlantic`, `--color-inverted-text`, `--font-mono`, `--text-code`, `--space-lg` | Sufficient contrast for code: inverted text on Atlantic (12.6:1); `lang` attribute on `<code>` for syntax hinting | CSS only; syntax highlighting JS (Prism/Shiki) optional |
| Definition Block | Services page, Pillar page | `<dfn>`, `<p>` within `.definition-block` | `--color-off-white`, `--color-mid-stone`, `--text-body`, `--space-md` | `id` on `<dfn>` for schema DefinedTerm cross-reference; no special ARIA needed — `<dfn>` is semantic HTML | CSS only |

---

## SECTION 6: Site Footer

---

The footer is a global element present on every page. Its Atlantic background (`--color-atlantic`, `#1D4B52`) is a deliberate shift in visual weight — it signals closure, grounds the page, and is the only full-bleed use of the primary colour outside the navigation CTA. Everything on this background uses the inverted text system. There is no dark mode variant: the footer retains its dark treatment regardless of the user's system colour scheme preference, consistent with the decision in Section 2 to omit a dark mode from the overall design system.

---

### 6A. Layout and Structure

**Desktop: three-column grid.** The footer grid uses three equal columns on desktop, collapsing to a single-column stack on mobile. Column gap is `--space-2xl` (64px) on desktop, `--space-xl` (40px) on tablet.

**Column 1 — Logo and value proposition.**
The wordmark "Cillian BC" in Fraunces SemiBold (weight 600) at `--text-h3` (1.5rem). Colour: `--color-inverted-text` (`#F7F6F2`). Below it, separated by `--space-sm` (8px): the core value proposition in Inter Regular (weight 400) at `--text-body-sm` (0.875rem). The value proposition is capped at `28ch` to prevent it running full-width across the column — this is the same prose-width discipline applied in the main content system, scaled to a short descriptor. Colour: `--color-inverted-text` at 80% opacity.

Suggested value proposition text, drawn from the homepage summary: "Independent AI search consultancy helping Irish businesses stay visible as search moves to AI-generated answers."

**Column 2 — Navigation links.** A vertical nav list with no heading above it. Items: Home, Services, AEO/GEO, About, Insights, Contact. Inter weight 500, `--text-body-sm`. Colour: `--color-inverted-text` at 70% opacity at rest, 100% opacity on hover and focus. No underline at rest; `text-decoration: underline` on hover and focus. No decorative icons or chevrons next to link labels.

**Column 3 — Contact and legal.** A single line "Start a conversation" as a `mailto:` link, styled identically to the nav links (Inter 500, `--text-body-sm`, `--color-inverted-text` 70% opacity at rest, 100% on hover/focus, underline on hover/focus). Below it, separated by `--space-sm`: the legal line "© 2026 Cillian BC. No cookies tracked." in Inter 400, `--text-caption` (0.75rem), `--color-inverted-text` at 50% opacity. This is not body copy — it uses `<small>` in the HTML.

LinkedIn, if linked: render as a plain text link ("LinkedIn"), not an icon. The brand guide prohibits decorative icons next to content labels. If LinkedIn is the sole social presence, it sits below the "Start a conversation" `mailto:` link in column 3, styled identically.

---

### 6B. Footer Bottom Bar

A 1px horizontal rule in `--color-inverted-text` at 15% opacity separates the main footer grid from the bottom bar. The rule carries no semantic role — it is a visual separator only (`role="presentation"` or rendered as `border-top` on the bottom bar container, not as an `<hr>`).

The bottom bar contains two items on a single line:
- Left-aligned: copyright text in `--text-caption`, Inter 400, `--color-inverted-text` at 50% opacity.
- Right-aligned: "Made in Ireland" in `--text-caption`, Inter 500, `--color-inverted-text` at 70% opacity.

Nothing else. No social icons. No "Back to top" link (the brand does not use supplementary navigation aids of this type — the page length does not require it).

---

### 6C. Spacing and Padding

| Context | Top padding | Bottom padding | Column gap |
|---------|-------------|----------------|------------|
| Desktop (≥ 1024px) | `--space-2xl` (64px) | `--space-2xl` (64px) | `--space-2xl` (64px) |
| Tablet (640–1023px) | `--space-xl` (40px) | `--space-xl` (40px) | `--space-xl` (40px) |
| Mobile (< 640px) | `--space-lg` (24px) | `--space-lg` (24px) | n/a (single column) |

Between the wordmark and the value proposition text: `--space-sm` (8px).
Between the value proposition and the top of the grid on mobile: `--space-lg` (24px).
Bottom bar top padding (above the separator rule): `--space-xl` (40px) desktop, `--space-lg` (24px) mobile.
Bottom bar internal padding (below the rule, above the base of the footer): `--space-md` (16px) on all breakpoints.

---

### 6D. Contrast Verification

`--color-inverted-text` (`#F7F6F2`) on `--color-atlantic` (`#1D4B52`): **12.6:1 — WCAG AAA**. This is confirmed in the brand style guide text colours table. All text in the footer, including the 70% and 50% opacity variants, must be checked at render time against the actual composited colour value. At 70% opacity, the composited foreground against `#1D4B52` approximates `#8BABAF`, yielding approximately 4.6:1 — passing WCAG AA. At 50% opacity, the composited foreground approximates `#728E91`, yielding approximately 3.1:1 — borderline. Caption-size legal text at 50% opacity is permissible here because: (a) it is legal boilerplate, not instructional content; (b) `--text-caption` at 12px qualifies for the large-text threshold only if bold — this text is Inter 400, so the full 4.5:1 standard technically applies. **Developer note: if 50% opacity fails at the rendered composite, increase to 60% opacity. Do not reduce font size to compensate.**

The amber accent (`--color-amber`) must not appear anywhere in the footer. Amber on Atlantic fails WCAG AA entirely.

---

### 6E. CSS Implementation

```css
.site-footer {
  background-color: var(--color-atlantic);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  /* No dark mode override needed — footer retains this treatment regardless
     of prefers-color-scheme. The dark treatment is intentional and absolute. */
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-2xl);
  max-width: 75rem;
  margin-inline: auto;
  padding-inline: var(--space-lg);
}

.footer-wordmark {
  font-family: var(--font-fraunces);
  font-weight: 600;
  font-size: var(--text-h3);          /* 1.5rem / 24px */
  line-height: 1.3;
  color: var(--color-inverted-text);
  letter-spacing: -0.005em;
  text-decoration: none;
  display: block;
}

.footer-tagline {
  max-width: 28ch;
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: var(--text-body-sm);     /* 0.875rem / 14px */
  line-height: 1.6;
  color: color-mix(in srgb, var(--color-inverted-text) 80%, transparent);
  margin-top: var(--space-sm);
}

.footer-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-nav a {
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: var(--text-body-sm);
  line-height: 1.6;
  color: color-mix(in srgb, var(--color-inverted-text) 70%, transparent);
  text-decoration: none;
  transition: color 150ms ease;
}

.footer-nav a:hover,
.footer-nav a:focus-visible {
  color: var(--color-inverted-text);
  text-decoration: underline;
}

.footer-nav a:focus-visible {
  outline: 2px solid var(--color-inverted-text);
  outline-offset: 2px;
  border-radius: 2px;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-contact__link {
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: var(--text-body-sm);
  color: color-mix(in srgb, var(--color-inverted-text) 70%, transparent);
  text-decoration: none;
  transition: color 150ms ease;
}

.footer-contact__link:hover,
.footer-contact__link:focus-visible {
  color: var(--color-inverted-text);
  text-decoration: underline;
}

.footer-contact__link:focus-visible {
  outline: 2px solid var(--color-inverted-text);
  outline-offset: 2px;
  border-radius: 2px;
}

.footer-contact__legal {
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: var(--text-caption);     /* 0.75rem / 12px */
  line-height: 1.5;
  color: color-mix(in srgb, var(--color-inverted-text) 50%, transparent);
  /* If composited contrast fails at 50%, increase to 60%. See 6D. */
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 75rem;
  margin-inline: auto;
  padding-inline: var(--space-lg);
  padding-top: var(--space-md);
  margin-top: var(--space-xl);
  border-top: 1px solid color-mix(in srgb, var(--color-inverted-text) 15%, transparent);
}

.footer-bottom__copyright {
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: var(--text-caption);
  color: color-mix(in srgb, var(--color-inverted-text) 50%, transparent);
}

.footer-bottom__provenance {
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: var(--text-caption);
  color: color-mix(in srgb, var(--color-inverted-text) 70%, transparent);
}

/* Tablet */
@media (max-width: 1023px) {
  .site-footer {
    padding-top: var(--space-xl);
    padding-bottom: var(--space-xl);
  }

  .footer-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xl);
  }

  .footer-bottom {
    margin-top: var(--space-lg);
  }
}

/* Mobile */
@media (max-width: 639px) {
  .site-footer {
    padding-top: var(--space-lg);
    padding-bottom: var(--space-lg);
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-xs);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .footer-nav a,
  .footer-contact__link {
    transition: none;
  }
}
```

---

### 6F. Semantic HTML Skeleton

```html
<footer class="site-footer" role="contentinfo">

  <div class="footer-grid">

    <!-- Column 1: Logo and tagline -->
    <div class="footer-col footer-col--brand">
      <a href="/" class="footer-wordmark">Cillian BC</a>
      <p class="footer-tagline">
        Independent AI search consultancy helping Irish businesses stay
        visible as search moves to AI-generated answers.
      </p>
    </div>

    <!-- Column 2: Navigation -->
    <nav class="footer-col footer-col--nav" aria-label="Footer navigation">
      <ul class="footer-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/services/">Services</a></li>
        <li><a href="/aeo-geo/">AEO/GEO</a></li>
        <li><a href="/about/">About</a></li>
        <li><a href="/insights/">Insights</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <!-- Column 3: Contact and legal -->
    <div class="footer-col footer-col--contact footer-contact">
      <a href="mailto:hello@cillianbc.com" class="footer-contact__link">
        Start a conversation
      </a>
      <!-- LinkedIn as text link if applicable -->
      <!-- <a href="https://linkedin.com/in/cillianbc" class="footer-contact__link"
         rel="noopener noreferrer" target="_blank">LinkedIn</a> -->
      <small class="footer-contact__legal">
        © 2026 Cillian BC. No cookies tracked.
      </small>
    </div>

  </div>

  <!-- Bottom bar -->
  <div class="footer-bottom">
    <span class="footer-bottom__copyright">© 2026 Cillian BC</span>
    <span class="footer-bottom__provenance">Made in Ireland</span>
  </div>

</footer>
```

Note on `role="contentinfo"`: the `<footer>` element implicitly carries `contentinfo` when it is a direct child of `<body>`. The explicit `role` attribute is included here as a documentation aid and for screen reader compatibility in older browser/AT combinations. It is not harmful to include it.

---

## SECTION 7: Insights / Blog Index Feed

---

The Insights section is where Cillian publishes articles on GEO, AEO, SEO, and AI workflows. The index page is an editorial archive, not a content marketing hub. It must feel considered and deliberate — the kind of index page where a specific article is easy to find and a new visitor can orient themselves in one pass. It must not feel like a "Resources" section designed to generate leads through volume.

---

### 7A. Page Layout

**H1:** "Insights" in Fraunces weight 600 at `--text-h1` (2.75rem). No subtitle below it. The first article in the feed — particularly if it is the featured variant (see 7C) — provides immediate context for what this section contains.

**Category filter.** Immediately below the H1, separated by `--space-lg` (24px): a single-line category filter. Plain text links in Inter 500 at `--text-body-sm` (0.875rem), separated by a mid-dot character (·) with `--space-sm` (8px) either side of the dot. The dot is decorative and renders as plain text, not as a list separator or interactive element. Categories: All · SEO · GEO · AEO · AI Workflows.

The active category is indicated by a 2px `--color-amber` underline (`text-decoration: underline; text-decoration-color: var(--color-amber); text-underline-offset: 3px; text-decoration-thickness: 2px`). The active category link carries `aria-current="true"`. No background fills, no pill shapes, no toggle buttons. The filter operates as standard anchor navigation with `?category=geo` style query parameters, or equivalent server-side routing — not JavaScript tabs. This keeps each filtered view at a stable, shareable URL.

**Feed layout: single column.** The feed is a single vertical list on all breakpoints. A two-column grid layout for article cards is not used. Rationale: the article list items contain meaningful text (title, excerpt, meta) that benefits from full reading width. A two-column card grid forces titles to wrap at uncomfortable widths, reduces the scannable excerpt text, and creates an asymmetric layout when the article count is odd. The editorial character of the section — a considered index, not a blog grid — is better served by a single column at prose width (`42rem` max on desktop). The featured article (7C) receives visual weight through size and background treatment, not by occupying a separate grid column.

---

### 7B. Article Card Component

Each article in the feed renders as a horizontal list item with a bottom separator rule. No box shadow. No border radius. No card border. The structure is typographic, not containerised.

**Structure per item (top to bottom):**

1. **Category tag.** Inter weight 600, `--text-label` (0.75rem, 12px, uppercase, 0.08em letter-spacing), `--color-slate`. No background fill. Rendered as a `<span>` within the article header — it is metadata, not a navigable link (the filter above the list handles category navigation).

2. **Article title.** Fraunces weight 600 at `--text-h3` (1.5rem), `--color-primary-text`. This is an `<a>` wrapping the heading text — the link wraps the heading, not the other way around (the `<a>` is the outermost element, the heading is inside it, to allow the heading to function as the accessible name of the link). Link colour at rest: `--color-primary-text`. Hover and focus: `--color-atlantic`. No underline at rest; `text-decoration: underline` on hover and focus. Visited state: `--color-slate` — provides passive confirmation that the user has read this article without visually degrading the list.

3. **Summary excerpt.** The first two sentences of the article body. Inter weight 400, `--text-body` (1rem), `--color-secondary-text`, line-height 1.65. Capped at 2 lines with `-webkit-line-clamp: 2` as a progressive enhancement. If the browser does not support line-clamp, the full two sentences are acceptable — they should not exceed two sentences regardless. No ellipsis beyond what line-clamp adds automatically.

4. **Meta line.** A `<time>` element (publication date, formatted as "27 March 2026") and a reading time estimate ("7 min read"), separated by a mid-dot (·). Inter weight 500, `--text-body-sm` (0.875rem), `--color-deep-stone` (`#8C887F`). The meta line sits `--space-sm` (8px) below the excerpt.

**No thumbnail image.** This is a deliberate constraint, not an omission. The brand style guide specifies that stock photography does the brand damage and that Insights articles will not uniformly have bespoke photography. A thumbnail system that works beautifully for three articles and breaks down for the fourth — when the article is text-only technical analysis — creates visual inconsistency that undermines the editorial quality signal. The typographic list is consistent and intentional. If photography is ever introduced to Insights articles, the article single-page view is the right context for it, not the index.

**Item separator.** A 1px `--color-mid-stone` (`#D6D2C8`) rule separates each article item. Applied as `border-bottom` on each `.article-item`. The last item carries `border-bottom: none` — use `:last-child` to remove it, not a JavaScript class toggle. Spacing above and below the separator: `--space-xl` (40px) top padding on each item (except the first, which inherits from the feed top margin), `--space-xl` bottom padding before the rule.

---

### 7C. Featured Article Variant

The most recent article, or an editorially selected article, receives featured treatment at the top of the feed. The featured article appears above the standard list, not within it — it is separated from the list by `--space-2xl` (64px).

**Featured treatment differences from the standard item:**

- Title renders at `--text-h2` (2rem) instead of `--text-h3`.
- Excerpt is unclamped — shows up to 3 sentences, no line-clamp.
- The entire item sits on `--color-atlantic-mist` (`#EAF2F3`) background with `--space-lg` (24px) padding on all sides and a `4px solid var(--color-atlantic)` left border.
- No image. The featured article gets an additional "Key topics covered:" line below the excerpt: Inter weight 400, `--text-body-sm`, `--color-slate`. The topics are a comma-separated list of entity terms from the article — named concepts, organisations, tools — that the article covers in depth. This functions as a machine-readable topic signal as well as a human scanability aid.
- The category tag and meta line appear in the same positions and with the same styling as the standard variant.

**The featured article is not repeated in the standard list below it.** If the featured article belongs to the currently active category filter, it remains at the top; if the active category filter would exclude it, it is hidden and the standard list takes the full feed.

---

### 7D. Pagination

Pagination, not infinite scroll. Reason: the Insights section is a content archive. Users arriving from an AI citation of a specific article may want to browse nearby content. Users returning to find a specific article need a predictable navigation model. Infinite scroll removes the ability to return to a known position after following a link, and it prevents individual archive pages from having stable URLs — which undermines AEO citation of the archive itself.

**Pagination component:** numbered links centred below the feed, separated from the last article item by `--space-2xl` (64px). Plain numbered links in Inter weight 500 at `--text-body` (1rem). Previous and Next rendered as text labels ("Previous", "Next"), not chevron icons. Active page: `--color-atlantic` text, `font-weight: 700`. Inactive page numbers: `--color-secondary-text`. No background fills, no border boxes, no pill shapes on page numbers. Page numbers separated by `--space-md` (16px) inline gap.

Each paginated URL must be unique and stable: `/insights/page/2/`, `/insights/?category=geo&page=2`, or equivalent. These URLs must render correctly without JavaScript — the pagination is standard anchor navigation.

---

### 7E. Empty State

If a category filter returns no articles: a single centred line in Inter weight 400 Italic at `--text-body` (1rem), `--color-secondary-text`:

"Nothing published here yet. Check back shortly."

No illustration. No hero graphic. No CTA button. No suggestion to browse other categories — the filter links above the feed remain visible and functional; the user can navigate themselves. The empty state is a single sentence. It does not apologise, it does not over-explain, and it does not prompt an email sign-up.

---

### 7F. CSS Implementation

```css
.insights-index {
  max-width: 42rem;                   /* Prose width — same constraint as body copy */
  margin-inline: auto;
  padding-inline: var(--space-md);
}

.insights-index__heading {
  font-family: var(--font-fraunces);
  font-weight: 600;
  font-size: var(--text-h1);          /* 2.75rem / 44px */
  line-height: 1.2;
  letter-spacing: -0.015em;
  color: var(--color-primary-text);
  margin-bottom: var(--space-lg);
}

.insights-filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0;
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: var(--text-body-sm);
  margin-bottom: var(--space-2xl);
}

.insights-filter__link {
  color: var(--color-secondary-text);
  text-decoration: none;
  padding-block: 2px;
}

.insights-filter__link:hover {
  color: var(--color-primary-text);
}

.insights-filter__link[aria-current="true"] {
  color: var(--color-primary-text);
  text-decoration: underline;
  text-decoration-color: var(--color-amber);
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}

.insights-filter__separator {
  color: var(--color-mid-stone);
  padding-inline: var(--space-sm);
  user-select: none;
  aria-hidden: true;                  /* Note: apply aria-hidden="true" in HTML */
}

.article-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.article-item {
  padding-block: var(--space-xl);
  border-bottom: 1px solid var(--color-mid-stone);
}

.article-item:first-child {
  padding-top: 0;
}

.article-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.article-item__category {
  display: block;
  font-family: var(--font-inter);
  font-weight: 600;
  font-size: var(--text-label);       /* 0.75rem / 12px */
  line-height: 1.4;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-slate);
  margin-bottom: var(--space-sm);
}

.article-item__title-link {
  display: block;
  text-decoration: none;
  margin-bottom: var(--space-sm);
}

.article-item__title-link:hover .article-item__title,
.article-item__title-link:focus-visible .article-item__title {
  color: var(--color-atlantic);
  text-decoration: underline;
}

.article-item__title-link:focus-visible {
  outline: 2px solid var(--color-atlantic);
  outline-offset: 3px;
  border-radius: 2px;
}

.article-item__title-link:visited .article-item__title {
  color: var(--color-slate);
}

.article-item__title {
  font-family: var(--font-fraunces);
  font-weight: 600;
  font-size: var(--text-h3);          /* 1.5rem / 24px */
  line-height: 1.3;
  letter-spacing: -0.005em;
  color: var(--color-primary-text);
  transition: color 150ms ease;
}

.article-item__excerpt {
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: var(--text-body);        /* 1rem / 16px */
  line-height: 1.65;
  color: var(--color-secondary-text);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: var(--space-sm);
}

.article-meta {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: var(--text-body-sm);     /* 0.875rem / 14px */
  color: var(--color-deep-stone);     /* #8C887F */
}

.article-meta__separator {
  color: var(--color-mid-stone);
  user-select: none;
}

/* Featured article variant */
.article-item--featured {
  background-color: var(--color-atlantic-mist);
  border-left: 4px solid var(--color-atlantic);
  padding: var(--space-lg);
  border-bottom: none;
  margin-bottom: var(--space-2xl);
}

.article-item--featured .article-item__title {
  font-size: var(--text-h2);          /* 2rem / 32px */
  letter-spacing: -0.01em;
}

.article-item--featured .article-item__excerpt {
  display: block;                     /* Remove line-clamp on featured */
  -webkit-line-clamp: unset;
  overflow: visible;
}

.article-item--featured .article-item__topics {
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: var(--text-body-sm);
  color: var(--color-slate);
  margin-top: var(--space-sm);
}

/* Pagination */
.insights-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-md);
  margin-top: var(--space-2xl);
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: var(--text-body);
}

.insights-pagination__link {
  color: var(--color-secondary-text);
  text-decoration: none;
  padding-block: 2px;
}

.insights-pagination__link:hover {
  color: var(--color-primary-text);
}

.insights-pagination__link[aria-current="page"] {
  color: var(--color-atlantic);
  font-weight: 700;
}

.insights-pagination__link--prev,
.insights-pagination__link--next {
  color: var(--color-atlantic);
}

/* Empty state */
.insights-empty {
  text-align: center;
  font-family: var(--font-inter);
  font-weight: 400;
  font-style: italic;
  font-size: var(--text-body);
  color: var(--color-secondary-text);
  padding-block: var(--space-2xl);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .article-item__title {
    transition: none;
  }
}
```

**Semantic HTML skeleton — standard article item:**

```html
<article class="article-item">
  <header>
    <span class="article-item__category">GEO</span>
    <a href="/insights/article-slug/" class="article-item__title-link">
      <h2 class="article-item__title">
        Why Irish businesses are absent from AI-generated answers — and what fixes it
      </h2>
    </a>
  </header>
  <p class="article-item__excerpt">
    Most Irish businesses with technically sound websites are simply not appearing
    in AI-generated answers. The problem is structural, not technical — and it is
    fixable without rebuilding your content from scratch.
  </p>
  <footer class="article-meta">
    <time datetime="2026-03-10" class="article-meta__date">10 March 2026</time>
    <span class="article-meta__separator" aria-hidden="true">·</span>
    <span class="article-meta__reading-time">7 min read</span>
  </footer>
</article>
```

**Semantic HTML skeleton — featured article item:**

```html
<article class="article-item article-item--featured">
  <header>
    <span class="article-item__category">AEO</span>
    <a href="/insights/featured-article-slug/" class="article-item__title-link">
      <h2 class="article-item__title">
        The structural audit that changed an Irish brand's AI citation rate in eight weeks
      </h2>
    </a>
  </header>
  <p class="article-item__excerpt">
    When we audited this company's AI search presence, they were not underranking —
    they were simply absent. Their content was good. Their SEO was solid. The problem
    was that nothing was structured for machine extraction. Three structural changes
    later, they were appearing in Perplexity and Google AI Overviews for their primary
    service queries.
  </p>
  <p class="article-item__topics">
    <strong>Key topics covered:</strong> extractable paragraph structure, entity
    consistency, definition blocks, Google AI Overviews, Perplexity citations
  </p>
  <footer class="article-meta">
    <time datetime="2026-03-27" class="article-meta__date">27 March 2026</time>
    <span class="article-meta__separator" aria-hidden="true">·</span>
    <span class="article-meta__reading-time">11 min read</span>
  </footer>
</article>
```

---

## SECTION 8: 404 Page

---

A 404 page serves a user who had intent. They navigated somewhere. The URL no longer resolves. The job of the page is to acknowledge the situation plainly, confirm that the site is functional, and offer a minimal set of routes forward — without performing distress, without over-engineering recovery options, and without the anxious helpfulness that characterises the SaaS 404 page. The Pint Test applies: would you say any of this to a colleague at a table? If the answer is no, rewrite it.

---

### 8A. Layout

Single-column, centred, `42rem` max-width (the prose width constraint, consistent across the site). Vertically centred in the viewport using flexbox on the `<body>` or a wrapping element with `min-height: 100svh`. The `svh` unit (small viewport height) is used rather than `vh` to avoid the mobile browser chrome problem where `100vh` overflows the visible area on iOS Safari. Fallback: `min-height: 100vh` for browsers without `svh` support.

No full-page background colour change. The standard `--color-off-white` page background applies. No hero. No illustration. No graphic. The visual weight is entirely typographic.

---

### 8B. Content Hierarchy

**1. Error label — decorative "404".**
Fraunces weight 300 (Light) at `--text-display` (4rem / 64px), `--color-atlantic-mist`. This element is decorative — it is present to give the page a visual anchor without competing with the heading. It must carry `aria-hidden="true"` and must not be the page's H1. It is not informational — the HTTP status code and the H1 carry the informational weight.

**2. H1 — the actual heading.**
"This page doesn't exist." Fraunces weight 600 at `--text-h1` (2.75rem). `--color-primary-text`. This is the only H1 on the page. It is direct, declarative, and unsentimental — consistent with the brand's verbal tone. It does not say "Oops!", "Page not found!", or anything that begins with a performative exclamation.

**3. Body copy.**
One paragraph, maximum two sentences. Inter weight 400 at `--text-body-lg` (1.125rem / 18px), `--color-secondary-text`, line-height 1.7.

Exact copy: "The page you were looking for has moved or never existed. If you followed a link from somewhere and expected to land somewhere useful, email [hello@cillianbc.com](mailto:hello@cillianbc.com) and I'll sort it out."

The contact link displays the email address plainly as the link text — not "get in touch", not "contact me", not "let me know." The address itself is the link. This is consistent with the brand's precision principle: say the thing, do not euphemise it.

**4. Navigation options.**
Three links: "Homepage", "Services", "About". Inline, separated by a mid-dot (·). Inter weight 500 at `--text-body` (1rem), `--color-atlantic`. No underline at rest; underline on hover and focus. These are `<a>` elements, not buttons. They are not labelled as "You might want to visit..." or any other scaffolding copy — they stand alone.

**5. No search bar.** The site does not have a search function. Do not build or suggest one on the 404 page or anywhere else.

---

### 8C. Copy Specification

The copy must pass the Pint Test from the brand soul document. It must not sound like it was written for a SaaS product. Specific prohibitions:

- "Oops!" — never.
- "Looks like something went wrong!" — this is not what happened. A URL did not resolve. Something did not "go wrong."
- "We can't find the page you're looking for" — the royal "we." There is no team. The brand uses "I" throughout.
- Any illustration or graphic depicting a lost astronaut, a confused robot, a broken robot, a sad cloud, or any anthropomorphised representation of failure.
- A rocket ship of any kind, in any context.

**Confirmed final copy:**

| Element | Copy |
|---------|------|
| H1 | This page doesn't exist. |
| Body paragraph | The page you were looking for has moved or never existed. If you followed a link from somewhere and expected to land somewhere useful, email hello@cillianbc.com and I'll sort it out. |
| Navigation links | Homepage · Services · About |

---

### 8D. Technical and Meta Requirements

**HTTP response code: 404.** The server must return a genuine 404 status code. A page that renders a "404 message" while returning a 200 status code is a soft 404. Soft 404s are indexed by Google and other search engines as content pages, which dilutes the site's crawl budget and can cause authority fragmentation. **Developer requirement: verify the response code with `curl -I [url]` or equivalent before launch. A 200 response on the 404 page is a release blocker.**

**`<title>` element:** "Page not found | Cillian BC" — not "404 Error", not "404 | Cillian BC", not "Error | Cillian BC". The reason: browser history, bookmarks, and tab labels display the `<title>`. "Page not found" is immediately interpretable. "404 Error" is developer-speak that requires translation. "Page not found | Cillian BC" confirms both the state and the site.

**`<meta name="robots" content="noindex">` — required.** 404 pages must not be indexed by search engines. An indexed 404 page that accumulates backlinks or receives organic traffic signals confusion to search engines and wastes link equity. This tag must be present on every URL that resolves with a 404 status, whether it is a single `/404/` template or dynamically generated per broken URL.

---

### 8E. Contrast Verification for Decorative Element

The decorative "404" display number uses `--color-atlantic-mist` (`#EAF2F3`) against `--color-off-white` (`#F7F6F2`). The contrast ratio between these two values is approximately **1.1:1** — which does not pass WCAG AA or AA Large for text. This is intentional and acceptable because: (a) the element carries `aria-hidden="true"` and is not read by screen readers; (b) it is not informational — the H1 and HTTP status code carry the information; (c) the very low contrast is the design intent — the numeral should be present but not dominant. This is one of two documented exceptions in this specification where an element intentionally does not meet WCAG text contrast requirements. The other is the amber accent at body sizes, documented in item 6 of the Developer Handoff Checklist.

---

### 8F. CSS Implementation

```css
.page-404 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100svh;
  min-height: 100vh;                  /* Fallback for browsers without svh support */
  padding-inline: var(--space-md);
}

.page-404__inner {
  max-width: 42rem;
  width: 100%;
}

.error-label {
  display: block;
  font-family: var(--font-fraunces);
  font-weight: 300;                   /* Fraunces Light — use at display size only */
  font-size: var(--text-display);     /* 4rem / 64px */
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-atlantic-mist);  /* ~1.1:1 on off-white — decorative, aria-hidden */
  margin-bottom: var(--space-md);
  font-optical-sizing: auto;
  /* aria-hidden="true" must be set in HTML — this element is not informational */
}

.page-404__heading {
  font-family: var(--font-fraunces);
  font-weight: 600;
  font-size: var(--text-h1);          /* 2.75rem / 44px */
  line-height: 1.2;
  letter-spacing: -0.015em;
  color: var(--color-primary-text);
  margin-bottom: var(--space-lg);
  font-optical-sizing: auto;
}

.page-404__body {
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: var(--text-body-lg);     /* 1.125rem / 18px */
  line-height: 1.7;
  color: var(--color-secondary-text);
  margin-bottom: var(--space-xl);
}

.page-404__body a {
  color: var(--color-atlantic);
  text-decoration: none;
}

.page-404__body a:hover,
.page-404__body a:focus-visible {
  text-decoration: underline;
}

.page-404__body a:focus-visible {
  outline: 2px solid var(--color-atlantic);
  outline-offset: 2px;
  border-radius: 2px;
}

.error-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  flex-wrap: wrap;
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: var(--text-body);        /* 1rem / 16px */
}

.error-nav__link {
  color: var(--color-atlantic);
  text-decoration: none;
  padding-block: 2px;
}

.error-nav__link:hover,
.error-nav__link:focus-visible {
  text-decoration: underline;
}

.error-nav__link:focus-visible {
  outline: 2px solid var(--color-atlantic);
  outline-offset: 2px;
  border-radius: 2px;
}

.error-nav__separator {
  color: var(--color-mid-stone);
  padding-inline: var(--space-sm);
  user-select: none;
}
```

**HTML skeleton:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page not found | Cillian BC</title>
  <meta name="robots" content="noindex">
  <!-- All other standard head elements -->
</head>
<body>

  <!-- Skip link — required on every page, including 404 -->
  <a class="skip-link" href="#main-content">Skip to content</a>

  <!-- Site navigation — included as normal -->

  <main id="main-content">
    <div class="page-404">
      <div class="page-404__inner">

        <span class="error-label" aria-hidden="true">404</span>

        <h1 class="page-404__heading">This page doesn't exist.</h1>

        <p class="page-404__body">
          The page you were looking for has moved or never existed.
          If you followed a link from somewhere and expected to land
          somewhere useful, email
          <a href="mailto:hello@cillianbc.com">hello@cillianbc.com</a>
          and I'll sort it out.
        </p>

        <nav class="error-nav" aria-label="Return navigation">
          <a href="/" class="error-nav__link">Homepage</a>
          <span class="error-nav__separator" aria-hidden="true">·</span>
          <a href="/services/" class="error-nav__link">Services</a>
          <span class="error-nav__separator" aria-hidden="true">·</span>
          <a href="/about/" class="error-nav__link">About</a>
        </nav>

      </div>
    </div>
  </main>

  <!-- Site footer — included as normal -->

</body>
</html>
```

---

### Developer Handoff Checklist

The following items are ranked by the potential for trust damage if done incorrectly. Item 1 causes the most damage. Items 11, 12, and 13 cover the three new sections above — their positions in the list reflect their trust-damage ranking relative to the existing items.

**1. The navigation "Start a conversation" CTA must be a `<button>` element (or `<a>` with `href`) — never a `<div>` or `<span>` styled as a button.**
An inaccessible CTA means keyboard users cannot reach the primary conversion point. It also fails WCAG 2.1 at criterion 4.1.2. This is the most consequential accessible failure on the site. If the CTA is a link (navigating to a contact page), use `<a>`. If it submits a form or triggers a JS action, use `<button>`. Never a `<div>`.

**2. The `<table>` `scope` attributes on the comparison table must be present on every `<th>` element.**
Without `scope="col"` and `scope="row"`, screen readers cannot associate table cells with their headers. A B2B buyer using a screen reader who cannot parse the GEO vs SEO vs AEO table is a buyer who cannot understand the core strategic argument. This is not an edge case in the Irish enterprise market.

**3. The prose width constraint (`max-width: 42rem` on `.prose`) must be applied and must not be overridden by a parent container's width.**
If body text exceeds 68 characters per line, it causes reading fatigue and signals that the brand does not care about the reading experience — which directly contradicts the brand's primary trust signal. Check on a wide desktop viewport (1400px+) where full-width containers are most likely to blow out prose widths.

**4. Fraunces must load with `font-optical-sizing: auto` and the correct weights (300, 600, 700 only).**
If `font-optical-sizing` is not set, the type at display size (`--text-display`, 64px) will appear heavier and less refined than intended. If additional weights (400, 500) are accidentally loaded, Google Fonts will include unnecessary font data — increasing load time — and the type system's deliberate weight contrast (Light at display, SemiBold at H1–H3) will be undermined if those weights are used by mistake.

**5. The FAQ accordion's `aria-expanded` attribute must toggle correctly and `hidden` must be used (not CSS `display: none`) to show/hide answers.**
Using CSS `display: none` without the `hidden` attribute means the content is not exposed to accessibility APIs in all screen reader/browser combinations. Using `visibility: hidden` or `opacity: 0` without `hidden` means screen readers may still announce the hidden content. The `hidden` attribute is the correct semantic mechanism for "this content currently does not exist in the interaction model."

**6. The amber accent (`--color-amber`, `#C97D2E`) must not be used for body text at any size, and must not appear on the Atlantic primary background.**
Amber on white is 3.2:1 — it passes WCAG AA only for large text (18pt+ or bold 14pt+). Amber on Atlantic fails entirely. A developer who uses amber for a text label, a navigation link, or any text under 24px in body context creates an accessibility failure. Check all amber usage with a contrast checker before release.

**7. The `prefers-reduced-motion` media query must be respected by every animated component.**
The FAQ accordion, TOC collapse, navigation menu, reading progress bar, and card hover states all use `transition` or `transform`. Every one of these must be wrapped in a `@media (prefers-reduced-motion: reduce)` block that removes or minimises the motion. This is both an accessibility requirement (WCAG 2.3.3) and a brand requirement — the style guide explicitly states it.

**8. The Key Takeaways block must carry `aria-label="Key takeaways from this page"` on the `<section>` element and `id="key-takeaways"` on the same element.**
The `aria-label` creates a named landmark that screen readers announce. The `id` enables direct citation via `#key-takeaways` fragment — which is how AI systems and human readers link to this section. Both are required. One without the other leaves either human or machine readers underserved.

**9. Inter must load with `font-feature-settings: "cv02" 1, "cv03" 1, "cv04" 1, "cv11" 1, "ss01" 1` on all body copy elements, and `font-variant-numeric: tabular-nums` must be applied to the comparison table to override `ss01`.**
If Inter loads without the feature settings, the typeface defaults to its "generic" form — which is fine but misses the disambiguation improvements that signal typographic care. More critically, if `ss01` (old-style proportional digits) is active on the comparison table, numeric data in the table will have inconsistent baselines, which undermines the data presentation quality.

**10. The site navigation must include a skip-to-content link as the first focusable element on every page.**
A skip link (`<a class="skip-link" href="#main-content">Skip to content</a>`) is the first element in the `<body>`. It is visually hidden by default but becomes visible on focus (keyboard users Tab from the address bar and land here first). Without it, keyboard users must navigate through every navigation item on every page to reach the main content. This is a WCAG 2.4.1 failure and a practical trust failure — any accessibility audit commissioned by Aoife's European HQ will flag it immediately.

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: var(--space-md);
  background-color: var(--color-atlantic);
  color: var(--color-inverted-text);
  padding: var(--space-sm) var(--space-md);
  border-radius: 0 0 4px 4px;
  font-family: var(--font-inter);
  font-weight: 600;
  font-size: var(--text-body);
  text-decoration: none;
  z-index: 200;
  transition: top 100ms ease-out;
}

.skip-link:focus {
  top: 0;
}
```

**11. Footer text on the Atlantic background must be contrast-checked at the composited colour value, not at the token value.**
`--color-inverted-text` (`#F7F6F2`) at full opacity on `--color-atlantic` (`#1D4B52`) is 12.6:1 — AAA. But the footer spec applies opacity variants: 70% opacity for nav links and contact links, 50% opacity for the legal caption. At 70%, the composited foreground on Atlantic approximates 4.6:1 (AA pass). At 50%, it approximates 3.1:1 — which fails WCAG AA for text below 18pt that is not bold. Developer requirement: test the rendered 50% opacity caption text with a browser eyedropper or DevTools colour picker against the actual background, not the CSS variable. If it fails, increase to 60% opacity. Inverted-background sections are the most common site in the codebase where opacity-based colour choices create invisible accessibility failures.

**12. The 404 page must return HTTP status code 404. Verify before launch.**
A page that displays "404" visually but returns HTTP 200 is a soft 404. Soft 404s are indexed by search engines as live content pages, which wastes crawl budget, can dilute the domain's authority signal, and in some CMS configurations causes the 404 template to accumulate backlinks as if it were a legitimate page. Verification command: `curl -I https://cillianbc.com/any-nonexistent-path/` and confirm `HTTP/2 404` in the response headers. This check must run against the production environment, not a local server — some static site generators and CDN configurations handle 404 routing differently in development and production. This is a release blocker.

**13. Insights pagination must produce stable, unique URLs for each page and category combination. Verify that paginated archive pages are not blocked in `robots.txt`.**
The AEO case for pagination over infinite scroll (Section 7D) depends entirely on each paginated view having a URL that an AI system can cite. If `/insights/page/2/` returns the same content as `/insights/` because the pagination is JavaScript-only and the URL never changes, the pagination has no SEO or AEO value. Verify that: (a) each page number produces a unique, crawlable URL; (b) the URL is stable — reloading `/insights/page/2/` returns the same articles without requiring JavaScript; (c) paginated archive pages are not excluded by `robots.txt` or `<meta name="robots" content="noindex">` — archive pages are citeable content and must be indexable.

---

*UI Component Specification — cillianbc.com*
*Version 1.1 | March 2026*
*Sections 1–5: Version 1.0. Sections 6–8 added Version 1.1.*
*All colour combinations specified in this document meet WCAG AA (4.5:1 for body text, 3:1 for large text and UI components) unless explicitly documented as decorative exceptions. Documented exceptions: amber at body sizes (item 6 above); the 404 decorative "404" numeral (Section 8E).*
