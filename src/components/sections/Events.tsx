"use client";

import { useState } from "react";
import { EventCard, Button } from "@/components/ui";
import { events } from "@/data";
import { sortEventsByDate, isFutureDate } from "@/lib/utils";

const INITIAL_SHOW = 3;

export default function Events() {
  const [showAll, setShowAll] = useState(false);

  // Split into upcoming and past events
  const upcomingEvents = sortEventsByDate(
    events.filter((event) => isFutureDate(event.date))
  );
  const pastEvents = sortEventsByDate(
    events.filter((event) => !isFutureDate(event.date))
  ).reverse();

  // Show 3 initially, or all if expanded
  const displayEvents = showAll
    ? upcomingEvents.slice(0, 6)
    : upcomingEvents.slice(0, INITIAL_SHOW);

  const hasMoreEvents = upcomingEvents.length > INITIAL_SHOW;

  return (
    <section
      id="events"
      className="section relative overflow-hidden bg-[#f5f5f5]"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-primary/5 to-accent-pink/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-accent-cyan/5 to-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Live Shows</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-text-heading mb-3">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="text-lg text-text-body">
              Catch the vibe live at these upcoming shows
            </p>
          </div>

          {upcomingEvents.length > 6 && (
            <Button href="/events" variant="ghost" size="sm" className="group">
              View all events
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          )}
        </div>

        {/* Timeline Events */}
        {displayEvents.length > 0 ? (
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent-pink to-accent-cyan" />

            <div className="space-y-8">
              {displayEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 -ml-2 bg-primary rounded-full border-4 border-[#f5f5f5] shadow-lg z-10" />

                  {/* Card - alternates left/right on desktop */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <EventCard {...event} />
                  </div>
                </div>
              ))}
            </div>

            {/* Show more/less button */}
            {hasMoreEvents && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-lg font-medium text-text-body hover:bg-muted transition-colors"
                >
                  {showAll ? (
                    <>
                      Show less
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Show {Math.min(upcomingEvents.length - INITIAL_SHOW, 3)} more events
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-border/50 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold text-text-heading mb-1">
              No upcoming events
            </p>
            <p className="text-text-muted">
              Follow on social media for announcements
            </p>
          </div>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-black text-text-heading mb-2 text-center">
              Here&apos;s what you <span className="text-text-muted">missed</span>
            </h3>
            <p className="text-text-muted text-center mb-8">Previous shows</p>
            <div className="grid gap-4 max-w-2xl mx-auto">
              {pastEvents.slice(0, 6).map((event) => (
                <div key={event.id} className="flex items-center justify-between p-4 bg-white/60 rounded-xl border border-border/30 opacity-75">
                  <div>
                    <p className="font-bold text-text-heading">{event.venue}</p>
                    <p className="text-sm text-text-muted">{event.city}, {event.country}</p>
                  </div>
                  <p className="text-sm text-text-muted font-medium">
                    {new Date(event.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="inline-block p-8 bg-black rounded-2xl shadow-xl">
            <p style={{ color: "#ffffff" }} className="font-bold mb-4 text-xl">
              Mister Bounce at your event
            </p>
            <a
              href="#contact"
              style={{ backgroundColor: "#8b5cf6", color: "#ffffff" }}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg hover:opacity-90 transition-all"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
