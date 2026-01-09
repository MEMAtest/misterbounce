"use client";

import { useState, useEffect, useCallback } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const onMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  const onMouseDown = useCallback(() => setIsClicking(true), []);
  const onMouseUp = useCallback(() => setIsClicking(false), []);

  const onMouseEnter = useCallback(() => setIsVisible(true), []);
  const onMouseLeave = useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    // Check if device has touch (likely mobile)
    if (typeof window !== "undefined" && "ontouchstart" in window) {
      return; // Don't show custom cursor on touch devices
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    // Track hovering over interactive elements
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        target.classList.contains("cursor-pointer");
      setIsHovering(isInteractive);
    };

    document.addEventListener("mouseover", handleHover);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", handleHover);
    };
  }, [onMouseMove, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave]);

  // Don't render on touch devices or SSR
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor globally */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        @media (hover: none) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>

      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-200 ${
            isHovering ? "w-4 h-4" : "w-2 h-2"
          }`}
        />
      </div>

      {/* Cursor ring */}
      <div
        className={`fixed pointer-events-none z-[9998] rounded-full border-2 border-white/60 mix-blend-difference transition-all duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x,
          top: position.y,
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.9 : 1})`,
        }}
      />

      {/* Trailing glow effect */}
      <div
        className={`fixed pointer-events-none z-[9997] rounded-full transition-all duration-500 ease-out ${
          isVisible ? "opacity-40" : "opacity-0"
        }`}
        style={{
          left: position.x,
          top: position.y,
          width: isHovering ? 80 : 60,
          height: isHovering ? 80 : 60,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </>
  );
}
