import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  base: '/',
  site: 'https://wondrous-cuchufli-072691.netlify.app',
  outDir: './netlify',
  adapter: netlify(),
  integrations: [vue()]
});
