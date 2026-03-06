import type { Video } from "@/types";

// Videos - add Mister Bounce's own YouTube content here
// Replace these with actual Mister Bounce videos when available
export const videos: Video[] = [
  // Example format:
  // {
  //   id: "1",
  //   youtubeId: "YOUR_VIDEO_ID",
  //   title: "Mister Bounce Live @ Crush",
  //   description: "Live DJ set at Crush London",
  // },
];

// Featured video for hero section or highlights
export const featuredVideo: Video | undefined = videos[0];
