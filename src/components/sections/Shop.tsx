import { ProductCard, Carousel, CarouselItem, Button } from "@/components/ui";
import { products, STORE_URL } from "@/data";

export default function Shop() {
  return (
    <section id="shop" className="section bg-gradient-to-b from-muted via-white to-muted relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-gradient-to-br from-accent-orange/10 to-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[250px] h-[250px] bg-gradient-to-br from-primary/10 to-accent-pink/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container relative">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-orange/10 rounded-full mb-4">
              <svg className="w-4 h-4 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-xs font-bold text-accent-orange uppercase tracking-wider">Merch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-text-heading mb-3">
              Official <span className="text-primary">Shop</span>
            </h2>
            <p className="text-lg text-text-body">
              Rep the sound with official merchandise and releases
            </p>
          </div>

          <Button href={STORE_URL} isExternal variant="ghost" size="sm" className="group">
            Visit Bandcamp Store
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
        </div>

        {/* Products Carousel */}
        <Carousel gap="md">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="w-[220px] sm:w-[260px] md:w-[300px]"
            >
              <ProductCard {...product} />
            </CarouselItem>
          ))}
        </Carousel>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-white to-muted rounded-2xl border border-border/50 shadow-lg">
            <p className="text-text-body font-medium">
              More styles and limited editions available on Bandcamp
            </p>
            <Button href={STORE_URL} isExternal variant="secondary" size="lg" className="shadow-xl">
              Shop All Products
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
