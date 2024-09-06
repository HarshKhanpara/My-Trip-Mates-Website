// components/Card.js
"use client";

import Image from 'next/image';
import { CalendarIcon, LocationMarkerIcon, ClockIcon, TagIcon } from '@heroicons/react/outline';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const Card = ({
  imageUrl,
  destination,
  location = "Bali, Indonesia",
  duration = "7th Jan - 11th Jan (4 days)",
  price = "190000 per person",
  days = 4,
  nights = 3,
  onclick = () => {},
}) => {



  return (
    <animated.div
      className="shadow-lg rounded-lg overflow-hidden mb-5 relative sm:mb-6 md:mb-8 lg:mb-10 cursor-pointer"
      onClick={onclick}
    >
      {/* Image Section */}
      <div className="relative min-h-[450px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px]">
        <Image src={imageUrl} alt={destination} layout="fill" objectFit="cover" />
        {/* Overlay Text */}
        <animated.div
          className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent text-white sm:p-5 md:p-6 lg:p-8"
          style={{
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          }}
        >
          <h3 className="font-bold text-3xl sm:text-4xl md:text-4xl lg:text-4xl md:mb-3 lg:mb-3">
            {destination}
          </h3>
          <p className="text-gray-300 mb-2 flex items-center sm:mb-1 md:mb-1 lg:mb-1">
            <LocationMarkerIcon className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3 md:w-7 md:h-7 md:mr-3 lg:w-8 lg:h-8 lg:mr-4" />
            {location}
          </p>
          <p className="text-gray-300 mb-2 flex items-center sm:mb-1 md:mb-1 lg:mb-1">
            <CalendarIcon className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3 md:w-7 md:h-7 md:mr-3 lg:w-8 lg:h-8 lg:mr-4" />
            {duration}
          </p>
          <p className="text-gray-300 mb-2 flex items-center sm:mb-1 md:mb-1 lg:mb-1">
            <ClockIcon className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3 md:w-7 md:h-7 md:mr-3 lg:w-8 lg:h-8 lg:mr-4" />
            {days} days, {nights} nights
          </p>
          <p className="font-bold mt-2 flex items-center sm:mt-1 md:mt-1 lg:mt-1">
            <TagIcon className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3 md:w-7 md:h-7 md:mr-3 lg:w-8 lg:h-8 lg:mr-4" />
            ${price}
          </p>
        </animated.div>
      </div>
    </animated.div>
  );
};

export default Card;