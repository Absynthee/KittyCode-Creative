// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// Resolve the canonical origin from Netlify's build environment so canonical
// links, Open Graph images and the sitemap always point at the domain actually
// serving the build — otherwise a preview/staging deploy advertises production
// URLs whose assets 404 (e.g. og:image on the test site).
//   - DEPLOY_PRIME_URL: branch deploys & deploy previews (the test site)
//   - URL:              the site's primary production URL
//   - fallback:         local `astro build`
// The production domain comes from Netlify's primary-domain setting.
const site =
  process.env.DEPLOY_PRIME_URL ||
  process.env.URL ||
  "https://kittycodecreative.com";

// https://astro.build/config
export default defineConfig({
  site,
  // Legacy-URL redirects live in public/_redirects (Netlify serves real 301s).
  integrations: [
    sitemap({
      // The thank-you page is noindexed, so keep it out of the sitemap too.
      filter: (page) => !page.includes("/thank-you"),
    }),
  ],
});
