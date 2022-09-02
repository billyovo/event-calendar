import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  output: 'server',
  adapter: node()
});