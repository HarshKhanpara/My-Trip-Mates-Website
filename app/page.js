// pages/index.js
import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQs";
import Footer from "@/components/Footer";
import BestTrips from "@/components/Home/BestTrips";
import BlogLayout from "@/components/Home/BlogLayout";
import ComingSoon from "@/components/Home/ComingSoon";
import CommitmentSection from "@/components/Home/Commitments";
import FeaturedGallery from "@/components/Home/FeaturedGallery";
import Hero from "@/components/Home/Hero";
import OurStory from "@/components/Home/OurStory";
import PlanTrip from "@/components/Home/PlanTrip";
import QuoteSection from "@/components/Home/QuateSection";
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
        <OurStory/>
        <BestTrips />
        <FeaturedGallery />
        <TravelStories />
        <Contact />
        {/* <ComingSoon /> */}
        <FAQ />
        <BlogLayout />
        <CommitmentSection />
        <PlanTrip />
        <QuoteSection />
        <Footer />
      {/* </GlobalBackground> */}
    </>
  );
}