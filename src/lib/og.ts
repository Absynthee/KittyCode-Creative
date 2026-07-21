// Central registry of pages that get an auto-generated, branded OG image.
//
// Each entry drives two things:
//  1. The build-time image endpoint in src/pages/og/[...route].png.ts, which
//     renders one PNG per key (e.g. /og/seo.png).
//  2. Layout.astro, which automatically points a page's og:image at its
//     generated card when the page's path is registered here.
//
// To give another page a bespoke OG image, add it here — no per-page edits
// needed. Pages not listed fall back to the sitewide /og-image.png.

export interface OgEntry {
  /** Large heading on the card. */
  title: string;
  /** Supporting line under the title. */
  description: string;
}

// Keys are the page path without leading/trailing slashes ("" is the home page).
// The home page keeps its bespoke public/og-image.png, and dynamic pages (blog
// posts, portfolio items) pass their own cover image, so neither is listed here.
// Keep titles short (one line) and descriptions to ~2 lines so the card text
// never collides with the baked-in URL footer.
export const ogPages: Record<string, OgEntry> = {
  seo: {
    title: "SEO, AIO & GEO",
    description:
      "Websites built to be found on Google and cited by AI assistants like ChatGPT, Gemini and Copilot.",
  },
  services: {
    title: "Bespoke Web Design",
    description:
      "Fast, accessible, hand-coded websites from scratch, with SEO and hosting included as standard.",
  },
  portfolio: {
    title: "Our Portfolio",
    description:
      "Bespoke websites hand-coded for personal brands, portfolios and small businesses.",
  },
  about: {
    title: "About Us",
    description:
      "A bespoke web design agency in Eastbourne building accessible sites that are truly yours.",
  },
  contact: {
    title: "Get in Touch",
    description:
      "Tell us about your project or just say hello — we reply within one working day.",
  },
  faq: {
    title: "FAQs",
    description:
      "Answers about our packages, hosting, SEO, content updates and contracts, all in one place.",
  },
  "async-work": {
    title: "Async by Default",
    description:
      "No mandatory meetings — your whole project runs over email, on a schedule that suits you.",
  },
  blog: {
    title: "The Blog",
    description:
      "Insights on web design, modern CSS, accessibility and being found online.",
  },
  referrals: {
    title: "Refer a Friend, Earn 10%",
    description:
      "Send someone our way and earn 10% of their first invoice when they book a project. No limits, no catches.",
  },
  "services/website-questionnaire": {
    title: "Website Questionnaire",
    description:
      "Tell us about your business and goals so we can tailor the perfect website for you.",
  },
  "privacy-policy": {
    title: "Privacy Policy",
    description:
      "How KittyCode Creative collects, uses and protects your personal information.",
  },
  "terms-and-conditions": {
    title: "Terms & Conditions",
    description:
      "The terms that govern the use of our website and web design services.",
  },
};

/** Normalise a pathname to an ogPages key, e.g. "/seo/" -> "seo", "/" -> "". */
export function pathToOgKey(pathname: string): string {
  return pathname.replace(/^\/+|\/+$/g, "");
}

/**
 * Resolve the generated OG image path for a page, or undefined if the page
 * isn't registered (so the caller can fall back to the default image).
 */
export function ogImageForPath(pathname: string): string | undefined {
  const key = pathToOgKey(pathname);
  return key in ogPages ? `/og/${key}.png` : undefined;
}
