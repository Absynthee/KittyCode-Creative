// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// Resolve the canonical origin from Netlify's build environment so canonical
// links, Open Graph images and the sitemap always point at the domain actually
// serving the build.
//
// Netlify sets DEPLOY_PRIME_URL in *every* context — and on a production build
// it is the `main--kittycode-creative.netlify.app` branch subdomain, NOT the
// custom domain. So it can't be trusted unconditionally: production must pin to
// the canonical domain, while branch/preview deploys use their own
// DEPLOY_PRIME_URL so absolute assets (og:image, sitemap) resolve on the deploy
// that's actually serving them.
//   - CONTEXT === "production": the live custom domain
//   - branch/preview deploys:   that deploy's own URL
//   - local `astro build`:      the same canonical fallback
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
