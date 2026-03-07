"use client";

import { Button } from "@/components/ui";
import { localTracks, mixcloudMixes, musicProfiles, soundcloudTracks } from "@/data";

export default function Music() {
  const platformLinks = [
    { label: "Mixcloud", url: musicProfiles.mixcloud },
    { label: "SoundCloud", url: musicProfiles.soundcloud },
  ].filter((link) => link.url);

  return (
    <section id="music" className="section bg-muted">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-text-heading mb-3">
            Mixes & <span className="text-primary">Music</span>
          </h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            Listen to mixes and tracks — hit play to preview
          </p>
        </div>

        {/* SoundCloud Embed — large with artwork */}
        {soundcloudTracks.length > 0 && (
          <div className="max-w-3xl mx-auto mb-10">
            {soundcloudTracks.map((track) => (
              <div key={track.id} className="bg-white rounded-2xl p-6 shadow-md border border-border/50">
                <p className="text-lg font-bold text-text-heading mb-4">{track.title}</p>
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.embedUrl)}&color=%238b5cf6&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        )}

        {/* Mixcloud Embed — full mixes */}
        {mixcloudMixes.length > 0 && (
          <div className="max-w-3xl mx-auto mb-10">
            <h3 className="text-xl font-bold text-text-heading mb-4 text-center">Full Mixes</h3>
            {mixcloudMixes.map((mix) => (
              <div key={mix.id} className="bg-white rounded-2xl p-6 shadow-md border border-border/50">
                <p className="text-lg font-bold text-text-heading mb-4">{mix.title}</p>
                <iframe
                  width="100%"
                  height="200"
                  src={mix.embedUrl}
                  frameBorder="0"
                  className="rounded-lg"
                  allow="autoplay"
                />
              </div>
            ))}
          </div>
        )}

        {/* Audio Tracks */}
        {localTracks.length > 0 && (
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-text-heading mb-4 text-center">Preview Tracks</h3>
            <div className="grid gap-4">
              {localTracks.map((track) => (
                <div key={track.id} className="bg-white rounded-2xl p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                  <p className="text-base font-bold text-text-heading mb-3">{track.title}</p>
                  <audio controls className="w-full h-12" preload="none">
                    <source src={track.src} type="audio/mpeg" />
                  </audio>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Platform Links */}
        {platformLinks.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-text-muted mb-4">Find more on</p>
            <div className="flex flex-wrap justify-center gap-3">
              {platformLinks.map((link) => (
                <Button key={link.label} href={link.url} isExternal variant="outline" size="sm">
                  {link.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
