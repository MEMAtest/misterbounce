"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sync audio state with actual playback
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Handle video load
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setVideoLoaded(true);
    const handleError = () => setVideoLoaded(false);

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, []);

  const toggleAudio = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
      } catch (error) {
        console.error("Audio playback failed:", error);
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background audio - add upbeat house track as /audio/featured.mp3 or .wav */}
      <audio
        ref={audioRef}
        loop
        preload="none"
      >
        <source src="/audio/featured.mp3" type="audio/mpeg" />
        <source src="/audio/featured.wav" type="audio/wav" />
      </audio>

      {/* Video Background - loops silently, falls back to image */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Add your video file as /videos/hero.mp4 - recommend DJ/party/dance footage */}
        <source src="/videos/hero.mp4" type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" />
      </video>

      {/* Full-bleed background image (fallback when video not loaded) */}
      <Image
        src="/images/gallery/IMG-20260108-WA0016.jpg"
        alt="Mister Bounce"
        fill
        priority
        sizes="100vw"
        className={`object-cover object-center transition-opacity duration-1000 ${
          videoLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content layer - shifted left to show DJ */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-8 md:px-16 lg:px-24">
        {/* Welcome text - elegant script style */}
        <p
          className="text-white/90 mb-2 md:mb-4"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontStyle: "italic",
            fontSize: "clamp(1rem, 3vw, 1.75rem)",
          }}
        >
          Welcome to
        </p>

        {/* Name typography - sized to show the DJ */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 12vw, 9rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            fontWeight: 900,
            textTransform: "uppercase",
            textShadow: "0 4px 30px rgba(0, 0, 0, 0.6), 0 2px 8px rgba(0, 0, 0, 0.9)",
            color: "#ffffff",
          }}
        >
          <span className="block">MISTER</span>
          <span className="block">BOUNCE</span>
        </h1>

        {/* Tagline */}
        <p
          className="mt-6 md:mt-8 text-lg md:text-xl max-w-xl font-bold tracking-widest"
          style={{
            color: "#ffffff",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
          }}
        >
          HOUSE • SOUL • GROOVE
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 md:mt-12 flex flex-wrap gap-4">
          <a
            href="#events"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold bg-white text-black rounded-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            View Events
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Audio control button */}
      <button
        onClick={toggleAudio}
        className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all group"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
