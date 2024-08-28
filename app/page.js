import Carousel from "@/components/Carousel";
import BestTrips from "@/components/Home/BestTrips";
import Hero from "@/components/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <Hero />
    <Carousel />
    <BestTrips />
   </>
  );
}
