import {
  Hero,
  FeaturedGrid,
  About,
  Gallery,
  Events,
  Music,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedGrid />
      <About />
      <Gallery />
      <Events />
      <Music />
      <Contact />
    </>
  );
}
