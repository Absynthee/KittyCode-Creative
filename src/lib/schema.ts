import { SITE_URL } from "./site";

export { SITE_URL };

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Both nodes are defined on the home page.
export const orgRef = { "@id": ORG_ID };
export const websiteRef = { "@id": WEBSITE_ID };

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
