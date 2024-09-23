'use client';

import React, { useEffect, useState, useRef } from 'react';
import Card from '../Card';
import { useRouter } from 'next/navigation';
import { baliTripsData, newTripsData, thailandTripsData, upcomingTripsData, vietnamTripsData } from '@/constants/cards';
import { motion } from 'framer-motion';

// Intersection observer hook
const useOnScreen = (ref, threshold = 0.2) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold } 
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isIntersecting;
};

const UpcomingTrip = () => {
  const router = useRouter();

  const handleCardClick = (loc, id) => {
    router.push(`/${loc}/${id}`);
  };

  const upcomingRef = useRef(null);
  const newYearRef = useRef(null);
  const baliRef = useRef(null);
  const vietnamRef = useRef(null);
  const thailandRef = useRef(null);

  const [threshold, setThreshold] = useState(0.2); // Default threshold

  useEffect(() => {
    // Update threshold based on window width after component is mounted
    const handleResize = () => {
      setThreshold(window.innerWidth < 640 ? 0.05 : 0.2);
    };

    handleResize(); // Call once to set the initial value
    window.addEventListener('resize', handleResize); // Update on resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  const upcomingVisible = useOnScreen(upcomingRef, threshold);
  const newYearVisible = useOnScreen(newYearRef, threshold);
  const baliVisible = useOnScreen(baliRef, threshold);
  const vietnamVisible = useOnScreen(vietnamRef, threshold);
  const thailandVisible = useOnScreen(thailandRef, threshold);


  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % (upcomingTripsData.length * 150)); 
    }, 0.2); 
    return () => clearInterval(interval);
  }, []);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="pt-20 px-4 md:px-8">
      {upcomingTripsData.length > 0 && (
        <div ref={upcomingRef}>
          <motion.h1
            className="pt-16 text-3xl md:text-5xl font-bold text-center"
            style={{ fontFamily: 'title-light' }}
            initial={{ opacity: 0, y: -20 }}
            animate={upcomingVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            UPCOMING TRIPS
          </motion.h1>
          <motion.div className="relative overflow-hidden pt-12">
            <motion.div
              className="flex space-x-4" // Add spacing between cards
              style={{ transform: `translateX(-${offset}px)`, transition: 'transform 0.1s linear' }}
            >
              {upcomingTripsData.map((trip, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 min-h-[450px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] w-full lg:w-[calc(25%_-_1rem)] md:w-[calc(33.33%_-_1rem)] " // Responsive widths
                >
                  <Card
                    imageUrl={trip.imageUrl}
                    destination={trip.destination}
                    location={trip.location}
                    duration={trip.duration}
                    price={trip.price}
                    days={trip.days}
                    nights={trip.nights}
                    onclick={() => handleCardClick(trip.loc,trip.url)}
                    fillingFast={trip.fillingFast}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      )}


      {newTripsData.length > 0 && (
        <div ref={newYearRef}>
          <motion.h1
            className="pt-16 text-3xl md:text-5xl font-bold text-center"
            style={{ fontFamily: 'title-light' }}
            variants={headingVariants}
            initial="hidden"
            animate={newYearVisible ? 'visible' : 'hidden'}
          >
            NEW YEAR TRIPS
          </motion.h1>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-12"
            variants={staggerContainer}
            initial="hidden"
            animate={newYearVisible ? 'visible' : 'hidden'}
          >
            {newTripsData.map((trip, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card
                  imageUrl={trip.imageUrl}
                  destination={trip.destination}
                  location={trip.location}
                  duration={trip.duration}
                  price={trip.price}
                  days={trip.days}
                  nights={trip.nights}
                  onclick={() => handleCardClick(trip.loc,trip.url)}
                  fillingFast={trip.fillingFast}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {baliTripsData.length > 0 && (
        <div ref={baliRef}>
          <motion.h1
            className="pt-16 text-3xl md:text-5xl font-bold text-center"
            style={{ fontFamily: 'title-light' }}
            variants={headingVariants}
            initial="hidden"
            animate={baliVisible ? 'visible' : 'hidden'}
          >
            BALI TRIPS
          </motion.h1>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-12"
            variants={staggerContainer}
            initial="hidden"
            animate={baliVisible ? 'visible' : 'hidden'}
          >
            {baliTripsData.map((trip) => (
              <motion.div key={trip.id} variants={staggerItem}>
                <Card
                  imageUrl={trip.imageUrl}
                  destination={trip.destination}
                  location={trip.location}
                  duration={trip.duration}
                  price={trip.price}
                  days={trip.days}
                  nights={trip.nights}
                  onclick={() => handleCardClick(trip.loc,trip.url)}
                  fillingFast={trip.fillingFast}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {vietnamTripsData.length > 0 && (
        <div ref={vietnamRef}>
          <motion.h1
            className="pt-16 text-3xl md:text-5xl font-bold text-center"
            style={{ fontFamily: 'title-light' }}
            variants={headingVariants}
            initial="hidden"
            animate={vietnamVisible ? 'visible' : 'hidden'}
          >
            VIETNAM TRIPS
          </motion.h1>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-12"
            variants={staggerContainer}
            initial="hidden"
            animate={vietnamVisible ? 'visible' : 'hidden'}
          >
            {vietnamTripsData.map((trip) => (
              <motion.div key={trip.id} variants={staggerItem}>
                <Card
                  imageUrl={trip.imageUrl}
                  destination={trip.destination}
                  location={trip.location}
                  duration={trip.duration}
                  price={trip.price}
                  days={trip.days}
                  nights={trip.nights}
                  onclick={() => handleCardClick(trip.loc,trip.url)}
                  fillingFast={trip.fillingFast}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {thailandTripsData.length > 0 && (
        <div ref={thailandRef}>
          <motion.h1
            className="pt-16 text-3xl md:text-5xl font-bold text-center"
            style={{ fontFamily: 'title-light' }}
            variants={headingVariants}
            initial="hidden"
            animate={thailandVisible ? 'visible' : 'hidden'}
          >
            THAILAND TRIPS
          </motion.h1>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-12"
            variants={staggerContainer}
            initial="hidden"
            animate={thailandVisible ? 'visible' : 'hidden'}
          >
            {thailandTripsData.map((trip) => (
              <motion.div key={trip.id} variants={staggerItem}>
                <Card
                  imageUrl={trip.imageUrl}
                  destination={trip.destination}
                  location={trip.location}
                  duration={trip.duration}
                  price={trip.price}
                  days={trip.days}
                  nights={trip.nights}
                  onclick={() => handleCardClick(trip.loc,trip.url)}
                  fillingFast={trip.fillingFast}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default UpcomingTrip;
