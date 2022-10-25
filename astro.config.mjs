import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import * as dotenv from 'dotenv';
dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [ vue(), sitemap(
    { customPages: ["https://minigame.letsdream.today/", "https://minigame.letsdream.today/news",
  "https://minigame.letsdream.today/introduction","https://minigame.letsdream.today/calendar","https://minigame.letsdream.today/record",
"https://minigame.letsdream.today/bumper", "https://minigame.letsdream.today/cannon","https://minigame.letsdream.today/snake", "https://minigame.letsdream.today/boat",
"https://minigame.letsdream.today/drop","https://minigame.letsdream.today/match","https://minigame.letsdream.today/maze"] 
  })],
  site: "https://minigame.letsdream.today/",
  output: 'server',
  adapter: node()
});
