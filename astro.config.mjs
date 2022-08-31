import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://billyovo.github.io',
  base: '/event-calendar',
  integrations: [vue()]
});