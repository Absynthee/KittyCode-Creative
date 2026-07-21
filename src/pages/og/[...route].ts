import { OGImageRoute } from "astro-og-canvas";
import type { OGImageOptions } from "astro-og-canvas";
import { ogPages } from "@/lib/og";

// Renders one branded OG image per entry in `ogPages` at build time, served as
// a static PNG at /og/<key>.png (1200x630). Add pages in src/lib/og.ts.
export const { getStaticPaths, GET } = await OGImageRoute({
  // The route param ("route") is inferred from the [...route].ts filename.
  pages: ogPages,
  getImageOptions: (_path, page): OGImageOptions => ({
    title: page.title,
    description: page.description,
    logo: {
      path: "./public/favicon.png",
      size: [110],
    },
    // Matches public/og-image.png: dark card with a warm ember glow in the
    // top-left corner (pre-rendered) and a bold orange headline.
    bgImage: { path: "./src/assets/og/bg.png", fit: "cover" },
    padding: 70,
    font: {
      title: {
        color: [217, 71, 19],
        size: 76,
        weight: "Bold",
        lineHeight: 1.1,
        families: ["Inter"],
      },
      description: {
        color: [214, 214, 220],
        size: 34,
        weight: "Medium",
        lineHeight: 1.4,
        families: ["Inter"],
      },
    },
    fonts: [
      "./src/assets/og/Inter-Bold.ttf",
      "./src/assets/og/Inter-Medium.ttf",
    ],
    format: "PNG",
  }),
});
