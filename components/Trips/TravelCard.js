"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Slideshow from "../SlideShow";
import { useRouter } from "next/navigation";


export default function TravelCard({
  destination,
  duration,
  price,
  description,
  mainImage,
  galleryImages,
  bgColor = "white",
  textColor = "text-black",
  dividerColor = "bg-gray-300",
}) 

{

  const router = useRouter();

const handleViewMore = () => {
  router.push('/gallery');
};

const handleEnquireNow = () => {
  const message = `Hello, I'm interested in the trip to ${destination}. Could you please provide more details about this trip?`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/message/4JNUATXAUKPVN1?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};



  return (
    <div
      className={`w-full pt-20 pb-11 flex sm:pt-14`}
      style={{ backgroundColor: bgColor }}
    >
      <div
        className={`w-full flex flex-col lg:flex-row pt-20 p-6 rounded-lg shadow-lg border-2 ${dividerColor} ${textColor}`}
      >
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 lg:mb-0 flex md:justify-center md:items-center max-h-[570px] mb-7">
          <div className="relative flex md:justify-center items-start mt-4 lg:mt-0 lg:items-center max-w-[550px] max-h-[550px] w-full h-full">
            <Image
              src={mainImage}
              alt={destination}
              className="rounded-[40px] object-cover"
              width={500}
              height={500}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />

            {/* Overlay with duration and price */}
            <div className="absolute top-3 -left-4 md:-left-0 md:top-10 bg-[#E8D471] text-[#0E2433] font-bold rounded-lg px-4 py-2 z-10">
              <p className="text-lg">{duration}</p>
              <p>{price}</p>
            </div>
          </div>
        </div>

        {/* Mobile View Title */}
        <div className="lg:hidden text-center mb-6">
          <h1 className={`text-5xl font-light mb-4 ${textColor}`}
          style={{ fontFamily: 'title-light'}}
          >{destination}</h1>
        </div>

        {/* Vertical Divider for Desktop View */}
        <div
          className={`hidden lg:block h-[450px] w-[4px] ${dividerColor} mx-8`}
        ></div>

        {/* Text Section */}
        <div className="lg:pl-8 w-full lg:w-1/2">
          {/* Desktop View Title */}
          <div className="hidden lg:block mb-6">
            <h1 className={`text-7xl font-light mb-4 ${textColor}`}
            style={{ fontFamily: 'title-light' }}
            >{destination}</h1>
          </div>

          <div
            className={`h-1 mb-4 ${dividerColor}`}
            style={{ backgroundColor: dividerColor }}
          ></div>

          <p className={`mb-6 ${textColor}`}>{description}</p>
          <button className="bg-[#FF6A3D] text-white font-bold py-3 px-4 rounded hover:bg-[#e55c2c] transition duration-200 w-full md:max-w-36"
          onClick={handleEnquireNow}
          >
            Enquire Now
          </button>

          {/* Image Gallery */}
          <div className="hidden md:flex mt-8 space-x-4 overflow-x-auto">
            {galleryImages.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${destination} Gallery ${index + 1}`}
                className="rounded-lg object-cover h-[300px] w-[300px] overflow-x-hidden"
                width={300}
                height={300}
              />
            ))}
          </div>

          {/* Mobile View Image Gallery */}
          <div className="md:hidden mt-8 space-x-4 overflow-x-auto">
            <Slideshow images={galleryImages} />
          </div>

          

          {/* See All Photos Button */}
          <div className="flex justify-end mt-4">
            <button className="border-2 border-black bg-white text-black font-bold py-1 px-2 sm:px-4 text-xs sm:text-base rounded-lg hover:bg-[#FF6A3D] hover:text-white hover:border-none transition duration-200 mr-1 h-[32px] sm:h-[40px] min-w-32 flex items-center justify-center"
            onClick={handleViewMore}
            >
              <span className="flex items-center">
                See all photos
                <FaArrowRight size={16} className="ml-2" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
