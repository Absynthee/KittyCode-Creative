import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Portfolio case studies. Each project is a single markdown file under
// src/content/projects/. This collection is the single source of truth for
// the portfolio grid, the individual case-study pages and their structured
// data, so adding a new project is just adding one markdown file here.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      // Card + hero
      title: z.string(),
      client: z.string(),
      description: z.string(), // short blurb for the portfolio grid card
      summary: z.string(), // longer lead shown in the case-study hero
      cover: image(),
      coverAlt: z.string().optional(),

      // Meta
      liveUrl: z.string().url().optional(),
      year: z.number().optional(),
      tags: z.array(z.string()).default([]),
      services: z.array(z.string()).default([]),
      tech: z.array(z.string()).default([]),

      // Optional pull-quote
      testimonial: z
        .object({
          quote: z.string(),
          author: z.string(),
        })
        .optional(),

      // Ordering / visibility
      order: z.number().default(0),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
