import type { Event } from "@/types";

// ============================================================
// HOW TO ADD EVENTS (for Oni)
// ============================================================
// 1. Copy one of the templates below
// 2. Paste it inside the [] brackets
// 3. Fill in the details
// 4. Save the file and push to GitHub — the site updates automatically
//
// TEMPLATE — copy everything between the { } including the braces:
//
//   {
//     id: "1",
//     date: "2026-04-18",
//     city: "London",
//     country: "UK",
//     venue: "Crush @ XOYO",
//     status: "tickets",
//     ticketUrl: "https://link-to-tickets.com",
//   },
//
// STATUS OPTIONS:
//   "tickets"   — shows a "Get Tickets" button (needs ticketUrl)
//   "sold_out"  — shows "Sold Out" badge
//   "announced" — shows "Announced" (no ticket link yet)
//   "free"      — shows "Free Entry"
//   "guestlist" — shows "Guestlist Only"
//
// MULTIPLE EVENTS — just add more objects separated by commas:
//
//   {
//     id: "1",
//     date: "2026-04-18",
//     ...
//   },
//   {
//     id: "2",
//     date: "2026-05-10",
//     ...
//   },
//
// ============================================================

export const events: Event[] = [];

// Helper to get upcoming events only
export function getUpcomingEvents(): Event[] {
  const now = new Date();
  return events.filter((event) => new Date(event.date) >= now);
}

// Helper to get past events
export function getPastEvents(): Event[] {
  const now = new Date();
  return events.filter((event) => new Date(event.date) < now);
}
