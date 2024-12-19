'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-parallax';
import Card from '../Card';
import { useRouter } from 'next/navigation';
import { upcomingTripsData } from '@/constants/cards';

const BestTrips = ({
  backgroundColor = '#ffffff', // Default white background
  textColor = '#000000', // Default black text
}) => {
  const router = useRouter();
  const [visibleCards, setVisibleCards] = useState({}); // Track visibility for each card
  const cardRefs = useRef([]); // Array to hold references to each card

  const handleViewMore = () => {
    router.push('/upcoming-trips');
  };

  const handleCardClick = (loc,mon) => {
    router.push(`/${loc}/${mon}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute('data-index');
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
          } else {
            setVisibleCards((prev) => ({ ...prev, [index]: false })); // Reset animation when scrolled out of view
          }
        });
      },
      { threshold: 0.2 } 
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on unmount
    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      className="py-4 md:mt-40 sm:py-8 md:py-12 sm:min-h-screen w-full md:min-h-56 z-20 "
      style={{ backgroundColor }} // Apply configurable background color
    >
      <Parallax blur={{ min: -15, max: 15 }} strength={300}>
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
                color: textColor === '#fff' ? '#fff' : '#000',
                borderColor: textColor,
                backgroundColor: textColor === '#ffffff' ? '#000000' : 'transparent',
              }}
              onClick={handleViewMore}
            >
              View All Trips
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {upcomingTripsData.slice(0, 4).map((trip, index) => (
              <div
                key={index}
                data-index={index} // Mark each card with a unique index
                ref={(el) => (cardRefs.current[index] = el)} // Assign ref to each card
                className={`transition-all duration-700 transform ${
                  visibleCards[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }} // Staggered effect
              >
                <Card
                  imageUrl={trip.imageUrl}
                  destination={trip.destination}
                  location={trip.location}
                  duration={trip.duration}
                  price={trip.price}
                  days={trip.days}
                  nights={trip.nights}
                  onclick={() => handleCardClick( trip.loc,trip.url)}
                  fillingFast={trip.fillingFast}
                  isSoldOut={trip.isSoldOut}
                  isNewTrip={trip.isNewTrip}
                />
              </div>
            ))}
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default BestTrips;
