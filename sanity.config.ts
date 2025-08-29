import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'ftlckvo2',
  dataset: 'production',
  apiVersion: '2025-08-29',
  useCdn: false,
  stega: {
    studioUrl: "https://astro-esa.sanity.studio/",
  },
});