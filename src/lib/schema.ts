import { SITE_URL } from "./site";

export { SITE_URL };

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Both nodes are defined on the home page.
export const orgRef = { "@id": ORG_ID };
export const websiteRef = { "@id": WEBSITE_ID };

// Embedded as the Organization's founder on the home and about pages, so
// crawlers see the person's experience, not just the agency's founding date.
export const FOUNDER = {
  "@type": "Person",
  "@id": `${SITE_URL}/about#founder`,
  name: "Austin Spillman",
  jobTitle: "Founder and Front-end Web Developer",
  description:
    "Digital designer and front-end web developer with 10 years of experience in the design and tech industry, including designing and building web pages for Apple's sites across Europe at House337.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Anglia Ruskin University",
  },
  knowsAbout: [
    "Front-end Web Development",
    "Web Design",
    "Digital Design",
    "Accessibility (WCAG)",
  ],
  sameAs: ["https://www.linkedin.com/in/aspillman/"],
};

// Ordered nearest-first so local geo queries have concrete places to match.
export const AREA_SERVED = [
  { "@type": "City", name: "Eastbourne" },
  { "@type": "City", name: "Bexhill-on-Sea" },
  { "@type": "City", name: "Hastings" },
  { "@type": "City", name: "Seaford" },
  { "@type": "City", name: "Polegate" },
  { "@type": "City", name: "Hailsham" },
  { "@type": "City", name: "Brighton & Hove" },
  { "@type": "AdministrativeArea", name: "East Sussex" },
  { "@type": "Country", name: "United Kingdom" },
];

export function abs(path: string): string {
  if (path === "/") return SITE_URL;
  return new URL(path, SITE_URL).href;
}

export interface Crumb {
  name: string;
  path: string;
}

// Home is prepended automatically, so pass only the trail after it.
export function breadcrumbs(trail: Crumb[]) {
  const items: Crumb[] = [{ name: "Home", path: "/" }, ...trail];
  const last = trail[trail.length - 1];
  return {
    "@type": "BreadcrumbList",
    "@id": `${abs(last.path)}#breadcrumb`,
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: abs(crumb.path),
    })),
  };
}
