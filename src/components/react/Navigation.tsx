import React, { useState, useEffect, useRef } from "react";
import { navigation, isActive } from "../../lib/navigation";
import type { NavItem, SocialItem } from "../../lib/navigation";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        id?: string;
        src?: string;
        trigger?: string;
        stroke?: string;
        colors?: string;
        state?: string;
        loading?: string;
      };
    }
  }
}

interface NavigationProps {
  currentPath: string;
}

function Navigation({ currentPath }: NavigationProps) {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Initialize theme
  useEffect(() => {
    const getInitialTheme = () => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme !== null) return savedTheme === "dark";
      return (
        window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false
      );
    };

    const initialIsDark = getInitialTheme();
    setIsDark(initialIsDark);
    applyTheme(initialIsDark);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("theme") === null) {
        setIsDark(e.matches);
        applyTheme(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  // Auto-hide on scroll (mobile only)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 10;

      if (Math.abs(currentScrollY - lastScrollY) < threshold) return;

      const shouldBeVisible =
        currentScrollY < lastScrollY || currentScrollY < 100;
      setIsVisible(shouldBeVisible);

      if (!shouldBeVisible && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Handle touch gestures
  useEffect(() => {
    if (!menuRef.current) return;

    let startX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isMobileMenuOpen) return;

      const currentX = e.touches[0].clientX;
      const diffX = startX - currentX;

      if (diffX > 50) {
        setIsMobileMenuOpen(false);
      }
    };

    const menuElement = menuRef.current;
    menuElement.addEventListener("touchstart", handleTouchStart);
    menuElement.addEventListener("touchmove", handleTouchMove);

    return () => {
      menuElement.removeEventListener("touchstart", handleTouchStart);
      menuElement.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isMobileMenuOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Icon animations setup
  useEffect(() => {
    const setupIconAnimations = () => {
      const githubIcon = document.getElementById("icon-github");
      const linkedinIcon = document.getElementById("icon-linkedin");
      const iconCollection = [githubIcon, linkedinIcon];

      iconCollection.forEach((icon) => {
        if (icon) {
          let isReady = false;
          let hasRevealed = false;

          const revealObserver = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && !hasRevealed) {
                  hasRevealed = true;
                  if (isReady) {
                    triggerRevealAnimation();
                  }
                  revealObserver.unobserve(icon);
                }
              });
            },
            { threshold: 0.1, rootMargin: "50px" }
          );

          revealObserver.observe(icon);

          icon.addEventListener("ready", () => {
            isReady = true;
            if (hasRevealed) {
              triggerRevealAnimation();
            }
          });

          icon.addEventListener("mouseenter", () => {
            if (isReady) {
              (icon as any).playerInstance.state = "hover-pinch";
              (icon as any).playerInstance.playFromBeginning();
            }
          });

          function triggerRevealAnimation() {
            if (icon && (icon as any).playerInstance) {
              (icon as any).playerInstance.state = "in-reveal";
              (icon as any).playerInstance.playFromBeginning();
            }
          }
        }
      });
    };

    const timer = setTimeout(setupIconAnimations, 100);
    return () => clearTimeout(timer);
  }, []);

  const applyTheme = (dark: boolean) => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  const handleThemeToggle = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");

    if (!document.startViewTransition) {
      applyTheme(newIsDark);
      return;
    }

    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;

    const transition = document.startViewTransition(() => {
      applyTheme(newIsDark);
    });

    transition.ready.then(() => {
      document.documentElement.style.setProperty("--x", `${x}px`);
      document.documentElement.style.setProperty("--y", `${y}px`);
    });
  };

  const checkIsActive = (path: string) => {
    return isActive(path, currentPath);
  };

  return (
    <nav
      ref={navRef}
      className={`navigation ${isVisible ? "visible" : "hidden"} ${
        isMobileMenuOpen ? "menu-open" : ""
      }`}
    >
      {/* Hamburger Button (mobile only) */}
      <button
        className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="overlay" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Main Navigation Content */}
      <div
        ref={menuRef}
        className="nav-content"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        <div className="main-nav">
          {navigation.main.map((item: NavItem) => (
            <a
              key={item.path}
              href={item.path}
              className={`nav-link ${checkIsActive(item.path) ? "active" : ""}`}
              aria-label={item.ariaLabel}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="social-nav">
          {/* {navigation.social.map((item: SocialItem) => (
            <a
              key={item.path}
              href={item.path}
              className="social-link"
              aria-label={item.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.label}</span>
            </a>
          ))} */}

          <label htmlFor="theme-toggle" className="toggle">
            <input
              id="theme-toggle"
              type="checkbox"
              checked={isDark}
              onChange={handleThemeToggle}
            />
            <div></div>
          </label>
        </div>

        <div className="mobile-theme-section">
          <span>Theme</span>
          <label htmlFor="theme-toggle" className="mobile-toggle">
            <input
              id="theme-toggle"
              type="checkbox"
              checked={isDark}
              onChange={handleThemeToggle}
            />
            <div></div>
          </label>
        </div>
      </div>

      <style>{`
        /* Base Navigation */
        .navigation {
          position: fixed;
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          transition: transform 0.3s ease;
          // max-width: 720px;
          margin: 0 auto;
        }

        .navigation.hidden {
          transform: translateX(-50%) translateY(-100px);
        }

        /* Hamburger (hidden on desktop) */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 44px;
          height: 44px;
          background: hsl(from var(--card) h s l / 0.15);
          backdrop-filter: blur(8px);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          padding: 8px;
          transition: all 0.3s ease;
          position: relative;
          z-index: 5;
        }

        .hamburger span {
          width: 100%;
          height: 3px;
          background: var(--foreground);
          border-radius: 3px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(7px, 7px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scale(0);
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        /* Desktop Navigation Content */
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 1rem;
          border: 1px solid hsl(from var(--border) h s l / 0.1);
          border-radius: 2rem;
          background: hsl(from var(--card) h s l / 0.5);
          backdrop-filter: blur(12px);
          box-shadow: 0 0 100px -10px rgb(226, 40, 40, 0.5);
          gap: var(--space-3xl);
        }

        .main-nav {
          display: flex;
          gap: var(--space-m);
          margin-inline: var(--space-s);
        }

        .nav-link {
          color: hsl(from var(--foreground) h s l / 0.7);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s ease;
          padding: 0.25rem 1rem;
          border-radius: var(--radius);
          position: relative;
        }

  .nav-link:hover {
    color: var(--primary);
    background: hsl(from var(--primary) h s l / 0.1);
  }

  .nav-link.active {
    color: var(--primary);
    font-weight: 600;
  }

  .nav-link:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

        .social-nav {
          display: flex;
          gap: var(--space-s);
          margin-inline: var(--space-3xs);
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-theme-section {
          display: none;
        }

        .overlay {
          display: none;
        }

        /* Utility Classes */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        /* Theme Toggle */
        .toggle, .mobile-toggle {
          transform: scale(0.66);
          transform-origin: center;
          cursor: pointer;
          z-index: 10;
          transition: 0.5s ease all;
        }

        .toggle:hover, .mobile-toggle:hover {
          transform: scale(0.55) rotate(45deg);
          transition: 0.5s ease all;
        }

        .toggle input, .mobile-toggle input {
          display: none;
        }

        .toggle input + div, .mobile-toggle input + div {
          border-radius: 50%;
          width: 36px;
          height: 36px;
          position: relative;
          box-shadow: inset 12px -12px 0 0 var(--toggle-color);
          transform: scale(1) rotate(-2deg);
          transition: box-shadow 0.5s ease 0s, transform 0.4s ease 0.1s;
        }

        .toggle input + div:before, .mobile-toggle input + div:before {
          content: "";
          width: inherit;
          height: inherit;
          border-radius: inherit;
          position: absolute;
          left: 0;
          top: 0;
          background: light-dark(transparent, var(--toggle-color));
          transition: background 0.3s ease;
        }

        .toggle input + div:after, .mobile-toggle input + div:after {
          content: "";
          width: 4px;
          height: 4px;
          margin: -2px 0 0 -4px;
          width: 4px;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          box-shadow:
            1px -22px 0 var(--toggle-color),
            1px 23px 0 var(--toggle-color),
            23px 0 0 var(--toggle-color),
            -21px 0 0 var(--toggle-color),
            17px 15px 0 var(--toggle-color),
            -15px 15px 0 var(--toggle-color),
            17px -15px 0 var(--toggle-color),
            -15px -15px 0 var(--toggle-color);
          transform: scale(0);
          transition: all 0.3s ease;
        }

        .toggle input:checked + div, .mobile-toggle input:checked + div {
          box-shadow: inset 32px -32px 0 0 var(--primary);
          transform: scale(0.5) rotate(0deg);
          transition: transform 0.3s ease 0.1s, box-shadow 0.2s ease 0s;
        }

        .toggle input:checked + div:before, .mobile-toggle input:checked + div:before {
          background: var(--toggle-color);
          transition: background 0.3s ease 0.1s;
        }

        .toggle input:checked + div:after, .mobile-toggle input:checked + div:after {
          transform: scale(1.5);
          transition: transform 0.5s ease 0.15s;
        }

        .nav-link:focus-visible {
          outline: 2px solid var(--primary);
          outline-offset: 2px;
}

        .hamburger:focus-visible {
          outline: 2px solid var(--primary);
          outline-offset: 2px;
}

        .social-link:focus-visible {
          outline: 2px solid var(--primary);
          outline-offset: 2px;
}

    @keyframes reveal-in {
      from {
        clip-path: circle(0% at var(--x) var(--y));
      }
      to {
        clip-path: circle(150% at var(--x) var(--y));
      }
    }

    @keyframes reveal-out {
      from {
        clip-path: circle(150% at var(--x) var(--y));
      }
      to {
        clip-path: circle(0% at var(--x) var(--y));
      }
    }

        /* Mobile Responsive */
        @media screen and (max-width: 768px) {
          .navigation {
            top: 1rem;
            right: 1rem;
            left: auto;
            transform: none;
          }

          .navigation.hidden {
            transform: translateY(-100px);
          }

          .hamburger {
            display: flex;
          }

          .hamburger:hover {
            transform: scale(1.05);
          }

          .nav-content {
            position: fixed;
            top: 0;
            right: 0;
            width: 300px;
            max-width: 90vw;
            height: 100vh;
            background: hsl(from var(--background) h s l / 0.8);
            backdrop-filter: blur(12px);
            border-left: 1px solid hsl(from var(--card) h s l / 0.2);
            border-radius: 0;
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            flex-direction: column;
            padding: 6rem 2rem 2rem;
            gap: var(--space-2xl);
            overflow-y: auto;
            box-shadow: none;
          }

          .menu-open .nav-content {
            transform: translateX(0);
          }

          .main-nav {
      flex-direction: column;
      align-items: center;
      gap: var(--space-m);
          }

          .nav-link {
            font-size: var(--step-0);
            padding: 0.25rem 2rem;
            border-bottom: 1px solid transparent;
            position: relative;
          }

          .nav-link:hover {
            border-bottom-color: var(--primary);
          }

          .nav-link.active::before {
            content: '';
            position: absolute;
            left: -1rem;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 2rem;
            background: var(--primary);
            border-radius: 2px;
          }

          .social-nav {
          display: none;
          visibility: hidden;
            flex-direction: row;
            justify-content: center;
            gap: 1rem;
          }

          .toggle {
            display: none;
          }

          .mobile-theme-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 2rem 0;
            border-top: 1px solid hsl(from var(--card) h s l / 1);
            margin-top: auto;
            width: 70%;
          }

          .overlay {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            animation: fadeIn 0.3s ease;
          }

          lord-icon {
            width: 48px;  
            height: 48px;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        }
      `}</style>
    </nav>
  );
}

export default Navigation;
