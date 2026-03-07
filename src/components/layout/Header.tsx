"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use scrolled state only after mounting to avoid hydration mismatch
  const showScrolledStyles = mounted && isScrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          showScrolledStyles
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with glitch effect */}
            <Link
              href="/"
              className={cn(
                "text-xl md:text-2xl font-black tracking-tight transition-all duration-300 glitch-text hover:scale-105 hover:tracking-wide",
                showScrolledStyles ? "text-text-heading" : "text-white"
              )}
              data-text="MISTER BOUNCE"
            >
              MISTER BOUNCE
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      showScrolledStyles
                        ? "text-text-body hover:text-text-heading"
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Book Now CTA */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className={cn(
                  "inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30",
                  showScrolledStyles
                    ? "text-white bg-secondary hover:bg-primary"
                    : "text-black bg-white hover:bg-primary hover:text-white"
                )}
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn(
                "md:hidden p-2 -mr-2 transition-colors",
                showScrolledStyles ? "text-text-heading" : "text-white"
              )}
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
