"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { getYouTubeThumbnail } from "@/lib/utils";
import type { Video } from "@/types";

interface VideoCardProps extends Video {
  className?: string;
  onClick?: () => void;
  aspectRatio?: "video" | "square";
}

export default function VideoCard({
  youtubeId,
  title,
  description,
  thumbnail,
  className,
  onClick,
  aspectRatio = "video",
}: VideoCardProps) {
  const thumbnailUrl = thumbnail || getYouTubeThumbnail(youtubeId, "hq");

  const aspectStyles = {
    video: "aspect-video",
    square: "aspect-square",
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Open YouTube video in new tab
      window.open(`https://www.youtube.com/watch?v=${youtubeId}`, "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "group relative block w-full overflow-hidden rounded-xl bg-muted text-left",
        className
      )}
    >
      {/* Thumbnail */}
      <div className={cn("relative w-full", aspectStyles[aspectRatio])}>
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all shadow-lg">
            <svg
              className="w-7 h-7 text-text-heading ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Duration badge (optional) */}
        {/* <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs text-white font-medium">
          12:34
        </div> */}
      </div>

      {/* Title & Description */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-text-heading group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        {description && (
          <p className="mt-1 text-sm text-text-muted line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </button>
  );
}
