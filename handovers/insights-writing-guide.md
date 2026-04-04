# Insights Writing Guide
## cillianbc.com — Content Standards for the Insights Section
### Version 2.0 | April 2026

---

> **What this document is for.** Every article published in the Insights section is both a trust signal and an AI citation asset. It must work for a human reader who found it on Google, and it must work for an AI system that needs to extract a self-contained answer. These are not in conflict — good writing for humans is also good writing for machines. This guide gives you the rules that make both happen.

> **Sources reconciled in this version:** cillianbc.com Content Engineering Handoff (March 2026) + Content Writing Guidelines — 2026 Content Marketing Resources. Where the two documents conflict, the resolution is noted explicitly.

---

## Part 1: Who You Are Writing For

Every article targets one of three personas. Know which one you are writing for before you write the first word. If an article tries to serve all three equally, it will serve none of them well.

### Síobhán — Head of Marketing, Series B SaaS, Dublin
- **What she needs:** Enough technical depth to feel confident, enough plain language to brief her CEO
- **What she fears:** Getting burned by a vendor who overpromised; not being able to explain the spend
- **How to write for her:** Give her something she can use in a slide deck. Specific numbers. Named processes. Conclusions before explanations.
- **Trigger words:** "your board," "justify the spend," "your team," "what to measure," "before and after"

### Declan — Managing Director, 15-person manufacturer, Kerry
- **What he needs:** Permission to act, framed as pragmatism not panic
- **What he fears:** Wasting money on something that won't work for a company his size
- **How to write for him:** Short paragraphs. Real examples. Acknowledge the skepticism before answering it. Never assume he has an in-house marketing team.
- **Trigger words:** "businesses your size," "without an agency," "in plain English," "actually works," "worth the time"

### Aoife — Digital Director, European subsidiary, Irish HQ
- **What she needs:** Technical credibility she can present to a European HQ as sound investment
- **What she fears:** Making a recommendation that fails; looking out of touch with what her peers are doing
- **How to write for her:** Depth is welcome. Evidence and sources matter. Connect to standards and benchmarks she can reference upward.
- **Trigger words:** "compliance," "governance," "your European counterparts," "benchmark," "evidence-based"

---

## Part 2: Voice and Tone

### The Three Dimensions

**Always Accessible**
- Inviting, not demanding
- Personal, not invasive
- Genuine, not casual

The reader should feel they are getting information from a sharp, trusted colleague — not a pitch deck. The writing should feel like relief: someone who knows what they are doing and will not make you feel foolish for asking.

**Never Normal**
- Witty, not absurd
- Clever, not irreverent
- Engaging, not affected

Observations and opinions are welcome. Wordplay is acceptable if it serves clarity. Performed quirkiness is not. The brand does not need to try hard.

**Ever Inspiring**
- Evocative, not provocative
- Poignant, not theatrical
- Informed, not elitist

Content should leave the reader feeling more capable and more clear-headed than when they arrived. The goal is not to impress — it is to genuinely help.

### The Core Test
Before publishing any sentence, ask: *Would this sound natural if Cillian said it at a business meeting in Dublin?* If it reads like a UK agency blog or a US SaaS landing page, rewrite it.

### What the Voice Is
- **Specific over vague.** "Organic traffic from AI-cited queries declined 34% in three months" not "significant traffic changes."
- **Direct.** State the conclusion first. Back it up second. Irish professional culture treats burying the point as a sign of uncertainty.
- **Plain.** Use the simplest word that is still accurate. "Use" not "leverage." "Start" not "initiate." "Problem" not "pain point."
- **Honest about complexity.** If something is genuinely complicated, say so plainly — don't pretend it isn't. "This is not a quick fix" is more trustworthy than "in three easy steps."
- **First person singular.** Always "I" — never "we." There is no team. The solo practice is a feature, not a limitation to paper over.
- **Answer-first.** Start each section with a direct answer or summary before the explanation. LLMs — and people — stop reading when the point is buried. Use cues like "In summary," "Key takeaway," "Step 1" to signal extractable content.

### What the Voice Is Not
- Not cheerful. No exclamation marks. No "exciting" or "game-changing."
- Not hedging. Not "could potentially," "might possibly," "it's worth considering." State opinions as opinions, not as maybes.
- Not performatively humble. The brand does not undersell itself. Restraint signals expertise; self-deprecation signals insecurity.
- Not stage-Irish. No banter, no "sure look," no overt cultural signposting. Irish context shows up through substance, not style.
- Not American-SEO-blog. Avoid: "In today's digital landscape," "Now more than ever," "Let's dive in," "Here's the thing," "Game changer."
- Not promotional. The value speaks for itself. Let the information do the selling.

### The Pint Test
Read your lede out loud. If it would sound unnatural in conversation over a coffee or a pint with a smart Irish MD, rewrite it.

---

## Part 3: Article Structure — The Required Template

Every Insights article must follow this structure, in this order. Deviations require a documented reason.

### 1. H1 — The Headline
- One H1 per article. Non-negotiable.
- **Written in title case.**
- Must contain the primary keyword.
- Must be a complete, descriptive sentence or question — not a teaser.
- Ideally fits on 2 lines or fewer in the rendered layout.
- Must match the `headline` field in the Article schema exactly.
- **Good:** "What Is Answer Engine Optimisation? A Definition That Actually Makes Sense"
- **Bad:** "AEO: What You Need to Know" (too vague, no entity signal for LLMs)

### 2. Article Meta Block
- Author name: Cillian BC
- Date published (visible, ISO format in datetime attribute)
- Date modified (update on every substantive edit)

### 3. Quick Answer Block (where applicable)
A CMS content block available for articles whose main topic can be summarised in a direct answer. Use this when the article answers a definitional or how-to question.
- **Maximum 325 characters** (approximately 4 lines). Shorter is better.
- Must be a complete, standalone answer — not a teaser for the content below.
- If the article has a Quick Answer block, this becomes the primary AI citation target for the page.
- **Good use:** An article titled "What Is Answer Engine Optimisation?" can open with: "Answer Engine Optimisation (AEO) is the practice of structuring web content so search engines and AI systems retrieve and display it as a direct answer to a user query. It differs from SEO in that the goal is AI citation, not ranking."
- **When not to use:** Long-form opinion and case study articles where a single quick answer would misrepresent the nuance.

### 4. Definition Block (where applicable)
- Required on all definitional and explainer articles.
- Immediately follows the H1 (or Quick Answer block).
- Uses `<dfn>` element wrapping the term.
- Em dash separator (—) between term and definition.
- Maximum two sentences. One is better.
- **Good:** "Answer Engine Optimisation (AEO) is the practice of structuring web content so that search engines and AI systems retrieve and display it as a direct answer to a user's query."
- **Bad:** "Answer Engine Optimisation, or AEO, is when you write content in a way that search engines like Google can use it to answer questions."

### 5. Opening Summary (Summary Intro)
- 3–5 bullet points, each a complete standalone sentence.
- These are not teasers. They are answers. The reader should be able to read only the bullets and leave knowing the key points.
- No bullet starts with "In this article..." or "We will cover..."
- At least one bullet must reference Ireland or the Irish market specifically.

### 6. Body Sections (H2 + content)

**Heading rules:**
- Each major section gets an H2.
- **H2s are written in sentence case** (only the first word and proper nouns capitalised).
- H2 length: target ~40 characters (1 line). Maximum ~80 characters (2 lines). The Table of Contents truncates at 2 lines — write H2s that do not depend on the truncated portion for meaning.
- Each H2 section gets a unique fragment ID (`id="[topic]-[descriptor]"`).
- Subsections within an H2 use H3 — also in sentence case.
- No H4 unless labelling items in a complex list. H5 and H6 are forbidden.
- Headings are never used purely for visual styling. If text needs to be large and bold but is not a navigational section, use a `<p>` with a class.

**Body content rules:**
- Use **bold** to emphasise key takeaways and important concepts — not as a substitute for headings.
- Use bullet lists to break up large blocks of text and improve scannability.
  - Short-phrase bullets: aim for 10–15 words per item.
  - Longer explanation bullets: bold the first 2–4 words as a scannable label, then expand.
- Numbered lists for steps and ordered sequences. Unordered bullets when sequence does not matter.
- Include keyword variants and semantically related terms naturally throughout — do not repeat exact-match phrases mechanically.

### 7. Pro Tip Blocks (optional)
A CMS content block for surface-level insights that deserve emphasis without disrupting the flow.
- **Maximum 325 characters.** Shorter is better.
- Use for a specific, actionable tip that is adjacent to the surrounding content but not the main point.
- Do not use as a way to pad word count. Every Pro Tip must earn its presence.

### 8. Quote Blocks (optional)
A CMS content block for third-party quotes or Cillian's own direct statements.
- **Maximum 200 characters.** Must be tight.
- Use for: a pithy external source quote that reinforces a key point, or a first-person statement that would benefit from visual separation.
- Attribute all third-party quotes with name, title, and source.

### 9. FAQ Section
- Required on all explainer, how-to, and comparison articles.
- Minimum 5 questions.
- Every question must match a real search query — verified against Google Autocomplete or People Also Ask.
- Every answer must be 1–3 sentences, self-contained, extractable.
- Fragment ID: `id="faq"`
- Each FAQ item: `id="faq-[question-slug]"`

### 10. Key Takeaways
- Closes every article.
- 3–5 complete sentences. Not fragments. Not bullet fragments.
- Each bullet stands alone — no "see above" or "as mentioned."
- At least one bullet references Ireland specifically.
- The final bullet points toward a next action (not a CTA — a next logical step).
- Fragment ID: `id="key-takeaways"`

### 11. Calls to Action
- **Maximum 3 CTAs per article** for top-of-funnel content.
- Place CTAs near contextually relevant content — not randomly distributed.
- Use inline CTA banners for high-intent pages (how-to articles, checklist articles).
- CTA copy: "Start a conversation" is the primary CTA. Avoid "Book a call," "Get in touch," "Let's chat."
- CTAs should never interrupt the reading flow. If a CTA appears mid-article, it should follow a natural pause — the end of a section, not mid-paragraph.

---

## Part 4: Paragraph Rules (The Extractable Paragraph Standard)

This is the most important writing rule on the site. An extractable paragraph is one an AI system can lift verbatim and use as a standalone answer without losing meaning.

### The Rules
1. **One idea per paragraph.** A paragraph covering two concepts cannot be extracted cleanly for either.
2. **First sentence is a complete, standalone statement.** AI systems frequently extract only the first sentence. It must work alone.
3. **Never open with a pronoun.** "This is important because..." requires prior context. "Structured content is important because..." does not.
4. **Never open with a discourse connector.** No "However," "Moreover," "Furthermore," "Additionally," "That said," "With that in mind."
5. **Maximum 4 sentences** in body paragraphs. 2 sentences in definition blocks, Quick Answer blocks, and summary blocks.
6. **The claim lives in the main clause.** Never bury the key point in a subordinate clause.
7. **The cover test.** Cover the rest of the page. Can this paragraph be understood alone? If no — rewrite.
8. **Avoid fluffy openings.** Eliminate scene-setting intros. The essential information appears first. No "In today's ever-changing landscape..." lead-ins.

### Examples

**Extractable:**
> Generative Engine Optimisation (GEO) is the practice of structuring content so that AI-powered answer engines retrieve and cite it when generating responses. It differs from traditional SEO in that the goal is AI citation, not search ranking. Irish businesses that invest in GEO now have a structural advantage as AI search becomes the primary discovery channel.

**Not extractable:**
> This approach has become increasingly important recently. It differs from what we discussed above in several key ways. Companies that do this well tend to see better results.

---

## Part 5: Content-Type Specific Rules

### Explainer Articles
- Open with the Quick Answer block and/or definition block.
- Proceed from definition → context → why it matters → how it works → what to do.
- Never assume the reader has read other articles on the site.
- Include a "What this is not" section if the term is commonly misunderstood.

### How-To Articles
- Number the steps. Every how-to has a numbered list of actionable steps.
- Each step is an action, not a concept. "Audit your current FAQ section for real query match" not "Understanding FAQ alignment."
- Include a "Before you start" section listing prerequisites if any tools or access are needed.
- End with a "What to expect" paragraph — what does success look like?

### Comparison Articles
- State your conclusion plainly at the top: "GEO and SEO are not interchangeable — here is what each one actually does."
- Use a comparison table for side-by-side criteria comparisons. **Tables are appropriate here and required** — this is an explicit exception to the general "avoid tables for information display" rule. See the note below.
- Table must have a descriptive caption, `scope="col"` on column headers, and `scope="row"` on row headers.
- Do not artificially balance the comparison. If one option is clearly better for the reader's situation, say so.

> **Note on tables:** The general guideline is to use headings and lists rather than tables for presenting information. Tables are reserved for structured comparisons across consistent attributes (e.g., GEO vs SEO vs AEO across multiple criteria). When a table is used, it must have proper accessibility markup and a descriptive caption. Tables are never used for layout or for presenting simple lists.

### Opinion / POV Articles
- State the opinion in the H1 or the first paragraph. Do not save it for the conclusion.
- Distinguish clearly between "this is my view" and "this is established fact."
- Use "I" freely — this is the one article type where voice is a feature.
- Back every opinion with a specific example, piece of data, or named observation.
- Acknowledge the counter-argument before dismissing it. The reader's skepticism is valid until you address it.

### Checklist Articles
- Number every item. Checklists are ordered, not unordered.
- Each item is a test with a clear pass/fail condition.
- Group items into logical categories with H3 headings.
- State at the top how many items are in the checklist and roughly how long it takes to complete.

### Case Study Articles
- Follow the required structure: Situation → Diagnosis → Approach → What Was Built → Outcome → What This Means.
- Anonymise clients where needed, but be specific about sector, company size, and timeframe.
- Lead with the outcome metric in the H1 or opening paragraph. Do not make the reader wait for the result.
- Never describe the work without describing the result.
- Mention alternatives considered and why they were not chosen — this builds trust and reduces the impression of a sales document.

---

## Part 6: E-E-A-T (Experience, Expertise, Authoritativeness, Trust)

Google's quality framework applies to every article. Apply it through substance, not through signals.

### Experience
- Use first-person observations where relevant. "When I audited a similar service page..." is more credible than "businesses often find..."
- Provide specific examples grounded in real situations, even if anonymised.
- Bring receipts for every claim — statistics, case data, named sources. Unsupported claims are lower-trust than no claim at all.

### Expertise
- Provide in-depth, accurate information. Shallow coverage signals a generalist.
- When covering a technical topic, go one level deeper than the average article on the same subject.
- Name the tools, the specific techniques, the exact steps. Vagueness is the enemy of authority.

### Authoritativeness
- Link to reputable third-party sources when citing data or making factual claims.
- Acknowledge when something is genuinely uncertain or contested — this signals intellectual honesty, not weakness.
- Author attribution (Cillian BC, with date) must be visible above the fold on every article.

### Trust
- Mention alternatives when appropriate. "This approach works well for X but may not suit Y" is more trustworthy than blanket promotion.
- Be balanced. The goal is to help the reader make a good decision, not to sell a service.
- Acknowledge limitations. An article that says "this will not work for every situation" is more credible than one that promises universal applicability.

---

## Part 7: Irish Market Context — Non-Negotiable

Every article must contain at least one explicit reference to Ireland, Irish businesses, or an Irish-specific market condition. This is not a box-ticking exercise — it is a core differentiator.

### Ways to Add Irish Context
- Reference the Ireland-specific AI search adoption lag (12–18 months behind the US/UK)
- Name Irish companies, regions, or sectors as examples (Kerry, Dublin, Cork, manufacturing, SaaS, professional services)
- Reference Irish-specific search behaviour or buyer behaviour patterns
- Reference Irish market-specific platforms or directories (Google Business Profile in Ireland, directories relevant to Irish business)
- Acknowledge Irish business culture explicitly: relationship-first, skeptical of hype, small market dynamics

### What to Avoid
- Pretending Ireland is the same as the UK market
- Using UK data and labelling it as Irish
- Stage-Irish aesthetics — references to Irishness that are cultural decoration rather than substantive market context
- Overgeneralising to "the EU" when the article is specifically about the Irish market

---

## Part 8: SEO and Schema Requirements

### On-Page SEO
- **Title tag:** Primary keyword included. Append "— Cillian BC" as suffix. Maximum 60 characters total. Never truncated.
- **Meta description:** Under 160 characters. Use secondary keywords naturally. Complete sentence. Should answer the search query in one sentence.
- **URL slug:** Lowercase, hyphens only, primary keyword included. 3–5 descriptive words. No dates unless they are semantically necessary.
- **Canonical URL:** Self-referencing canonical on every article.
- **Keyword usage:** Use target keywords naturally throughout. Include keyword variants and related terms — do not repeat exact-match phrases mechanically (semantic richness matters more than density).

### Fragment IDs — Mandatory on Every Article
Every article must contain these fragment IDs (where the section is present):
- `#summary-intro` — the opening summary section
- `#definition` — the definition block (where applicable)
- `#faq` — the FAQ section
- `#key-takeaways` — the Key Takeaways section
- `#[primary-topic]-ireland` — the Irish market context section

Apply fragment IDs to every H2 section using the pattern: `id="[entity-name]-[descriptor]"`. Use hyphens, full words, semantic match to H2 text. Never use underscores.

### Schema (JSON-LD)
Every Insights article requires:
- `Article` schema: `headline`, `author` (Person), `datePublished`, `dateModified`, `description`, `url`, `image`
- `FAQPage` schema: questions/answers must match visible HTML exactly — no paraphrasing
- `BreadcrumbList` schema

How-to articles additionally require `HowTo` schema.

---

## Part 9: Internal Linking Rules

### The Protocol
- Use the **entity name** of the destination page as anchor text — not "click here," "read more," "learn more," or "find out."
- Write the full entity name on **first mention** in each section. Abbreviation acceptable on subsequent mentions within the same section.
- Consider the user's journey and intent — every internal link should serve the reader, not just the crawl architecture.
- **Good:** "Generative Engine Optimisation (GEO) is a distinct discipline from traditional SEO."
- **Bad:** "Click here to learn more about GEO." / "Find out about our services."

### Required Internal Links by Article Type
Every Insights article should link to:
- The most relevant **service page** (Services, AEO/GEO, or About)
- At least one other **Insights article** (once the cluster has 3+ articles)
- The **homepage** is linked from the navigation — do not add body copy links to the homepage

### Limits
- Do not exceed 5–6 internal links in a standard article. Excessive internal links overwhelm readers and dilute the equity signal.
- Never place two internal links within the same sentence.

### Anchor Text Variation
If linking to the same destination more than once in an article:
- First mention: Full entity name ("Generative Engine Optimisation")
- Second mention: Abbreviated or varied ("GEO strategy," "optimising for AI search engines")
- Never use identical anchor text for every link to the same destination

---

## Part 10: Length Guidelines

| Article Type | Minimum | Target | Maximum |
|---|---|---|---|
| Standard Insights article | 800 words | 1,200 words | 1,800 words |
| Pillar / comprehensive article | 1,800 words | 2,500 words | 3,500 words |
| Checklist article | 700 words | 1,000 words | 1,500 words |
| Case study | 900 words | 1,400 words | 2,000 words |

**Note:** Word count minimums ensure structural completeness, not padding. An 800-word article that passes all 15 checklist items is better than a 1,800-word article that passes 10. Eliminate filler. Essential information belongs above the fold.

---

## Part 11: Content Freshness

- Outdated content is less likely to be included in AI-generated answers.
- Update `dateModified` in schema every time substantive content changes are made.
- Review all P1 and P2 articles quarterly for factual accuracy — particularly any statistics, platform behaviour (Google AI Overviews, ChatGPT, Perplexity), and Irish market data.
- When updating an article, add a visible "Updated [Month Year]" note in the article meta block.
- Do not update articles purely to change the date — changes must be substantive.

---

## Part 12: The AI Readability Checklist — Production Gate

Every article must pass all 15 checks before publication. Articles that fail any check are returned for revision.

| # | Check | Pass Condition |
|---|---|---|
| 1 | H1 present, unique, and in title case | Exactly one H1; contains the primary entity name; title case applied |
| 2 | Definition block present | `<dfn>` with `id="definition"` immediately after H1 (where applicable) |
| 3 | Opening summary present | 3–5 complete-sentence bullets in `#summary-intro` |
| 4 | Author attribution visible | Name and date visible above the fold |
| 5 | Every paragraph opens with a complete, context-independent sentence | First sentence of each paragraph reads alone without prior context |
| 6 | No paragraph starts with a prohibited opener | No "This," "It," "They," "These," "Here," "However," "Moreover," "Furthermore" |
| 7 | FAQ section present with minimum 5 items | `#faq` section with 5+ items |
| 8 | FAQ questions match real queries | Every question verified against Google Autocomplete or PAA |
| 9 | Key Takeaways section present | 3–5 complete-sentence bullets in `#key-takeaways` |
| 10 | JSON-LD schema present and valid | Google Rich Results Test returns zero errors |
| 11 | All fragment IDs follow the protocol | Hyphens, full words, semantic match to H2 text; no underscores |
| 12 | All internal links use entity-based anchor text | No "click here," "read more," "learn more," "find out" |
| 13 | All images have descriptive alt text | Non-decorative images have 20+ character alt text |
| 14 | Irish market context explicitly present | At least one mention of Ireland or Irish market conditions |
| 15 | dateModified reflects actual last edit | Schema dateModified matches the date of last substantive change |

---

## Part 13: What Not to Do

**Structure:**
- Publishing without a definition block on a definitional article
- Opening summary bullets that are teasers ("In this article, we'll cover...") rather than answers
- FAQ answers longer than 3 sentences
- Key Takeaways that are not complete sentences
- More than one H1 on the page
- More than 3 CTAs in a top-of-funnel article
- CTAs placed mid-paragraph (always at section breaks)
- Using a table for anything other than a structured side-by-side comparison

**Voice:**
- "In today's digital landscape..."
- "Now more than ever..."
- "Let's dive in."
- "Here's the thing:"
- "Game-changing" / "revolutionary" / "transformative"
- "We" when referring to Cillian (it's always "I")
- Exclamation marks in body copy
- Overly promotional language that reads like advertising
- Fluffy intros that delay the essential information

**Technical:**
- Fragment IDs with underscores (`id="what_is_geo"`)
- Generic anchor text on internal links
- Images without alt text
- Publishing without updating dateModified
- Meta descriptions that exceed 160 characters or are truncated mid-word
- Title tags that exceed 60 characters

**Content:**
- Paragraphs that open with "This," "It," "They," "However," "Moreover," "Furthermore"
- No Irish market reference anywhere in the article
- FAQ questions that are marketing statements ("Why should you choose GEO?") rather than real queries
- Key Takeaways that reference each other ("As mentioned above...")
- Claims without sources or evidence
- Statistics cited without attribution to a named study or source
- No mention of alternatives, limitations, or caveats (looks promotional)

---

*This guide is a living document. Review quarterly or following any major change to Google's AI search behaviour, LLM training data sources, or Schema.org vocabulary.*

*Last updated: April 2026 — Version 2.0 (merged Content Engineering Handoff + 2026 Content Marketing Resources)*
