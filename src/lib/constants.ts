import type { NavItem, SocialLink } from "@/types";

// Site metadata
export const SITE_CONFIG = {
  name: "Mister Bounce",
  title: "Mister Bounce | DJ - Radio Host - Voiceover",
  description:
    "Mister Bounce - Professional DJ, Radio Host, and Voiceover Artist. Hip Hop, RnB, House & Soul. Available for clubs, events, radio shows, and private functions.",
  url: "https://misterbounce.co.uk",
  email: "info@misterbounce.co.uk",
  phone: "07940290714",
};

// Navigation items
export const NAV_ITEMS: NavItem[] = [
  { label: "Events", href: "#events" },
  { label: "Music", href: "#music" },
  { label: "Contact", href: "#contact" },
];

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "instagram",
    platform: "Instagram",
    label: "@misterbounceuk",
    url: "https://instagram.com/misterbounceuk",
    icon: "instagram",
  },
  {
    id: "mixcloud",
    platform: "Mixcloud",
    label: "Mixes & Shows",
    url: "https://www.mixcloud.com/misterbounceuk/",
    icon: "mixcloud",
  },
  {
    id: "soundcloud",
    platform: "SoundCloud",
    label: "Tracks",
    url: "https://soundcloud.com/misterbounceuk",
    icon: "soundcloud",
  },
];

// Booking availability
export const BOOKING_SERVICES = [
  "Club DJ Sets",
  "Radio Shows",
  "Private Events",
  "Corporate Functions",
  "Voiceover Work",
];
