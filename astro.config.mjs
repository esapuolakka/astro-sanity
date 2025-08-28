import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from "@astrojs/react";
import netlify from '@astrojs/netlify/edge-functions';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  vite: {
      plugins: [tailwindcss()],
    },

  integrations: [
    sanity({
      projectId: "ftlckvo2",
      dataset: "production",
      useCdn: false,
      apiVersion: "2025-08-25",
      stega: {
        studioUrl: "https://astro-esa.sanity.studio/",
      },
    }),
    react(),
  ],
});