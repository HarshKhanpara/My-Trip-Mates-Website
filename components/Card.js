"use client";

import Image from "next/image";
import {
  CalendarIcon,
  LocationMarkerIcon,
  ClockIcon,
  TagIcon,
  ExclamationTriangle, 
  TrendingUpIcon,
  StarIcon               
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
  isNewTrip = false,
  onclick = () => {},
}) => {
  return (
<animated.div
  className="shadow-2xl rounded-xl overflow-hidden relative cursor-pointer transition-transform hover:scale-90 hover:shadow-2xl"
  onClick={onclick}
>
  {/* Image Section */}
  <div className="relative min-h-[490px] min-w-[642px]">
    <Image
      src={imageUrl}
      alt={destination}
      layout="fill"
      objectFit="cover"
    />

    {/* "New Trip", "Filling Fast", or "Sold Out" Labels */}
    {isSoldOut && (
      <div className="absolutetop-3 left-3 bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
</svg>
        Sold Out!
      </div>
    )}
    {isNewTrip && (
      <div className="absolute top-3 left-3 bg-yellow-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
      <StarIcon className="w-5 h-5 mr-2 inline" />
        New Trip!
      </div>
    )}
    {fillingFast && !isSoldOut && !isNewTrip && (
      <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
      <TrendingUpIcon className="w-5 h-5 mr-2 inline" />
        Filling Fast
      </div>
    )}

    <animated.div
      className="absolute w-full bottom-0 flex flex-col justify-center text-white"
    >
      <div className="bg-[#3D3838] p-6 bg-opacity-60 w-full bottom-0 rounded-md shadow-inner shadow-gray-900">
        <h3 className="font-extrabold text-2xl mb-4 text-ellipsis">{destination}</h3>
        <p className="text-white mb-2 flex items-center">
          <LocationMarkerIcon className="w-5 h-5 mr-2" />
          {location}
        </p>
        <p className="text-white mb-2 flex items-center">
          <CalendarIcon className="w-5 h-5 mr-2" />
          {duration}
        </p>
        <p className="text-white mb-2 flex items-center">
          <ClockIcon className="w-5 h-5 mr-2" />
          {days} days, {nights} nights
        </p>
        <p className="font-bold text-lg flex items-center">
          <TagIcon className="w-5 h-5 mr-2" />
          &#x20B9; {price}
        </p>
      </div>
    </animated.div>
  </div>
</animated.div>
  );
};

export default Card;