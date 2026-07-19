// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.kittycodecreative.com",
  // Legacy-URL redirects live in public/_redirects (Netlify serves real 301s).
  integrations: [
    sitemap({
      // The thank-you page is noindexed, so keep it out of the sitemap too.
      filter: (page) => !page.includes("/thank-you"),
    }),
  ],
});
