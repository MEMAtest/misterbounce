"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  // Studio promo — white background
  { src: "/images/gallery/promo/studio-1.jpg", alt: "Mister Bounce promo shot" },
  { src: "/images/gallery/promo/studio-2.jpg", alt: "Mister Bounce studio portrait" },
  { src: "/images/gallery/promo/studio-4.jpg", alt: "Mister Bounce B&W portrait" },
  { src: "/images/gallery/promo/studio-6.jpg", alt: "Mister Bounce headshot" },
  { src: "/images/gallery/promo/studio-8.jpg", alt: "Mister Bounce side profile" },
  // Studio promo — dark background
  { src: "/images/gallery/promo/portrait-1.jpg", alt: "Mister Bounce portrait" },
  { src: "/images/gallery/promo/portrait-3.jpg", alt: "Mister Bounce promo" },
  { src: "/images/gallery/promo/portrait-5.jpg", alt: "Mister Bounce press photo" },
  // Crush & Applebum
  { src: "/images/gallery/crush/crush-dj-booth-1.jpg", alt: "Mister Bounce at Crush" },
  { src: "/images/gallery/crush/crush-dj-booth-2.jpg", alt: "DJ booth at Crush" },
  { src: "/images/gallery/crush/crush-dj-booth-3.jpg", alt: "Live set at Crush" },
  { src: "/images/gallery/crush/crush-dj-booth-4.jpg", alt: "Behind the decks at Crush" },
  { src: "/images/gallery/crush/applebum-mic.jpg", alt: "Mister Bounce at Applebum" },
  // Live events
  { src: "/images/gallery/IMG-20260108-WA0014.jpg", alt: "Mister Bounce live" },
  { src: "/images/gallery/IMG-20260108-WA0015.jpg", alt: "Mister Bounce performing" },
  { src: "/images/gallery/IMG-20260108-WA0016.jpg", alt: "Mister Bounce on stage" },
  { src: "/images/gallery/IMG-20260108-WA0017.jpg", alt: "Mister Bounce DJ set" },
  { src: "/images/gallery/IMG-20260108-WA0018.jpg", alt: "Mister Bounce event" },
  // More studio
  { src: "/images/gallery/promo/studio-3.jpg", alt: "Mister Bounce studio" },
  { src: "/images/gallery/promo/studio-5.jpg", alt: "Mister Bounce portrait shot" },
  { src: "/images/gallery/promo/studio-7.jpg", alt: "Mister Bounce profile" },
  { src: "/images/gallery/promo/portrait-2.jpg", alt: "Mister Bounce close-up" },
  { src: "/images/gallery/promo/portrait-4.jpg", alt: "Mister Bounce press shot" },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="section bg-black">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            Photo <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Behind the decks at Crush, Applebum &amp; more
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {galleryImages.map((img, index) => (
            <button
              key={img.src}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Previous"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Next"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
