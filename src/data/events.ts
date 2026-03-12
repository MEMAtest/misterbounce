import type { Event } from "@/types";
import eventsData from "./events.json";

export const events: Event[] = eventsData.events as Event[];

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
