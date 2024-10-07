"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import TravelCard from '@/components/Trips/TravelCard';
import Itinerary from '@/components/Trips/TripDetail';
import BestTrips from '@/components/Home/BestTrips';
import TravelStories from '@/components/Home/TravelStories';
import Footer from '@/components/Footer';
import { getTripByUrlAndLocation } from '@/utils/getTrip';
import ExclusiveTrip from '@/components/Trips/ExclusiveTrip';
import Loading3D from '@/components/LoadingScreen';

const Trip_Bali = ({ params }) => {
  const [trip, setTrip] = useState(null);
  const router = useRouter();
  let { id } = params;
  const location = 'bali';

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
      {trip.isExclusive ? (
        <div className='bg-black'>
          <ExclusiveTrip />
          <div className='z-10'>
            <Navbar
              backgroundColor='black'
              textColor='white'
              buttonColor='#fff'
              hoverColor='#fff'
              dropdownBgColor='white'
              dropdownTextColor='black'
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
            backgroundColor='white'
            textColor='black'
            buttonColor='#E15E2E'
            hoverColor='#E15E2E'
            dropdownBgColor='white'
            dropdownTextColor='black'
          />
          <TravelCard
            destination={trip.title}
            duration={trip.tripLength}
            price={trip.pricing}
            description={trip.description}
            mainImage="/bali/bali-trip.png"
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
