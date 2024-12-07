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
  isNewTrip = false,
  onclick = () => {},
}) => {
  return (
<animated.div
  className="shadow-2xl rounded-lg overflow-hidden relative cursor-pointer transition-transform hover:scale-90 hover:shadow-2xl"
  onClick={onclick}
>
  {/* Image Section */}
  <div className="relative min-h-[642px] min-w-[490px]">
    <Image
      src={imageUrl}
      alt={destination}
      layout="fill"
      objectFit="cover"
    />

    {/* "New Trip", "Filling Fast", or "Sold Out" Labels */}
    {isSoldOut && (
      <div className="absolute top-3 left-3 bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
        Sold Out!
      </div>
    )}
    {isNewTrip && (
      <div className="absolute top-3 left-3 bg-yellow-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
        New Trip!
      </div>
    )}
    {fillingFast && !isSoldOut && !isNewTrip && (
      <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
        Filling Fast
      </div>
    )}

    <animated.div
      className="absolute bottom-5 left-5 right-5 flex flex-col justify-center text-white"
    >
      <div className="bg-[#3D3838] p-6 bg-opacity-60 w-5/6 rounded-md shadow-inner shadow-gray-900">
        <h3 className="font-extrabold text-2xl mb-4">{destination}</h3>
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
