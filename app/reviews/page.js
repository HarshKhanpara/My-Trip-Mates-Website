import Navbar from '@/components/Navbar';
import Image from 'next/image';
import ReviewCards from '@/components/reviewCards';
import Footer from '@/components/Footer';


const reviewCards = () => {
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
  <ReviewCards />
  <Footer/>

</>
  );
};

export default reviewCards;
