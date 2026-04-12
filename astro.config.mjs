import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://cillianbc.com',
  output: 'static',
  integrations: [
    react(),
    sitemap(),
    ...(isProd ? [] : [keystatic()]),
  ],
});
