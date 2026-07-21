//import albumArt_escapeVelocity from '../assets/escape-velocity.jpg';
import albumArt_gravitea from '../assets/gravi-tea.jpg';

export interface Album {
  id: string;
  title: string;
  year: string;
  type: string;
  description: string;
  tracklist: { title: string; duration: string }[];
  art: ImageMetadata;
  links: { name: string; url: string }[];
}

export const albums: Album[] = [
  {
    id: "gravi-tea",
    title: "Gravi-tea",
    year: "2026",
    type: "Single",
    description: "Gravi-tea is the debut single from SpAi-C, introducing her blend of space-pop where everyday London life drifts effortlessly into the stars. It's a playful anthem about finding a moment of calm when life feels impossibly heavy, proving that sometimes all you need is a proper cup of tea—and a little imagination—to find your escape.",
    tracklist: [
      { title: "Gravi-tea", duration: "04:05" }
    ],
    art: albumArt_gravitea,
    links: [
      { name: "Spotify", url: "#" },
      { name: "Apple Music", url: "#" },
      { name: "Bandcamp", url: "#" },
      { name: "YouTube Music", url: "#" }
    ]
  }
  /*{
    id: "escape-velocity",
    title: "Escape Velocity",
    year: "2026",
    type: "Full Album",
    description: "SpAi-C's debut transmission into the digital ether. Escape Velocity is a Space Pop journey where London's everyday life collides with imagined galaxies, wrapped in shimmering synths, weightless melodies, and a quiet sense of wonder.",
    tracklist: [
      { title: "SpAi-C Station", duration: "04:24" },
      { title: "Gravi-tea", duration: "04:05" },
      { title: "Connected", duration: "03:04" },
      { title: "Starr-dust", duration: "03:07" },
      { title: "Ash Belt", duration: "02:51" },
      { title: "Saddlelite", duration: "05:19" },
      { title: "The Stargate of Orion", duration: "04:32" },
      { title: "My North Star", duration: "03:59" },
      { title: "End Transmission", duration: "03:09" }
    ],
    art: albumArt_escapeVelocity,
    links: [
      { name: "Spotify", url: "#" },
      { name: "Apple Music", url: "#" },
      { name: "Bandcamp", url: "#" },
      { name: "YouTube Music", url: "#" }
    ]
  }*/
];

export const latestAlbum = albums[0];
