"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState('/banner1.png');
  const images = ['/banner1.png', '/banner2.png']; 

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
        <div className="w-full text-white flex items-center lg:justify-center">
          <h1 className="w-full md:max-w-2xl text-[40px] font-light mt-6 md:mt-12 lg:text-7xl mb-5 sm:text-3xl md:text-7xl text-center opacity-75 "
          style={{lineHeight:'120%'}}
          >
            Find your travel friends!
          </h1>
        </div>
      </div>

      <button className="absolute bottom-10 right-10 bg-[#F1E08F] text-[#1C2B3E] rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl">
        +
      </button>
    </section>
  );
};


export default Hero;