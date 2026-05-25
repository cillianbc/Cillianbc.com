---
title: "Rebuilding theHomeoffice.ie: Scaling a 365-Hub Directory Without WordPress"
description: "How I rebuilt Ireland's remote working directory on Astro and Storyblok — moving from a slow WordPress site to a static directory that scales across 26 counties without the hosting bill, the maintenance load, or the page-speed compromises."
pubDate: 2026-05-11
client: "theHomeoffice.ie (owned project)"
sector: "Directory / Marketplace"
services:
  - "Site architecture"
  - "Headless CMS implementation"
  - "Content engineering"
stack:
  - "Astro"
  - "Storyblok"
  - "Vercel"
featured: true
readingTime: 6
heroLead: "How I rebuilt Ireland's remote working directory on Astro and Storyblok — moving from a slow WordPress site to a static directory that scales across 26 counties without the hosting bill, the maintenance load, or the page-speed compromises."
keyTopics:
  - "Headless architecture"
  - "Static site generation"
  - "Directory site performance"
  - "WordPress migration"
---

## The Problem: The Weight of WordPress

The original iteration of theHomeoffice.ie was built on WordPress, acting as a directory for remote working hubs across Ireland. Initially, it served its purpose, but as the dataset grew to encompass 365 hubs across 26 counties, the architectural cracks began to show.

WordPress is fundamentally a blogging platform. Forcing it into a relational data structure — managing complex relationships between counties, amenities, pricing tiers, and hub locations — requires a precarious stack of plugins (Custom Post Types, Advanced Custom Fields, caching layers). This resulted in sluggish query times, a fragile maintenance loop, and a hosting bill that didn't align with the revenue model of a nascent directory. The "shape" of the data was dictated by the CMS, rather than the needs of the product.

## The Decision: Selecting the Right Stack

I needed a system that treated data as data, not as a collection of web pages. The evaluation process was straightforward:

<ul class="decision-list">
  <li class="decision-list__item decision-list__item--rejected">
    <svg class="decision-list__icon" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
    <div>
      <strong class="decision-list__title">WordPress (Status Quo)</strong>
      <span class="decision-list__body">Too slow for a massive directory, required expensive hosting to handle complex database queries, and offered a poor developer experience for structured data.</span>
    </div>
  </li>
  <li class="decision-list__item decision-list__item--neutral">
    <svg class="decision-list__icon" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19 13H5v-2h14z"/></svg>
    <div>
      <strong class="decision-list__title">Next.js</strong>
      <span class="decision-list__body">Excellent for dynamic applications, but overkill for a directory where the data changes infrequently (perhaps weekly). The client-side JavaScript payload was unnecessary overhead for a content site focused on SEO.</span>
    </div>
  </li>
  <li class="decision-list__item decision-list__item--chosen">
    <svg class="decision-list__icon" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
    <div>
      <strong class="decision-list__title">Astro + Storyblok</strong>
      <span class="decision-list__body">The winning combination. Astro provided zero-JS static site generation for lightning-fast page loads. Storyblok offered a robust, visually editable headless CMS that treated data structurally, allowing for infinite scaling without performance degradation.</span>
    </div>
  </li>
</ul>

## What Got Built: A Scalable Static Architecture

The new architecture fundamentally separated the content repository from the presentation layer.

**Storyblok as the data engine.** We defined strict block schemas for 'Hubs', 'Counties', and 'Regions'. This structured approach meant a hub's data wasn't just HTML mixed with text; it was a pure JSON object detailing amenities, coordinates, and contact info. This semantic structure makes the data highly readable not just to human users, but to AI crawlers and large language models, future-proofing the directory for AI-driven search experiences.

**Astro as the build engine.** At build time, Astro queries the Storyblok API, pulls down the entire structured dataset, and generates hundreds of static HTML pages. It handles the complex routing logic (e.g. `/hubs/munster/cork/the-republic-of-work`) seamlessly. The result is a site that requires no database connection at runtime.

## Outcomes: Performance and Efficiency

The transition yielded immediate, measurable improvements across all core metrics:

<div class="stat-grid">
  <div class="stat-card">
    <div class="stat-card__number">100/100</div>
    <div class="stat-card__caption">Lighthouse Performance Score, achieved consistently across all 400+ generated pages due to zero client-side JavaScript.</div>
  </div>
  <div class="stat-card">
    <div class="stat-card__number">−85%</div>
    <div class="stat-card__caption">Reduction in monthly hosting costs, moving from managed WordPress hosting to Vercel's static tier.</div>
  </div>
  <div class="stat-card">
    <div class="stat-card__number">365+</div>
    <div class="stat-card__caption">Hubs dynamically mapped and rendered from a single, maintainable content schema.</div>
  </div>
</div>

## Conclusion: What This Was Really About

Ultimately, this project wasn't just about escaping WordPress; it was about adopting a philosophy of **structured data over unstructured documents**.

By moving to a headless architecture, theHomeoffice.ie transformed from a slow, monolithic website into an agile, highly performant dataset with a web presentation layer. It scales effortlessly, costs pennies to host, and is structurally prepared for whatever the next generation of search and discovery demands.
