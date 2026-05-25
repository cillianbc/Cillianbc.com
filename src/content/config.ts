import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['SEO', 'GEO', 'AEO', 'AI Workflows']),
    featured: z.boolean().default(false),
    readingTime: z.number(),
    keyTopics: z.array(z.string()).optional(),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    client: z.string(),
    sector: z.string(),
    services: z.array(z.string()),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    readingTime: z.number(),
    keyTopics: z.array(z.string()).optional(),
    heroLead: z.string(),
  }),
});

export const collections = { insights, caseStudies };
