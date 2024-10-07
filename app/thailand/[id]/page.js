"use client";

import Footer from "@/components/Footer";
import BestTrips from "@/components/Home/BestTrips";
import TravelStories from "@/components/Home/TravelStories";
import Loading3D from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ExclusiveTrip from "@/components/Trips/ExclusiveTrip";
import TravelCard from "@/components/Trips/TravelCard";
import Itinerary from "@/components/Trips/TripDetail";
import { getTripByUrlAndLocation } from "@/utils/getTrip";
import React, { useEffect, useState } from "react";

const Trip_Thailand = ({ params }) => {
  const [trip, setTrip] = useState(null);

  let { id } = params; // Get the dynamic parameters from the URL
  const location = "thailand";

  useEffect(() => {
    const fetchTrip = async () => {
      const tripDetails = await getTripByUrlAndLocation(id, location);
      if(tripDetails === null) {
        router.push('/404');
      }
      setTrip(tripDetails);
    };

    fetchTrip();
  }, [id, location]);

  if (!trip) {
    return <Loading3D
        loadingMessage='LOADING YOUR TRIP DETAILS'
     />; // Show the 3D loading screen while data is loading
  }

  return (
    <>
      {/* Conditionally render ExclusiveTrip if the trip is a New Year Trip */}
      {trip.isExclusive ? (
        <div className="bg-black">
          <ExclusiveTrip />
          <div className="z-10">
            <Navbar
              backgroundColor="black" // Light background color
              textColor="white" // Dark text color for contrast
              buttonColor="#fff" // Color for buttons
              hoverColor="#fff" // Hover color for links
              dropdownBgColor="white" // Light dropdown background
              dropdownTextColor="black" // Dark dropdown text color
            />
            <TravelCard
              destination={trip.title}
              duration={trip.tripLength}
              price={trip.pricing}
              description={trip.description}
              mainImage="/thailand.png"
              galleryImages={trip.galleryImages.map((item) => item.imageSrc)}
              isDarkMode={true}
            />
            <Itinerary
              itineraryData={trip}
              groupData={trip.groupData}
              groupDataTrip={trip.groupDataTrip}
              isDarkMode={true}
            />
            <BestTrips backgroundColor="#000" textColor="#fff" />
            <TravelStories backgroundColor="#000" textColor="#fff" />
            <Footer textColor="#fff" backgroundColor="#000" />
          </div>
        </div>
      ) : (
        <>
          <Navbar
            backgroundColor="white" // Light background color
            textColor="black" // Dark text color for contrast
            buttonColor="#E15E2E" // Color for buttons
            hoverColor="#E15E2E" // Hover color for links
            dropdownBgColor="white" // Light dropdown background
            dropdownTextColor="black" // Dark dropdown text color
          />

          <TravelCard
            destination={trip.title}
            duration={trip.tripLength}
            price={trip.pricing} // Assuming the first pricing detail is used
            description={trip.description}
            mainImage="/thailand.png" // Update if necessary
            galleryImages={trip.galleryImages.map((item) => item.imageSrc)}
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
      )}
    </>
  );
};

export default Trip_Thailand;
