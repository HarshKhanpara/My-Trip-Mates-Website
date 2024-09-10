"use client";

import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import Card from '../Card';
import { useRouter } from 'next/navigation';
const BestTrips = ({
  backgroundColor = '#ffffff', // Default white background
  textColor = '#000000', // Default black text
}) => {
  const newTripsData = [
    // {
    //   imageUrl: '/bali/card2.jpg',
    //   destination: 'Bali Adventure',
    //   location: 'Bali, Indonesia',
    //   duration: '20th Oct - 26th Oct (7 days)',
    //   price: '320000 per person',
    //   days: 7,
    //   nights: 6,
    //   id: 2,
    //   loc: 'bali',
    // },
    // {
    //   imageUrl: '/vietnam/card1.jpg',
    //   destination: 'Vietnam Beach Relaxation',
    //   location: 'Vietnam, Southeast Asia',
    //   duration: '15th Oct - 21st Oct (7 days)',
    //   price: '290000 per person',
    //   days: 7,
    //   nights: 6,
    //   id: 1,
    //   loc: 'vietnam',
    // },
    // {
    //   imageUrl: '/thailand/card1.jpg',
    //   destination: 'Thailand Beach Bliss',
    //   location: 'Thailand, Southeast Asia',
    //   duration: '10th Nov - 16th Nov (7 days)',
    //   price: '310000 per person',
    //   days: 7,
    //   nights: 6,
    //   id: 1,
    //   loc: 'thailand',
    // }
    {
      imageUrl: '/bali/card1.jpg',
      destination: 'Bali Beach Escape',
      location: 'Bali, Indonesia',
      duration: '15th Nov - 23rd Nov (8 days)',
      price: '36,900 per person',
      days: 9,
      nights: 8,
      id: 1,
      loc: 'bali',
      fillingFast: true
    },
    {
      imageUrl: '/bali/card2.jpg',
      destination: 'Bali Adventure',
      location: 'Bali, Indonesia',
      duration: '3rd Dec - 11th Dec (8 days)',
      price: '49,900 per person',
      days: 9,
      nights: 8,
      id: 2,
      loc: 'bali',
      fillingFast:false
    },
    {
      imageUrl: '/bali/card3.jpg',
      destination: 'Bali Cultural Experience',
      location: 'Bali, Indonesia',
      duration: '29th Dec - 6th Jan (9 days)',
      price: '46,900 per person',
      days: 9,
      nights: 8,
      id: 3,
      loc: 'bali',
      fillingFast:true
    },
    // {
    //   imageUrl: '/vietnam/card3.jpg',
    //   destination: 'Vietnam Cultural Journey',
    //   location: 'Vietnam, Southeast Asia',
    //   duration: '5th Nov - 11th Nov (7 days)',
    //   price: '305000 per person',
    //   days: 7,
    //   nights: 6,
    //   id: 3,
    //   loc: 'vietnam',
    // },
    {
      imageUrl: '/thailand/card1.jpg',
      destination: 'Thailand Beach Bliss',
      location: 'Thailand, Southeast Asia',
      duration: '15th Nov - 22th Oct (7 days)',
      price: '36,900 per person',
      days: 9,
      nights: 8,
      id: 1,
      loc: 'thailand',
      fillingFast: true
    },
    {
      imageUrl: '/thailand/card2.jpg',
      destination: 'Thailand Adventure',
      location: 'Thailand, Southeast Asia',
      duration: '13th - 20th Nov (7 days)',
      price: '40,900 per person',
      days: 9,
      nights: 8,
      id: 2,
      loc: 'thailand',
      fillingFast: false
    },
  ];
  

  const router = useRouter();
  const handleViewMore = () => {
    router.push('/upcoming-trips');
  };

  const handleCardClick = (id, loc) => {
    router.push(`/${loc}/${id}`);
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
            >
              View All Trips
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {newTripsData.map((trip, index) => (
          <Card
            key={index}
            imageUrl={trip.imageUrl}
            destination={trip.destination}
            location={trip.location}
            duration={trip.duration}
            price={trip.price}
            days={trip.days}
            nights={trip.nights}
            onclick={() => handleCardClick(trip.id, trip.loc)}
            fillingFast={trip.fillingFast}
          />
        ))}
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default BestTrips;
