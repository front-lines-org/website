import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), tailwind(), astroImageTools]
});