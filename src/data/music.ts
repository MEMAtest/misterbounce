import musicData from "./music.json";
import type { Mix } from "@/types";

type MixJson = { id: string; title: string; embedUrl: string; externalUrl: string };

// CMS-managed data (editable via /admin)
export const mixcloudMixes: Mix[] = (musicData.mixcloudMixes as MixJson[]).map((m) => ({
  ...m,
  platform: "mixcloud" as const,
}));

export const soundcloudTracks: Mix[] = (musicData.soundcloudTracks as MixJson[]).map((t) => ({
  ...t,
  platform: "soundcloud" as const,
}));

export const externalPlayers = musicData.externalPlayers;

// Local audio tracks — kept in code (files too large for CMS upload)
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

export const featuredMix = mixcloudMixes[0] ?? null;

export const musicProfiles = {
  mixcloud: "https://www.mixcloud.com/misterbounceuk/",
  soundcloud: "https://soundcloud.com/misterbounceuk",
};
