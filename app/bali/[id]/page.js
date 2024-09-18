"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for dynamic routing
import Navbar from '@/components/Navbar';
import TravelCard from '@/components/Trips/TravelCard';
import Itinerary from '@/components/Trips/TripDetail';
import BestTrips from '@/components/Home/BestTrips';
import TravelStories from '@/components/Home/TravelStories';
import Footer from '@/components/Footer';
import { getTripByIdAndLocation } from '@/utils/getTrip'; // Adjust the path as needed
import ExclusiveTrip from '@/components/Trips/ExclusiveTrip';

const Trip_Bali = ({ params }) => {
  const router = useRouter();
  let { id } = params; // Get the dynamic parameters from the URL
  const location = 'bali';
  console.log(id);

  // Convert id to a number (if necessary) and fetch the trip details
  const trip = id && location ? getTripByIdAndLocation(parseInt(id, 10), location) : null;

  if (!trip) {
    return <div>Trip not found</div>;
  }

  return (
    <>
      {/* Conditionally render ExclusiveTrip if the trip is a New Year Trip */}
      {trip.isExclusive === "nyt" ? (
        <div className='bg-black'>
          <ExclusiveTrip />
          <div className='z-10'>
          <Navbar
        backgroundColor='black'  // Light background color
        textColor='white'        // Dark text color for contrast
        buttonColor='#fff'    // Color for buttons
        hoverColor='#fff'     // Hover color for links
        dropdownBgColor='white'  // Light dropdown background
        dropdownTextColor='black' // Dark dropdown text color
      />

          <TravelCard
            destination={trip.title}
            duration={trip.tripLength}
            price={trip.pricing} 
            description={trip.description}
            mainImage="/bali/bali-trip.png" 
            galleryImages={trip.galleryImages.map(item => item.imageSrc)}
            isDarkMode={true} 
          />
          <Itinerary
            itineraryData={trip}
            groupData={trip.groupData}
            groupDataTrip={trip.groupDataTrip}
            isDarkMode={true}                                                                                                                                                    
          />
          <BestTrips 
            backgroundColor='#000' 
            textColor='#fff' 
          />
          <TravelStories 
            backgroundColor='#000' 
            textColor='#fff'
          />
          <Footer 
            textColor='#fff'
            backgroundColor='#000'
          />
          </div>
        </div>
      ) : (
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
      )}

    </>
  );
};

export default Trip_Bali;
