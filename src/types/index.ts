// Event types
export interface Event {
  id: string;
  date: string; // ISO format: "2025-03-15"
  venue: string;
  city: string;
  country: string;
  ticketUrl?: string;
  status: "tickets" | "sold_out" | "announced" | "free" | "guestlist";
}

// Video types
export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  description?: string;
  thumbnail?: string;
}

// Product types
export interface Product {
  id: string;
  title: string;
  price: string; // Display format: "£25.00"
  image: string; // Path in /public/images/
  url: string; // External Bandcamp URL
}

// Music/Mix types
export interface Mix {
  id: string;
  title: string;
  platform: "mixcloud" | "soundcloud";
  embedUrl: string;
  externalUrl: string;
}

// Social link types
export interface SocialLink {
  id: string;
  platform: string;
  label: string;
  url: string;
  icon: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Grid tile types
export interface GridTile {
  id: string;
  title: string;
  image: string;
  href: string;
  description?: string;
}
