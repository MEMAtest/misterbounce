"use client";

import { useEffect, useRef, useCallback } from "react";

// Generates subtle UI sounds using Web Audio API
export default function SoundEffects() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const isInitializedRef = useRef(false);

  // Initialize AudioContext on first interaction
  const initAudio = useCallback(() => {
    if (!audioContextRef.current && typeof window !== "undefined") {
      audioContextRef.current = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      isInitializedRef.current = true;
    }
  }, []);

  // Play hover sound - subtle high pitch
  const playHover = useCallback(() => {
    if (!audioContextRef.current) return;

    const ctx = audioContextRef.current;
    if (ctx.state === "suspended") ctx.resume();

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = 1200;
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(0.015, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.08);
  }, []);

  // Play click sound - slightly lower and longer
  const playClick = useCallback(() => {
    if (!audioContextRef.current) return;

    const ctx = audioContextRef.current;
    if (ctx.state === "suspended") ctx.resume();

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = 800;
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(0.025, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.12);
  }, []);

  useEffect(() => {
    // Initialize on first click
    const handleFirstInteraction = () => {
      initAudio();
      document.removeEventListener("click", handleFirstInteraction);
    };
    document.addEventListener("click", handleFirstInteraction);

    // Add hover sounds to interactive elements
    const handleMouseEnter = (e: MouseEvent) => {
      if (!isInitializedRef.current) return;

      const target = e.target as HTMLElement;
      if (!target || !target.closest) return;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button");

      if (isInteractive) {
        playHover();
      }
    };

    // Add click sounds
    const handleClick = (e: MouseEvent) => {
      if (!isInitializedRef.current) return;

      const target = e.target as HTMLElement;
      if (!target || !target.closest) return;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button");

      if (isInteractive) {
        playClick();
      }
    };

    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("click", handleClick);
    };
  }, [initAudio, playHover, playClick]);

  return null;
}
