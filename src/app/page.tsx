import {
  Hero,
  FeaturedGrid,
  About,
  Gallery,
  Videos,
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
      <Videos />
      <Events />
      <Music />
      <Contact />
    </>
  );
}
