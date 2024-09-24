"use client";

import React, { useEffect, useState, useRef } from "react";
import Card from "../Card";
import { useRouter } from "next/navigation";
import { debounce } from "lodash";
import { motion } from "framer-motion";
import {
  baliTripsData,
  newTripsData,
  thailandTripsData,
  upcomingTripsData,
  vietnamTripsData,
} from "@/constants/cards";

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
  const [activeTab, setActiveTab] = useState("all");

  const handleCardClick = (loc, id) => {
    router.push(`/${loc}/${id}`);
  };

  const scrollRef = useRef(null);
  const upcomingRef = useRef(null);
  const newYearRef = useRef(null);
  const baliRef = useRef(null);
  const vietnamRef = useRef(null);
  const thailandRef = useRef(null);

  const [threshold, setThreshold] = useState(0.2);

  // Debounce the resize event to improve performance
  const handleResize = debounce(() => {
    setThreshold(window.innerWidth < 640 ? 0.05 : 0.2);
  }, 200);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const upcomingVisible = useOnScreen(upcomingRef, threshold);
  const newYearVisible = useOnScreen(newYearRef, threshold);
  const baliVisible = useOnScreen(baliRef, threshold);
  const vietnamVisible = useOnScreen(vietnamRef, threshold);
  const thailandVisible = useOnScreen(thailandRef, threshold);

  const allTrips = [
    ...upcomingTripsData,
    ...baliTripsData,
    ...thailandTripsData,
    ...vietnamTripsData,
  ];

  const tripData = {
    all: allTrips,
    upcoming: upcomingTripsData,
    bali: baliTripsData,
    thailand: thailandTripsData,
    vietnam: vietnamTripsData,
  };

  // Use requestAnimationFrame for smoother animation
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationId;
    const smoothScroll = () => {
      setOffset((prev) => (prev + 0.5) % (tripData[activeTab].length * 200));
      animationId = requestAnimationFrame(smoothScroll);
    };

    smoothScroll();
    return () => cancelAnimationFrame(animationId);
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setOffset(0);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
      <motion.h1
        className="pt-16 text-3xl md:text-5xl font-bold text-center"
        style={{ fontFamily: "title-light" }}
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        EXPLORE OUR TRIPS
      </motion.h1>

      <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 space-y-3 md:spaace-y-0 mt-8 overflow-x-auto">
        {Object.keys(tripData).map((tab) => (
          <button
            key={tab}
            className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base whitespace-nowrap transition-colors duration-300 ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => handleTabClick(tab)}
          >
          {tab === "all" ? "All Trips" : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden pt-12" ref={scrollRef}>
        <motion.div
          className="flex space-x-4"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {/* Render the original set of trips */}
          {tripData[activeTab].map((trip, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 min-h-[450px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] w-full lg:w-[calc(25%_-_1rem)] md:w-[calc(33.33%_-_1rem)]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                imageUrl={trip.imageUrl}
                destination={trip.destination}
                location={trip.location}
                duration={trip.duration}
                price={trip.price}
                days={trip.days}
                nights={trip.nights}
                onclick={() => handleCardClick(trip.loc, trip.url)}
                fillingFast={trip.fillingFast}
              />
            </motion.div>
          ))}

          {/* Render a cloned set of trips for continuous scrolling */}
          {tripData[activeTab].map((trip, index) => (
            <motion.div
              key={`clone-${index}`}
              className="flex-shrink-0 min-h-[450px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] w-full lg:w-[calc(25%_-_1rem)] md:w-[calc(33.33%_-_1rem)]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                imageUrl={trip.imageUrl}
                destination={trip.destination}
                location={trip.location}
                duration={trip.duration}
                price={trip.price}
                days={trip.days}
                nights={trip.nights}
                onclick={() => handleCardClick(trip.loc, trip.url)}
                fillingFast={trip.fillingFast}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {newTripsData.length > 0 && (
        <div ref={newYearRef}>
          <motion.h1
            className="pt-16 text-3xl md:text-5xl font-bold text-center"
            style={{ fontFamily: "title-light" }}
            variants={headingVariants}
            initial="hidden"
            animate={newYearVisible ? "visible" : "hidden"}
          >
            NEW YEAR TRIPS
          </motion.h1>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-12"
            variants={staggerContainer}
            initial="hidden"
            animate={newYearVisible ? "visible" : "hidden"}
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
                  onclick={() => handleCardClick(trip.loc, trip.url)}
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
            style={{ fontFamily: "title-light" }}
            variants={headingVariants}
            initial="hidden"
            animate={baliVisible ? "visible" : "hidden"}
          >
            BALI TRIPS
          </motion.h1>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-12"
            variants={staggerContainer}
            initial="hidden"
            animate={baliVisible ? "visible" : "hidden"}
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
                  onclick={() => handleCardClick(trip.loc, trip.url)}
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
            style={{ fontFamily: "title-light" }}
            variants={headingVariants}
            initial="hidden"
            animate={vietnamVisible ? "visible" : "hidden"}
          >
            VIETNAM TRIPS
          </motion.h1>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-12"
            variants={staggerContainer}
            initial="hidden"
            animate={vietnamVisible ? "visible" : "hidden"}
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
                  onclick={() => handleCardClick(trip.loc, trip.url)}
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
            style={{ fontFamily: "title-light" }}
            variants={headingVariants}
            initial="hidden"
            animate={thailandVisible ? "visible" : "hidden"}
          >
            THAILAND TRIPS
          </motion.h1>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-12"
            variants={staggerContainer}
            initial="hidden"
            animate={thailandVisible ? "visible" : "hidden"}
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
                  onclick={() => handleCardClick(trip.loc, trip.url)}
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
