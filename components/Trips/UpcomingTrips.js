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
  const [threshold, setThreshold] = useState(0.2);

  const handleCardClick = (loc, id) => {
    router.push(`/${loc}/${id}`);
  };

  const scrollRef = useRef(null);
  const newYearRef = useRef(null);
  const baliRef = useRef(null);
  const vietnamRef = useRef(null);
  const thailandRef = useRef(null);


  const handleResize = debounce(() => {
    setThreshold(window.innerWidth < 640 ? 0.05 : 0.2);
  }, 200);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const allTrips = [
    ...upcomingTripsData,
    ...baliTripsData,
    ...thailandTripsData,
    ...vietnamTripsData,
  ];

  const tripData = {
    all: allTrips,
    bali: baliTripsData,
    thailand: thailandTripsData,
    vietnam: vietnamTripsData,
    new: newTripsData,
  };

  // Smooth scrolling logic with hover pause
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // New state for pausing

  let animationId;

  const smoothScroll = () => {
    if (!isPaused) { // Scroll only when not paused
      setOffset((prev) => (prev + 1) % (tripData[activeTab].length * 200));
    }
    animationId = requestAnimationFrame(smoothScroll);
  };

  useEffect(() => {
    smoothScroll();
    return () => cancelAnimationFrame(animationId);
  }, [activeTab, isPaused]); // Depend on isPaused

  const tripComingSoon = () => {
    cancelAnimationFrame(animationId);
    setOffset(0);
    setActiveTab("all");
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setOffset(0);
  };

  // Pause animation on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="pt-20 px-4 md:px-8">
      <Toaster />

      <motion.h1
        className="pt-16 text-3xl md:text-5xl font-bold text-center"
        style={{ fontFamily: "title-light" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        EXPLORE OUR TRIPS
      </motion.h1>

{/* Tabs to select the category of trips */}
<div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 md:gap-4 mt-8">
  {Object.keys(tripData).map((tab, index) => (
    <button
      key={tab}
      className={`px-4 py-2 md:px-5 md:py-3 rounded-full text-sm md:text-base transition duration-300 ease-in-out transform ${
        activeTab === tab
          ? "bg-blue-600 text-white shadow-lg scale-105"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md"
      } ${
        // Apply a full width on mobile for single tabs on a row
        Object.keys(tripData).length % 2 !== 0 && index === Object.keys(tripData).length - 1
          ? "col-span-2 justify-self-center"
          : ""
      }`}
      onClick={() => handleTabClick(tab)}
    >
      {tab === "new" ? "New Year Trips" : tab === "all" ? "All Trips" : tab.charAt(0).toUpperCase() + tab.slice(1)}
    </button>
  ))}
</div>

      {/* Trip Slider for All and Upcoming Tabs */}
      {(activeTab === "all") && (
        <div
          className="relative overflow-hidden pt-12"
          ref={scrollRef}
          onMouseEnter={handleMouseEnter} // Pause on hover
          onMouseLeave={handleMouseLeave} // Resume on leave
        >
          <motion.div
            className="flex space-x-4"
            style={{
              transform: `translateX(-${offset}px)`,
              transition: "transform 0.05s linear",
            }}
          >
            {tripData[activeTab].length > 0 ? (
              tripData[activeTab].concat(tripData[activeTab]).map((trip, index) => (
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
                    isSoldOut={trip.isSoldOut}
                  />
                </motion.div>
              ))
            ) : (
              <div className="w-full text-center">
                <p className="text-gray-600 text-lg font-semibold mb-6 md:mb-10">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Trips coming soon.
                  Current trips are sold out.
                </p>
                <button
                  className="mb-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg md:text-xl font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                  onClick={tripComingSoon}
                >
                  Explore More Trips
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}

{/* Static Grid for Bali, Thailand, Vietnam Tabs */}
{["bali", "thailand", "vietnam", "new"].includes(activeTab) && (
  <div
    ref={
      activeTab === "bali"
        ? baliRef
        : activeTab === "thailand"
        ? thailandRef
        : activeTab === "vietnam"
        ? vietnamRef
        : newYearRef
    }
  >
    {tripData[activeTab].length > 0 && (
      <motion.div
        key={activeTab} 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {tripData[activeTab].map((trip, index) => (
          <motion.div
            key={index}
            className="min-h-[450px]"
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
              isSoldOut={trip.isSoldOut}
            />
          </motion.div>
        ))}
      </motion.div>
    )}

    {tripData[activeTab].length === 0 && (
      <div className="w-full text-center">
        <p className="text-gray-600 font-bold md:font-extrabold mb-6 md:mb-10 pt-24 md:text-2xl">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Trips coming soon.
          Current trips are sold out.
        </p>
        <button
          className="mb-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg md:text-xl font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
          onClick={tripComingSoon}
        >
          Explore More Trips
        </button>
      </div>
    )}
  </div>
)}

    </div>
  );
}

export default UpcomingTrip;