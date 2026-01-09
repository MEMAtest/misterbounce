"use client";

import { cn } from "@/lib/utils";

interface SoundCloudEmbedProps {
  // Full track or playlist URL
  trackUrl: string;
  className?: string;
  // Embed type
  type?: "track" | "playlist";
  // Visual options
  visual?: boolean;
  showArtwork?: boolean;
  color?: string;
}

export default function SoundCloudEmbed({
  trackUrl,
  className,
  type = "track",
  visual = false,
  showArtwork = true,
  color = "0ea5e9", // Primary color without #
}: SoundCloudEmbedProps) {
  // Build the embed URL with options
  const params = new URLSearchParams({
    url: trackUrl,
    color: color,
    auto_play: "false",
    hide_related: "true",
    show_comments: "false",
    show_user: "true",
    show_reposts: "false",
    show_teaser: "false",
    visual: visual ? "true" : "false",
    show_artwork: showArtwork ? "true" : "false",
  });

  const embedUrl = `https://w.soundcloud.com/player/?${params.toString()}`;

  // Height depends on type and visual mode
  let height = 166; // Default track height
  if (type === "playlist") {
    height = 450;
  } else if (visual) {
    height = 300;
  }

  return (
    <div className={cn("w-full rounded-xl overflow-hidden bg-muted", className)}>
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        frameBorder="0"
        allow="autoplay"
        loading="lazy"
        title="SoundCloud Player"
        className="w-full"
        scrolling="no"
      />
    </div>
  );
}
