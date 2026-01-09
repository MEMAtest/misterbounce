import type { Event } from "@/types";

// Upcoming events - update these with real dates and venues
export const events: Event[] = [
  {
    id: "1",
    date: "2026-01-25",
    city: "London",
    country: "UK",
    venue: "Fabric - Room 2",
    status: "tickets",
    ticketUrl: "https://ra.co/events",
  },
  {
    id: "2",
    date: "2026-02-07",
    city: "Manchester",
    country: "UK",
    venue: "Warehouse Project",
    status: "tickets",
    ticketUrl: "https://ra.co/events",
  },
  {
    id: "3",
    date: "2026-02-14",
    city: "London",
    country: "UK",
    venue: "XOYO - Valentine's Special",
    status: "tickets",
    ticketUrl: "https://ra.co/events",
  },
  {
    id: "4",
    date: "2026-02-28",
    city: "Birmingham",
    country: "UK",
    venue: "Hare & Hounds",
    status: "guestlist",
    ticketUrl: "#contact",
  },
  {
    id: "5",
    date: "2026-03-14",
    city: "Amsterdam",
    country: "NL",
    venue: "Paradiso",
    status: "announced",
  },
  {
    id: "6",
    date: "2026-03-21",
    city: "Bristol",
    country: "UK",
    venue: "Motion - Main Room",
    status: "tickets",
    ticketUrl: "https://ra.co/events",
  },
  {
    id: "7",
    date: "2026-04-04",
    city: "Berlin",
    country: "DE",
    venue: "Watergate",
    status: "announced",
  },
  {
    id: "8",
    date: "2026-04-18",
    city: "Ibiza",
    country: "ES",
    venue: "DC10 - Opening Party",
    status: "announced",
  },
  {
    id: "9",
    date: "2026-05-02",
    city: "Leeds",
    country: "UK",
    venue: "Wire Club",
    status: "tickets",
    ticketUrl: "https://ra.co/events",
  },
  {
    id: "10",
    date: "2026-05-16",
    city: "Glasgow",
    country: "UK",
    venue: "Sub Club",
    status: "tickets",
    ticketUrl: "https://ra.co/events",
  },
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
