import type { Event } from "@/types";

// Upcoming events - update these with real dates and venues as they're confirmed
export const events: Event[] = [
  // Add real events here as they're confirmed, e.g.:
  // {
  //   id: "1",
  //   date: "2026-04-18",
  //   city: "London",
  //   country: "UK",
  //   venue: "Crush @ XOYO",
  //   status: "tickets",
  //   ticketUrl: "https://...",
  // },
];

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
