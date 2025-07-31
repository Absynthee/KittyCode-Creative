// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.kittycodecreative.com",
  integrations: [
    sitemap(),
    // { filter: (page) => page !== '/404', // exclude page from sitemap }
    react(),
  ],
});
