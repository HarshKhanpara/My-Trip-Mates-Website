'use client';

import React from 'react';
import Card from '../Card';
import { useRouter } from 'next/navigation';
import { baliTripsData, newTripsData, thailandTripsData, upcomingTripsData, vietnamTripsData } from '@/constants/cards';

// Existing data for upcoming and new trips
// Dummy data for upcoming and new trips

const UpcomingTrip = () => {
  const router = useRouter();

  const handleCardClick = (id, loc) => {
    router.push(`/${loc}/${id}`);
  };

  return (
    <div className="pt-20 px-4 md:px-8">
      {upcomingTripsData.length > 0 && (
        <>
          <h1 className="pt-16 text-3xl md:text-5xl font-bold text-center" style={{ fontFamily: 'title-light' }}>
            UPCOMING TRIPS
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-12">
            {upcomingTripsData.map((trip, index) => (
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
        </>
      )}

      {newTripsData.length > 0 && (
        <>
          <h1 className="pt-16 text-3xl md:text-5xl font-bold text-center" style={{ fontFamily: 'title-light' }}>
            NEW YEAR TRIPS
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-12">
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
        </>
      )}

      {baliTripsData.length > 0 && (
        <>
          <h1 className="pt-16 text-3xl md:text-5xl font-bold text-center" style={{ fontFamily: 'title-light' }}>
            BALI TRIPS
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-12">
            {baliTripsData.map((trip) => (
              <Card
                key={trip.id}
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
        </>
      )}

      {vietnamTripsData.length > 0 && (
        <>
          <h1 className="pt-16 text-3xl md:text-5xl font-bold text-center" style={{ fontFamily: 'title-light' }}>
            VIETNAM TRIPS
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-12">
            {vietnamTripsData.map((trip) => (
              <Card
                key={trip.id}
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
        </>
      )}

      {thailandTripsData.length > 0 && (
        <>
          <h1 className="pt-16 text-3xl md:text-5xl font-bold text-center" style={{ fontFamily: 'title-light' }}>
            THAILAND TRIPS
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-12">
            {thailandTripsData.map((trip) => (
              <Card
                key={trip.id}
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
        </>
      )}
    </div>
  );
};

export default UpcomingTrip;
