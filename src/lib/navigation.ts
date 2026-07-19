// Website Navigation

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
    label: "Portfolio",
    path: "/portfolio",
    ariaLabel: "View all projects",
  },
  {
    label: "About",
    path: "/about",
    ariaLabel: "Learn more about KittyCode Creative",
  },
  {
    label: "Services",
    path: "/services",
    ariaLabel: "Explore our services",
  },
  {
    label: "Contact",
    path: "/contact",
    ariaLabel: "Contact KittyCode Creative",
  },
  {
    label: "Blog",
    path: "/blog",
    ariaLabel: "Read our blog",
  },
];

// Secondary links, shown in the mobile menu only
const secondaryLinks: NavItem[] = [
  {
    label: "FAQ",
    path: "/faq",
    ariaLabel: "Read our frequently asked questions",
  },
  {
    label: "Referrals",
    path: "/referrals",
    ariaLabel: "Learn about our referral programme",
  },
  {
    label: "Async Work",
    path: "/async-work",
    ariaLabel: "Learn how we work asynchronously",
  },
  {
    label: "Questionnaire",
    path: "/services/website-questionnaire",
    ariaLabel: "Fill in our website questionnaire",
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
    path: "/portfolio",
    ariaLabel: "View all projects",
  },
  {
    label: "About",
    path: "/about",
    ariaLabel: "Learn more about KittyCode Creative",
  },
  {
    label: "Services",
    path: "/services",
    ariaLabel: "Explore our services",
  },
  {
    label: "Questionnaire",
    path: "/services/website-questionnaire",
    ariaLabel: "Fill in our website questionnaire",
  },
  {
    label: "Referrals",
    path: "/referrals",
    ariaLabel: "Learn about our referral programme",
  },
  {
    label: "Async Work",
    path: "/async-work",
    ariaLabel: "Learn how we work asynchronously",
  },
  {
    label: "Contact",
    path: "/contact",
    ariaLabel: "Contact KittyCode Creative",
  },
  {
    label: "Blog",
    path: "/blog",
    ariaLabel: "Read our blog",
  },
  {
    label: "FAQ",
    path: "/faq",
    ariaLabel: "Read our frequently asked questions",
  },
];

// Footer legal links (rendered separately, below the main footer nav)
const legalLinks: FooterNavItem[] = [
  {
    label: "Privacy Policy",
    path: "/privacy-policy",
    ariaLabel: "Read our Privacy Policy",
  },
  {
    label: "Terms & Conditions",
    path: "/terms-and-conditions",
    ariaLabel: "Read our Terms & Conditions",
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

export const navigation = {
  main: mainLinks,
  secondary: secondaryLinks,
  footer: footerLinks,
  legal: legalLinks,
  social: socialLinks,
};

export function isActive(path: string, currentPath: string): boolean {
  if (path === "/") {
    return currentPath === "/";
  }
  return currentPath.startsWith(path);
}

export type { NavItem, FooterNavItem, SocialItem };
