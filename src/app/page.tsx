import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Carousel from "./components/carousel";

export default function Home() {
  return (
      <>
      <div className="flex flex-col gap-12">
        <Navbar />
        <Hero />
        <Carousel />
      </div>
      </>
  );
}
