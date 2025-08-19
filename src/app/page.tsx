import Navbar from "./components/navbar";
import Hero from "./components/hero";
// import Carousel from "./components/carousel";
import Features from "./components/features";
import AboutUs from "./components/aboutUs";
import Reviews from "./components/reviews";
import Queries from "./components/queries";
import ContactUs from "./components/contact";
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
        <AboutUs />
        {/* <Pricing /> */}
        <Reviews />
        <Queries />
        <ContactUs />
        <Footer />
      </div>
      </>
  );
}
