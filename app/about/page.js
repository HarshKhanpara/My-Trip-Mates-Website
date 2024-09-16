"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { UserIcon, GlobeAltIcon, BeakerIcon, BadgeCheckIcon } from "@heroicons/react/solid"; // Importing icons
import Gallery from "@/components/gallery"; // Importing Gallery component
import { useRouter } from "next/navigation";



const AboutUs = () => {
    const router = useRouter();
  return (
    <>

<Navbar/>
      <div className="relative w-full">
      
        <img
          src="/gallery/background.jpg"
          alt="Background"
          className="object-cover w-full h-[350px]"
        />
        <div className="absolute inset-0 flex pt-48 justify-center text-white">
          <h1 className="text-3xl md:text-5xl font-serif italic"
            style={{ fontFamily: 'title-light' }}
          >
            About Us
          </h1>
        </div>
      </div>

      <div className="bg-white min-h-screen flex items-center justify-center px-4 py-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left Section with Video and Image */}
          <div className="flex flex-col space-y-4 w-full lg:w-1/2">
            {/* Video */}
            <div className="w-full">
              <video
                src="/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg w-full max-h-[300px] object-cover"
              />
            </div>

            {/* Image */}
            <div className="w-full">
              <Image
                src="/about.png"
                alt="City"
                width={540}
                height={300}
                className="rounded-lg w-full max-h-[300px] object-cover"
              />
            </div>
          </div>

          {/* Right Section with Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-0">
            <h1 className="text-3xl lg:text-4xl font-semibold">
              Crafting <span className="italic">travel</span> experiences
            </h1>
            <p className="mt-4 text-gray-600 text-base lg:text-lg my-auto">
              We are passionate about crafting extraordinary travel experiences
              that leave a lasting impact. With years of expertise, we have
              honed the art of live curating unique journeys that blend
              adventure, culture, and sustainability. Our mission is to connect
              travelers with the world's wonders while preserving its beauty for
              generations to come.
            </p>
            <button className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-200"
            onClick={() => router.push('/upcoming-trips')}
            >
              Explore Now ⟶
            </button>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between px-4 md:px-8 lg:px-16">
          {/* Left Side - Heading */}
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col justify-between mb-10 lg:mb-0 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium text-center">
                Our true <span className="italic">beliefs</span> <br />
                for <span className="italic">your</span> benefits
              </h2>
            </div>

            <div className="mt-4">
              <p className="text-base md:text-lg text-gray-700 md:mt-56 md:p-7 max-w-[600px] text-center">
                Our beliefs aren't just words; they are the foundation of every
                adventure we offer. With high commitment to sustainability,
                authenticity, and customer-centricity, we ensure that every trip
                you take with us is valuable.
              </p>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="lg:w-1/2 space-y-6">
            {/* Customer-Centric */}
            <div className="p-4 rounded-lg flex items-center border-black border-2">
              <div className="flex-shrink-0 p-2 md:p-4">
                <UserIcon className="w-6 h-6 md:w-8 md:h-8 text-gray-600 border-black border-2 rounded-full" /> 
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg">Customer-Centric</h3>
                <p className="text-gray-600 text-sm md:text-base pt-3">
                  Being customer-centric is the compass that guides our travel
                  services. We prioritize our customers' needs.
                </p>
              </div>
            </div>

            {/* Sustainable Travel */}
            <div className="p-4 rounded-lg flex items-center bg-black text-white border-white border-2">
              <div className="flex-shrink-0 p-2 md:p-4">
                <GlobeAltIcon className="w-6 h-6 md:w-8 md:h-8 text-white border-white border-2 rounded-full" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg">Sustainable Travel</h3>
                <p className="text-gray-300 text-sm md:text-base pt-3">
                  Committed to responsible and eco-conscious journeys, traveling
                  the world with minimal footprints and pollution.
                </p>
              </div>
            </div>

            {/* Authentic Experiences */}
            <div className="p-4 rounded-lg flex items-center bg-white border-black border-2">
              <div className="flex-shrink-0 p-2 md:p-4">
                <BeakerIcon className="w-6 h-6 md:w-8 md:h-8 text-gray-600 border-black border-2 rounded-full" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg">Authentic Experiences</h3>
                <p className="text-gray-600 text-sm md:text-base pt-3">
                  We deliver journeys that immerse you in unforgettable
                  encounters with the world's diverse cultures & landscapes.
                </p>
              </div>
            </div>

            {/* Quality Guides */}
            <div className="p-4 border rounded-lg flex items-center bg-black text-white ">
              <div className="flex-shrink-0 p-2 md:p-4">
                <BadgeCheckIcon className="w-6 h-6 md:w-8 md:h-8 text-white border-white border-2 rounded-full" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg">Quality Guides</h3>
                <p className="text-gray-300 text-sm md:text-base pt-3">
                  Every journey will be led by knowledgeable, passionate experts
                  who enhance your travel experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full">
        <Gallery
          subtitle="Our Adventures"
          images={[
            "/gallery/bali-1.jpg",
            "/gallery/vietnam-1.jpg",
            "/gallery/thailand-1.jpg",
            "/gallery/bali-2.jpg",
            "/gallery/vietnam-2.jpg",
            "/gallery/thailand-2.jpg",
            // Add more images as needed
          ]}
        />
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
