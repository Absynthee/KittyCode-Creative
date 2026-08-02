// Add a page here to give it a generated OG card. Unlisted pages fall back to
// /og-image.png. Read by src/pages/og/[...route].png.ts and Layout.astro.

export interface OgEntry {
  title: string;
  description: string;
}

// Keys are the page path without leading/trailing slashes ("" is the home page).
// Keep titles to one line and descriptions to ~2 lines, or the card text
// collides with the baked-in URL footer.
export const ogPages: Record<string, OgEntry> = {
  seo: {
    title: "SEO, AIO & GEO",
    description:
      "Websites built to be found on Google and cited by AI assistants like ChatGPT, Gemini and Copilot.",
  },
  services: {
    title: "Bespoke Web Design",
    description:
      "Fast, accessible, custom-built websites, with SEO and hosting included as standard.",
  },
  portfolio: {
    title: "Our Portfolio",
    description:
      "Bespoke websites custom-built for personal brands, portfolios and small businesses.",
  },
  about: {
    title: "About Us",
    description:
      "A bespoke web design agency in Eastbourne building accessible sites that are truly yours.",
  },
  contact: {
    title: "Get in Touch",
    description:
      "Tell us about your project or just say hello. We reply within one working day.",
  },
  faq: {
    title: "FAQs",
    description:
      "Answers about our packages, hosting, SEO, content updates and contracts, all in one place.",
  },
  "async-work": {
    title: "Async by Default",
    description:
      "No mandatory meetings. Your whole project runs over email, on a schedule that suits you.",
  },
  blog: {
    title: "The Blog",
    description:
      "Insights on web design, modern CSS, accessibility and being found online.",
  },
  referrals: {
    title: "Refer a Friend, Earn £100",
    description:
      "Send someone our way and earn £100 when they book a project. No limits, no catches.",
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

/** "/seo/" -> "seo", "/" -> "" */
export function pathToOgKey(pathname: string): string {
  return pathname.replace(/^\/+|\/+$/g, "");
}

export function ogImageForPath(pathname: string): string | undefined {
  const key = pathToOgKey(pathname);
  return key in ogPages ? `/og/${key}.png` : undefined;
}
