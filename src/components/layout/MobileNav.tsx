"use client";

import { useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 transform transition-transform duration-300 ease-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="text-xl font-bold text-text-heading">
            {SITE_CONFIG.name}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -mr-2 text-text-heading"
            aria-label="Close menu"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 px-4 text-lg font-medium text-text-heading hover:bg-muted rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Book Now CTA */}
          <div className="mt-6 pt-6 border-t border-border">
            <a
              href="#contact"
              onClick={onClose}
              className="flex items-center justify-center w-full py-3 text-base font-medium text-primary-foreground bg-secondary hover:bg-secondary-hover rounded-lg transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm font-medium text-text-muted mb-4">
              Follow along
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.slice(0, 4).map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-muted hover:text-text-heading transition-colors"
                  aria-label={social.platform}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

// Simple social icons
function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    instagram: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    youtube: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    mixcloud: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.02 8.054l-.463 3.167-.46-3.167H8.16l-.46 3.167-.464-3.167H5.3l1.09 5.89h1.947l.46-3.138.46 3.138h1.948l1.09-5.89h-1.276zm4.728 0H13.26v5.89h2.487c1.63 0 2.955-1.32 2.955-2.945s-1.324-2.945-2.954-2.945zm0 4.42h-1.018V9.523h1.018c.9 0 1.632.73 1.632 1.476s-.732 1.476-1.632 1.476z" />
      </svg>
    ),
    soundcloud: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.058-.05-.1-.1-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c.014.057.045.094.09.094s.089-.037.099-.094l.19-1.308-.19-1.332c-.01-.057-.044-.094-.09-.094m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.104.106.104.061 0 .12-.044.12-.104l.24-2.458-.24-2.563c0-.06-.059-.104-.12-.104m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.138l.225-2.544-.225-2.64c-.015-.075-.074-.135-.15-.135m.96-.089c-.09 0-.149.075-.165.165l-.195 2.73.195 2.52c.016.09.075.164.165.164.091 0 .165-.074.165-.164l.21-2.52-.21-2.73c0-.09-.074-.165-.165-.165m.975-.19c-.105 0-.18.075-.18.18l-.18 2.92.18 2.535c0 .105.075.18.18.18.104 0 .18-.075.18-.18l.195-2.535-.195-2.92c0-.105-.076-.18-.18-.18m1.005-.075c-.119 0-.195.075-.21.195l-.165 2.995.165 2.505c.015.12.091.195.21.195.12 0 .195-.075.195-.195l.18-2.505-.18-2.995c0-.12-.075-.195-.195-.195m1.02.135c-.135 0-.225.09-.225.225l-.15 2.86.15 2.475c0 .135.09.225.225.225.135 0 .225-.09.225-.225l.165-2.475-.165-2.86c0-.135-.09-.225-.225-.225m1.065-.285c-.149 0-.255.105-.27.255l-.12 3.145.12 2.43c.015.15.121.255.27.255.149 0 .255-.105.255-.255l.135-2.43-.135-3.145c-.015-.15-.106-.255-.255-.255m1.065-.36c-.165 0-.285.12-.3.285l-.105 3.51.105 2.4c.015.165.135.285.3.285.164 0 .284-.12.284-.285l.12-2.4-.12-3.51c-.015-.165-.119-.285-.284-.285m1.064-.135c-.18 0-.314.135-.314.315l-.09 3.645.09 2.37c0 .18.134.315.314.315.18 0 .315-.135.315-.315l.09-2.37-.09-3.645c0-.18-.135-.315-.315-.315m1.095 0c-.193 0-.344.149-.344.344l-.075 3.645.075 2.34c0 .195.15.344.344.344.195 0 .344-.149.344-.344l.075-2.34-.075-3.645c0-.195-.149-.344-.344-.344m1.095.06c-.21 0-.375.165-.375.375l-.06 3.584.06 2.295c0 .21.165.375.375.375.21 0 .375-.165.375-.375l.075-2.295-.075-3.584c0-.21-.165-.375-.375-.375m1.155-.075c-.225 0-.405.18-.405.405l-.045 3.66.045 2.28c0 .225.18.405.405.405.225 0 .405-.18.405-.405l.045-2.28-.045-3.66c0-.225-.18-.405-.405-.405m7.14 1.62c-.48 0-.93.12-1.335.33-.27-3.075-2.865-5.475-6-5.475-1.59 0-3.03.645-4.095 1.695-.285.285-.345.63-.345.96v10.14c0 .36.27.66.6.705h10.935c1.95 0 3.525-1.575 3.525-3.525s-1.575-3.525-3.525-3.525h.24z" />
      </svg>
    ),
    bandcamp: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />
      </svg>
    ),
  };

  return icons[name] || <span className="w-6 h-6" />;
}
