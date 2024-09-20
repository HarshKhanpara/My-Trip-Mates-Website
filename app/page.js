// pages/index.js
import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQs";
import Footer from "@/components/Footer";
import BestTrips from "@/components/Home/BestTrips";
import Hero from "@/components/Home/Hero";
import TravelStories from "@/components/Home/TravelStories";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />  {/* No Global Background for Hero */}
      
      {/* GlobalBackground only wraps the sections below Hero */}
      {/* <GlobalBackground> */}
        <Carousel />
        <BestTrips />
        <TravelStories />
        <Contact />
        <FAQ />
        <Footer />
      {/* </GlobalBackground> */}
    </>
  );
}