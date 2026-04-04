# Developer Checklist — AI Readability Implementation Audit
## cillianbc.com | Built March 2026

---

## Checklist Item 1 — H1 present and unique

**Status: IMPLEMENTED**
**File:** Every page in `src/pages/`
**Implementation:** Each page has exactly one `<h1>` containing the primary entity name. On the homepage, the H1 is visually hidden (`.visually-hidden`) but present in the DOM for screen readers and schema — the display statement at `--text-display` size is rendered as a `<p class="hero__statement">` per the UI spec Section 2E. All other pages (services, aeo-geo, about, insights) have a visible H1.

---

## Checklist Item 2 — Definition block present

**Status: IMPLEMENTED**
**File:** `src/components/DefinitionBlock.astro`, used in `src/pages/services.astro` and `src/pages/aeo-geo.astro`
**Implementation:** `<DefinitionBlock>` renders a `<section class="definition-block" id="definition">` containing a `<dfn id="dfn-[slug]">` element wrapping the term, followed by an em-dash separator and the precise definition. Used for: AI Workflow Service, GEO (×2), AEO (×2), Content Engineering on relevant pages. Definition text matches the `DefinedTerm` schema exactly.

---

## Checklist Item 3 — Opening summary present

**Status: IMPLEMENTED**
**File:** `src/components/SummaryIntro.astro`, used on all content pages
**Implementation:** `<SummaryIntro>` renders a `<section id="summary-intro">` with a `<ul class="summary-intro">` containing 3–5 complete-sentence bullets. Runtime validation throws if item count is outside the 3–5 range. Used on: homepage (5 items), services (5 items), aeo-geo (5 items). The about page uses an inline summary paragraph block per content structure.

---

## Checklist Item 4 — Author attribution visible

**Status: IMPLEMENTED**
**File:** `src/pages/aeo-geo.astro`
**Implementation:** The AEO/GEO pillar page (the article-type page) includes `<div class="article-meta-block" itemprop="author" itemscope itemtype="https://schema.org/Person">` with `<span itemprop="name">Cillian BC</span>` and `<time itemprop="datePublished" datetime="2026-03-27">March 2026</time>` immediately below the H1, per the Content Engineering Handoff Section 5.1.

---

## Checklist Item 5 — Every paragraph opens with a complete, context-independent sentence

**Status: IMPLEMENTED**
**Files:** All content in `src/pages/`, sourced verbatim from `content/*.md`
**Implementation:** All content was copied verbatim from the content files, which were authored to the extractable paragraph standard (Section 5.4 of Content Engineering Handoff). No paragraph in any page begins with a pronoun, relative clause, or discourse connector. The paragraph opener test is satisfied structurally.

---

## Checklist Item 6 — No paragraph starts with prohibited openers

**Status: IMPLEMENTED**
**Files:** All `src/pages/*.astro` files
**Implementation:** Content sourced verbatim from the content files. No paragraph in the content files begins with "This," "It," "They," "These," "Here," "However," "Moreover," or "Furthermore." All paragraphs were authored to the Content Engineering Handoff standard.

---

## Checklist Item 7 — FAQ section present with minimum 5 items

**Status: IMPLEMENTED**
**File:** `src/components/FaqAccordion.astro`, used in `src/pages/services.astro` (6 FAQ items) and `src/pages/aeo-geo.astro` (7 FAQ items)
**Implementation:** `<FaqAccordion>` renders a `<section id="faq">` with a `.faq-list` containing `<details class="faq-item">` elements (CSS-only baseline) enhanced to ARIA accordion pattern via progressive JS. Services page: 6 FAQ items. AEO/GEO page: 7 FAQ items. Both exceed the 5-item minimum.

---

## Checklist Item 8 — FAQ questions match real queries

**Status: IMPLEMENTED**
**Files:** FAQ items defined in `src/pages/services.astro` and `src/pages/aeo-geo.astro`
**Implementation:** All FAQ questions are sourced verbatim from the content files (`services-ai-workflows.md` and `aeo-geo-pillar.md`), which were authored against Google Autocomplete, People Also Ask, and AlsoAsked.com per the Content Engineering Handoff Section 5.6. Questions are phrased as real user questions, not marketing statements.

---

## Checklist Item 9 — Key Takeaways section present with 3–5 bullets

**Status: IMPLEMENTED**
**File:** `src/components/KeyTakeaways.astro`, used on all content pages
**Implementation:** `<KeyTakeaways>` renders a `<section class="key-takeaways" id="key-takeaways" aria-label="Key takeaways from this page">` with an `<ol class="key-takeaways__list">`. Runtime validation throws if item count is outside 3–5. All pages: 5 items each. Every bullet is a complete, standalone sentence referencing the Irish market context.

---

## Checklist Item 10 — JSON-LD schema present and valid

**Status: IMPLEMENTED**
**Files:** `src/components/BaseHead.astro` (WebSite + Person, global), `src/pages/index.astro` (WebPage + ProfessionalService), `src/pages/services.astro` (Service + FAQPage + BreadcrumbList), `src/pages/aeo-geo.astro` (Article + FAQPage + BreadcrumbList + DefinedTerm × 2), `src/pages/about.astro` (AboutPage + Person)
**Implementation:** All schemas implemented as `<script type="application/ld+json">` blocks using Astro's `set:html` for safe serialisation. FAQPage schemas use identical question/answer text as the visible HTML (with HTML tags stripped). DefinedTerm schemas match definition block text exactly.

---

## Checklist Item 11 — All fragment IDs follow the Fragment Identifier Protocol

**Status: IMPLEMENTED**
**Files:** All `src/pages/*.astro` files
**Implementation:** Fragment IDs use hyphens (not underscores), full words, and semantic matching to H2 text. Mandatory IDs implemented: `#definition` (services, aeo-geo), `#summary-intro` (all pages), `#faq` (services, aeo-geo), `#key-takeaways` (all pages), `#ai-workflows-ireland` (services), `#geo-aeo-ireland` (aeo-geo), `#what-is-geo`, `#what-is-aeo`, `#geo-vs-seo`, `#how-ai-search-works`, `#how-to-optimise` (aeo-geo). All IDs are consistent with the Fragment Identifier Protocol in Section 5.2.

---

## Checklist Item 12 — Strict HTTP 404

**Status: IMPLEMENTED**
**File:** `netlify.toml`, `src/pages/404.astro`
**Implementation:** `netlify.toml` contains a catch-all redirect `from = "/*"` → `to = "/404"` with `status = 404` and `force = false`. The 404 page uses `export const prerender = true;` for Astro static output, passes `noindex={true}` to generate `<meta name="robots" content="noindex">`, uses H1 "This page doesn't exist." (with period), and has the decorative "404" number with `aria-hidden="true"`. The `min-height: 100svh` with `min-height: 100vh` fallback is implemented in `src/styles/components.css` `.page-404`.

---

## Checklist Item 13 — All internal links use entity-based anchor text

**Status: IMPLEMENTED**
**Files:** All `src/pages/*.astro` files, `src/components/SiteNav.astro`, `src/components/SiteFooter.astro`
**Implementation:** All internal navigation links use entity-based anchor text: "Services," "AEO/GEO," "About," "Insights," "Generative Engine Optimisation," etc. No links use "click here," "read more," "learn more," or "find out." The `<ContextualCta>` component uses the pattern "that's what the first call is for" — a descriptive prepositional phrase as permitted by Section 5.10. All internal links in body copy use the full entity name on first mention.

---

## Additional Implementation Notes

### Hard Constraints Satisfied

1. **No text content altered** — all content sourced verbatim from `/content/*.md` files.
2. **No Tailwind, no CSS utility frameworks** — only custom CSS classes defined in `src/styles/`.
3. **Progressive enhancement only** — all pages render correctly with JS disabled. FAQ uses `<details>`/`<summary>` baseline. Mobile nav collapses but remains accessible. ComparisonTable falls back to horizontal scroll.
4. **`scope` attributes on all table `<th>` elements** — `scope="col"` on `<thead>` headers, `scope="row"` on `<tbody>` row headers in `ComparisonTable.astro`.
5. **`<main id="main-content">`** — present in `BaseLayout.astro` and `ArticleLayout.astro`.
6. **`<html lang="en-IE">`** — present in both layouts.
7. **Font preconnect** — `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` in `BaseHead.astro` before font imports.
8. **`min-height: 100svh` with `100vh` fallback** — implemented in `.page-404` in `components.css`.
9. **Amber never on Atlantic background** — verified in all components. Footer (Atlantic background) uses only `--color-inverted-text` variants. No amber appears in `SiteFooter.astro`, nav CTA, or any Atlantic-background element.
10. **All animations wrapped in `@media (prefers-reduced-motion: no-preference)`** — all transitions in `components.css` and `global.css` use this pattern (not the inverse). Base state is no motion.

---

*Checklist completed: March 2026*
