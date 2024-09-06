"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState('/banner1.png');
  const images = ['/banner1.png', '/banner2.png', '/banner3.png'];

  const [displayedText, setDisplayedText] = useState('');
  const [subText, setSubText] = useState('');
  
  const fullText = 'Find your travel friends!';
  const subFullText = 'Group Trips for 18-32 years old';
  
  const typingSpeed = 100; // Speed for main text
  const subTypingSpeed = 150; // Speed for sub text

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prevText) => {
        // Append the next character from fullText
        const nextText = fullText.slice(0, index + 1);
        index += 1;
        if (index >= fullText.length) {
          clearInterval(typingInterval);
        }
        return nextText;
      });
    }, typingSpeed);

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setSubText((prevText) => {
        // Append the next character from subFullText
        const nextText = subFullText.slice(0, index + 1);
        index += 1;
        if (index >= subFullText.length) {
          clearInterval(typingInterval);
        }
        return nextText;
      });
    }, subTypingSpeed);

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
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
          <h1 className="w-full md:max-w-2xl text-[40px] font-light mt-6 md:mt-12 lg:text-7xl mb-5 sm:text-3xl md:text-7xl text-center opacity-75"
            style={{ lineHeight: '120%' }}
          >
            {displayedText}
          </h1>
          <h2 className="w-full md:max-w-2xl text-[20px] font-light mt-2 md:mt-4 lg:text-4xl sm:text-2xl text-center opacity-75"
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
