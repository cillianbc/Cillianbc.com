# Cillianbc.com — Comprehensive Technical SEO Strategy

**Prepared for:** Cillianbc.com  
**Specialist:** Senior SEO Strategist  
**Date:** 27 March 2026  
**Status:** Production-Ready

---

## Document Overview

This document defines the complete technical SEO, AEO, and GEO architecture for cillianbc.com. Every recommendation is specific to this consultancy, this market, and this moment in search history. Nothing here is generic advice dressed in specific language.

The site operates in a transitional period where Google's traditional ranking model and LLM-based answer engines coexist and compete. The strategy must satisfy both simultaneously. The site is also the proof of concept — it must visibly demonstrate the disciplines it sells.

---

## SECTION 1: Entity & Semantic Map

### 1.1 Primary Person Entity

The central entity is **Cillian B.C.**, a named individual operating as an independent consultant in Ireland. The Knowledge Graph entry for this person must be built deliberately, because Google will not infer it from domain authority alone.

| Attribute | Value |
|---|---|
| `@type` | `Person` |
| `name` | `Cillian BC` (as stylised on-site) — also include full legal name if different, as an `alternateName` |
| `jobTitle` | `SEO & AI Search Consultant` |
| `description` | One sentence: "Independent SEO, AEO, and GEO consultant based in Ireland, helping B2B businesses maintain organic visibility as search shifts to AI-generated answers." |
| `url` | `https://cillianbc.com` |
| `sameAs` | See 1.1.1 below |
| `knowsAbout` | See 1.1.2 below |
| `hasCredential` | Any verifiable certifications — Google Analytics, Google Search Console, relevant AI/ML certifications |
| `worksFor` | Self-referential: the ProfessionalService entity at `https://cillianbc.com/#consultancy` |
| `nationality` | `https://schema.org/Irish` |
| `address` | Ireland (country-level minimum; city if comfortable) |
| `image` | A consistent, indexed headshot image with stable URL: `https://cillianbc.com/images/cillian-bc-seo-consultant.jpg` |

#### 1.1.1 sameAs Link Targets (Priority Order)

These are the external URIs that Google cross-references to confirm person entity identity. Every link must point to a profile that uses exactly the same name, description, and specialisation.

| Priority | Platform | URL Pattern | Notes |
|---|---|---|---|
| 1 | Google Search Console verified site | `https://cillianbc.com` | Foundational — proves ownership |
| 2 | LinkedIn | `https://linkedin.com/in/[handle]` | Highest entity weight for B2B professionals |
| 3 | Wikidata | `https://wikidata.org/wiki/Q[ID]` | Create item if none exists — needed for Knowledge Panel |
| 4 | Google Knowledge Panel (via claimed profile) | Via Google's business profile tools | Claim once signals exist |
| 5 | Twitter/X | `https://x.com/[handle]` | Lower weight now but still indexed |
| 6 | GitHub | `https://github.com/[handle]` | Signals technical credibility |
| 7 | Mastodon/Indieweb | Verified rel="me" links | Growing relevance for entity graphs |
| 8 | Crunchbase | `https://crunchbase.com/person/[slug]` | Indexed by LLMs for business context |
| 9 | PRCA Ireland directory | If applicable | Irish professional body signal |
| 10 | Podcast appearances | Episode pages with byline | Co-citation from established publishers |

**Critical rule:** The `name` field across all profiles must be identical. If the site uses "Cillian BC", every profile uses "Cillian BC". Variation destroys entity coherence.

#### 1.1.2 knowsAbout Topics (Schema Values)

```json
"knowsAbout": [
  "Search Engine Optimisation",
  "Answer Engine Optimisation",
  "Generative Engine Optimisation",
  "AI Search Visibility",
  "Knowledge Graph Optimisation",
  "Structured Data and Schema Markup",
  "Content Engineering",
  "AI Workflows for B2B Marketing",
  "Large Language Model Behaviour in Search",
  "Irish Digital Marketing",
  "Technical SEO Auditing",
  "Entity-Based SEO"
]
```

---

### 1.2 Primary Organisation / Service Entity

| Attribute | Value |
|---|---|
| `@type` | `ProfessionalService` |
| `@id` | `https://cillianbc.com/#consultancy` |
| `name` | `Cillian BC — SEO & AI Search Consultancy` |
| `url` | `https://cillianbc.com` |
| `areaServed` | Ireland (primary), European Union (secondary) |
| `serviceType` | `SEO Consultancy`, `AEO Strategy`, `GEO Implementation`, `Content Engineering`, `AI Workflow Design` |
| `founder` | Person entity — `https://cillianbc.com/#cillian-bc` |
| `priceRange` | Omit if sensitive — or use `$$` as a signal without committing to figures |
| `contactPoint` | Email contact type, with `contactType: "customer service"` |

---

### 1.3 Core Topic Entities (8–12)

Each topic entity is a concept the site must define, own, and be cited for. The definition published on-site must be the one LLMs cite. These are not keywords — they are entities with relationships.

#### Entity 1: Generative Engine Optimisation (GEO)

| Field | Value |
|---|---|
| Entity Name | Generative Engine Optimisation |
| Abbreviation | GEO |
| Schema Type | `DefinedTerm` within `DefinedTermSet` |
| Relationship to Person | `Cillian BC` has `knowsAbout` this term; the site is the authoritative Irish-language publisher of this definition |
| Definition to publish | "Generative Engine Optimisation (GEO) is the practice of structuring content, entities, and external signals so that AI-powered answer engines — including Google AI Overviews, Perplexity, and ChatGPT — retrieve, cite, and accurately represent a brand or individual when generating responses to user queries." |
| Site location | `/services/generative-engine-optimisation` + glossary entry at `/glossary/geo` |

#### Entity 2: Answer Engine Optimisation (AEO)

| Field | Value |
|---|---|
| Entity Name | Answer Engine Optimisation |
| Abbreviation | AEO |
| Schema Type | `DefinedTerm` |
| Relationship to Person | Primary service offering; Cillian BC is positioned as an Irish-market AEO practitioner |
| Definition to publish | "Answer Engine Optimisation (AEO) is the practice of structuring content so that search engines and AI assistants can extract precise, trustworthy answers to specific questions — and attribute those answers to the source. AEO differs from traditional SEO in that the goal is not to rank a page but to become the cited source within an AI-generated or featured-snippet answer." |
| Site location | `/services/answer-engine-optimisation` + `/glossary/aeo` |

#### Entity 3: AI Search Visibility

| Field | Value |
|---|---|
| Entity Name | AI Search Visibility |
| Schema Type | `DefinedTerm` |
| Relationship to Person | A service outcome Cillian BC delivers; bridges traditional SEO and GEO |
| Definition to publish | "AI search visibility refers to whether and how a business, brand, or individual is represented in AI-generated search responses. As generative AI becomes the default interface for search, organisations that are not visible in AI-generated answers risk losing traffic, leads, and revenue regardless of their traditional search rankings." |
| Site location | `/services/ai-search-visibility` or as a sub-concept under GEO |

#### Entity 4: Technical SEO

| Field | Value |
|---|---|
| Entity Name | Technical SEO |
| Schema Type | `DefinedTerm` |
| Relationship to Person | Core competency — listed in `knowsAbout` |
| Definition to publish | Context-specific definition emphasising crawlability, structured data, Core Web Vitals, and their relationship to AI extractability |
| Site location | `/services/technical-seo` |

#### Entity 5: Content Engineering

| Field | Value |
|---|---|
| Entity Name | Content Engineering |
| Schema Type | `DefinedTerm` |
| Relationship to Person | Differentiating service positioning — not "content writing" but structured, semantically precise content architecture |
| Definition to publish | "Content engineering is the discipline of designing content structures, taxonomies, and semantic frameworks that make information reliably retrievable by both human readers and machine systems, including search engines, AI assistants, and internal knowledge bases. It combines information architecture, structured data, and editorial strategy." |
| Site location | `/services/content-engineering` |

#### Entity 6: Knowledge Graph Optimisation

| Field | Value |
|---|---|
| Entity Name | Knowledge Graph Optimisation |
| Schema Type | `DefinedTerm` |
| Relationship to Person | Technical subspecialty; supports the entity-building service line |
| Definition to publish | "Knowledge Graph Optimisation is the practice of ensuring that entities — people, organisations, products, and concepts — are correctly represented, connected, and attributed within Google's Knowledge Graph and equivalent LLM knowledge structures. It involves schema markup, entity co-citation, Wikipedia/Wikidata presence, and consistent entity naming across the web." |
| Site location | `/services/knowledge-graph-optimisation` or as a glossary entry |

#### Entity 7: AI Workflows for B2B Marketing

| Field | Value |
|---|---|
| Entity Name | AI Workflows for B2B Marketing |
| Schema Type | `DefinedTerm` |
| Relationship to Person | Practical service offering distinct from strategy-only consulting |
| Definition to publish | "AI workflows for B2B marketing are structured, repeatable processes that use AI tools — including large language models, AI writing assistants, and automation platforms — to increase the speed, consistency, and measurability of marketing tasks such as content production, keyword research, and performance reporting." |
| Site location | `/services/ai-workflows` |

#### Entity 8: Structured Data / Schema Markup

| Field | Value |
|---|---|
| Entity Name | Structured Data |
| Alternate Name | Schema Markup |
| Schema Type | `DefinedTerm` |
| Relationship to Person | Technical implementation skill; a deliverable in most client engagements |
| Definition to publish | "Structured data is machine-readable information embedded in a webpage using a standardised vocabulary (typically Schema.org JSON-LD) that tells search engines and AI systems what a page is about, who created it, and how its content relates to other entities — without relying on those systems to infer meaning from prose alone." |
| Site location | `/services/structured-data` or `/glossary/structured-data` |

#### Entity 9: SEO Audit (Ireland)

| Field | Value |
|---|---|
| Entity Name | SEO Audit Ireland |
| Schema Type | `Service` within the ProfessionalService entity |
| Relationship to Person | Transactional service offering with geographic modifier |
| Definition to publish | Detailed page explaining what an SEO audit for an Irish business covers, with Irish-specific context (hreflang for .ie domains, local citation landscape, etc.) |
| Site location | `/services/seo-audit-ireland` |

#### Entity 10: Google AI Overviews

| Field | Value |
|---|---|
| Entity Name | Google AI Overviews |
| Schema Type | `DefinedTerm` |
| Relationship to Person | A system Cillian BC has expertise in influencing — not an owned topic but an associated concept |
| Definition to publish | "Google AI Overviews are AI-generated summaries that appear at the top of Google Search results pages, synthesising information from multiple sources to answer a user's query directly. Appearing as a cited source within an AI Overview is now a distinct optimisation goal, separate from ranking in the ten blue links." |
| Site location | `/glossary/google-ai-overviews` or integrated into GEO pillar content |

#### Entity 11: Perplexity AI (as associated concept)

| Field | Value |
|---|---|
| Entity Name | Perplexity AI Search |
| Schema Type | Referenced `DefinedTerm` |
| Relationship to Person | Platform Cillian BC optimises for; a tool within the GEO service scope |
| Site location | Integrated into GEO and AEO content as a named, explained entity |

#### Entity 12: Irish Digital Marketing (Geographic-Topical Entity)

| Field | Value |
|---|---|
| Entity Name | Irish Digital Marketing |
| Schema Type | `DefinedTerm` with geographic modifier |
| Relationship to Person | The local market context in which Cillian BC operates |
| Definition to publish | A market context page or section explaining the specific dynamics of Irish B2B digital marketing — search behaviour differences, Irish-language considerations, .ie domain signals, enterprise vs. SME landscape |
| Site location | `/insights/irish-digital-marketing-landscape` |

---

### 1.4 Geographic Entity Layer

Google's geographic entity model must place this consultancy in Ireland, not simply "near Ireland" or "Ireland-based but global."

| Signal | Implementation |
|---|---|
| `addressCountry` in schema | `IE` (ISO 3166-1 alpha-2) |
| `addressLocality` | Dublin or specific county — do not leave blank |
| Content references | Explicit reference to Irish business context, Irish legislation (Data Protection Act, Irish company structures), Irish market conditions in every pillar page |
| Domain | `.com` is fine but must be reinforced by every other geographic signal |
| Link targets | PRCA Ireland, Marketing Institute of Ireland, Silicon Republic, Business Post, Irish Times business section |
| hreflang | If no language variants exist, omit — but if an Irish language (Gaeilge) version is ever added, implement correctly |
| Local citations | Google Business Profile (even for consultants without a physical office — use a service-area business type) |

---

### 1.5 Entity Interlink Map

```
[Cillian BC — Person]
    │
    ├──worksFor──► [Cillian BC Consultancy — ProfessionalService]
    │                   │
    │                   ├──hasService──► [GEO Service Page]
    │                   ├──hasService──► [AEO Service Page]
    │                   ├──hasService──► [Technical SEO Service Page]
    │                   ├──hasService──► [Content Engineering Service Page]
    │                   └──hasService──► [AI Workflows Service Page]
    │
    ├──knowsAbout──► [GEO — DefinedTerm] ◄──relatedTo──► [Google AI Overviews]
    ├──knowsAbout──► [AEO — DefinedTerm] ◄──relatedTo──► [Featured Snippets]
    ├──knowsAbout──► [Knowledge Graph Optimisation] ◄──relatedTo──► [Structured Data]
    ├──knowsAbout──► [Content Engineering] ◄──relatedTo──► [AI Workflows for B2B]
    │
    ├──locatedIn──► [Ireland — Country Entity]
    │                   └──partOf──► [European Union — Region Entity]
    │
    └──sameAs──► [LinkedIn Profile]
    └──sameAs──► [Wikidata Item]
    └──sameAs──► [GitHub Profile]
    └──sameAs──► [Crunchbase Profile]
```

**How to signal these connections:**

- In JSON-LD: use `@id` references to connect entities on-page and cross-page
- In content: mention entity names precisely and consistently (same string every time)
- In internal links: anchor text must match entity name or a known variant
- In external citations: ensure third-party mentions use the same name, role, and URL

---

### 1.6 Co-Citation Targets

#### Irish-Specific Publications and Directories

| Target | Type | Priority | Target Content Type |
|---|---|---|---|
| Silicon Republic | Tech journalism | High | Guest article or expert quote on AI search |
| The Irish Times (Business/Technology) | National press | High | Expert comment or opinion piece |
| Business Post | National press | High | Interview or byline on AI disruption |
| Marketing Institute of Ireland | Professional body | High | Member listing + speaking slot |
| PRCA Ireland | Professional body | Medium | Member listing |
| Boards.ie / Irish tech forums | Community | Medium | Substantive contribution (not promotional) |
| Dublin Chamber of Commerce | Business directory | Medium | Member listing |
| Enterprise Ireland supplier directory | Government body | High | If eligible — enormous trust signal |
| IDA Ireland publications | Government body | Medium | Referenced in industry reports |
| Intercom, HubSpot (Irish offices) | Corporate blog | Medium | Guest post on AI search for B2B |

#### Global Platforms for LLM Training Data

| Target | Type | Priority | Notes |
|---|---|---|---|
| Wikidata | Knowledge base | Critical | Create entity item with references |
| Wikipedia | Encyclopaedia | High | Requires notability — build toward this |
| Crunchbase | Business data | High | Free listing; indexed by ChatGPT |
| LinkedIn articles | Professional content | High | Indexed by Perplexity and Bing |
| Medium (under own handle) | Publishing platform | Medium | Syndication target for insights |
| Substack | Newsletter platform | Medium | Growing LLM training data source |
| Podcast appearances | Audio + transcript | High | Transcripts are indexed; citations appear in LLMs |
| Conference speaker bios | Event platforms | High | Speak at Search Fest, BrightonSEO, local events |
| Academic/industry citations | Research papers | Medium | If citing original research published on-site |

---

### 1.7 Knowledge Panel Activation Checklist

A Google Knowledge Panel for a person requires corroboration across multiple sources. The following conditions must all be true:

- [ ] A Wikidata item exists for Cillian BC with at minimum: name, occupation, nationality, notable work or employer, one external reference URL
- [ ] The homepage has valid `Person` JSON-LD with `sameAs` pointing to LinkedIn and Wikidata
- [ ] The LinkedIn profile is fully complete, uses identical name, and links back to `https://cillianbc.com` in the website field
- [ ] At least three external publications have mentioned Cillian BC by name in a business/professional context
- [ ] Google Search Console has the site verified and at least 90 days of data
- [ ] A Google Business Profile exists (service-area business type) with the site URL and consistent NAP (name, address, phone if used)
- [ ] At least one Google Discover or News-indexed piece references the person by name
- [ ] The About page has a full `Person` schema with `description`, `image`, `jobTitle`, `url`, and `sameAs`
- [ ] The image used in schema is publicly accessible, crawlable, and at minimum 300×300px with a descriptive filename
- [ ] The site has been indexed for at least 6 months with consistent entity signals throughout

---

## SECTION 2: AEO & GEO Architecture

### 2.1 Full URL Structure and Page Hierarchy

The URL structure must serve four simultaneous goals: human navigability, crawl efficiency, entity signalling, and citation-friendliness for AI systems. AI engines cite specific URLs — a URL must be readable as a description of the content it leads to.

```
https://cillianbc.com/
├── /services/
│   ├── /services/generative-engine-optimisation/
│   ├── /services/answer-engine-optimisation/
│   ├── /services/technical-seo/
│   ├── /services/content-engineering/
│   ├── /services/ai-workflows/
│   └── /services/seo-audit-ireland/
├── /insights/
│   ├── /insights/[article-slug]/
│   └── /insights/category/[category-slug]/
├── /case-studies/
│   └── /case-studies/[client-sector-outcome]/
├── /glossary/
│   ├── /glossary/geo/
│   ├── /glossary/aeo/
│   ├── /glossary/structured-data/
│   ├── /glossary/knowledge-graph/
│   └── /glossary/[term-slug]/
├── /about/
├── /contact/
└── /work-with-me/
```

**Structural rationale, page by page:**

| URL Segment | Rationale |
|---|---|
| `/services/` not `/what-i-do/` | Schema `Service` type requires a predictable, crawlable path; LLMs cite clean categorical URLs |
| Service slugs use full entity names | `/generative-engine-optimisation/` not `/geo/` — the slug itself is an entity signal |
| `/insights/` not `/blog/` | "Blog" signals informal; "Insights" signals professional publishing, consistent with B2B brand voice |
| `/case-studies/` as a separate section | Separates proof from explanation; enables distinct schema (`Article` + `HowTo`) |
| `/glossary/` as standalone | Creates citation-worthy definition pages that LLMs will directly quote; establishes definitional authority |
| `/about/` not `/about-me/` | Cleaner; the Person schema makes the "me" redundant |
| `/work-with-me/` separate from `/contact/` | Separates commercial intent (transactional) from general contact; better intent signal for conversion tracking |

---

### 2.2 Pillar → Cluster → Fragment Model

#### Structure Diagram

```
PILLAR: /services/generative-engine-optimisation/
    │
    ├── CLUSTER: /insights/what-is-geo-for-irish-businesses/
    ├── CLUSTER: /insights/google-ai-overviews-ireland/
    ├── CLUSTER: /insights/how-to-get-cited-in-ai-search/
    ├── CLUSTER: /glossary/geo/
    ├── CLUSTER: /case-studies/saas-geo-visibility-dublin/
    │
    └── FRAGMENTS (in-page anchors on pillar):
        ├── #what-is-geo
        ├── #geo-vs-seo
        ├── #geo-for-irish-businesses
        ├── #how-geo-works
        ├── #geo-faq
        └── #geo-summary

PILLAR: /services/answer-engine-optimisation/
    │
    ├── CLUSTER: /insights/aeo-vs-seo-explained/
    ├── CLUSTER: /insights/featured-snippets-ireland/
    ├── CLUSTER: /insights/how-llms-choose-sources/
    ├── CLUSTER: /glossary/aeo/
    │
    └── FRAGMENTS:
        ├── #what-is-aeo
        ├── #aeo-vs-seo
        ├── #aeo-for-b2b
        ├── #aeo-faq
        └── #aeo-summary
```

**Fragment strategy rationale:** AI engines, particularly Perplexity and Google AI Overviews, increasingly cite specific in-page anchor URLs (e.g. `cillianbc.com/services/geo/#what-is-geo`) rather than just the root page. Named fragments make this possible and make citations more precise — which also increases the probability of citation, because the AI can point to an exact location.

---

### 2.3 AEO Page Anatomy

Every service page and insights article must follow this exact structure. Deviation from this order reduces extractability.

```
1. [Pre-H1 breadcrumb — visible, schema-matched]

2. H1: Descriptive, entity-rich, not clever
   → Must contain the primary entity name
   → Example: "Generative Engine Optimisation (GEO) for Irish Businesses"
   → NOT: "Making Sure AI Knows Your Name"

3. DEFINITION BLOCK (id="definition")
   → <div class="definition-block"> wrapping a <dfn> and one to three sentences
   → Must define the service/topic precisely and self-containedly
   → This is the block LLMs will extract as a definition

4. [Author attribution — immediately visible, not in footer]
   → Name, title, publication date, last-reviewed date
   → Linked to About page and schema

5. OPENING SUMMARY (id="summary-intro")
   → 3–5 bullet points summarising the page
   → Written as standalone statements (each bullet is a complete sentence)
   → Tagged with class="page-summary"

6. H2: Core explanatory section (id="how-[topic]-works")
   → Prose explanation, 200–400 words
   → Each paragraph is self-contained (see Extractable Paragraph Standard, Section 5)

7. H2: Relevance to Irish businesses (id="[topic]-ireland")
   → Irish market specificity — personas Síobhán, Declan, and Aoife are implicitly addressed here
   → At least one Irish-specific example, statistic, or regulatory/market reference

8. H2: What this service includes (id="service-scope")
   → Structured list of deliverables
   → Use <ul> with <li> items, not prose
   → Each item should be a complete noun phrase

9. H2: Case study or proof point (id="proof")
   → Even if anonymised: "A SaaS company based in Dublin..."
   → Structured as mini-case-study: situation → approach → outcome

10. H2: Frequently Asked Questions (id="faq")
    → Minimum 5, maximum 10 questions
    → FAQPage schema applied
    → Questions must match real search queries — use actual language from Google Autocomplete and People Also Ask

11. CITABLE SUMMARY BLOCK (id="key-takeaways")
    → Required on every page
    → See Section 5 for full structural template

12. [CTA — Work with me / Contact]
    → Soft CTA, consistent with brand voice
    → Not "Book a free consultation" — instead: "If this is the challenge you're facing, let's talk."
```

---

### 2.4 GEO Content Signal Matrix

| Content Type | GEO Signal | Implementation Method | Expected AI Engine Behaviour |
|---|---|---|---|
| Definition Block | Authoritative definition | `<div class="definition-block"><dfn>` with precise wording; `DefinedTerm` schema | LLM extracts as canonical definition; cites URL |
| FAQ Section | Question-answer pair matching | `FAQPage` JSON-LD; `<details>/<summary>` or flat H3/P pattern | AI Overview or Perplexity uses Q&A pair verbatim |
| Citable Summary Block | Synthesisable key points | `<section class="key-takeaways">` with `<ul>` of complete sentences | LLM uses as "bottom line" when summarising the page |
| Author Attribution | E-E-A-T signal | Visible byline with schema; Person entity linked | Increases citation probability in AI engines that weight authoritativeness |
| Speakable Schema | Voice/conversational AI | `Speakable` JSON-LD pointing to definition and summary sections | Google Assistant and AI chat tools read these sections aloud or verbatim |
| Internal Links with Entity Anchor Text | Entity relationship graph | Descriptive anchor text matching target page's primary entity | LLM infers topic relationships from anchor text patterns |
| Case Study with Structured Outcomes | Proof / specificity signal | `HowTo` or `Article` schema; named situation/approach/outcome sections | AI extracts as a worked example when answering "how to" queries |
| Glossary Pages | Definition ownership | `DefinedTermSet` schema; glossary entries cross-linked | Perplexity and ChatGPT browse to glossary pages for definitions |
| Statistics and Data Points | Factual anchor | Cited inline with source URL; structured in `<figure>` with `<figcaption>` | AI prefers citing specific data points; sourced stats increase quote probability |
| Irish Market Context Sections | Geographic specificity | Explicit `addressCountry` in schema; in-content mention of Ireland | AI cites Irish-specific content for Irish-intent queries |

---

### 2.5 The Corroboration Layer

AI engines do not cite isolated pages. They cite pages that are corroborated — i.e., where multiple signals from multiple sources confirm the same claim. The corroboration layer is how the site builds that confirmation structure.

**Internal corroboration:**

- Every service page must link to at least two cluster articles and the relevant glossary entry
- Every cluster article must link back to its pillar service page and to at least one other cluster in the same topic area
- Entity names must be used consistently across all pages (no synonym drift — "Generative Engine Optimisation" not "Gen AI SEO" on one page and "GEO" on another without definition)
- The About page's `knowsAbout` schema must mirror the topic entities covered in service pages — the machine-readable signal matches the human-readable signal

**External corroboration:**

- Guest articles must cover the same topic entities as the site's service pages — an article on Silicon Republic about GEO corroborates the `/services/generative-engine-optimisation/` page
- Podcast appearances should be on shows indexed by Bing/Perplexity — the transcript is training data
- LinkedIn articles republishing key glossary definitions add a high-authority platform layer
- If Cillian BC is quoted in a news article using the exact phrase "Generative Engine Optimisation consultant Ireland," that phrase becomes a co-citation signal

**Schema-level corroboration:**

- `@id` URIs must be consistent across all pages (`https://cillianbc.com/#cillian-bc` used identically on homepage, about page, and every article's `author` field)
- The `ProfessionalService` entity ID must appear in every service page schema
- `sameAs` links on the homepage must be live, indexed, and consistent with what those external profiles say

---

### 2.6 AI Workflow Case Study Structural Template

Case studies are the highest-value GEO asset on this site. They answer "how" questions — which are the queries most likely to generate AI Overview citations. Every case study must follow this template.

```markdown
## [Client Sector] + [Challenge] + [Outcome] — used as both H1 and URL slug
## e.g. "How a Dublin SaaS Company Recovered AI Search Visibility After a Core Update"

### id="client-context"
**Sector:** [e.g. B2B SaaS]
**Company size:** [e.g. 45-person, Dublin-based]
**Challenge:** One precise sentence describing the problem before engagement
**Timeframe:** [e.g. 6 months]

### id="situation" — H2: The Situation
2–3 paragraphs. Self-contained. Explain what was happening and why it mattered.
Include a specific metric: "Organic traffic had declined 34% in 12 months."

### id="diagnosis" — H2: The Diagnosis
What was found during the audit/analysis. Specific. Structured as a list where possible.
Each finding should be a complete, quotable sentence.

### id="approach" — H2: The Approach
Step-by-step. Use an <ol> not prose paragraphs.
Each step: Action taken → Why → Tool or method used.
This is the section most likely to be cited by AI in "how to" responses.

### id="implementation" — H2: What Was Built / Changed
Specific deliverables. Not vague ("we improved the content") — precise ("we rewrote 
12 service pages using the extractable paragraph standard, added FAQPage schema to all 
of them, and created a glossary section with DefinedTermSet markup").

### id="outcome" — H2: The Outcome
Specific, measurable, time-bound.
"Within 90 days, the client appeared in 7 Google AI Overview citations for target queries."
Use a data table if multiple metrics.

### id="key-takeaways" — H2: What This Means for Similar Businesses
3–5 bullet points. Self-contained sentences. Written for Síobhán/Declan/Aoife — not for SEOs.
This is the Citable Summary Block.

### Schema applied: Article + HowTo (for the Approach section) + BreadcrumbList
```

---

### 2.7 Two-Audience Intent Architecture

The challenge: `/services/generative-engine-optimisation/` must simultaneously:

1. Rank for Irish local-intent queries: *"GEO consultant Ireland"*, *"generative engine optimisation Dublin"*
2. Attract global informational searchers: *"what is generative engine optimisation"*, *"how to optimise for AI search"*

These two audiences have different intent signals and different content needs. The architecture must serve both without diluting either.

| Element | Irish Local Intent | Global Informational Intent | Implementation |
|---|---|---|---|
| H1 | Contains "Ireland" or "Irish businesses" | Contains the full entity name | Combine: "Generative Engine Optimisation (GEO) for Irish Businesses" |
| Opening paragraph | References Irish market specifics | Defines the concept precisely | Define first (global), then qualify with Irish context (local) |
| FAQ section | Includes "Do Irish businesses need GEO?" | Includes "What is GEO?" and "How does GEO work?" | Both types in the same FAQ — use different `id` anchors |
| Schema `areaServed` | `Ireland` | Omit global — don't dilute | Local schema reinforces Irish signal; global informational signal comes from content |
| Internal links | Link to Irish case studies and Irish market insights | Link to glossary definitions and foundational explanations | Both link types on the same page, in different sections |
| CTA | "Working with Irish businesses…" | "If you're managing a B2B brand…" | Use the Irish-specific CTA — global visitors are not the primary conversion target |

**The order rule:** Always define globally, then contextualise locally. The definition block is universal. The Irish context section (`id="[topic]-ireland"`) is local. AI engines cite the definition. Irish buyers respond to the local context. Both get what they need.

---

## SECTION 3: Technical Schema Strategy

### 3.1 Schema Hierarchy by Page Type

| Page Type | Primary Schema | Secondary Schemas | Tertiary Schemas |
|---|---|---|---|
| Homepage | `Person` + `ProfessionalService` | `WebSite` + `SiteLinksSearchBox` | `BreadcrumbList` (home) |
| Service Page | `Service` | `FAQPage` + `BreadcrumbList` | `Speakable` |
| Case Study | `Article` | `HowTo` + `BreadcrumbList` | `Person` (author) |
| Insights/Blog Article | `Article` | `FAQPage` + `BreadcrumbList` + `Speakable` | `Person` (author) |
| About Page | `Person` (extended) | `ProfessionalService` | `BreadcrumbList` |
| Glossary Page | `DefinedTermSet` + `DefinedTerm` | `BreadcrumbList` | `FAQPage` (optional) |
| Contact / Work With Me | `ContactPage` | `ProfessionalService` | `BreadcrumbList` |

---

### 3.2 Full JSON-LD: Homepage

```json
<script type="application/ld+json">
[
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://cillianbc.com/#cillian-bc",
    "name": "Cillian BC",
    "jobTitle": "SEO & AI Search Consultant",
    "description": "Independent SEO, AEO, and GEO consultant based in Ireland, helping B2B businesses maintain organic visibility as search shifts to AI-generated answers.",
    "url": "https://cillianbc.com",
    "image": {
      "@type": "ImageObject",
      "url": "https://cillianbc.com/images/cillian-bc-seo-consultant.jpg",
      "width": 800,
      "height": 800
    },
    "sameAs": [
      "https://linkedin.com/in/cillianbc",
      "https://github.com/cillianbc",
      "https://x.com/cillianbc",
      "https://www.wikidata.org/wiki/Q[WIKIDATA-ID]",
      "https://www.crunchbase.com/person/cillian-bc"
    ],
    "knowsAbout": [
      "Search Engine Optimisation",
      "Answer Engine Optimisation",
      "Generative Engine Optimisation",
      "AI Search Visibility",
      "Knowledge Graph Optimisation",
      "Structured Data",
      "Content Engineering",
      "AI Workflows for B2B Marketing",
      "Technical SEO",
      "Irish Digital Marketing"
    ],
    "nationality": {
      "@type": "Country",
      "name": "Ireland"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IE"
    },
    "worksFor": {
      "@id": "https://cillianbc.com/#consultancy"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://cillianbc.com/#consultancy",
    "name": "Cillian BC — SEO & AI Search Consultancy",
    "url": "https://cillianbc.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cillianbc.com/images/cillianbc-logo.png"
    },
    "description": "Independent SEO, AEO, and GEO consultancy based in Ireland, specialising in AI search visibility, content engineering, and structured data for B2B organisations.",
    "founder": {
      "@id": "https://cillianbc.com/#cillian-bc"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Ireland"
      },
      {
        "@type": "Place",
        "name": "European Union"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@cillianbc.com",
      "availableLanguage": "English"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO & AI Search Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Generative Engine Optimisation",
            "url": "https://cillianbc.com/services/generative-engine-optimisation/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Answer Engine Optimisation",
            "url": "https://cillianbc.com/services/answer-engine-optimisation/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical SEO",
            "url": "https://cillianbc.com/services/technical-seo/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Engineering",
            "url": "https://cillianbc.com/services/content-engineering/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Workflows for B2B Marketing",
            "url": "https://cillianbc.com/services/ai-workflows/"
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://cillianbc.com/#website",
    "url": "https://cillianbc.com",
    "name": "Cillian BC — SEO & AI Search Consultant",
    "description": "SEO, AEO, GEO, and AI Workflow consulting for Irish B2B businesses.",
    "publisher": {
      "@id": "https://cillianbc.com/#cillian-bc"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://cillianbc.com/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }
]
</script>
```

---

### 3.3 Full JSON-LD: Service Page (GEO example)

```json
<script type="application/ld+json">
[
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://cillianbc.com/services/generative-engine-optimisation/#service",
    "name": "Generative Engine Optimisation (GEO)",
    "serviceType": "Generative Engine Optimisation",
    "description": "GEO consulting for Irish B2B businesses — helping organisations appear in AI-generated search results from Google AI Overviews, Perplexity, ChatGPT, and Gemini.",
    "provider": {
      "@id": "https://cillianbc.com/#consultancy"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Ireland"
    },
    "url": "https://cillianbc.com/services/generative-engine-optimisation/",
    "offers": {
      "@type": "Offer",
      "url": "https://cillianbc.com/work-with-me/",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "seller": {
        "@id": "https://cillianbc.com/#consultancy"
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Generative Engine Optimisation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generative Engine Optimisation (GEO) is the practice of structuring content, entities, and external signals so that AI-powered answer engines — including Google AI Overviews, Perplexity, and ChatGPT — retrieve, cite, and accurately represent a brand or individual when generating responses to user queries. GEO differs from traditional SEO in that the goal is AI citation, not page ranking."
        }
      },
      {
        "@type": "Question",
        "name": "Do Irish businesses need to worry about GEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Google AI Overviews are now live in Ireland and are appearing for an increasing proportion of commercial and informational queries. Irish businesses that do not appear in AI-generated results risk losing visibility to competitors who do — even if their traditional search rankings are strong."
        }
      },
      {
        "@type": "Question",
        "name": "How is GEO different from SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional SEO aims to rank a page in a list of search results. GEO aims to have content cited within an AI-generated answer — which often replaces that list of results entirely. GEO requires structured data, entity coherence, citable content formats, and external corroboration that traditional SEO does not always prioritise."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from GEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GEO results are not linear. Structural changes — implementing schema, improving content extractability, building entity signals — can produce AI citations within 8–12 weeks. Entity-level changes, such as building Wikidata presence and external co-citations, typically take 3–6 months to compound into reliable citation frequency."
        }
      },
      {
        "@type": "Question",
        "name": "What does a GEO engagement with Cillian BC include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A GEO engagement typically covers: an audit of current AI citation presence and gaps; structured data implementation across key pages; content reformatting to meet extractable paragraph standards; entity building (Wikidata, external co-citations, schema coherence); and a monitoring framework to track AI citation frequency over time."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cillianbc.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://cillianbc.com/services/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Generative Engine Optimisation",
        "item": "https://cillianbc.com/services/generative-engine-optimisation/"
      }
    ]
  }
]
</script>
```

---

### 3.4 Full JSON-LD: Case Study Page

```json
<script type="application/ld+json">
[
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://cillianbc.com/case-studies/saas-ai-search-visibility-recovery/#article",
    "headline": "How a Dublin SaaS Company Recovered AI Search Visibility After a Core Update",
    "description": "A case study on restoring AI Overview citation presence for a Dublin-based B2B SaaS company following a Google core algorithm update — covering diagnosis, structured data implementation, and content restructuring.",
    "image": {
      "@type": "ImageObject",
      "url": "https://cillianbc.com/images/case-studies/saas-ai-visibility-og.jpg",
      "width": 1200,
      "height": 630
    },
    "author": {
      "@id": "https://cillianbc.com/#cillian-bc"
    },
    "publisher": {
      "@id": "https://cillianbc.com/#consultancy"
    },
    "datePublished": "2026-02-10",
    "dateModified": "2026-03-01",
    "url": "https://cillianbc.com/case-studies/saas-ai-search-visibility-recovery/",
    "about": [
      {
        "@type": "DefinedTerm",
        "name": "Generative Engine Optimisation",
        "url": "https://cillianbc.com/glossary/geo/"
      },
      {
        "@type": "DefinedTerm",
        "name": "Google AI Overviews",
        "url": "https://cillianbc.com/glossary/google-ai-overviews/"
      }
    ],
    "articleSection": "Case Studies",
    "wordCount": 1800
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Restore AI Search Visibility After a Core Update",
    "description": "The step-by-step process used to diagnose and recover AI Overview citation presence for a B2B SaaS company.",
    "totalTime": "P3M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Audit current AI citation presence",
        "text": "Use Perplexity, ChatGPT Browse, and Google AI Overviews to manually map which queries trigger citations and which competitors are currently cited instead."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Identify entity coherence gaps",
        "text": "Cross-reference schema markup, external profiles, and on-page entity naming to find inconsistencies that prevent Google from confidently attributing content to the correct entity."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Restructure key pages to extractable format",
        "text": "Rewrite service and product pages following the Extractable Paragraph Standard — self-contained paragraphs, definition blocks, FAQ sections with FAQPage schema, and citable summary blocks."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Implement and validate structured data",
        "text": "Deploy corrected JSON-LD across all key pages. Validate using Google's Rich Results Test and Schema Markup Validator. Resolve all errors and warnings."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Build external corroboration",
        "text": "Secure guest articles and expert quotes in relevant publications using consistent entity language. Update LinkedIn, Wikidata, and Crunchbase profiles to match on-site entity data."
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "name": "Monitor and iterate",
        "text": "Track AI citation frequency weekly using Perplexity and ChatGPT Browse queries. Monitor Google Search Console for impression changes on target queries. Adjust content based on citation gaps."
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cillianbc.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Case Studies",
        "item": "https://cillianbc.com/case-studies/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Dublin SaaS AI Search Visibility Recovery",
        "item": "https://cillianbc.com/case-studies/saas-ai-search-visibility-recovery/"
      }
    ]
  }
]
</script>
```

---

### 3.5 Full JSON-LD: Insights Article

```json
<script type="application/ld+json">
[
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://cillianbc.com/insights/what-is-aeo-answer-engine-optimisation/#article",
    "headline": "What Is Answer Engine Optimisation? A Plain-English Guide for Irish B2B Businesses",
    "description": "A precise explanation of Answer Engine Optimisation (AEO) — what it is, how it differs from SEO, and what Irish B2B marketing teams need to do about it.",
    "image": {
      "@type": "ImageObject",
      "url": "https://cillianbc.com/images/insights/what-is-aeo-og.jpg",
      "width": 1200,
      "height": 630
    },
    "author": {
      "@id": "https://cillianbc.com/#cillian-bc"
    },
    "publisher": {
      "@id": "https://cillianbc.com/#consultancy"
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-03-20",
    "url": "https://cillianbc.com/insights/what-is-aeo-answer-engine-optimisation/",
    "about": {
      "@type": "DefinedTerm",
      "name": "Answer Engine Optimisation",
      "url": "https://cillianbc.com/glossary/aeo/"
    },
    "keywords": "Answer Engine Optimisation, AEO, AI search, featured snippets Ireland, B2B SEO Ireland",
    "articleSection": "Insights",
    "wordCount": 2200,
    "inLanguage": "en-IE"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Answer Engine Optimisation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Answer Engine Optimisation (AEO) is the practice of structuring content so that search engines and AI assistants can extract precise, trustworthy answers to specific questions and attribute those answers to the source. The goal of AEO is not to rank a page but to become the cited source within an AI-generated or featured-snippet answer."
        }
      },
      {
        "@type": "Question",
        "name": "How is AEO different from SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional SEO focuses on ranking pages in search engine results. AEO focuses on being extracted and cited as an answer within AI-generated responses, featured snippets, voice search answers, and knowledge panels. AEO requires content to be structured for machine extraction, not just written for human readers."
        }
      },
      {
        "@type": "Question",
        "name": "Do Irish businesses need AEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. As Google AI Overviews, Perplexity, and ChatGPT become primary search interfaces for Irish business buyers, organisations that are not structured for AI extraction risk disappearing from the buyer's research journey entirely — even if they still rank on page one of traditional search results."
        }
      },
      {
        "@type": "Question",
        "name": "What is the first step in implementing AEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The first step is an AEO audit: identify which queries relevant to your business trigger AI-generated answers, determine whether your content is currently cited in those answers, and analyse the structural differences between your content and the content that is being cited."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Speakable",
    "cssSelector": [".definition-block", ".key-takeaways"]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cillianbc.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Insights",
        "item": "https://cillianbc.com/insights/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "What Is Answer Engine Optimisation?",
        "item": "https://cillianbc.com/insights/what-is-aeo-answer-engine-optimisation/"
      }
    ]
  }
]
</script>
```

---

### 3.6 Full JSON-LD: About Page (Extended Person)

```json
<script type="application/ld+json">
[
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://cillianbc.com/#cillian-bc",
    "name": "Cillian BC",
    "givenName": "Cillian",
    "familyName": "BC",
    "jobTitle": "SEO & AI Search Consultant",
    "description": "Cillian BC is an independent SEO, AEO, and GEO consultant based in Ireland. He helps Irish B2B businesses maintain and grow organic visibility as search transitions from link-based ranking to AI-generated answers. He works directly with marketing leads, digital directors, and managing directors — not through account managers or junior teams.",
    "url": "https://cillianbc.com",
    "image": {
      "@type": "ImageObject",
      "url": "https://cillianbc.com/images/cillian-bc-seo-consultant.jpg",
      "width": 800,
      "height": 800,
      "caption": "Cillian BC, SEO and AI Search Consultant, Ireland"
    },
    "sameAs": [
      "https://linkedin.com/in/cillianbc",
      "https://github.com/cillianbc",
      "https://x.com/cillianbc",
      "https://www.wikidata.org/wiki/Q[WIKIDATA-ID]",
      "https://www.crunchbase.com/person/cillian-bc"
    ],
    "knowsAbout": [
      {
        "@type": "DefinedTerm",
        "name": "Generative Engine Optimisation",
        "url": "https://cillianbc.com/glossary/geo/"
      },
      {
        "@type": "DefinedTerm",
        "name": "Answer Engine Optimisation",
        "url": "https://cillianbc.com/glossary/aeo/"
      },
      {
        "@type": "DefinedTerm",
        "name": "Technical SEO",
        "url": "https://cillianbc.com/services/technical-seo/"
      },
      {
        "@type": "DefinedTerm",
        "name": "Knowledge Graph Optimisation",
        "url": "https://cillianbc.com/glossary/knowledge-graph/"
      },
      {
        "@type": "DefinedTerm",
        "name": "Structured Data and Schema Markup",
        "url": "https://cillianbc.com/glossary/structured-data/"
      },
      {
        "@type": "DefinedTerm",
        "name": "Content Engineering",
        "url": "https://cillianbc.com/services/content-engineering/"
      },
      {
        "@type": "DefinedTerm",
        "name": "AI Workflows for B2B Marketing",
        "url": "https://cillianbc.com/services/ai-workflows/"
      },
      {
        "@type": "DefinedTerm",
        "name": "Irish Digital Marketing",
        "url": "https://cillianbc.com/insights/irish-digital-marketing-landscape/"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Google Analytics Certification",
        "credentialCategory": "Professional Certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Google"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Google Search Console Certification",
        "credentialCategory": "Professional Certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Google"
        }
      }
    ],
    "nationality": {
      "@type": "Country",
      "name": "Ireland"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IE",
      "addressLocality": "Dublin"
    },
    "worksFor": {
      "@id": "https://cillianbc.com/#consultancy"
    },
    "owns": {
      "@id": "https://cillianbc.com/#consultancy"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cillianbc.com/about/"
    }
  }
]
</script>
```

---

### 3.7 Speakable Schema: Where and Why

Speakable schema marks the sections of a page that are most suitable for reading aloud by voice assistants or for verbatim extraction by AI engines. It is underused by most sites and therefore a differentiator.

| Page Type | Speakable Target Sections | CSS Selectors | Rationale |
|---|---|---|---|
| Insights Articles | Definition block + Key Takeaways | `.definition-block, .key-takeaways` | These sections are written to be self-contained — ideal for voice extraction |
| Service Pages | Definition block + FAQ answers | `.definition-block, .faq-answer` | FAQ answers are the most likely AI Overview citation targets |
| Glossary Pages | The term definition | `.glossary-definition` | The entire page exists to define a term — mark it all as speakable |
| About Page | Bio description | `.about-bio` | Voice queries like "who is Cillian BC" should return the bio text |
| Case Studies | Outcome section + Key Takeaways | `#outcome, .key-takeaways` | Results are the most citable part of a case study |

**Implementation note:** Speakable can use `cssSelector` (class/ID based) or `xpath`. Use `cssSelector` — it is more maintainable and less fragile. Every page type must have consistent class names to make Speakable targeting reliable across the site.

---

### 3.8 Schema Validation Checklist: 10 Most Common Errors

| # | Error | Why It Matters | How to Prevent |
|---|---|---|---|
| 1 | Missing `@id` on primary entities | Without `@id`, Google cannot connect the same entity across pages | Assign stable `@id` URIs to Person and ProfessionalService; use them on every page |
| 2 | Inconsistent `name` field across pages | Entity name variation ("Cillian BC" vs "Cillian B.C." vs "CillianBC") prevents Knowledge Graph consolidation | Define canonical name string once; enforce it in a style guide |
| 3 | `sameAs` pointing to dead or redirected URLs | Google dereferences `sameAs` links; a redirect or 404 breaks the entity graph signal | Audit `sameAs` URLs quarterly; update schema when profiles change URL |
| 4 | FAQPage schema not matching visible content | Google penalises schema that describes content not present on the page | Every `Question`/`Answer` pair in schema must appear verbatim in the HTML |
| 5 | `author` field missing or pointing to the organisation, not the person | E-E-A-T signals require a named human author; organisation-only authorship reduces trust weight | Always set `author` to the `Person` `@id`; publisher to the `ProfessionalService` `@id` |
| 6 | `datePublished` and `dateModified` not updated | Stale dates reduce freshness signals; LLMs deprioritise outdated content | Automate date update on every content edit; never leave `dateModified` as the publish date |
| 7 | Image URL in schema returning 404 or non-indexable response | Google's image indexer must be able to crawl schema image URLs | Verify all image URLs in schema return 200; ensure robots.txt allows image crawling |
| 8 | `BreadcrumbList` not matching visible breadcrumb navigation | Schema must match visible content; mismatches trigger rich result ineligibility | Generate BreadcrumbList dynamically from the same data that drives the visible breadcrumb |
| 9 | Multiple `FAQPage` schemas on the same page | Only one FAQPage entity per page; multiple blocks cause parser conflicts | Consolidate all FAQ items into one `FAQPage` block regardless of where they appear on the page |
| 10 | Speakable CSS selectors pointing to non-existent classes | If the selector matches nothing, the schema is ignored | Test Speakable selectors with `document.querySelectorAll()` before deploying |

---

### 3.9 Entity Consistency Rules

These strings must be used identically everywhere — in schema, in content, in anchor text, in external profiles. Any variation is treated as a different entity.

| Entity | Canonical String | Forbidden Variants |
|---|---|---|
| Person name | `Cillian BC` | `Cillian B.C.`, `CillianBC`, `Cillian` (alone), any full legal name variant unless also listed as `alternateName` |
| Person `@id` | `https://cillianbc.com/#cillian-bc` | Any other URI for the same person |
| Organisation `@id` | `https://cillianbc.com/#consultancy` | Any other URI for the same entity |
| GEO term | `Generative Engine Optimisation` | `Generative AI SEO`, `GenAI SEO`, `Gen Engine Optimisation` — all permitted as synonyms only after the canonical term is established |
| AEO term | `Answer Engine Optimisation` | `Answer Optimisation`, `AEO SEO` |
| Site URL | `https://cillianbc.com` | `http://cillianbc.com`, `https://www.cillianbc.com` — these must redirect to the canonical form; do not use them in schema |
| Author field in schema | `{"@id": "https://cillianbc.com/#cillian-bc"}` | Any inline Person object without an `@id` |
| Publisher field in schema | `{"@id": "https://cillianbc.com/#consultancy"}` | Any inline Organization object without an `@id` |

---

## SECTION 4: Intent-Driven Keyword Clusters

### Cluster 1: AI Search Visibility for Irish Businesses

**Strategic rationale:** This cluster targets the primary anxiety of Síobhán and Aoife — they have invested in SEO and are now watching AI erode their visibility without understanding why. This is not a niche cluster; it is the entry point for every prospect who feels the problem but cannot name the solution. The Irish modifier is essential because it signals local expertise without limiting reach.

**Seed head term:** `AI search visibility Ireland`

**Supporting long-tail queries:**

| Query | Intent | Notes |
|---|---|---|
| What is AI search visibility | Informational | Top-of-funnel; definitional; likely AI Overview trigger |
| How does Google AI Overviews affect Irish businesses | Informational | Irish-specific; directly addresses Síobhán's situation |
| Why is my website not showing in AI search results | Informational | Problem-aware; high conversion intent despite informational classification |
| How to appear in Google AI Overviews Ireland | Informational/Commercial | Transitional intent; bridges awareness to action |
| AI search visibility consultant Ireland | Commercial | Direct commercial intent; low volume, high value |
| How to get cited in Perplexity AI | Informational | Growing query type; informational but conversion-relevant |
| Does AI search replace Google | Informational | Broad; captures Declan's "do I need to care?" moment |
| Google AI search Ireland 2026 | Informational | Trending; captures current-event searchers |
| B2B AI search strategy Ireland | Commercial | Directly targets Síobhán and Aoife personas |
| How to optimise for ChatGPT search | Informational | Growing as ChatGPT Browse becomes mainstream |
| AI traffic drop website Ireland | Informational | Problem-symptom query; very high commercial intent |
| What is GEO in digital marketing | Informational | Definitional; routes to glossary and then to service |

**Irish market angle:** Irish B2B buyers have been slower to adopt AI search tools than their US counterparts, meaning the awareness gap is wider. Content that explains the Irish-specific impact (Google AI Overviews rolling out to IE users, Irish content appearing in LLM training data) is genuinely new information for this audience, not repetition of what UK/US publications have already covered. This gap is an opportunity.

**Recommended content format:** Long-form pillar page at `/services/ai-search-visibility/` (1,800–2,500 words) with a companion insights article at `/insights/google-ai-overviews-ireland/` (800–1,200 words, more current, updated quarterly).

**Internal linking strategy:**
- Receives links from: GEO service page, AEO service page, homepage
- Links to: GEO glossary, AEO service page, case studies, Cluster 4 (SEO re-evaluation)

**AEO/GEO potential:** High. Queries like "why is my website not in AI search" and "how to appear in Google AI Overviews" already trigger AI Overviews in US/UK. Ireland will follow within 6–12 months of those patterns establishing. Publishing now means establishing citation presence before the wave arrives.

**Persona mapping:** Primary: Síobhán (Control — she needs to understand and manage this). Secondary: Aoife (Legitimacy — she needs to report on it to European HQ).

---

### Cluster 2: Answer Engine Optimisation — Definitional to Commercial

**Strategic rationale:** AEO is a term that is gaining currency but is not yet widely understood in the Irish market. This cluster positions the site as the Irish-market authority on the concept — owning the definition, controlling the narrative, and converting definitional searchers into commercial prospects. The cluster must work at both ends: the person Googling "what is AEO" and the CMO Googling "AEO consultant Dublin."

**Seed head term:** `Answer Engine Optimisation Ireland`

**Supporting long-tail queries:**

| Query | Intent | Notes |
|---|---|---|
| What is Answer Engine Optimisation | Informational | Primary definitional query; must be answered on glossary + service page |
| AEO vs SEO difference | Informational | Comparison query; very high AI Overview probability |
| How does Answer Engine Optimisation work | Informational | Mechanistic; bridges awareness to consideration |
| Answer Engine Optimisation for B2B | Informational/Commercial | Sector-specific; Síobhán and Aoife directly addressed |
| AEO consultant Ireland | Commercial | Transactional; low volume, very high value |
| How to rank in featured snippets Ireland | Informational | Featured snippets are the traditional AEO touchstone; bridges old and new |
| How do AI assistants choose what to say | Informational | Curiosity-driven; attracts marketing managers doing self-education |
| How to write content for AI answers | Informational/Commercial | Content engineering crossover; bridges Clusters 2 and 3 |
| What queries trigger AI Overviews | Informational | Tactical; attracts hands-on practitioners |
| AEO audit Ireland | Commercial | Transactional service query |
| How to structure FAQ for AI search | Informational | Specific tactical query; citable answer exists |
| Is featured snippet the same as AEO | Informational | Clarification query; useful disambiguation content |

**Irish market angle:** The Irish marketing community is familiar with SEO and increasingly familiar with AI, but the specific vocabulary of AEO is being imported from US/UK sources. An Irish consultant who publishes clear, grounded definitions before the term goes mainstream will be the go-to reference when Irish marketers search for it. This is a vocabulary-ownership play.

**Recommended content format:** Two-level approach:
1. Glossary entry at `/glossary/aeo/` — the canonical definition (400–600 words, schema-rich)
2. Service page at `/services/answer-engine-optimisation/` — commercial and comprehensive (1,500–2,000 words)
3. Insights article: `/insights/aeo-vs-seo-explained/` — comparison format (800–1,000 words)

**Internal linking strategy:**
- Receives links from: Homepage, GEO service page, Cluster 4 (SEO re-evaluation), Technical SEO service page
- Links to: GEO service page, Cluster 3 (content engineering), structured data glossary

**AEO/GEO potential:** Very high. "What is AEO" is exactly the kind of definitional query that triggers AI Overviews. If the site's definition is the most structured, most cited, and most entity-coherent definition of AEO in Irish-context search, it will be cited.

**Persona mapping:** Primary: Síobhán (she is actively researching this; it affects her quarterly targets). Secondary: Aoife (she needs to explain it to European stakeholders who are asking about AI search).

---

### Cluster 3: Content Engineering and AI Workflows for B2B Marketing Teams

**Strategic rationale:** This cluster is the practical, hands-on counterpart to the strategic positioning of Clusters 1 and 2. It targets marketing teams who have budget, have bought into AI adoption in principle, but do not know how to implement it systematically. This is Síobhán's daily reality. It is also the cluster most likely to generate referrals — because when Síobhán implements something that works, she tells other marketing leads.

**Seed head term:** `AI content workflows B2B Ireland`

**Supporting long-tail queries:**

| Query | Intent | Notes |
|---|---|---|
| How to build an AI content workflow for B2B | Informational | How-to; high case study citation potential |
| Content engineering for SEO | Informational/Commercial | Technical; attracts digitally literate buyers |
| AI writing tools for B2B marketing teams | Informational | Tool evaluation; informational but pre-commercial |
| How to use AI for content at scale without losing quality | Informational | Specific concern; addresses Síobhán's quality-control anxiety |
| Content engineering consultant Ireland | Commercial | Direct commercial intent |
| How to structure content for AI search extraction | Informational | Tactical; bridges content engineering and AEO |
| B2B content strategy AI 2026 | Informational | Forward-looking; good for thought leadership positioning |
| AI workflow automation marketing Ireland | Commercial | Broader automation angle; attracts Declan too |
| How to train a team to use AI for content | Informational | Practical implementation; workshop/training crossover |
| Content brief template for AI tools | Informational | Tactical asset; good lead magnet crossover |
| Semantic content structure SEO | Informational | Technical; attracts the specialist buyer |
| How to measure AI content ROI | Informational | Accountability-focused; Aoife's concern |

**Irish market angle:** Irish marketing teams are frequently small (2–4 people) and resource-constrained relative to the scale of content production modern SEO demands. AI workflows are particularly valuable in the Irish SME and mid-market context — not as a cost-cutting tool but as a force multiplier. Content that addresses this specific resource dynamic (rather than assuming large US-scale marketing departments) will resonate distinctly with Irish buyers.

**Recommended content format:** The pillar page at `/services/content-engineering/` should focus on service scope. The cluster content should be practical:
- `/insights/how-to-build-ai-content-workflow/` — step-by-step guide (HowTo schema)
- `/insights/content-engineering-for-seo/` — conceptual explainer
- A downloadable content brief template (lead magnet; drives email list)

**Internal linking strategy:**
- Receives links from: AI Workflows service page, Cluster 2 (AEO), Cluster 4 (SEO re-evaluation)
- Links to: AI Workflows service page, Case studies section, Cluster 1 (AI search visibility)

**AEO/GEO potential:** Medium-high. How-to queries ("how to build an AI content workflow") have strong AI Overview potential. The case study format (with HowTo schema) is the highest-value asset in this cluster for AI citation.

**Persona mapping:** Primary: Síobhán (this is her day job). Secondary: Aoife (she manages the team doing this work and needs to justify the investment to HQ).

---

### Cluster 4: "Is My SEO Still Working?" — The Re-Evaluation Cluster

**Strategic rationale:** This is the emotional entry point for Declan. He has invested in SEO for years, his agency sends him reports showing green numbers, but he is reading in the Business Post about AI changing everything and he does not know if he is being left behind. This cluster captures the moment of doubt and converts it into a discovery conversation. It is also the cluster most likely to generate organic referrals, because this is the question every business leader is quietly asking.

**Seed head term:** `Is SEO still worth it Ireland`

**Supporting long-tail queries:**

| Query | Intent | Notes |
|---|---|---|
| Is SEO dead 2026 | Informational | High-volume perennial; must be answered definitively and without sensationalism |
| Does SEO still work with AI search | Informational | The core re-evaluation query |
| What is replacing SEO | Informational | Transitional mindset query; answer is GEO + AEO |
| Should I still invest in SEO Ireland | Informational/Commercial | Direct commercial intent dressed as informational |
| How has SEO changed in 2026 | Informational | Timeliness signal; update annually |
| SEO vs AI search which is more important | Informational | Comparison; frequently triggers AI Overviews |
| Has Google AI reduced organic traffic | Informational | Problem-symptom; Declan has seen his traffic reports |
| What should I do instead of SEO | Informational | High confusion; gentle education required |
| How to future-proof digital marketing Ireland | Informational/Commercial | Strategic framing; Declan's language |
| SEO audit AI readiness Ireland | Commercial | Specific transactional service query |
| My SEO rankings are fine but traffic is down | Informational | The AI search gap symptom; directly relevant to every client |
| Zero-click search Ireland impact | Informational | Technical concept; bridges to AI visibility discussion |

**Irish market angle:** Irish business leaders are conservative investors. Declan in Kerry has been burned by digital agencies promising results that never materialised. When he reads that "SEO is dead," he does not know whether to panic or ignore it. Content that takes this question seriously — not dismissively ("SEO is not dead!") and not alarmistly — is precisely the voice this brand must take. Honest, grounded, with Irish examples. The phrase "your agency might not be telling you this" is not manipulative; it is accurate, and it is what Declan needs to hear from someone without an agency's commercial interest.

**Recommended content format:** 
- Pillar insights article: `/insights/is-seo-still-working-in-2026/` — 1,800–2,200 words, structured as a genuine assessment (not a sales pitch)
- Supporting: `/insights/zero-click-search-ireland/`, `/insights/ai-traffic-drop-why/`
- This cluster should link directly to the Work With Me page — the conversion intent is highest here

**Internal linking strategy:**
- Receives links from: Homepage, About page, all service pages
- Links to: GEO service page, AEO service page, Cluster 1 (AI search visibility), SEO Audit service page

**AEO/GEO potential:** Very high. "Is SEO dead" and "does SEO still work" are among the highest-volume queries that currently trigger AI Overviews in the marketing category. A structured, balanced, entity-attributed answer to this question on cillianbc.com is one of the highest-leverage content investments available.

**Persona mapping:** Primary: Declan (Safety — he needs to know if his current approach is still safe). Secondary: Síobhán (she is already re-evaluating; this content validates her instinct to act).

---

## SECTION 5: Content Engineering Handoff

### 5.1 Semantic HTML Requirements

Every content type has a required HTML structure. These are not suggestions. A page that deviates from this structure fails the AI Readability Checklist and must be revised before publishing.

#### Article / Insights Post

```html
<article itemscope itemtype="https://schema.org/Article" 
         aria-label="[Article headline]">
  
  <header class="article-header">
    <nav aria-label="Breadcrumb">
      <!-- BreadcrumbList navigation -->
    </nav>
    <h1 itemprop="headline">[Article headline]</h1>
    <div class="article-meta" itemprop="author" itemscope 
         itemtype="https://schema.org/Person">
      <span itemprop="name">Cillian BC</span>
      <time itemprop="datePublished" datetime="YYYY-MM-DD">[Date]</time>
      <time itemprop="dateModified" datetime="YYYY-MM-DD">Updated [Date]</time>
    </div>
  </header>

  <section class="definition-block" id="definition" aria-label="Definition">
    <p><dfn>[Term being defined]</dfn> — [definition text]</p>
  </section>

  <section class="page-summary" id="summary-intro" aria-label="Article summary">
    <ul>
      <li>[Standalone summary point 1]</li>
      <li>[Standalone summary point 2]</li>
      <!-- 3–5 items -->
    </ul>
  </section>

  <main class="article-body" itemprop="articleBody">
    <!-- H2 sections with id attributes -->
  </main>

  <section class="faq-section" id="faq" aria-label="Frequently asked questions">
    <!-- FAQ items — see 5.6 -->
  </section>

  <section class="key-takeaways" id="key-takeaways" aria-label="Key takeaways">
    <!-- Citable summary block — see 5.7 -->
  </section>

</article>
```

#### Service Page

```html
<main itemscope itemtype="https://schema.org/Service">
  <nav aria-label="Breadcrumb"><!-- breadcrumb --></nav>
  
  <h1 itemprop="name">[Service Name]</h1>
  
  <section class="definition-block" id="definition">
    <dfn>[Service term]</dfn> — [definition]
  </section>

  <section id="service-scope" aria-label="What this service includes">
    <h2>What this service includes</h2>
    <ul>
      <li>[Deliverable 1]</li>
    </ul>
  </section>

  <section id="[service]-ireland" aria-label="[Service] for Irish businesses">
    <h2>[Service] for Irish Businesses</h2>
    <!-- Irish-specific context -->
  </section>

  <section id="proof" aria-label="Proof of approach">
    <!-- Mini case study -->
  </section>

  <section class="faq-section" id="faq">
    <!-- FAQ -->
  </section>

  <section class="key-takeaways" id="key-takeaways">
    <!-- Citable summary -->
  </section>
</main>
```

#### Case Study Page

```html
<article itemscope itemtype="https://schema.org/Article" 
         class="case-study" aria-label="Case study">
  <header>
    <nav aria-label="Breadcrumb"><!-- breadcrumb --></nav>
    <h1 itemprop="headline">[Case study headline]</h1>
    <div class="case-study-meta">
      <dl>
        <dt>Sector</dt><dd>[Sector]</dd>
        <dt>Timeframe</dt><dd>[Duration]</dd>
        <dt>Challenge</dt><dd>[One-sentence challenge]</dd>
      </dl>
    </div>
  </header>
  
  <section id="situation"><h2>The Situation</h2></section>
  <section id="diagnosis"><h2>The Diagnosis</h2></section>
  <section id="approach"><h2>The Approach</h2></section>
  <section id="implementation"><h2>What Was Built</h2></section>
  <section id="outcome"><h2>The Outcome</h2></section>
  <section class="key-takeaways" id="key-takeaways"><h2>What This Means</h2></section>
</article>
```

---

### 5.2 Fragment Identifier Protocol

AI engines and readers can cite `https://cillianbc.com/services/geo/#what-is-geo` directly. Fragment IDs must follow these rules without exception.

| Rule | Correct | Incorrect |
|---|---|---|
| Use hyphens, not underscores | `id="what-is-geo"` | `id="what_is_geo"` |
| Use full words, not abbreviations (except established acronyms) | `id="answer-engine-optimisation"` | `id="aeo-section"` |
| Match the H2 text semantically | H2: "What Is GEO?" → `id="what-is-geo"` | `id="section-2"`, `id="content-block-4"` |
| Keep IDs stable — never change a published fragment ID | If a section is renamed, add a redirect for the old ID | Do not silently break existing citation links |
| Use consistent IDs across similar page types | Every service page has `id="definition"`, `id="faq"`, `id="key-takeaways"` | Ad hoc, unique IDs on every page |
| Prefix topic-specific IDs with the entity name | `id="geo-for-irish-businesses"` | `id="irish-businesses-section"` |

**Mandatory fragment IDs (present on every relevant page type):**

```
#definition          — The definition block (service pages, glossary, insights)
#summary-intro       — Opening summary (all pages)
#faq                 — FAQ section (service pages, insights)
#key-takeaways       — Closing citable summary (all pages)
#[topic]-ireland     — Irish market context section (service pages)
#situation           — Case study situation (case studies)
#approach            — Case study approach (case studies)
#outcome             — Case study outcomes (case studies)
```

---

### 5.3 Heading Hierarchy Rules

The heading structure is both a semantic signal and a navigation aid for LLMs parsing document structure.

**Rules:**

1. Every page has exactly one `<h1>`. The H1 contains the primary entity name and must match the `headline` field in schema.
2. `<h2>` is used for major sections only — the sections that get their own fragment `id`.
3. `<h3>` is used for subsections within an H2 section — for example, individual FAQ questions, or sub-steps within an approach section.
4. `<h4>` is permitted for labelling specific items within a complex list. Use sparingly.
5. `<h5>` and `<h6>` are forbidden. If a fifth level of heading is needed, the content structure is wrong and must be redesigned.
6. Headings are never used purely for visual styling. If a piece of text needs to be large and bold but is not a section heading, use a `<p>` with a class.

**Correct usage:**

```html
<h1>Generative Engine Optimisation (GEO) for Irish Businesses</h1>

<h2 id="what-is-geo">What Is Generative Engine Optimisation?</h2>
  <p>...</p>

<h2 id="geo-ireland">GEO for Irish Businesses</h2>
  <p>...</p>
  <h3>Why the Irish market is behind — and what that means for early movers</h3>
  <p>...</p>

<h2 id="faq">Frequently Asked Questions About GEO</h2>
  <h3>What is the difference between GEO and SEO?</h3>
  <p>...</p>
```

**Incorrect usage:**

```html
<h1>Welcome to Our GEO Services Page</h1>  <!-- Vague; no entity -->
<h2>Overview</h2>                           <!-- Not a searchable section -->
<h3>Introduction</h3>                       <!-- Redundant; use prose -->
<h2>Other Things We Do</h2>                <!-- Not entity-named -->
```

---

### 5.4 The Extractable Paragraph Standard

An extractable paragraph is one that an AI engine can lift verbatim from the page and use as a standalone answer without losing meaning.

**Rules:**

1. **One idea per paragraph.** A paragraph that covers two concepts cannot be cleanly extracted for either concept.
2. **The first sentence must be a complete, standalone statement.** AI engines frequently extract only the first sentence of a paragraph.
3. **Never open a paragraph with a pronoun, a relative clause, or "This."** "This is important because..." requires prior context. "Structured data is important because..." does not.
4. **Never open a paragraph with "However," "Moreover," "Furthermore," or any connector that requires prior context.**
5. **Maximum paragraph length: 4 sentences for body content, 2 sentences for definition blocks and summary blocks.**
6. **Avoid nested clauses in sentences that carry key claims.** The claim must be in the main clause, not buried in a subordinate.
7. **Test: cover the rest of the page. Can this paragraph be understood alone?** If no — rewrite.

**Correct extractable paragraph:**

> Generative Engine Optimisation (GEO) is the practice of structuring content so that AI-powered answer engines retrieve and cite it when generating responses. It differs from traditional SEO in that the goal is AI citation, not search ranking. Businesses that invest in GEO now will have a structural advantage as AI search becomes the dominant discovery channel.

**Incorrect (not extractable):**

> This approach has become increasingly important in recent years. It differs from what we discussed above in several key ways, particularly when it comes to how search engines handle queries. Companies that do this well tend to see better results over time.

---

### 5.5 Table Structure Requirements

Tables must be used when comparing multiple items across consistent attributes. They must never be used for visual layout.

**When to use tables:**

- Comparing options (GEO vs SEO vs AEO across multiple criteria)
- Listing schema fields with values and explanations
- Keyword clusters with intent classifications
- Content types with corresponding signals and methods

**Required table structure:**

```html
<figure>
  <figcaption id="table-[slug]">
    [Descriptive caption — what this table shows and why it matters]
  </figcaption>
  <table aria-labelledby="table-[slug]">
    <thead>
      <tr>
        <th scope="col">[Column 1 header]</th>
        <th scope="col">[Column 2 header]</th>
        <th scope="col">[Column 3 header]</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">[Row label]</th>
        <td>[Value]</td>
        <td>[Value]</td>
      </tr>
    </tbody>
  </table>
</figure>
```

**Rules:**

- Every table has a `<caption>` or an `aria-labelledby` pointing to a visible `<figcaption>`
- Every column header uses `scope="col"`
- Every row header (first column of a comparison table) uses `scope="row"`
- Tables are never used for more than 7 rows without pagination or a note explaining the full dataset is available elsewhere
- Mobile behaviour: tables wider than the viewport must scroll horizontally with `overflow-x: auto` — never use horizontal scrolling as a reason to simplify table content

---

### 5.6 FAQ Formatting Standard

FAQs are the single highest-value structural element for AI citation. They must be implemented precisely.

**HTML pattern:**

```html
<section class="faq-section" id="faq" 
         aria-label="Frequently asked questions about [topic]">
  <h2>Frequently Asked Questions About [Topic]</h2>

  <div class="faq-item" id="faq-what-is-[topic]">
    <h3 class="faq-question">What is [topic]?</h3>
    <div class="faq-answer">
      <p>[Answer — self-contained, extractable, maximum 3 sentences]</p>
    </div>
  </div>

  <div class="faq-item" id="faq-[topic]-ireland">
    <h3 class="faq-question">Do Irish businesses need [topic]?</h3>
    <div class="faq-answer">
      <p>[Answer]</p>
    </div>
  </div>

  <!-- Minimum 5 items, maximum 10 -->
</section>
```

**Rules:**

1. FAQ questions must match real search queries — use Google Autocomplete, People Also Ask, and AlsoAsked.com
2. Every FAQ answer must be self-contained — a reader arriving only at the answer must understand it without reading the surrounding page
3. FAQ answers must be 1–3 sentences maximum — longer answers are paragraph content, not FAQ answers
4. The FAQ section schema (`FAQPage` JSON-LD) must contain identical question/answer text as the visible HTML — no paraphrasing
5. Questions must be phrased as real user questions, not as marketing statements ("How does Cillian BC help with GEO?" is acceptable; "Why Cillian BC is the best GEO consultant" is not)
6. Each FAQ item has its own `id` attribute so it can be cited directly (e.g. `#faq-what-is-geo`)

---

### 5.7 The Citable Summary Block

Every article and service page must end with a Citable Summary Block. This is the section AI engines use as a "bottom line" when summarising the page. It is also the Speakable target section.

**HTML pattern:**

```html
<section class="key-takeaways" id="key-takeaways" 
         aria-label="Key takeaways from this page">
  <h2>Key Takeaways</h2>
  <ul>
    <li>[Complete sentence. Subject + verb + object. No opener like "Remember that" or "It is important to note."]</li>
    <li>[Complete sentence.]</li>
    <li>[Complete sentence.]</li>
    <!-- 3–5 items -->
  </ul>
</section>
```

**Copy rules:**

1. Every bullet is a complete, standalone sentence — no fragments, no ellipsis
2. No bullet may start with "Remember," "Note," "Keep in mind," "It is worth noting," or any hedging opener
3. Every bullet must be true independently of every other bullet — they are not a sequence
4. At least one bullet must reference the Irish market context or the Irish reader specifically
5. The final bullet should connect to the next step — what the reader should do with this information (without being a CTA)
6. Maximum 5 bullets. If there are more than 5 key takeaways, the content has too many ideas and must be split

**Example:**

```html
<section class="key-takeaways" id="key-takeaways" 
         aria-label="Key takeaways">
  <h2>Key Takeaways</h2>
  <ul>
    <li>Generative Engine Optimisation (GEO) is now a distinct discipline from traditional SEO, 
        requiring content to be structured for AI extraction, not just for human reading.</li>
    <li>Google AI Overviews are active in Ireland and are changing which businesses appear at 
        the top of search results for commercial queries.</li>
    <li>The businesses most likely to be cited in AI answers are those with consistent entity 
        signals, structured data, and content formatted to the extractable paragraph standard.</li>
    <li>Irish B2B companies have a window of advantage — GEO adoption in Ireland lags 
        12–18 months behind the US, meaning early movers gain disproportionate citation share.</li>
    <li>An audit of your current AI citation presence is the practical first step — 
        understanding where you appear and where you do not is the baseline for any GEO strategy.</li>
  </ul>
</section>
```

---

### 5.8 Definition Block Standard

Definition blocks tell LLMs where the authoritative definition of a concept lives on the page. They must be visually distinct, semantically marked, and immediately follow the H1.

**HTML pattern:**

```html
<section class="definition-block" id="definition" 
         aria-label="Definition of [term]">
  <p>
    <dfn id="dfn-[term-slug]">[Term]</dfn> — [Precise, complete definition in one to two sentences. 
    Must be self-contained. Must not reference "the concept above" or "as mentioned." 
    Must define the term, not describe the page.]
  </p>
</section>
```

**Rules:**

1. The `<dfn>` element wraps the term itself, not the entire sentence
2. The definition that follows uses an em dash (—) separator — this is the pattern LLMs have learned to associate with definitions
3. The definition must work as a dictionary entry — it cannot assume any prior knowledge
4. Do not use "is when," "is where," or "is about" — these are imprecise constructions. Use "is the practice of," "is a method for," "refers to the process of"
5. Maximum two sentences. A definition longer than two sentences is an explanation, not a definition — move the additional content to the following paragraph
6. The definition text in the HTML must match the definition in the `DefinedTerm` schema exactly

---

### 5.9 Image and Media Requirements

| Element | Requirement | Example |
|---|---|---|
| Alt text | Descriptive, entity-aware, maximum 125 characters | `alt="Cillian BC presenting on GEO at a Dublin marketing conference"` not `alt="photo"` |
| Alt text for decorative images | Empty string — do not describe decoration | `alt=""` |
| Alt text for data visualisations | Full description of what the chart shows | `alt="Bar chart showing 34% decline in organic traffic following Google AI Overviews rollout, Q3 2025"` |
| `<figure>` wrapper | Required for all content images (not UI icons) | `<figure><img ...><figcaption>...</figcaption></figure>` |
| `<figcaption>` | Required — adds context for AI systems parsing the page | Should describe what the image shows and why it is relevant |
| Filename | Descriptive, hyphenated, entity-rich | `geo-strategy-diagram-cillianbc.jpg` not `image003.jpg` |
| Image schema | `ImageObject` within the parent Article or Service schema | Include `url`, `width`, `height`, `caption` |
| File format | WebP preferred; JPEG acceptable; PNG for graphics with transparency | Avoid serving uncompressed images over 150KB |
| Lazy loading | `loading="lazy"` on all images below the fold; `loading="eager"` on hero images | No exceptions |

---

### 5.10 Internal Link Anchor Text Protocol

Anchor text is an entity signal. Every internal link must use anchor text that describes the destination page's primary entity — not generic phrases.

| Rule | Correct | Incorrect |
|---|---|---|
| Use the entity name of the destination page | `<a href="/services/geo/">Generative Engine Optimisation</a>` | `<a href="/services/geo/">click here</a>` |
| Use the full entity name on first mention in a section | Write "Generative Engine Optimisation (GEO)" in full the first time; "GEO" alone thereafter | Never use the abbreviation alone on first mention |
| Never use "learn more," "read more," "find out," or "click here" | Always | Without exception |
| Match anchor text to the H1 of the destination page (not the URL slug) | If H1 is "Technical SEO Audits for Irish Businesses," anchor text is "Technical SEO Audits" | Not `/technical-seo/` |
| Vary anchor text naturally across multiple links to the same destination | First mention: "Generative Engine Optimisation"; second: "GEO strategy"; third: "optimising for AI search engines" | Identical anchor text on every link looks manipulative |
| Use descriptive prepositional phrases when full entity name is awkward | "our approach to Answer Engine Optimisation" | "our AEO thing" |

---

### 5.11 Content Length Guidelines by Page Type

| Page Type | Minimum | Target | Maximum | Notes |
|---|---|---|---|---|
| Homepage | 400 words | 600 words | 900 words | Homepage copy should be tight — it is a navigation hub, not a content page |
| Service Page | 1,200 words | 1,800 words | 2,500 words | Long enough for depth; short enough to be scanned |
| Insights Article (standard) | 800 words | 1,400 words | 2,000 words | Shorter articles are not penalised if they are structurally complete |
| Insights Article (pillar/comprehensive) | 1,800 words | 2,500 words | 3,500 words | Only for cluster pillar content — not every article needs to be long |
| Case Study | 900 words | 1,400 words | 2,000 words | Specificity over length — a 900-word case study with real metrics beats a 2,000-word vague one |
| Glossary Entry | 300 words | 500 words | 700 words | Concise definitions with links out to fuller content |
| About Page | 400 words | 700 words | 1,000 words | Personal but professional; not a CV dump |
| FAQ Page (standalone) | n/a | n/a | n/a | FAQs live on other pages — no standalone FAQ page |

---

### 5.12 The AI Readability Checklist

Every piece of content must pass all 15 points before publication. This checklist is the production gate.

| # | Check | Pass Condition | Fail Action |
|---|---|---|---|
| 1 | H1 present and unique | Page has exactly one H1; it contains the primary entity name | Rewrite H1 to include entity name |
| 2 | Definition block present | `<section class="definition-block" id="definition">` with `<dfn>` exists immediately after H1 | Add definition block |
| 3 | Opening summary present | `<section class="page-summary" id="summary-intro">` with 3–5 complete-sentence bullets | Add opening summary |
| 4 | Author attribution visible | Name, title, and date visible above the fold — not only in the footer | Move attribution to article header |
| 5 | Every paragraph opens with a complete, context-independent sentence | Read first sentence of each paragraph in isolation — does it make sense alone? | Rewrite any paragraph that fails |
| 6 | No paragraph starts with "This," "It," "They," "These," "Here," or a discourse connector | Scan all paragraph openers | Rewrite offending openers |
| 7 | FAQ section present with minimum 5 items | `<section id="faq">` exists with 5+ `<div class="faq-item">` children | Add FAQ section |
| 8 | FAQ questions match real queries | Every question was verified against Google Autocomplete or PAA | Remove invented questions; replace with real query variants |
| 9 | Key Takeaways section present | `<section class="key-takeaways" id="key-takeaways">` with 3–5 complete-sentence bullets | Add Key Takeaways section |
| 10 | JSON-LD schema present and valid | Google Rich Results Test returns no errors; Schema Markup Validator returns no errors | Fix all schema errors before publishing |
| 11 | All fragment IDs follow the Fragment Identifier Protocol | Check every `id` attribute against the protocol rules | Rename non-compliant IDs; set up 301 redirects if changing published IDs |
| 12 | All internal links use entity-based anchor text | Scan all `<a href="...">` pointing to internal URLs — no "click here," "read more," "learn more" | Rewrite all generic anchor text |
| 13 | All images have descriptive alt text | Check every `<img>` — non-decorative images must have alt text over 20 characters | Write missing or inadequate alt text |
| 14 | Irish market context is explicitly present | The page mentions Ireland, Irish businesses, or an Irish-specific market condition at least once | Add an Irish-specific paragraph or sentence where missing |
| 15 | `dateModified` reflects the actual last edit date | Schema `dateModified` matches the actual date of last substantive content change | Update `dateModified` before publishing any edit |

---

## Implementation Priority Order

Not everything can be done at once. Execute in this sequence:

**Phase 1 — Foundation (Weeks 1–4)**
1. Implement homepage JSON-LD (Person + ProfessionalService + WebSite)
2. Create About page with extended Person schema
3. Set up Wikidata item
4. Claim and complete Google Business Profile
5. Ensure LinkedIn profile matches entity canonical strings exactly
6. Set up canonical URL structure (redirects for www and http variants)

**Phase 2 — Service Architecture (Weeks 4–10)**
1. Build all five service pages using the AEO Page Anatomy structure
2. Implement Service + FAQPage + BreadcrumbList schema on each
3. Create glossary section with GEO, AEO, Structured Data, Knowledge Graph entries
4. Implement Speakable schema on definition and summary blocks
5. Internal link map: connect all service pages to glossary and to each other

**Phase 3 — Content Cluster Buildout (Weeks 8–20)**
1. Build Cluster 2 (AEO) first — highest definitional authority play
2. Build Cluster 1 (AI Search Visibility) — highest volume potential
3. Build Cluster 4 (SEO Re-Evaluation) — highest conversion intent
4. Build Cluster 3 (Content Engineering/AI Workflows) — highest referral potential
5. Publish first two case studies with full HowTo + Article schema

**Phase 4 — Authority Building (Ongoing)**
1. Guest article on Silicon Republic (GEO topic)
2. LinkedIn articles republishing glossary definitions
3. Podcast appearances — prioritise shows with published transcripts
4. Submit to PRCA Ireland and Marketing Institute of Ireland directories
5. Monitor AI citation frequency monthly; adjust content structure based on gaps

---

*This document defines the complete technical SEO, AEO, and GEO architecture for cillianbc.com as of March 2026. It should be reviewed quarterly and updated following any major changes to Google's AI search behaviour, LLM training data sources, or Schema.org vocabulary.*