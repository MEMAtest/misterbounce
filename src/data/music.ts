import type { Mix } from "@/types";

// Mixcloud / Autopod mixes - full-length mixes
export const mixcloudMixes: Mix[] = [
  {
    id: "1",
    title: "Mister Bounce - Live Mix",
    platform: "mixcloud",
    embedUrl: "https://player.autopod.xyz/1214098",
    externalUrl: "https://www.mixcloud.com/misterbounceuk/",
  },
];

// SoundCloud tracks
export const soundcloudTracks: Mix[] = [
  {
    id: "1",
    title: "Old Skool RnB Sample",
    platform: "soundcloud",
    embedUrl: "https://soundcloud.com/misterbounceuk/old-skool-rnb-sample/s-xDjPI",
    externalUrl: "https://soundcloud.com/misterbounceuk/old-skool-rnb-sample/s-xDjPI?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=c260fbf4404a455489279101b273f25d",
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
