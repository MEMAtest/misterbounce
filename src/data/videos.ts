import type { Video } from "@/types";

// Hip Hop and House Legends - iconic performances and documentaries
export const videos: Video[] = [
  {
    id: "1",
    youtubeId: "Nj6SO_yKMe8", // Masters At Work - To Be In Love
    title: "Masters At Work - To Be In Love",
    description: "Kenny Dope & Louie Vega - NYC house royalty",
  },
  {
    id: "2",
    youtubeId: "4JkIs37a2JE", // Jamiroquai - Virtual Insanity
    title: "Jamiroquai - Virtual Insanity",
    description: "Acid jazz funk legend",
  },
  {
    id: "3",
    youtubeId: "cM4kqL13jGM", // Kerri Chandler Boiler Room
    title: "Kerri Chandler - Boiler Room NYC",
    description: "Deep house legend live at Boiler Room",
  },
  {
    id: "4",
    youtubeId: "WYp9Eo9T3BA", // A Tribe Called Quest - Can I Kick It
    title: "A Tribe Called Quest - Can I Kick It?",
    description: "Hip hop meets house - jazz-influenced classic",
  },
  {
    id: "5",
    youtubeId: "1hZKN4AZ63g", // Pete Rock & CL Smooth - They Reminisce Over You
    title: "Pete Rock & CL Smooth - T.R.O.Y.",
    description: "Golden era hip hop - soulful production",
  },
  {
    id: "6",
    youtubeId: "Iu1qa8N2ID0", // Larry Levan Documentary
    title: "Larry Levan - Paradise Garage Legend",
    description: "The DJ who defined New York nightlife",
  },
];

// Featured video for hero section or highlights
export const featuredVideo: Video = videos[0];
