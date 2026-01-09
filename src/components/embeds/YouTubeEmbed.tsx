"use client";

import { cn } from "@/lib/utils";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  autoplay?: boolean;
}

export default function YouTubeEmbed({
  videoId,
  title = "YouTube video",
  className,
  autoplay = false,
}: YouTubeEmbedProps) {
  // Use youtube-nocookie.com for enhanced privacy
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1${autoplay ? "&autoplay=1" : ""}`;

  return (
    <div
      className={cn(
        "relative w-full aspect-video rounded-xl overflow-hidden bg-muted",
        className
      )}
    >
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        loading="lazy"
      />
    </div>
  );
}
