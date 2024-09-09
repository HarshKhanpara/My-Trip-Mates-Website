import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import UpcomingTrip from '@/components/Trips/UpcomingTrips';
import React from 'react';

const UpcomingTrips = () => {
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
      <UpcomingTrip />
      <Footer />
    </>
  );
}

export default UpcomingTrips;
