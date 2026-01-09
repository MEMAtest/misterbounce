import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps extends Product {
  className?: string;
}

export default function ProductCard({
  title,
  price,
  image,
  url,
  className,
}: ProductCardProps) {
  const isSvg = image.endsWith('.svg');

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block bg-white rounded-2xl overflow-hidden border border-border/50",
        "hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300",
        className
      )}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {isSvg ? (
          // Use img tag for SVGs
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          // Use Next.js Image for PNGs/JPGs
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
          />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Quick view badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-text-heading opacity-0 group-hover:opacity-100 transition-opacity">
          View
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 bg-gradient-to-b from-white to-gray-50/50">
        <h3 className="text-sm font-semibold text-text-heading group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-bold text-primary">
            {price}
          </p>

          {/* Shop arrow */}
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
            <svg
              className="w-4 h-4 text-primary group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}
