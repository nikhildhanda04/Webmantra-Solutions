import Navbar from "./components/navbar";
import Hero from "./components/hero";
// import Carousel from "./components/carousel";
import Features from "./components/features";
import Reviews from "./components/reviews";
import Queries from "./components/queries";
// import Pricing from "./components/pricing";
import Footer from "./components/footer";


export default function Home() {
  return (
      <>
      <div className="flex flex-col gap-12">
        <Navbar />
        <Hero />
        {/* <Carousel /> */}
        <Features />
        {/* <Pricing /> */}
        <Reviews />
        <Queries />
        <Footer />
      </div>
      </>
  );
}
