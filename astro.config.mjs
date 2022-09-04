import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import vue from "@astrojs/vue";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), sitemap()],
  site: "https://minigame.letsdream.today/",
  output: 'server',
  adapter: node()
});