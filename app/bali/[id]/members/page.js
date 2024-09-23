"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for dynamic routing
import Navbar from '@/components/Navbar';
import TravelCard from '@/components/Trips/TravelCard';
import Itinerary from '@/components/Trips/TripDetail';
import BestTrips from '@/components/Home/BestTrips';
import TravelStories from '@/components/Home/TravelStories';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { getTripByUrlAndLocation } from '@/utils/getTrip';


const Trip_Bali = ({params}) => {
  const router = useRouter();
  let { id } = params; // Get the dynamic parameters from the URL
  const location = 'bali';
  console.log(id);
  // Convert id to a number (if necessary) and fetch the trip details
  const trip = id && location ? getTripByUrlAndLocation(id, location) : null;

  if (!trip) {
    return <div>Trip not found</div>;
  }

  const scrollToGroup = () => {
    const groupElement = document.getElementById('group');
    if (groupElement) {
      groupElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  useEffect(() => {
    scrollToGroup();
  }, []); // Empty dependency array means this will run once after the initial render
  

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
        price={trip.pricing} // Assuming the first pricing detail is used
        description={trip.description}
        mainImage="/bali/bali-trip.png" // Adjust as needed
        galleryImages={trip.galleryImages.map(item => item.imageSrc)}
        bgColor="#fff"
        textColor="text-black"
        cardBgColor="bg-[#fff]"
        buttonHoverColor="hover:bg-[#e55c2c]"
        buttonTextColor="text-white"
        dividerColor="bg-white"
        dropletColor="#347D84"
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
}

export default Trip_Bali;
