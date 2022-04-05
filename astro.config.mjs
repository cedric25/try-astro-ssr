import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  base: '/',
  site: 'https://www.my-site.dev',
  outDir: './netlify',
  adapter: netlify(),
  integrations: [vue()]
});
