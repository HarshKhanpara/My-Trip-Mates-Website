"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState('/banner1.png');
  const images = ['/banner1.png', '/banner2.png', '/banner3.png'];

  const [subText, setSubText] = useState('Group Trips for 18-32 years old');
  const subTexts = [
    'Group Trips for 18-32 years old',
    'Adventure Awaits You!',
    'Explore New Destinations',
    'Find Your Travel Tribe'
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(imageInterval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setSubText((prevSubText) => {
        const currentIndex = subTexts.indexOf(prevSubText);
        const nextIndex = (currentIndex + 1) % subTexts.length;
        return subTexts[nextIndex];
      });
    }, 2000); // Change subtext every 2 seconds

    return () => clearInterval(textInterval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center lg:justify-center overflow-hidden" style={{ minHeight: '85vh' }}>
      <div className="absolute z-10 inset-0">
        <Image
          src={currentImage} // Use the state for the background image
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background"
        />
        {/* Enhanced gradient overlay with Tailwind CSS */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-[#15191D]/50 to-transparent"></div>
      </div>

      <div className="relative z-10 pl-8 px-11 sm:px-8 md:px-10">
        <div className="w-full text-white flex flex-col items-center lg:justify-center">
          <div className="w-full md:max-w-2xl text-center">
            <h1 className="text-[40px] font-light mt-6 md:mt-12 lg:text-7xl mb-5 sm:text-3xl md:text-7xl text-center opacity-75"
              style={{ lineHeight: '120%' }}
            >
              <Typewriter
                words={['Find your travel friends!']} // Array of words to type
                loop={true} // Loop indefinitely
                cursor
                cursorStyle='_'
                typeSpeed={100} // Speed for typing
                deleteSpeed={50} // Speed for deleting
                delaySpeed={1500} // Delay before starting next loop
              />
            </h1>
          </div>
          <h2 className="w-full md:max-w-2xl text-[20px] font-light mt-2 md:mt-20 lg:text-4xl sm:text-2xl text-center opacity-75"
            style={{ lineHeight: '120%' }}
          >
            {subText}
          </h2>
        </div>
      </div>

      <button className="absolute bottom-10 right-10 bg-[#F1E08F] text-[#1C2B3E] rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl">
        +
      </button>
    </section>
  );
};

export default Hero;
