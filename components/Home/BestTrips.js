"use client";

import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import Card from '../Card';
import RecentSearches from './RecentSearches';

const BestTrips = ({
  backgroundColor = '#ffffff', // Default white background
  textColor = '#000000', // Default black text
}) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const destinations = [
    { id: 1, imageUrl: '/assets/images/bali.jpg', destination: 'Bali, Indonesia' },
    { id: 2, imageUrl: '/assets/images/maldives.jpg', destination: 'Maldives' },
    { id: 3, imageUrl: '/assets/images/hawaii.jpg', destination: 'Hawaii, USA' },
    { id: 4, imageUrl: '/assets/images/greece.jpg', destination: 'Santorini, Greece' },
  ];

  const handleViewMore = () => {
    setVisibleCount(destinations.length);
  };

  // Determine button styles based on the background color
  const isLightBackground = backgroundColor === '#ffffff' || backgroundColor === '#fff';
  const buttonTextColor = isLightBackground ? '#000000' : '#ffffff'; // Black text on light, white text on dark
  const buttonBackgroundColor = isLightBackground ? '#000000' : 'transparent'; // Black background on light, transparent on dark

  return (
    <section
      className="py-4 sm:py-8 md:py-12 sm:min-h-screen w-full md:min-h-56 z-20"
      style={{ backgroundColor }} // Apply configurable background color
    >
      <Parallax
        blur={{ min: -15, max: 15 }}
        strength={300}
      >
        <div className="w-full px-4 sm:px-6 md:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4"
                style={{ color: textColor }} // Apply configurable text color
              >
                Plan your best trips ever
              </h2>
              <p className="mb-4 sm:mb-6" style={{ color: textColor }}>
                Making the Most of Your Travel Experience in 2023
              </p>
            </div>
            <button
              className="text-base md:text-lg font-semibold py-3 px-5 rounded-md border hover:bg-opacity-90 transition duration-300 ease-in-out"
              style={{
                color: buttonTextColor, // Dynamic text color based on background
                borderColor: textColor, // Keep border consistent with text color
                borderColor : buttonBackgroundColor, // Dynamic background color based on light or dark background
              }}
              onClick={handleViewMore}
              disabled={visibleCount >= destinations.length}
            >
              {visibleCount >= destinations.length ? 'No More Destinations' : 'View All'}
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {destinations.slice(0, visibleCount).map((destination) => (
              <Card
                key={destination.id}
                imageUrl={destination.imageUrl}
                destination={destination.destination}
              />
            ))}
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default BestTrips;
