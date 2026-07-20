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
export const ogPages: Record<string, OgEntry> = {
  seo: {
    title: "SEO, AIO & GEO",
    description:
      "Websites built to be found on Google and cited by AI assistants like ChatGPT, Gemini and Copilot.",
  },
  referrals: {
    title: "Refer a Friend, Earn 10%",
    description:
      "Send someone our way and earn 10% of their first invoice when they book a project. No limits, no catches.",
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
