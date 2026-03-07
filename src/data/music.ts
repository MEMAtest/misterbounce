import type { Mix } from "@/types";

// SoundCloud tracks — use the public permalink URL
// If the track is private, the embed won't load (set track to public on SoundCloud)
export const soundcloudTracks: Mix[] = [
  {
    id: "1",
    title: "Old Skool RnB Sample",
    platform: "soundcloud",
    embedUrl: "https://soundcloud.com/misterbounceuk/old-skool-rnb-sample",
    externalUrl: "https://soundcloud.com/misterbounceuk/old-skool-rnb-sample",
  },
];

// Mixcloud profile — embedded as a profile widget
export const mixcloudMixes: Mix[] = [
  {
    id: "1",
    title: "Mister Bounce on Mixcloud",
    platform: "mixcloud",
    embedUrl: "/misterbounceuk/",
    externalUrl: "https://www.mixcloud.com/misterbounceuk/",
  },
];

// External players / radio shows (linked, not embedded)
export const externalPlayers = [
  {
    id: "1",
    title: "Mister Bounce on Flex FM",
    url: "https://player.autopod.xyz/1214098",
    description: "Listen on demand via Flex FM",
  },
];

// Local audio tracks (from public/audio folder)
export const localTracks = [
  {
    id: "local-1",
    title: "Fashion House Summer",
    src: "/audio/aveoaudio_fashion-house-summer_main-461966.mp3",
  },
  {
    id: "local-2",
    title: "Play House Position",
    src: "/audio/play-house-position-342211.mp3",
  },
];

// Featured mix for hero or highlight section
export const featuredMix = mixcloudMixes[0];

// External profile URLs
export const musicProfiles = {
  mixcloud: "https://www.mixcloud.com/misterbounceuk/",
  soundcloud: "https://soundcloud.com/misterbounceuk",
};
