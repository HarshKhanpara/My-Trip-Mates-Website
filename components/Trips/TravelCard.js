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
  isDarkMode = false, // New prop to control theme
}) {
 * @prop {boolean} isDarkMode - A boolean indicating whether to use dark mode or not
 *
 * @example
 * <TravelCard
 *   destination="Bali, Indonesia"
 *   duration="7th-15th September"
 *   price="190000 per person"
 *   description="Experience the beautiful island of Bali, Indonesia"
 *   mainImage="/bali/card1.jpg"
  const router = useRouter();

  const handleViewMore = () => {
    router.push("/gallery");
  };

  const handleEnquireNow = () => {
    const message = `Hello, I'm interested in the trip to ${destination}. Could you please provide more details about this trip?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/message/4JNUATXAUKPVN1?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  // Theme-based styles
  const themeStyles = {
    background: isDarkMode ? "bg-black" : "bg-white",
    text: isDarkMode ? "text-white" : "text-black",
    border: isDarkMode ? "border-gray-900" : "border-gray-300",
    divider: isDarkMode ? "bg-gray-600" : "bg-gray-300",
  };

  return (
    <div
      className={`w-full pt-20 pb-11 flex sm:pt-14 ${themeStyles.background} transition-colors duration-200`}
    >
      <div
        className={`w-full flex flex-col lg:flex-row pt-20 p-6 rounded-lg shadow-lg border-2 ${themeStyles.border} ${themeStyles.text}`}
      >
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

            <div className="absolute top-3 -left-4 md:-left-0 md:top-10 bg-[#E8D471] text-[#0E2433] font-bold rounded-lg px-4 py-2 z-10">
              <p className="text-lg">{duration}</p>
              <p>{price}</p>
            </div>
          </div>
        </div>

        <div className="lg:hidden mb-6">
          <h1
            className={`text-5xl font-light mb-4 text-center ${themeStyles.text}`}
            style={{ fontFamily: "title-light" }}
          >
            {destination}
          </h1>

          {/* Badge Below Destination in Mobile View */}
          {isDarkMode && (
            <div className="lg:hidden mt-4 w-full bg-red-500 text-white text-center font-semibold px-3 py-1 rounded-full shadow-lg text-sm animate-bounce">
              🎉 New Year Trip!
            </div>
          )}
</div>

        <div
          className={`hidden lg:block h-[450px] w-[4px] ${themeStyles.divider} mx-8`}
        ></div>

        <div className="lg:pl-8 w-full lg:w-1/2">
          <div className="hidden lg:flex lg:items-center mb-6">
            <h1
              className={`text-7xl font-light ${themeStyles.text}`}
              style={{ fontFamily: "title-light" }}
            >
              {destination}
            </h1>

            {/* Badge Next to Destination in Desktop View */}
            {isDarkMode && (
              <div className="lg:ml-4 bg-red-500 w-40 text-white text-center font-semibold px-3 py-1 rounded-full shadow-lg text-sm animate-bounce ">
                🎉 New Year Trip!
              </div>
            )}
          </div>

          <div className={`md:hidden h-1 mb-4 ${themeStyles.divider}`}></div>

          <p className={`mb-6 ${themeStyles.text}`}>{description}</p>
          <button
            className="relative z-50 bg-[#FF6A3D] text-white font-bold py-3 px-4 rounded hover:bg-[#e55c2c] transition duration-200 w-full md:max-w-36"
            onClick={handleEnquireNow}
          >
            <span className="z-50">Enquire Now</span>
          </button>

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

          <div className="md:hidden mt-8 space-x-4 overflow-x-auto">
            <Slideshow images={galleryImages} />
          </div>

          <div className="flex justify-end mt-4">
            <button
              className={`border-2 ${
                isDarkMode
                  ? "border-white bg-gray-800 text-white"
                  : "border-black bg-white text-black"
              } font-bold py-1 px-2 sm:px-4 text-xs sm:text-base rounded-lg hover:bg-[#FF6A3D] hover:text-white hover:border-none transition duration-200 mr-1 h-[32px] sm:h-[40px] min-w-32 flex items-center justify-center`}
              onClick={handleViewMore}
            >
              <span className="flex items-center z-50">
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
