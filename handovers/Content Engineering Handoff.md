SECTION 5: Content Engineering Handoff 5.1 Semantic HTML Requirements Every content type has a required HTML structure. These are not suggestions. A page that deviates from this structure fails the AI Readability Checklist and must be revised before publishing. Article / Insights Post

     aria-label="\[Article headline\]"\>

\<nav aria-label="Breadcrumb"\>

  \<\!-- BreadcrumbList navigation \--\>

\</nav\>

\<h1 itemprop="headline"\>\[Article headline\]\</h1\>

\<div class="article-meta" itemprop="author" itemscope 

     itemtype="https://schema.org/Person"\>

  \<span itemprop="name"\>Cillian BC\</span\>

  \<time itemprop="datePublished" datetime="YYYY-MM-DD"\>\[Date\]\</time\>

  \<time itemprop="dateModified" datetime="YYYY-MM-DD"\>Updated \[Date\]\</time\>

\</div\>

\<p\>\<dfn\>\[Term being defined\]\</dfn\> — \[definition text\]\</p\>

\<ul\>

  \<li\>\[Standalone summary point 1\]\</li\>

  \<li\>\[Standalone summary point 2\]\</li\>

  \<\!-- 3–5 items \--\>

\</ul\>

\<\!-- H2 sections with id attributes \--\>

\<\!-- FAQ items — see 5.6 \--\>

\<\!-- Citable summary block — see 5.7 \--\>

# Service Page **\[Service Name\]**

\<dfn\>\[Service term\]\</dfn\> — \[definition\]

\<h2\>What this service includes\</h2\>

\<ul\>

  \<li\>\[Deliverable 1\]\</li\>

\</ul\>

\<h2\>\[Service\] for Irish Businesses\</h2\>

\<\!-- Irish-specific context \--\>

\<\!-- Mini case study \--\>

\<\!-- FAQ \--\>

\<\!-- Citable summary \--\>

Case Study Page      class="case-study" aria-label="Case study"\>

\<nav aria-label="Breadcrumb"\>\<\!-- breadcrumb \--\>\</nav\>

\<h1 itemprop="headline"\>\[Case study headline\]\</h1\>

\<div class="case-study-meta"\>

  \<dl\>

    \<dt\>Sector\</dt\>\<dd\>\[Sector\]\</dd\>

    \<dt\>Timeframe\</dt\>\<dd\>\[Duration\]\</dd\>

    \<dt\>Challenge\</dt\>\<dd\>\[One-sentence challenge\]\</dd\>

  \</dl\>

\</div\>

## **The Situation**

## **The Diagnosis**

## **The Approach**

## **What Was Built**

## **The Outcome**

## **What This Means**

5.2 Fragment Identifier Protocol AI engines and readers can cite [https://cillianbc.com/services/geo/\#what-is-geo](https://cillianbc.com/services/geo/#what-is-geo) directly. Fragment IDs must follow these rules without exception.

Rule Correct Incorrect Use hyphens, not underscores id="what-is-geo" id="what\_is\_geo" Use full words, not abbreviations (except established acronyms) id="answer-engine-optimisation" id="aeo-section" Match the H2 text semantically H2: "What Is GEO?" → id="what-is-geo" id="section-2", id="content-block-4" Keep IDs stable — never change a published fragment ID If a section is renamed, add a redirect for the old ID Do not silently break existing citation links Use consistent IDs across similar page types Every service page has id="definition", id="faq", id="key-takeaways" Ad hoc, unique IDs on every page Prefix topic-specific IDs with the entity name id="geo-for-irish-businesses" id="irish-businesses-section"

Mandatory fragment IDs (present on every relevant page type):

\#definition          — The definition block (service pages, glossary, insights)

\#summary-intro       — Opening summary (all pages)

\#faq                 — FAQ section (service pages, insights)

\#key-takeaways       — Closing citable summary (all pages)

\#\[topic\]-ireland     — Irish market context section (service pages)

\#situation           — Case study situation (case studies)

\#approach            — Case study approach (case studies)

\#outcome             — Case study outcomes (case studies)

5.3 Heading Hierarchy Rules The heading structure is both a semantic signal and a navigation aid for LLMs parsing document structure.

Rules:

# Every page has exactly one **. The H1 contains the primary entity name and must match the headline field in schema.**

## **is used for major sections only — the sections that get their own fragment id.**

### **is used for subsections within an H2 section — for example, individual FAQ questions, or sub-steps within an approach section.**

#### **is permitted for labelling specific items within a complex list. Use sparingly.**

##### **and**

###### ***are forbidden. If a fifth level of heading is needed, the content structure is wrong and must be redesigned. Headings are never used purely for visual styling. If a piece of text needs to be large and bold but is not a section heading, use a***

###### ***with a class.***

Correct usage:

# **Generative Engine Optimisation (GEO) for Irish Businesses**

## **What Is Generative Engine Optimisation?**

...

## **GEO for Irish Businesses**

...

### **Why the Irish market is behind — and what that means for early movers**

...

## **Frequently Asked Questions About GEO**

### **What is the difference between GEO and SEO?**

...

Incorrect usage:

# **Welcome to Our GEO Services Page**

## **Overview**

### **Introduction**

## **Other Things We Do**

5.4 The Extractable Paragraph Standard An extractable paragraph is one that an AI engine can lift verbatim from the page and use as a standalone answer without losing meaning.

Rules:

One idea per paragraph. A paragraph that covers two concepts cannot be cleanly extracted for either concept. The first sentence must be a complete, standalone statement. AI engines frequently extract only the first sentence of a paragraph. Never open a paragraph with a pronoun, a relative clause, or "This." "This is important because..." requires prior context. "Structured data is important because..." does not. Never open a paragraph with "However," "Moreover," "Furthermore," or any connector that requires prior context. Maximum paragraph length: 4 sentences for body content, 2 sentences for definition blocks and summary blocks. Avoid nested clauses in sentences that carry key claims. The claim must be in the main clause, not buried in a subordinate. Test: cover the rest of the page. Can this paragraph be understood alone? If no — rewrite.

Correct extractable paragraph:

Generative Engine Optimisation (GEO) is the practice of structuring content so that AI-powered answer engines retrieve and cite it when generating responses. It differs from traditional SEO in that the goal is AI citation, not search ranking. Businesses that invest in GEO now will have a structural advantage as AI search becomes the dominant discovery channel.

Incorrect (not extractable):

This approach has become increasingly important in recent years. It differs from what we discussed above in several key ways, particularly when it comes to how search engines handle queries. Companies that do this well tend to see better results over time.

5.5 Table Structure Requirements Tables must be used when comparing multiple items across consistent attributes. They must never be used for visual layout.

When to use tables:

Comparing options (GEO vs SEO vs AEO across multiple criteria) Listing schema fields with values and explanations Keyword clusters with intent classifications Content types with corresponding signals and methods

Required table structure:

\[Descriptive caption — what this table shows and why it matters\]

\<thead\>

  \<tr\>

    \<th scope="col"\>\[Column 1 header\]\</th\>

    \<th scope="col"\>\[Column 2 header\]\</th\>

    \<th scope="col"\>\[Column 3 header\]\</th\>

  \</tr\>

\</thead\>

\<tbody\>

  \<tr\>

    \<th scope="row"\>\[Row label\]\</th\>

    \<td\>\[Value\]\</td\>

    \<td\>\[Value\]\</td\>

  \</tr\>

\</tbody\>

Rules:

Every table has a or an aria-labelledby pointing to a visible Every column header uses scope="col" Every row header (first column of a comparison table) uses scope="row" Tables are never used for more than 7 rows without pagination or a note explaining the full dataset is available elsewhere Mobile behaviour: tables wider than the viewport must scroll horizontally with overflow-x: auto — never use horizontal scrolling as a reason to simplify table content

5.6 FAQ Formatting Standard FAQs are the single highest-value structural element for AI citation. They must be implemented precisely.

HTML pattern:

     aria-label="Frequently asked questions about \[topic\]"\>

## **Frequently Asked Questions About \[Topic\]**

\<h3 class="faq-question"\>What is \[topic\]?\</h3\>

\<div class="faq-answer"\>

  \<p\>\[Answer — self-contained, extractable, maximum 3 sentences\]\</p\>

\</div\>

\<h3 class="faq-question"\>Do Irish businesses need \[topic\]?\</h3\>

\<div class="faq-answer"\>

  \<p\>\[Answer\]\</p\>

\</div\>

Rules:

FAQ questions must match real search queries — use Google Autocomplete, People Also Ask, and AlsoAsked.com Every FAQ answer must be self-contained — a reader arriving only at the answer must understand it without reading the surrounding page FAQ answers must be 1–3 sentences maximum — longer answers are paragraph content, not FAQ answers The FAQ section schema (FAQPage JSON-LD) must contain identical question/answer text as the visible HTML — no paraphrasing Questions must be phrased as real user questions, not as marketing statements ("How does Cillian BC help with GEO?" is acceptable; "Why Cillian BC is the best GEO consultant" is not) Each FAQ item has its own id attribute so it can be cited directly (e.g. \#faq-what-is-geo)

5.7 The Citable Summary Block Every article and service page must end with a Citable Summary Block. This is the section AI engines use as a "bottom line" when summarising the page. It is also the Speakable target section.

HTML pattern:

     aria-label="Key takeaways from this page"\>

## **Key Takeaways**

\<li\>\[Complete sentence. Subject \+ verb \+ object. No opener like "Remember that" or "It is important to note."\]\</li\>

\<li\>\[Complete sentence.\]\</li\>

\<li\>\[Complete sentence.\]\</li\>

\<\!-- 3–5 items \--\>

Copy rules:

Every bullet is a complete, standalone sentence — no fragments, no ellipsis No bullet may start with "Remember," "Note," "Keep in mind," "It is worth noting," or any hedging opener Every bullet must be true independently of every other bullet — they are not a sequence At least one bullet must reference the Irish market context or the Irish reader specifically The final bullet should connect to the next step — what the reader should do with this information (without being a CTA) Maximum 5 bullets. If there are more than 5 key takeaways, the content has too many ideas and must be split

Example:

     aria-label="Key takeaways"\>

## **Key Takeaways**

\<li\>Generative Engine Optimisation (GEO) is now a distinct discipline from traditional SEO, 

    requiring content to be structured for AI extraction, not just for human reading.\</li\>

\<li\>Google AI Overviews are active in Ireland and are changing which businesses appear at 

    the top of search results for commercial queries.\</li\>

\<li\>The businesses most likely to be cited in AI answers are those with consistent entity 

    signals, structured data, and content formatted to the extractable paragraph standard.\</li\>

\<li\>Irish B2B companies have a window of advantage — GEO adoption in Ireland lags 

    12–18 months behind the US, meaning early movers gain disproportionate citation share.\</li\>

\<li\>An audit of your current AI citation presence is the practical first step — 

    understanding where you appear and where you do not is the baseline for any GEO strategy.\</li\>

5.8 Definition Block Standard Definition blocks tell LLMs where the authoritative definition of a concept lives on the page. They must be visually distinct, semantically marked, and immediately follow the H1.

HTML pattern:

     aria-label="Definition of \[term\]"\>

\<dfn id="dfn-\[term-slug\]"\>\[Term\]\</dfn\> — \[Precise, complete definition in one to two sentences. 

Must be self-contained. Must not reference "the concept above" or "as mentioned." 

Must define the term, not describe the page.\]

Rules:

The element wraps the term itself, not the entire sentence The definition that follows uses an em dash (—) separator — this is the pattern LLMs have learned to associate with definitions The definition must work as a dictionary entry — it cannot assume any prior knowledge Do not use "is when," "is where," or "is about" — these are imprecise constructions. Use "is the practice of," "is a method for," "refers to the process of" Maximum two sentences. A definition longer than two sentences is an explanation, not a definition — move the additional content to the following paragraph The definition text in the HTML must match the definition in the DefinedTerm schema exactly

5.9 Image and Media Requirements Element Requirement Example Alt text Descriptive, entity-aware, maximum 125 characters alt="Cillian BC presenting on GEO at a Dublin marketing conference" not alt="photo" Alt text for decorative images Empty string — do not describe decoration alt="" Alt text for data visualisations Full description of what the chart shows alt="Bar chart showing 34% decline in organic traffic following Google AI Overviews rollout, Q3 2025"

wrapper Required for all content images (not UI icons) ... Required — adds context for AI systems parsing the page Should describe what the image shows and why it is relevant Filename Descriptive, hyphenated, entity-rich geo-strategy-diagram-cillianbc.jpg not image003.jpg Image schema ImageObject within the parent Article or Service schema Include url, width, height, caption File format WebP preferred; JPEG acceptable; PNG for graphics with transparency Avoid serving uncompressed images over 150KB Lazy loading loading="lazy" on all images below the fold; loading="eager" on hero images No exceptions 5.10 Internal Link Anchor Text Protocol Anchor text is an entity signal. Every internal link must use anchor text that describes the destination page's primary entity — not generic phrases.

Rule Correct Incorrect Use the entity name of the destination page Generative Engine Optimisation click here Use the full entity name on first mention in a section Write "Generative Engine Optimisation (GEO)" in full the first time; "GEO" alone thereafter Never use the abbreviation alone on first mention Never use "learn more," "read more," "find out," or "click here" Always Without exception Match anchor text to the H1 of the destination page (not the URL slug) If H1 is "Technical SEO Audits for Irish Businesses," anchor text is "Technical SEO Audits" Not /technical-seo/ Vary anchor text naturally across multiple links to the same destination First mention: "Generative Engine Optimisation"; second: "GEO strategy"; third: "optimising for AI search engines" Identical anchor text on every link looks manipulative Use descriptive prepositional phrases when full entity name is awkward "our approach to Answer Engine Optimisation" "our AEO thing"

5.11 Content Length Guidelines by Page Type Page Type Minimum Target Maximum Notes Homepage 400 words 600 words 900 words Homepage copy should be tight — it is a navigation hub, not a content page Service Page 1,200 words 1,800 words 2,500 words Long enough for depth; short enough to be scanned Insights Article (standard) 800 words 1,400 words 2,000 words Shorter articles are not penalised if they are structurally complete Insights Article (pillar/comprehensive) 1,800 words 2,500 words 3,500 words Only for cluster pillar content — not every article needs to be long Case Study 900 words 1,400 words 2,000 words Specificity over length — a 900-word case study with real metrics beats a 2,000-word vague one Glossary Entry 300 words 500 words 700 words Concise definitions with links out to fuller content About Page 400 words 700 words 1,000 words Personal but professional; not a CV dump FAQ Page (standalone) n/a n/a n/a FAQs live on other pages — no standalone FAQ page

5.12 The AI Readability Checklist Every piece of content must pass all 15 points before publication. This checklist is the production gate.

# 

Check Pass Condition Fail Action 1 H1 present and unique Page has exactly one H1; it contains the primary entity name Rewrite H1 to include entity name 2 Definition block present

with exists immediately after H1 Add definition block 3 Opening summary present with 3–5 complete-sentence bullets Add opening summary 4 Author attribution visible Name, title, and date visible above the fold — not only in the footer Move attribution to article header 5 Every paragraph opens with a complete, context-independent sentence Read first sentence of each paragraph in isolation — does it make sense alone? Rewrite any paragraph that fails 6 No paragraph starts with "This," "It," "They," "These," "Here," or a discourse connector Scan all paragraph openers Rewrite offending openers 7 FAQ section present with minimum 5 items exists with 5+  
children Add FAQ section 8 FAQ questions match real queries Every question was verified against Google Autocomplete or PAA Remove invented questions; replace with real query variants 9 Key Takeaways section present with 3–5 complete-sentence bullets Add Key Takeaways section 10 JSON-LD schema present and valid Google Rich Results Test returns no errors; Schema Markup Validator returns no errors Fix all schema errors before publishing 11 All fragment IDs follow the Fragment Identifier Protocol Check every id attribute against the protocol rules Rename non-compliant IDs; set up 301 redirects if changing published IDs 12 All internal links use entity-based anchor text Scan all pointing to internal URLs — no "click here," "read more," "learn more" Rewrite all generic anchor text 13 All images have descriptive alt text Check every — non-decorative images must have alt text over 20 characters Write missing or inadequate alt text 14 Irish market context is explicitly present The page mentions Ireland, Irish businesses, or an Irish-specific market condition at least once Add an Irish-specific paragraph or sentence where missing 15 dateModified reflects the actual last edit date Schema dateModified matches the actual date of last substantive content change Update dateModified before publishing any edit

Implementation Priority Order Not everything can be done at once. Execute in this sequence:

Phase 1 — Foundation (Weeks 1–4)

Implement homepage JSON-LD (Person \+ ProfessionalService \+ WebSite) Create About page with extended Person schema Set up Wikidata item Claim and complete Google Business Profile Ensure LinkedIn profile matches entity canonical strings exactly Set up canonical URL structure (redirects for www and http variants)

Phase 2 — Service Architecture (Weeks 4–10)

Build all five service pages using the AEO Page Anatomy structure Implement Service \+ FAQPage \+ BreadcrumbList schema on each Create glossary section with GEO, AEO, Structured Data, Knowledge Graph entries Implement Speakable schema on definition and summary blocks Internal link map: connect all service pages to glossary and to each other

Phase 3 — Content Cluster Buildout (Weeks 8–20)

Build Cluster 2 (AEO) first — highest definitional authority play Build Cluster 1 (AI Search Visibility) — highest volume potential Build Cluster 4 (SEO Re-Evaluation) — highest conversion intent Build Cluster 3 (Content Engineering/AI Workflows) — highest referral potential Publish first two case studies with full HowTo \+ Article schema

Phase 4 — Authority Building (Ongoing)

Guest article on Silicon Republic (GEO topic) LinkedIn articles republishing glossary definitions Podcast appearances — prioritise shows with published transcripts Submit to PRCA Ireland and Marketing Institute of Ireland directories Monitor AI citation frequency monthly; adjust content structure based on gaps

This document defines the complete technical SEO, AEO, and GEO architecture for cillianbc.com as of March 2026\. It should be reviewed quarterly and updated following any major changes to Google's AI search behaviour, LLM training data sources, or Schema.org vocabulary.  
