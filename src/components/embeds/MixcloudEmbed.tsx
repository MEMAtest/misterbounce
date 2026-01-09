"use client";

import { cn } from "@/lib/utils";

interface MixcloudEmbedProps {
  // Feed URL path (e.g., "/misterbounce/my-mix-name/")
  feedUrl: string;
  className?: string;
  // Embed style options
  mini?: boolean;
  hideArtwork?: boolean;
  light?: boolean;
}

export default function MixcloudEmbed({
  feedUrl,
  className,
  mini = false,
  hideArtwork = false,
  light = true,
}: MixcloudEmbedProps) {
  // Build the embed URL with options
  const params = new URLSearchParams({
    feed: feedUrl,
    mini: mini ? "1" : "0",
    hide_cover: hideArtwork ? "1" : "0",
    light: light ? "1" : "0",
    hide_artwork: hideArtwork ? "1" : "0",
  });

  const embedUrl = `https://www.mixcloud.com/widget/iframe/?${params.toString()}`;
  const height = mini ? 60 : 120;

  return (
    <div className={cn("w-full rounded-xl overflow-hidden bg-muted", className)}>
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        frameBorder="0"
        allow="autoplay"
        loading="lazy"
        title="Mixcloud Player"
        className="w-full"
      />
    </div>
  );
}
