import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";
import { client } from "./sanity.config";

import svelte from "@astrojs/svelte";

const { projectId, dataset, useCdn, stega, apiVersion } = client.config();


// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sanity({
      projectId,
      dataset,
      useCdn,
      stega,
      apiVersion,
    }),
    react(),
    svelte(),
  ],
});
