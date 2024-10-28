// components/Card.js
"use client";

import Image from "next/image";
import {
  CalendarIcon,
  LocationMarkerIcon,
  ClockIcon,
  TagIcon,
} from "@heroicons/react/outline";
import { animated } from "@react-spring/web";

const Card = ({
  imageUrl,
  destination,
  location = "Bali, Indonesia",
  duration = "7th Jan - 11th Jan (4 days)",
  price = "190000 per person",
  days = 4,
  nights = 3,
  fillingFast = true,
  isSoldOut = false,
  onclick = () => {},
}) => {
  return (
    <animated.div
      className="shadow-lg rounded-lg overflow-hidden mb-5 relative sm:mb-6 md:mb-8 lg:mb-10 cursor-pointer"
      onClick={onclick}
    >
      {/* Image Section */}
      <div className="relative min-h-[450px] md:min-h-[550px] lg:min-h-[450px]">
        <Image
          src={imageUrl}
          alt={destination}
          layout="fill"
          objectFit="cover"
        />

        {/* "Filling Fast" Label */}
            {isSoldOut && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-red-400 to-red-600 text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold px-3 py-2 rounded-md z-10 shadow-lg animate-pulse">
            Sold Out!
          </div>
        )}


        {/* "Filling Fast" Label */}
        {fillingFast && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-green-400 to-green-600 text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold px-3 py-2 rounded-md z-10 shadow-lg animate-pulse">
            Filling Fast
          </div>
        )}

        {/* Overlay Text */}
        <animated.div
          className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent text-white sm:p-5 md:p-6 lg:p-8 z-0"
          style={{
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          }}
        >
          <h3 className="font-bold text-2xl md:mb-3 lg:mb-3 w-full">{destination}</h3>
          <p className="text-gray-300 mb-2 flex items-center">
            <LocationMarkerIcon className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3 md:w-7 md:h-7 md:mr-3 lg:w-8 lg:h-8 lg:mr-4" />
            {location}
          </p>
          <p className="text-gray-300 mb-2 flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3 md:w-7 md:h-7 md:mr-3 lg:w-8 lg:h-8 lg:mr-4" />
            {duration}
          </p>
          <p className="text-gray-300 mb-2 flex items-center sm:mb-1 md:mb-1 lg:mb-1">
            <ClockIcon className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3 md:w-7 md:h-7 md:mr-3 lg:w-8 lg:h-8 lg:mr-4" />
            {days} days, {nights} nights
          </p>
          <p className="font-bold mt-2 flex items-center sm:mt-1 md:mt-1 lg:mt-1">
            <TagIcon className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3 md:w-7 md:h-7 md:mr-3 lg:w-8 lg:h-8 lg:mr-4" />
            &#x20B9; {price}
          </p>
        </animated.div>
      </div>
    </animated.div>
  );
};

export default Card;
