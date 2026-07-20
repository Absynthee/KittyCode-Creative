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
      size: [120],
    },
    // KittyCode brand: near-black with a warm ember tint, primary #d94713.
    bgGradient: [
      [10, 10, 12],
      [30, 13, 6],
    ],
    border: { color: [217, 71, 19], width: 24, side: "inline-start" },
    padding: 70,
    font: {
      title: {
        color: [255, 255, 255],
        size: 74,
        weight: "Bold",
        lineHeight: 1.1,
        families: ["Inter"],
      },
      description: {
        color: [206, 206, 212],
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
