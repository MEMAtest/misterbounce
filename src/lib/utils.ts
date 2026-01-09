import { type ClassValue, clsx } from "clsx";

// Combine class names (similar to cn from shadcn/ui)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Format date for display
export function formatEventDate(dateString: string): {
  day: string;
  month: string;
  year: string;
  weekday: string;
  full: string;
} {
  const date = new Date(dateString);
  return {
    day: date.getDate().toString().padStart(2, "0"),
    month: date.toLocaleDateString("en-GB", { month: "short" }).toUpperCase(),
    year: date.getFullYear().toString(),
    weekday: date.toLocaleDateString("en-GB", { weekday: "short" }),
    full: date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  };
}

// Generate iCalendar content for "Add to Calendar"
export function generateICS(event: {
  title: string;
  date: string;
  venue: string;
  city: string;
  country: string;
}): string {
  const startDate = new Date(event.date);
  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + 4); // Assume 4 hour event

  const formatICSDate = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Mister Bounce//Event//EN
BEGIN:VEVENT
UID:${Date.now()}@misterbounce.co.uk
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(startDate)}
DTEND:${formatICSDate(endDate)}
SUMMARY:Mister Bounce @ ${event.venue}
LOCATION:${event.venue}, ${event.city}, ${event.country}
DESCRIPTION:Mister Bounce live at ${event.venue}
END:VEVENT
END:VCALENDAR`;
}

// Download ICS file
export function downloadICS(event: {
  title: string;
  date: string;
  venue: string;
  city: string;
  country: string;
}) {
  const icsContent = generateICS(event);
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `misterbounce-${event.venue
    .toLowerCase()
    .replace(/\s+/g, "-")}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Get YouTube thumbnail URL
export function getYouTubeThumbnail(
  videoId: string,
  quality: "default" | "hq" | "mq" | "sd" | "maxres" = "hq"
): string {
  const qualityMap = {
    default: "default",
    mq: "mqdefault",
    hq: "hqdefault",
    sd: "sddefault",
    maxres: "maxresdefault",
  };
  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
}

// Check if date is in the future
export function isFutureDate(dateString: string): boolean {
  return new Date(dateString) > new Date();
}

// Sort events by date
export function sortEventsByDate<T extends { date: string }>(
  events: T[],
  ascending = true
): T[] {
  return [...events].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
}
