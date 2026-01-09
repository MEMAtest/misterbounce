"use client";

import { Button } from "@/components/ui";
import { localTracks, musicProfiles } from "@/data";

export default function Music() {
  return (
    <section id="music" className="section bg-muted">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-text-heading mb-3">
            Mixes & <span className="text-primary">Music</span>
          </h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            Listen to mixes and tracks - hit play to preview
          </p>
        </div>

        {/* Audio Tracks */}
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-4">
            {localTracks.map((track) => (
              <div key={track.id} className="bg-white rounded-xl p-5 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <p className="text-base font-bold text-text-heading mb-3">{track.title}</p>
                <audio controls className="w-full h-12" preload="none">
                  <source src={track.src} type="audio/mpeg" />
                </audio>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Links */}
        <div className="mt-12 text-center">
          <p className="text-text-muted mb-4">Find more on</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={musicProfiles.mixcloud} isExternal variant="outline" size="sm">
              Mixcloud
            </Button>
            <Button href={musicProfiles.soundcloud} isExternal variant="outline" size="sm">
              SoundCloud
            </Button>
            <Button href={musicProfiles.spotify} isExternal variant="outline" size="sm">
              Spotify
            </Button>
            <Button href={musicProfiles.bandcamp} isExternal variant="outline" size="sm">
              Bandcamp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
