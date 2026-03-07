import Image from "next/image";

const tiles = [
  {
    id: "events",
    category: "EVENTS",
    title: "UPCOMING SHOWS",
    subtitle: "Catch the vibe live",
    href: "#events",
    image: "/images/gallery/crush/crush-dj-booth-1.jpg",
    hoverText: "Check out Mister Bounce events",
  },
  {
    id: "music",
    category: "MUSIC",
    title: "LISTEN",
    subtitle: "Mixes & tracks",
    href: "#music",
    image: "/images/gallery/crush/crush-dj-booth-3.jpg",
    hoverText: "Check out music",
  },
  {
    id: "gallery",
    category: "GALLERY",
    title: "PHOTOS",
    subtitle: "Behind the decks",
    href: "#gallery",
    image: "/images/gallery/crush/crush-dj-booth-4.jpg",
    hoverText: "See more photos",
  },
  {
    id: "book",
    category: "BOOKINGS",
    title: "BOOK NOW",
    subtitle: "Get in touch",
    href: "#contact",
    image: "/images/gallery/crush/applebum-mic.jpg",
    hoverText: "Book Mister Bounce",
  },
];

export default function FeaturedGrid() {
  return (
    <section className="w-full">
      {/* Separator from hero */}
      <div className="h-2 bg-gradient-to-b from-black/50 to-transparent" />

      {/* Full-width grid - no container, edge to edge */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {tiles.map((tile) => (
          <a
            key={tile.id}
            href={tile.href}
            className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
          >
            {/* Image */}
            <Image
              src={tile.image}
              alt={tile.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

            {/* Category label - top left */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6">
              <span
                className="text-xs font-medium tracking-wider border-b border-white/50 pb-0.5"
                style={{ color: "#ffffff" }}
              >
                {tile.category}
              </span>
            </div>

            {/* Content - bottom left */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
              <h3
                className="text-2xl md:text-3xl lg:text-4xl font-black leading-none mb-1"
                style={{ color: "#ffffff" }}
              >
                {tile.title}
              </h3>
              <p className="text-sm text-white/70">{tile.subtitle}</p>
            </div>

            {/* Hover tooltip */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-sm font-medium">{tile.hoverText}</span>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </a>
        ))}
      </div>
    </section>
  );
}
