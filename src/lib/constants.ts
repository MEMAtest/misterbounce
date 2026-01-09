import type { NavItem, SocialLink } from "@/types";

// Site metadata
export const SITE_CONFIG = {
  name: "Mister Bounce",
  title: "Mister Bounce | DJ - Radio Host - Voiceover",
  description:
    "Professional DJ, Radio Host, and Voiceover Artist. Book for clubs, events, radio shows, and private functions.",
  url: "https://misterbounce.co.uk",
  email: "info@misterbounce.co.uk",
  phone: "07940290714",
};

// Navigation items
export const NAV_ITEMS: NavItem[] = [
  { label: "Events", href: "#events" },
  { label: "Videos", href: "#videos" },
  { label: "Music", href: "#music" },
  { label: "Shop", href: "#shop" },
  { label: "Contact", href: "#contact" },
];

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "instagram",
    platform: "Instagram",
    label: "@misterbounce",
    url: "https://instagram.com/misterbounce",
    icon: "instagram",
  },
  {
    id: "mixcloud",
    platform: "Mixcloud",
    label: "Mixes & Shows",
    url: "https://mixcloud.com/misterbounce",
    icon: "mixcloud",
  },
  {
    id: "soundcloud",
    platform: "SoundCloud",
    label: "Tracks",
    url: "https://soundcloud.com/misterbounce",
    icon: "soundcloud",
  },
  {
    id: "youtube",
    platform: "YouTube",
    label: "Videos",
    url: "https://youtube.com/@misterbounce",
    icon: "youtube",
  },
  {
    id: "bandcamp",
    platform: "Bandcamp",
    label: "Shop",
    url: "https://misterbounce.bandcamp.com",
    icon: "bandcamp",
  },
];

// External store URL
export const STORE_URL = "https://misterbounce.bandcamp.com/merch";

// Booking availability
export const BOOKING_SERVICES = [
  "Club DJ Sets",
  "Radio Shows",
  "Private Events",
  "Corporate Functions",
  "Voiceover Work",
];
