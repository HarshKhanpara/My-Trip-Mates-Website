"use client";

import Footer from '@/components/Footer'
import BestTrips from '@/components/Home/BestTrips'
import TravelStories from '@/components/Home/TravelStories'
import Navbar from '@/components/Navbar'
import TravelCard from '@/components/Trips/TravelCard'
import Itinerary from '@/components/Trips/TripDetail'
import { getTripByIdAndLocation } from '@/utils/getTrip';
import { useRouter } from 'next/navigation';
import React from 'react'



const thailandItineraryData = {
  title: 'ITINERARY',
  date: '7th-15th September',
  tripLength: '9 days',
  groupSize: '15 person avg',
  description: `Thailand, located in Southeast Asia, is celebrated for its stunning beaches, rich cultural heritage, and lively cities. Thailand's diverse landscapes include tropical islands, lush jungles, and mountainous regions. The country is also famous for its delicious cuisine, such as pad Thai and green curry, and its colorful festivals like Songkran (Thai New Year) and Loy Krathong. Thailand's friendly locals and unique blend of tradition and modernity make it a popular travel destination.`,
  highlights: [
    'Surfing lessons',
    'Beach Clubs',
    'Gili Islands',
    'Partying',
    'Cultural tours',
    'Temple visits',
  ],
  inclusions: [
    '8 Nights accommodation in quality 3/4-star hotels',
    'Experienced Trip Manager',
    '11 meals - Vegetarian and non-vegetarian options available',
    'Transportation and Boat tickets in Bali',
    'Daily excursions and guided tours',
  ],
  exclusions: [
    'Flight tickets',
    'Alcoholic beverages',
    'Personal expenses',
  ],
  pricingDetails: [
    'INR 47,000 + GST(5%) until 9th July',
    'INR 49,000 + GST(5%) until 30th July',
    'INR 51,000 + GST(5%) until spots are available',
  ],
};

const thailandGroupData = [
  {
    imageSrc: '/thailand/1.png',
    name: 'Arjun Singh',  // Boy
    location: 'Pune, Maharashtra',
  },
  {
    imageSrc: '/thailand/2.png',
    name: 'Vivek Kapoor',  // Boy
    location: 'Mumbai, Maharashtra',
  },
  {
    imageSrc: '/thailand/3.png',
    name: 'Rahul Mehta',  // Boy
    location: 'Delhi, India',
  },
  {
    imageSrc: '/thailand/4.png',
    name: 'Anita Verma',  // Girl
    location: 'Bangalore, Karnataka',
  },
  {
    imageSrc: '/thailand/5.png',
    name: 'Karan Joshi',  // Boy
    location: 'Chennai, Tamil Nadu',
  },
  {
    imageSrc: '/thailand/6.png',
    name: 'Rohan Desai',  // Boy
    location: 'Kochi, Kerala',
  },
  {
    imageSrc: '/thailand/7.png',
    name: 'Manish Shah',  // Boy
    location: 'Ahmedabad, Gujarat',
  },
  {
    imageSrc: '/thailand/8.png',
    name: 'Simran Patel',  // Girl
    location: 'Amritsar, Punjab',
  },
  {
    imageSrc: '/thailand/9.png',
    name: 'Riya Nair',  // Girl
    location: 'Surat, Gujarat',
  },
  {
    imageSrc: '/thailand/10.png',
    name: 'Aman Singh',  // Boy
    location: 'Hyderabad, Telangana',
  },
  {
    imageSrc: '/thailand/11.png',
    name: 'Siddharth Rao',  // Boy
    location: 'Jaipur, Rajasthan',
  },
  {
    imageSrc: '/thailand/12.png',
    name: 'Neha Sharma',  // Girl
    location: 'Lucknow, Uttar Pradesh',
  },
];


const thailandGroupDataTrip = [
  { imageSrc: '/thailand/group-photo1.png' },
  { imageSrc: '/thailand/group-photo2.png' },
  { imageSrc: '/thailand/group-photo3.png' },
];



const Trip_Thailand = ({params}) => {
  
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
          backgroundColor = 'white'  // Light background color
      textColor = 'black'        // Dark text color for contrast
      buttonColor = '#E15E2E'    // Color for buttons
      hoverColor = '#E15E2E'     // Hover color for links
      dropdownBgColor = 'white'  // Light dropdown background
      dropdownTextColor = 'black' // Dark dropdown text color
      />
      <TravelCard
        destination={trip.title}
        duration={trip.tripLength}
        price={trip.pricingDetails[0]} // Assuming the first pricing detail is used
        description={trip.description}
        mainImage="/thailand.png" // Update if necessary
        galleryImages={trip.groupDataTrip.map(item => item.imageSrc)}
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
  )
}

export default Trip_Thailand