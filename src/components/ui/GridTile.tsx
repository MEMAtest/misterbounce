import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { GridTile as GridTileType } from "@/types";

interface GridTileProps extends GridTileType {
  className?: string;
  aspectRatio?: "square" | "video" | "portrait";
}

export default function GridTile({
  title,
  image,
  href,
  description,
  className,
  aspectRatio = "square",
}: GridTileProps) {
  const aspectStyles = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  };

  return (
    <Link
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-2xl shadow-lg",
        aspectStyles[aspectRatio],
        className
      )}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/70 transition-all duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-xl md:text-2xl font-black text-white mb-1 drop-shadow-lg">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-white/90 font-medium">{description}</p>
        )}

        {/* Arrow indicator */}
        <div className="mt-4 inline-flex items-center gap-2 text-white group-hover:translate-x-2 transition-transform duration-300">
          <span className="text-sm font-bold uppercase tracking-wider">Explore</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
