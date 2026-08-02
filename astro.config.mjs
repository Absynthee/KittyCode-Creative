// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// DEPLOY_PRIME_URL is set in every Netlify context, and on production it is the
// branch subdomain rather than the custom domain, so production must pin to
// PRODUCTION_URL. Previews use their own URL so og:image and sitemap resolve on
// the deploy serving them.
const PRODUCTION_URL = "https://kittycodecreative.com";
const site =
  process.env.CONTEXT === "production"
    ? PRODUCTION_URL
    : process.env.DEPLOY_PRIME_URL || PRODUCTION_URL;

// https://astro.build/config
export default defineConfig({
  site,
  vite: {
    build: { cssMinify: "esbuild" },
  },
  // Legacy-URL redirects live in public/_redirects (Netlify serves real 301s).
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/thank-you"),
    }),
  ],
});
