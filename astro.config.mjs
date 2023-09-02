import { defineConfig } from 'astro/config';
//import preact from '@astrojs/preact'
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  experimental: {},
  output: 'server',
  integrations: [react(), tailwind(), sitemap()],
  adapter: netlify()
});