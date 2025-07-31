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
  // {
  //   label: "Projects",
  //   path: "/#projects",
  //   ariaLabel: "View all projects",
  // },
  // {
  //   label: "About",
  //   path: "/#about",
  //   ariaLabel: "Learn more about me",
  // },
  // {
  //   label: "Contact",
  //   path: "/#contact",
  //   ariaLabel: "Contact me",
  // },
];

// Footer navigation links
const footerLinks: FooterNavItem[] = [
  {
    label: "Home",
    path: "/#",
    ariaLabel: "Go to Home",
  },
  // {
  //   label: "Projects",
  //   path: "/#projects",
  //   ariaLabel: "View all projects",
  // },
  // {
  //   label: "About",
  //   path: "/#about",
  //   ariaLabel: "Learn more about me",
  // },
  // {
  //   label: "Contact",
  //   path: "/#contact",
  //   ariaLabel: "Contact me",
  // },
  // {
  //   label: "Components",
  //   path: "/components",
  //   ariaLabel: "View reusable components",
  // },
];

// Footer social links (@lucide/astro icons)
const socialLinks: SocialItem[] = [
  {
    label: "GitHub",
    path: "https://github.com/absynthee",
    icon: "github",
    ariaLabel: "View my GitHub profile",
  },
  {
    label: "LinkedIn",
    path: "https://linkedin.com/in/ASpillman",
    icon: "linkedin",
    ariaLabel: "Connect with me on LinkedIn",
  },
  {
    label: "Behance",
    path: "https://behance.net/austinspillman",
    icon: "behance",
    ariaLabel: "View my work on Behance",
  },
  {
    label: "Email",
    path: "mailto:austinspillman@gmail.com",
    icon: "email",
    ariaLabel: "Send me an email",
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
