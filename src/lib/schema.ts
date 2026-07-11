// Helpers for building JSON-LD structured data, so pages don't repeat the
// organisation / website references, the absolute-URL logic or the
// BreadcrumbList boilerplate.
import { SITE_URL } from "./site";

export { SITE_URL };

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Reference to the Organization node defined on the home page. */
export const orgRef = { "@id": ORG_ID };

/** Reference to the WebSite node defined on the home page. */
export const websiteRef = { "@id": WEBSITE_ID };

/** Resolve a site-relative path to an absolute URL. */
export function abs(path: string): string {
  if (path === "/") return SITE_URL;
  return new URL(path, SITE_URL).href;
}

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Build a schema.org BreadcrumbList. Home is prepended automatically, so pass
 * only the trail after it, e.g. breadcrumbs([{ name: "Portfolio", path: "/portfolio" }]).
 */
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
