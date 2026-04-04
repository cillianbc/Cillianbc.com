# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local dev server
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
```

No test runner is configured. The repo includes Playwright as a dev dependency but no test scripts are defined.

Deployed to Cloudflare Pages; build command `npm run build`, output directory `dist/`. Every push to `main` triggers a deploy automatically.

## Stack

- **Astro 5** (static output) with **React 19** integration
- **Keystatic** CMS for content management (local storage mode, no remote backend) — disabled in production builds via `process.env.NODE_ENV === 'production'` check in `astro.config.mjs`
- **Custom CSS only** — no Tailwind, no utility frameworks; all styles live in `src/styles/`

## Architecture

### Content flow

Content is authored in two places:

1. **`src/content/insights/`** — Markdoc files for blog/insights articles. Schema defined in `src/content/config.ts`. Keystatic manages these via the `/keystatic` admin UI (enabled in dev, disabled in static production builds). Keystatic uses `fields.markdoc({ extension: 'md' })` — so articles are `.md` files but may contain Markdoc syntax (e.g. `{% table %}`), not plain Markdown.

2. **`content/*.md`** — Flat markdown files used as the canonical source of truth for page copy (homepage, services, about, aeo-geo, automation). These are *not* Astro content collections — they're reference files that content is copied verbatim from into the `.astro` page files. Do not alter content in `.astro` pages without checking the corresponding `content/*.md` file. Also includes `Content Writing Guidelines - 2026 Content Marketing Resources.md` as a style reference.

### Layouts

- `BaseLayout.astro` — wraps all non-article pages; includes `BaseHead`, `SkipLink`, `SiteNav`, `SiteFooter`
- `ArticleLayout.astro` — wraps insights articles; adds reading progress bar and article-specific structure

Both layouts set `<html lang="en-IE">` and `<main id="main-content">`.

### Pages

- `index.astro`, `services.astro`, `aeo-geo.astro`, `about.astro`, `automation.astro` — static pages
- `contact.astro` — contact page; primary destination for all "Start a conversation" CTAs; contains booking CTA, `SummaryIntro`, and `KeyTakeaways`
- `insights/index.astro` — insights listing page
- `insights/[...slug].astro` — dynamic route for individual articles
- `404.astro` — uses `noindex={true}` and `export const prerender = true`

### Images

All images live in `public/images/`:
- `cillian-portrait.png` — headshot, used in homepage hero, about page profile header, and footer brand column
- `google-partner.png` — Google Partner badge
- `airops-certified-expert.png` — AirOps Certified Expert badge
- `irish-landscape.webp` — Cliffs of Moher landscape, used as contact section background

**Badge rendering on dark backgrounds:** Use `filter: brightness(0) invert(1)` to render badges as white silhouettes on the Atlantic background (footer). Never render coloured badges directly on `--color-atlantic`.

**Landscape image rule:** The brand guide permits the landscape image at most once per page. It is currently used only in the `.contact-section` via CSS background-image. Do not add it elsewhere.

### CSS system

Styles are split across four files in `src/styles/`:
- `global.css` — design tokens: colour palette (`--color-atlantic` #1D4B52, `--color-amber` #C97D2E, `--color-off-white`, etc.), typography (`--font-fraunces` serif headings, `--font-inter` body, `--font-mono`), type scale (`--text-display` through `--text-label`), spacing (4px base unit via `--space-xs` through `--space-4xl`)
- `typography.css` — prose and heading styles
- `components.css` — component-level styles
- `utilities.css` — utility classes

**Button variants:**
- `.btn--primary` — Atlantic background, inverted text; use on light (off-white) backgrounds
- `.btn--ghost` — transparent with Atlantic border; use on light backgrounds
- `.btn--inverted` — inverted-text background (#F7F6F2), Atlantic text; use on dark (Atlantic) backgrounds such as `.contact-section`

**Hard constraints:**
- Amber (`--color-amber`) must never appear on Atlantic-background elements
- All animations must be wrapped in `@media (prefers-reduced-motion: no-preference)` — base state is no motion
- No Tailwind, no CSS utility frameworks, no illustration, no gradient backgrounds

### Page section structure

The `.contact-section` must always sit **outside** any `.container` div as a direct child of `<BaseLayout>`, with its own inner `.container.container--prose`. Getting this wrong breaks the full-bleed background image. The services page previously had it trapped inside the prose container — don't repeat that.

**Contact section CTA pattern:** Every `.contact-section` now contains two CTAs inside `.contact-section__methods`: a `.btn--inverted` "Book a 30-minute call" button (links to `BOOKING_URL`, opens in new tab) followed by the `.contact-section__email` mailto link. The contact page (`/contact`) itself has no `.contact-section` at the bottom — it is the contact destination.

### Site-wide constants

`src/config/constants.ts` exports shared values used across pages:
- `BOOKING_URL` — the Proton Calendar booking link. Update here to change it everywhere. Import in any page that renders a "Book a 30-minute call" button.

### Component gotchas

**`KeyTakeaways` and `SummaryIntro`:** Items are passed as raw HTML strings (with `<strong>` tags). These components render each item inside a flex `<li>`. Always wrap `set:html` content in a `<span>` inside the `<li>` — without the wrapper, the `<strong>` becomes a separate flex child and the text splits into two columns.

**`KeyTakeaways` and `SummaryIntro` item counts:** Both components throw at runtime if item count is outside 3–5. This is intentional.

**`SnippetBullets`:** Renders a plain `<ul>` from items passed as raw HTML strings. No item count constraint. Accepts an optional `label` prop that renders a preceding `<p>`. Unlike `KeyTakeaways`/`SummaryIntro`, items render directly inside `<li>` (no `<span>` wrapper needed — no flex layout involved).

**`ContextualCta`:** Inline `<aside>` with a short text prompt and a single link. Props: `text`, `href`, `linkText`. Used mid-page to invite a conversion action without a full CTA section. All current usages link to `/contact`.

**`ComparisonTable`:** Accessible `<table>` with `caption`, `headers[]`, and `rows[]` (each row: `header`, `cells[]`, optional `highlight: boolean`). Includes progressive JS that converts the table to stacked `.discipline-card` elements on mobile (<640px), hiding the original table visually (kept in DOM for screen readers). Currently used on `aeo-geo.astro`.

**`ArticleCard` / `FeaturedArticle`:** `ArticleCard` renders an `<article>` for listing pages. Accepts `title`, `href`, `category`, `excerpt`, `pubDate`, `readingTime`, optional `featured` and `keyTopics[]`. `FeaturedArticle` is a thin alias that passes `featured={true}` — use it for the top card on the insights listing page.

**`AuthorBlock`:** Static byline component — no props. Renders the portrait, name, and role. Used in `ArticleLayout`.

### Schema / SEO

Each page includes JSON-LD as `<script type="application/ld+json">` blocks. `BaseHead.astro` emits global WebSite + Person schema (including portrait image URL). Individual pages add page-type-specific schemas (WebPage, Service, Article, FAQPage, BreadcrumbList, DefinedTerm). FAQPage schema text must stay in sync with visible FAQ HTML.

### AI readability constraints

The site is intentionally built for AI search readability. Key structural requirements:
- Every page has exactly one `<h1>`
- `SummaryIntro` (3–5 bullets) and `KeyTakeaways` (3–5 bullets) components are required on all content pages
- `DefinitionBlock` wraps defined terms with `<dfn id="dfn-[slug]">` for AEO/GEO pages
- `FaqAccordion` uses `<details>/<summary>` with progressive JS enhancement; minimum 5 items
- Fragment IDs use hyphens, full words, and match H2 text semantically
- All internal links use entity-based anchor text (no "click here", "read more", etc.)

See `src/CHECKLIST.md` for the full AI readability implementation audit.

### Keystatic Markdoc tables

Keystatic's editor serialises tables as `{% table %}` / `{% /table %}` Markdoc syntax. Astro 5 has no native processor for this — and **`@astrojs/markdoc` is incompatible with Astro 5** (v0.x requires Astro 3/4; v1.x requires Astro 6+). Do not attempt to install it.

The workaround lives in two places:

**`src/plugins/remark-keystatic-table.mjs`** — a remark plugin that detects `{% table %}` blocks in the AST and replaces them with `<table>` HTML nodes. Key edge case: if no blank line precedes `{% /table %}` in the source file, remark embeds the closing tag inside the last list node rather than as a standalone paragraph. The plugin's `stripTrailingCloseTag()` handles this.

**`src/pages/insights/[...slug].astro`** — uses a dual rendering path:
- If `article.body` contains `{% table %}`: runs the article through a manual `unified` pipeline (`remark-parse` → `remark-gfm` → `remark-keystatic-table` → `remark-rehype` → `rehype-raw` → `rehype-stringify`). All these packages are already present as Astro's own dependencies — no new installs needed. TOC headings are extracted via regex + `github-slugger` and `id` attributes are injected into the rendered HTML.
- Otherwise: uses `article.render()` unchanged.

**`.prose table` in `components.css`** — styles article-body tables. Atlantic header row, alternating off-white/warm-stone body rows, Inter font, tabular nums. **Do not** add `display: block` or `overflow-x: auto` to the `<table>` element itself — this creates an unwanted scroll container. If horizontal scrolling is ever needed for narrow tables, wrap the `<table>` in a `<div style="overflow-x: auto">` instead (achievable via an update to the remark plugin).

### Handovers

`handovers/` contains strategic planning documents for ongoing work:
- **`seo-technical-strategy.md`** — entity map, URL structure, pillar→cluster→fragment model, schema hierarchy, keyword clusters. Source of truth for SEO architecture decisions.
- **`insights-topic-briefs.md`** — 38 article briefs across 5 pillars with publication sequence (12 P1 articles in first 90 days).
- **`insights-writing-guide.md`** — voice, structure, and the 15-point production checklist. Read this before authoring or reviewing article content.
- **`content-creator-handover.md`** — operational synthesis for the content creator: P1 sequence, internal linking map, schema quick-reference, pages that don't exist yet, 5-step submission checklist.
