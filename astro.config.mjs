import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://cillianbc.com',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [react(), keystatic()],
});
