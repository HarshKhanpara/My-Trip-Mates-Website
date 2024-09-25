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
import toast, { Toaster } from "react-hot-toast";

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


  const first = {
    hidden: { opacity: 0.75, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const tripComingSoon = () => {
    // Cancel the current animation
    cancelAnimationFrame(animationId);
  
    // Reset offset and set the active tab to "all"
    setOffset(0);
    setActiveTab("all");
  };
    
  // Use requestAnimationFrame for smoother animation
  let animationId;
  const smoothScroll = () => {
    setOffset((prev) => (prev + 0.5) % (tripData[activeTab].length * 200));
    animationId = requestAnimationFrame(smoothScroll);
  };
  
  useEffect(() => {
    // Start smooth scrolling when the component mounts
    smoothScroll();
  
    // Cleanup: Stop animation when the component unmounts or the active tab changes
    return () => cancelAnimationFrame(animationId);
  }, [activeTab]);
  

  return (
  <div className="pt-20 px-4 md:px-8">
    <Toaster /> {/* This is where the toast notifications will appear */}
    
    <motion.h1
      className="pt-16 text-3xl md:text-5xl font-bold text-center"
      style={{ fontFamily: "title-light" }}
      variants={headingVariants}
      initial="hidden"
      animate="visible"
    >
      EXPLORE OUR TRIPS
    </motion.h1>

    {/* Tabs to select the category of trips */}
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
      {Object.keys(tripData).map((tab) => (
        <button
          key={tab}
          className={`w-full md:w-auto px-4 py-2 md:px-5 md:py-3 rounded-full text-sm md:text-base transition duration-300 ease-in-out transform ${
            activeTab === tab
              ? "bg-blue-600 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md"
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab === "all" ? "All Trips" : tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>

    {/* Trip Slider */}
    <div className="relative overflow-hidden pt-12" ref={scrollRef}>
      <motion.div
        className="flex space-x-4"
        style={{
          transform: `translateX(-${offset}px)`,
          transition: "transform 0.05s linear",
        }}
      >
        {/* Render the original set of trips */}
        {tripData[activeTab].length > 0 ? (
          tripData[activeTab].map((trip, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 min-h-[450px] md:min-h-[450px] lg:min-h-[450px] w-full lg:w-[calc(25%_-_1rem)] md:w-[calc(33.33%_-_1rem)]"
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
          ))
        ) : (
          <>
          <div className=" w-full text-center">
  {/* Message */}
  <p className="text-gray-600 text-lg font-semibold mb-6 md:mb-10">
    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Trips coming soon.
    Current trips are sold out.
  </p>

  {/* Book Now Button */}
  <button
    className="mb-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg md:text-xl font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
    onClick={tripComingSoon}
  >
    Explore More Trips
  </button>
</div>
</>
        )}
      </motion.div>
    </div>

      {newTripsData.length > 0 && (
        <div ref={newYearRef}>
          <motion.h1
            className="pt-16 lg:pt-0 md:pt-0 text-3xl md:text-5xl font-bold text-center"
            style={{ fontFamily: "title-light" }}

            variants={headingVariants}
            initial="hidden"
            animate={"visible"}
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
