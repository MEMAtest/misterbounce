"use client";

import { Button } from "@/components/ui";
import { externalPlayers, localTracks, mixcloudMixes, musicProfiles, soundcloudTracks } from "@/data";

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

        {/* SoundCloud Embed */}
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

        {/* Mixcloud Embed — profile widget */}
        {mixcloudMixes.length > 0 && (
          <div className="max-w-3xl mx-auto mb-10">
            <h3 className="text-xl font-bold text-text-heading mb-4 text-center">Mixes</h3>
            {mixcloudMixes.map((mix) => (
              <div key={mix.id} className="bg-white rounded-2xl p-6 shadow-md border border-border/50">
                <iframe
                  width="100%"
                  height="400"
                  src={`https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=${encodeURIComponent(mix.embedUrl)}`}
                  frameBorder="0"
                  className="rounded-lg"
                  allow="autoplay"
                />
              </div>
            ))}
          </div>
        )}

        {/* External Players — link buttons */}
        {externalPlayers.length > 0 && (
          <div className="max-w-3xl mx-auto mb-10">
            <h3 className="text-xl font-bold text-text-heading mb-4 text-center">Radio Shows</h3>
            {externalPlayers.map((player) => (
              <a
                key={player.id}
                href={player.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl p-6 shadow-md border border-border/50 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-text-heading group-hover:text-primary transition-colors">
                      {player.title}
                    </p>
                    <p className="text-sm text-text-muted mt-1">{player.description}</p>
                  </div>
                  <svg className="w-6 h-6 text-text-muted group-hover:text-primary transition-colors flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
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
