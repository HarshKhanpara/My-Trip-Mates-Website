// pages/index.js
import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BestTrips from "@/components/Home/BestTrips";
import CurvedGallery from "@/components/Home/CurvedGallery";
import Hero from "@/components/Home/Hero";
import TravelStories from "@/components/Home/TravelStories";
import Parallax from "@/components/Hero_Parallax";
import Navbar from "@/components/Navbar";
import { FaMobile } from "react-icons/fa";
import MobileCarousel from "@/components/Mobile_Caraosel";
import GlobalBackground from "@/components/GlobalBackground";

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
        <Footer />
      {/* </GlobalBackground> */}
    </>
  );
}