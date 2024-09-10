"use client";

import Footer from '@/components/Footer';
import BestTrips from '@/components/Home/BestTrips';
import TravelStories from '@/components/Home/TravelStories';
import Navbar from '@/components/Navbar';
import TravelCard from '@/components/Trips/TravelCard';
import Itinerary from '@/components/Trips/TripDetail';
import { getTripByIdAndLocation } from '@/utils/getTrip';
import { useRouter } from 'next/navigation';
import React from 'react';
import Head from 'next/head'; // Import Head for SEO metadata

const Trip_Thailand = ({ params }) => {
  const router = useRouter();
  let { id } = params; // Get the dynamic parameters from the URL
  const location = 'thailand';
  console.log(id);
  // Convert id to a number (if necessary) and fetch the trip details
  const trip = id && location ? getTripByIdAndLocation(parseInt(id, 10), location) : null;

  if (!trip) {
    return <div>Trip not found</div>;
  }

  return (
    <>
      <Navbar 
        backgroundColor='white'  // Light background color
        textColor='black'        // Dark text color for contrast
        buttonColor='#E15E2E'    // Color for buttons
        hoverColor='#E15E2E'     // Hover color for links
        dropdownBgColor='white'  // Light dropdown background
        dropdownTextColor='black' // Dark dropdown text color
      />
      
      <TravelCard
        destination={trip.title}
        duration={trip.tripLength}
        price={trip.pricingDetails[0]} // Assuming the first pricing detail is used
        description={trip.description}
        mainImage="/thailand.png" // Update if necessary
        galleryImages={trip.galleryImages.map(item => item.imageSrc)}
        bgColor="#fff"
        textColor="text-black"
        cardBgColor="bg-[#fff]"
        buttonHoverColor="hover:bg-[#e55c2c]"
        buttonTextColor="text-white"
        dividerColor="bg-white"
        dropletColor="#5898C7" // Adjust if needed
      />
      
      <Itinerary
        backgroundColor="#fff"
        textColor="black"
        itineraryData={trip}
        groupData={trip.groupData}
        groupDataTrip={trip.groupDataTrip}
      />
      
      <BestTrips />
      <TravelStories />
      <Footer />
    </>
  );
};

export default Trip_Thailand;
