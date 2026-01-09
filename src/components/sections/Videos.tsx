import { VideoCard, Carousel, CarouselItem, Button } from "@/components/ui";
import { videos } from "@/data";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Videos() {
  const youtubeLink = SOCIAL_LINKS.find((link) => link.id === "youtube");

  return (
    <section id="videos" className="section bg-muted">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-2">
              Videos
            </h2>
            <p className="text-text-body">
              Watch live sets, performances, and behind the scenes content
            </p>
          </div>

          {youtubeLink && (
            <Button
              href={youtubeLink.url}
              isExternal
              variant="ghost"
              size="sm"
            >
              Subscribe on YouTube
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Button>
          )}
        </div>

        {/* Videos Carousel */}
        <Carousel gap="md">
          {videos.map((video) => (
            <CarouselItem
              key={video.id}
              className="w-[280px] sm:w-[320px] md:w-[380px]"
            >
              <VideoCard {...video} />
            </CarouselItem>
          ))}
        </Carousel>

        {/* Alternative: Grid layout for larger screens */}
        {/* <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {videos.slice(0, 6).map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div> */}
      </div>
    </section>
  );
}
