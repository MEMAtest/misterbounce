"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  gap?: "sm" | "md" | "lg";
  showArrows?: boolean;
}

export default function Carousel({
  children,
  className,
  gap = "md",
  showArrows = true,
}: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const gapStyles = {
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-6",
  };

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={cn("relative group", className)}>
      {/* Scroll Container */}
      <div
        ref={scrollRef}
        onScroll={checkScrollability}
        className={cn(
          "flex overflow-x-auto scrollbar-hide snap-x snap-mandatory",
          gapStyles[gap],
          "-mx-4 px-4 md:-mx-6 md:px-6"
        )}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-10",
              "w-10 h-10 flex items-center justify-center",
              "bg-white/90 hover:bg-white rounded-full shadow-lg border border-border",
              "text-text-heading transition-all",
              "opacity-0 group-hover:opacity-100",
              !canScrollLeft && "hidden"
            )}
            aria-label="Scroll left"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-10",
              "w-10 h-10 flex items-center justify-center",
              "bg-white/90 hover:bg-white rounded-full shadow-lg border border-border",
              "text-text-heading transition-all",
              "opacity-0 group-hover:opacity-100",
              !canScrollRight && "hidden"
            )}
            aria-label="Scroll right"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

// Carousel Item wrapper for snap alignment
interface CarouselItemProps {
  children: React.ReactNode;
  className?: string;
}

export function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <div className={cn("snap-start flex-shrink-0", className)}>{children}</div>
  );
}
