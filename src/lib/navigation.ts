// Website Navigation
// This file contains the navigation structure for the website

// Definitions for navigation items and social links
interface NavItem {
  label: string;
  path: string;
  ariaLabel?: string;
  icon?: string;
}

interface FooterNavItem {
  label: string;
  path: string;
  ariaLabel?: string;
  icon?: string;
}

interface SocialItem {
  icon: string;
  label: string;
  path: string;
  ariaLabel?: string;
}

// Main navigation items
const mainLinks: NavItem[] = [
  {
    label: "Home",
    path: "/#",
    ariaLabel: "Go to Home",
  },
  {
    label: "Portfolio",
    path: "/#portfolio",
    ariaLabel: "View all projects",
  },
  {
    label: "About",
    path: "/#about",
    ariaLabel: "Learn more about KittyCode Creative",
  },
  {
    label: "Services",
    path: "/#services",
    ariaLabel: "Explore our services",
  },
  {
    label: "Contact",
    path: "/#contact",
    ariaLabel: "Contact KittyCode Creative",
  },
  {
    label: "Blog",
    path: "/blog",
    ariaLabel: "Read our blog",
  },
];

// Footer navigation links
const footerLinks: FooterNavItem[] = [
  {
    label: "Home",
    path: "/#",
    ariaLabel: "Go to Home",
  },
  {
    label: "Portfolio",
    path: "/#portfolio",
    ariaLabel: "View all projects",
  },
  {
    label: "About",
    path: "/#about",
    ariaLabel: "Learn more about KittyCode Creative",
  },
  {
    label: "Services",
    path: "/#services",
    ariaLabel: "Explore our services",
  },
  {
    label: "Contact",
    path: "/#contact",
    ariaLabel: "Contact KittyCode Creative",
  },
  {
    label: "Blog",
    path: "/blog",
    ariaLabel: "Read our blog",
  },
];

// Footer social links (@lucide/astro icons)
const socialLinks: SocialItem[] = [
  {
    label: "Facebook",
    path: "https://www.facebook.com/KittyCodeCreative",
    icon: "facebook",
    ariaLabel: "Connect with us on Facebook",
  },
  {
    label: "LinkedIn",
    path: "https://www.linkedin.com/company/kittycode-creative",
    icon: "linkedin",
    ariaLabel: "Connect with us on LinkedIn",
  },
  {
    label: "X",
    path: "https://x.com/KittyCodeCreate",
    icon: "twitter",
    ariaLabel: "Follow us on X",
  },
  {
    label: "Instagram",
    path: "https://www.instagram.com/kittycode_creative",
    icon: "instagram",
    ariaLabel: "Follow us on Instagram",
  },
  {
    label: "Email",
    path: "mailto:hello@kittycodecreative.com",
    icon: "email",
    ariaLabel: "Send us an email",
  },
];

// Export an object with all navigation-related data
export const navigation = {
  main: mainLinks,
  footer: footerLinks,
  social: socialLinks,
};

// Utility function to check if a path is active
export function isActive(path: string, currentPath: string): boolean {
  if (path === "/") {
    return currentPath === "/";
  }
  return currentPath.startsWith(path);
}

// Export types for external use
export type { NavItem, FooterNavItem, SocialItem };
