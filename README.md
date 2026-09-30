# KittyCode Creative

The website for [KittyCode Creative](https://kittycodecreative.com), a web design and development agency based in Eastbourne, East Sussex.

## About the business

KittyCode Creative builds bespoke, accessible and responsive websites for individuals and small businesses. It was founded in August 2024 by Austin Spillman, a digital designer and front-end developer with ten years of experience, including building web pages for Apple's European sites at House337.

What makes it different:

- **No extras, ever.** Pricing is all-inclusive: the price you see is the price you pay. There are no add-ons, upsells or surprise invoices. The only separate cost is the client's own domain name, which they buy and own (domain setup is available as an optional one-off service).
- **Hand-built, not templated.** Every site is built from our own foundations and customised around the client's brand, so no two look the same.
- **Accessible by design.** Built to WCAG standards and tested across phones, tablets and desktops.
- **Found on search and AI.** SEO, AIO and GEO are included as standard, with semantic HTML, structured data on every page and fast, lightweight pages.
- **No meetings needed.** Projects run asynchronously, so they fit around the client's day.
- **£100 referrals.** Anyone who refers a client who books a project gets £100.

### Packages

| Plan     | Monthly  | One-off | Design fee (monthly plans) | Best for                  |
| -------- | -------- | ------- | -------------------------- | ------------------------- |
| Basic    | £60/mo   | £1,300  | £350                       | Individuals and startups  |
| Standard | £180/mo  | £3,400  | £500                       | Small businesses          |
| Complete | £320/mo  | £5,800  | £800                       | Larger businesses         |

Monthly plans run on a 12-month contract and include hosting, security, SSL and changes. One-off builds need a 50% deposit and are handed over for the client to host. The source of truth for pricing is `src/components/sections/Pricing.astro`.

## About the website

Built with [Astro](https://astro.build) and hosted on [Netlify](https://www.netlify.com).

| Area                   | Where                                                                  |
| ---------------------- | ---------------------------------------------------------------------- |
| Pages                  | `src/pages/` (home, services, portfolio, blog, about, FAQ, contact, referrals, SEO, async work, legal) |
| Sections and UI        | `src/components/sections/` and `src/components/ui/`                    |
| Blog posts             | `src/content/blog/`, one markdown file per post                        |
| Portfolio case studies | `src/content/projects/`, one markdown file per project                 |
| Content schemas        | `src/content.config.ts`                                                |
| Site settings          | `src/lib/site.ts` (URL, name, email) and `src/lib/schema.ts` (JSON-LD) |
| Social cards           | Generated at build time by `src/pages/og/[...route].ts`                |
| AI summary             | `public/llms.txt`                                                      |
| Redirects              | `public/_redirects` (keeps old URLs working)                           |
| Analytics              | Umami, proxied through `netlify/edge-functions/umami-send.ts`          |
| Forms                  | Contact form and website questionnaire, sent through Web3Forms         |

### Adding content

- **Blog post:** add a markdown file to `src/content/blog/` with a title, description, excerpt, date, cover and optional banner image (in `src/assets/images/blog/`). Set `draft: true` to keep it off the site.
- **Portfolio project:** add a markdown file to `src/content/projects/`.

Both appear on the site, in the sitemap and in structured data automatically.

### Running locally

Requires Node 22 or later.

```sh
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build into dist/
npm run preview    # serve the build locally
npm run typecheck  # astro check
```

### Branches and deploys

Work goes into `preview`, which Netlify builds as a deploy preview. Merging `preview` into `main` deploys to kittycodecreative.com.

## Contact

[hello@kittycodecreative.com](mailto:hello@kittycodecreative.com) · [kittycodecreative.com/contact](https://kittycodecreative.com/contact)

© KittyCode Creative. All rights reserved.
