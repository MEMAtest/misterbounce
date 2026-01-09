import type { Mix } from "@/types";

// Mixcloud mixes - feed path format (component builds full URL)
// Replace with your own Mixcloud mix paths when available
export const mixcloudMixes: Mix[] = [
  {
    id: "1",
    title: "Defected Radio - House Music",
    platform: "mixcloud",
    embedUrl: "/Defected/defected-radio-show-hosted-by-sam-divine-090623/",
    externalUrl: "https://www.mixcloud.com/Defected/defected-radio-show-hosted-by-sam-divine-090623/",
  },
  {
    id: "2",
    title: "Glitterbox Radio - Disco & House",
    platform: "mixcloud",
    embedUrl: "/Glitterbox/glitterbox-radio-show-369/",
    externalUrl: "https://www.mixcloud.com/Glitterbox/glitterbox-radio-show-369/",
  },
  {
    id: "3",
    title: "Ministry of Sound - Classic House",
    platform: "mixcloud",
    embedUrl: "/ministryofsound/ministry-of-sound-classical-house-orchestra/",
    externalUrl: "https://www.mixcloud.com/ministryofsound/ministry-of-sound-classical-house-orchestra/",
  },
];

// SoundCloud tracks - public house music tracks
export const soundcloudTracks: Mix[] = [
  {
    id: "1",
    title: "Disclosure - Latch",
    platform: "soundcloud",
    embedUrl: "https://soundcloud.com/disclosuremusic/latch-feat-sam-smith",
    externalUrl: "https://soundcloud.com/disclosuremusic/latch-feat-sam-smith",
  },
  {
    id: "2",
    title: "Duke Dumont - I Got U",
    platform: "soundcloud",
    embedUrl: "https://soundcloud.com/dukedumont/i-got-u-feat-jax-jones",
    externalUrl: "https://soundcloud.com/dukedumont/i-got-u-feat-jax-jones",
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
  mixcloud: "https://mixcloud.com/misterbounce",
  soundcloud: "https://soundcloud.com/misterbounce",
  spotify: "https://open.spotify.com/artist/misterbounce", // Replace with actual Spotify artist URL
  bandcamp: "https://misterbounce.bandcamp.com",
};
