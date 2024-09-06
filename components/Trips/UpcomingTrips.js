"use client";

import React from 'react';
import Card from '../Card';
import { useRouter } from 'next/navigation';

// Existing data for upcoming and new trips
// Dummy data for upcoming and new trips
const upcomingTripsData = [
  {
    imageUrl: '/bali/card1.jpg',
    destination: 'Bali Beach Escape',
    location: 'Bali, Indonesia',
    duration: '10th Oct - 16th Oct (7 days)',
    price: '300000 per person',
    days: 7,
    nights: 6,
    id: 1,
    loc: 'bali',
  },
  {
    imageUrl: '/vietnam/card3.jpg',
    destination: 'Vietnam Cultural Journey',
    location: 'Vietnam, Southeast Asia',
    duration: '5th Nov - 11th Nov (7 days)',
    price: '305000 per person',
    days: 7,
    nights: 6,
    id: 3,
    loc: 'vietnam',
  },
  {
    imageUrl: '/thailand/card3.jpg',
    destination: 'Thailand Cultural Experience',
    location: 'Thailand, Southeast Asia',
    duration: '1st Dec - 7th Dec (7 days)',
    price: '320000 per person',
    days: 7,
    nights: 6,
    id: 3,
    loc: 'thailand',
  },
];

const newTripsData = [
  {
    imageUrl: '/bali/card2.jpg',
    destination: 'Bali Adventure',
    location: 'Bali, Indonesia',
    duration: '20th Oct - 26th Oct (7 days)',
    price: '320000 per person',
    days: 7,
    nights: 6,
    id: 2,
    loc: 'bali',
  },
  {
    imageUrl: '/vietnam/card1.jpg',
    destination: 'Vietnam Beach Relaxation',
    location: 'Vietnam, Southeast Asia',
    duration: '15th Oct - 21st Oct (7 days)',
    price: '290000 per person',
    days: 7,
    nights: 6,
    id: 1,
    loc: 'vietnam',
  },
  {
    imageUrl: '/thailand/card1.jpg',
    destination: 'Thailand Beach Bliss',
    location: 'Thailand, Southeast Asia',
    duration: '10th Nov - 16th Nov (7 days)',
    price: '310000 per person',
    days: 7,
    nights: 6,
    id: 1,
    loc: 'thailand',
  }
];

// Data for Bali trips
const baliTripsData = [
  {
    imageUrl: '/bali/card1.jpg',
    destination: 'Bali Beach Escape',
    location: 'Bali, Indonesia',
    duration: '10th Oct - 16th Oct (7 days)',
    price: '300000 per person',
    days: 7,
    nights: 6,
    id: 1,
    loc: 'bali',
  },
  {
    imageUrl: '/bali/card2.jpg',
    destination: 'Bali Adventure',
    location: 'Bali, Indonesia',
    duration: '20th Oct - 26th Oct (7 days)',
    price: '320000 per person',
    days: 7,
    nights: 6,
    id: 2,
    loc: 'bali',
  },
  {
    imageUrl: '/bali/card3.jpg',
    destination: 'Bali Cultural Experience',
    location: 'Bali, Indonesia',
    duration: '1st Nov - 7th Nov (7 days)',
    price: '310000 per person',
    days: 7,
    nights: 6,
    id: 3,
    loc: 'bali',
  },
];

// Data for Vietnam trips
const vietnamTripsData = [
  {
    imageUrl: '/vietnam/card1.jpg',
    destination: 'Vietnam Beach Relaxation',
    location: 'Vietnam, Southeast Asia',
    duration: '15th Oct - 21st Oct (7 days)',
    price: '290000 per person',
    days: 7,
    nights: 6,
    id: 1,
    loc: 'vietnam',
  },
  {
    imageUrl: '/vietnam/card2.jpg',
    destination: 'Vietnam Adventure Tour',
    location: 'Vietnam, Southeast Asia',
    duration: '25th Oct - 31st Oct (7 days)',
    price: '310000 per person',
    days: 7,
    nights: 6,
    id: 2,
    loc: 'vietnam',
  },
  {
    imageUrl: '/vietnam/card3.jpg',
    destination: 'Vietnam Cultural Journey',
    location: 'Vietnam, Southeast Asia',
    duration: '5th Nov - 11th Nov (7 days)',
    price: '305000 per person',
    days: 7,
    nights: 6,
    id: 3,
    loc: 'vietnam',
  },
];

// Data for Thailand trips
const thailandTripsData = [
  {
    imageUrl: '/thailand/card1.jpg',
    destination: 'Thailand Beach Bliss',
    location: 'Thailand, Southeast Asia',
    duration: '10th Nov - 16th Nov (7 days)',
    price: '310000 per person',
    days: 7,
    nights: 6,
    id: 1,
    loc: 'thailand',
  },
  {
    imageUrl: '/thailand/card2.jpg',
    destination: 'Thailand Adventure',
    location: 'Thailand, Southeast Asia',
    duration: '20th Nov - 26th Nov (7 days)',
    price: '330000 per person',
    days: 7,
    nights: 6,
    id: 2,
    loc: 'thailand',
  },
  {
    imageUrl: '/thailand/card3.jpg',
    destination: 'Thailand Cultural Experience',
    location: 'Thailand, Southeast Asia',
    duration: '1st Dec - 7th Dec (7 days)',
    price: '320000 per person',
    days: 7,
    nights: 6,
    id: 3,
    loc: 'thailand',
  },
];

const UpcomingTrip = () => {
  const router = useRouter();

  const handleCardClick = (id, loc) => {
    router.push(`/${loc}/${id}`);
  };

  return (
    <div className='pt-20 px-4 md:px-8'>
      <h1 className='pt-16 text-3xl md:text-5xl font-bold text-center' style={{ fontFamily: 'title-light' }}>UPCOMING TRIPS</h1>
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
          />
        ))}
      </div>

      <h1 className='pt-16 text-3xl md:text-5xl font-bold text-center' style={{ fontFamily: 'title-light' }}>NEW YEAR TRIPS</h1>
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
          />
        ))}
      </div>

      <h1 className='pt-16 text-3xl md:text-5xl font-bold text-center' style={{ fontFamily: 'title-light' }}>BALI TRIPS</h1>
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
          />
        ))}
      </div>

      <h1 className='pt-16 text-3xl md:text-5xl font-bold text-center' style={{ fontFamily: 'title-light' }}>VIETNAM TRIPS</h1>
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
          />
        ))}
      </div>

      {/* New Thailand Trips Section */}
      <h1 className='pt-16 text-3xl md:text-5xl font-bold text-center' style={{ fontFamily: 'title-light' }}>THAILAND TRIPS</h1>
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
          />
        ))}
      </div>
    </div>
  );
}

export default UpcomingTrip;
