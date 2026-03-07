"use client";

import { useState } from "react";

const localVideos = [
  {
    id: "1",
    title: "Live Set",
    src: "/videos/video-2.mp4",
    aspect: "landscape" as const,
  },
  {
    id: "2",
    title: "Behind the Decks",
    src: "/videos/video-3.mp4",
    aspect: "portrait" as const,
  },
];

export default function Videos() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const handlePlay = (id: string) => setPlayingId(id);
  const handlePause = () => setPlayingId(null);

  return (
    <section id="videos" className="section bg-black">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            Live <span className="text-primary">Videos</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Watch live sets, performances &amp; behind the scenes
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {localVideos.map((video) => (
            <div
              key={video.id}
              className={`relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 ${
                video.aspect === "portrait" ? "max-w-sm mx-auto w-full" : ""
              }`}
            >
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto"
                onPlay={() => handlePlay(video.id)}
                onPause={handlePause}
                onEnded={handlePause}
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none transition-opacity duration-300 ${
                playingId === video.id ? "opacity-0" : "opacity-100"
              }`}>
                <p className="text-white font-bold text-lg">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
