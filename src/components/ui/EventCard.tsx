"use client";

import { cn } from "@/lib/utils";
import { formatEventDate, downloadICS } from "@/lib/utils";
import type { Event } from "@/types";
import Button from "./Button";

interface EventCardProps extends Event {
  className?: string;
}

export default function EventCard({
  date,
  venue,
  city,
  country,
  ticketUrl,
  status,
  className,
}: EventCardProps) {
  const formattedDate = formatEventDate(date);

  const statusConfig = {
    tickets: {
      label: "Get Tickets",
      color: "bg-gradient-to-r from-primary to-accent-pink text-white",
      glow: true,
    },
    sold_out: {
      label: "Sold Out",
      color: "bg-gray-400 text-white",
      glow: false,
    },
    announced: {
      label: "Announced",
      color: "bg-gradient-to-r from-secondary to-gray-800 text-white",
      glow: false,
    },
    free: {
      label: "Free Entry",
      color: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
      glow: true,
    },
    guestlist: {
      label: "Guest List",
      color: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
      glow: true,
    },
  };

  const handleAddToCalendar = () => {
    downloadICS({
      title: `Mister Bounce @ ${venue}`,
      date,
      venue,
      city,
      country,
    });
  };

  return (
    <div
      className={cn(
        "group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 md:p-6",
        "bg-white rounded-2xl border border-border/50",
        "hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      {/* Date Block with gradient accent */}
      <div className="flex-shrink-0 text-center min-w-[80px] relative">
        <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-accent-pink/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative">
          <div className="text-xs font-bold text-primary uppercase tracking-wider">
            {formattedDate.month}
          </div>
          <div className="text-4xl md:text-5xl font-black gradient-text leading-none my-1">
            {formattedDate.day}
          </div>
          <div className="text-xs font-medium text-text-muted">{formattedDate.weekday}</div>
        </div>
      </div>

      {/* Divider with gradient */}
      <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />

      {/* Event Details */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold text-text-heading truncate group-hover:text-primary transition-colors">
          {venue}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-sm text-text-body font-medium">
            {city}, {country}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        {/* Add to Calendar Button */}
        <button
          onClick={handleAddToCalendar}
          className="p-3 text-text-muted hover:text-primary hover:bg-primary/10 rounded-xl transition-all"
          aria-label="Add to calendar"
          title="Add to calendar"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </button>

        {/* Status / Ticket Button */}
        {status === "tickets" && ticketUrl ? (
          <Button
            href={ticketUrl}
            isExternal
            variant="primary"
            size="sm"
            className={cn(
              "flex-1 sm:flex-none font-bold shadow-lg",
              statusConfig[status].glow && "shadow-primary/30 hover:shadow-primary/50"
            )}
          >
            {statusConfig[status].label}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        ) : (
          <span
            className={cn(
              "inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold rounded-xl shadow-md",
              statusConfig[status].color,
              status === "sold_out" && "opacity-70"
            )}
          >
            {statusConfig[status].label}
          </span>
        )}
      </div>
    </div>
  );
}
