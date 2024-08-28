"use client";

import { useState } from 'react';
import Card from '../Card';

const BestTrips = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const destinations = [
    { id: 1, imageUrl: 'https://i.pinimg.com/564x/80/f1/ef/80f1ef258d294b6cda9eb503f4cae4ef.jpg', destination: 'Bali, Indonesia' },
    { id: 2, imageUrl: '/beach.jpg', destination: 'Maldives' },
    { id: 3, imageUrl: '/beach2.jpg', destination: 'Hawaii, USA' },
    { id: 4, imageUrl: '/beach3.jpg', destination: 'Santorini, Greece' },
    { id: 5, imageUrl: '/paris.jpg', destination: 'Paris, France' },
    { id: 6, imageUrl: '/kyoto.jpg', destination: 'Kyoto, Japan' },
    { id: 7, imageUrl: '/venice.jpg', destination: 'Venice, Italy' },
    { id: 8, imageUrl: '/sydney.jpg', destination: 'Sydney, Australia' },
    { id: 9, imageUrl: '/new-york.jpg', destination: 'New York, USA' },
    // Add more destinations if needed
  ];

  const handleViewMore = () => {
    // Set visible count to the total number of destinations
    setVisibleCount(destinations.length);
  };

  return (
    <section className="py-4 sm:py-8 md:py-12 h-screen">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-4 sm:mb-0">Explore Top Destinations</h2>
          <button 
            className="text-sm sm:text-base md:text-lg text-blue-800 font-semibold py-1 px-2 sm:py-2 sm:px-4 rounded-md" 
            onClick={handleViewMore}
            disabled={visibleCount >= destinations.length}
            style={{
              background: 'linear-gradient(to right, #237DB4, #0F364E)',
              color: '#FFF'
            }}
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
    </section>
  );
};

export default BestTrips;
