"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ScrollIndicator from './Scroll';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState('/banner1.png');
  const images = ['/banner1.png', '/banner2.png', '/banner3.png'];

  const [rotateText, setRotateText] = useState('Find your travel friends!');
  const rotateTexts = ['Find your travel friends!', 'Discover new adventures!', 'Join the journey!'];
  const typingSpeed = 100;
  const deleteSpeed = 50;
  const delaySpeed = 1500;

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
    let isDeleting = false;
    let loopNum = 0;
    let text = '';
    let currentWord = rotateTexts[loopNum];
    let charIndex = 0;

    const tick = () => {
      if (isDeleting) {
        text = currentWord.substring(0, charIndex - 1);
        setRotateText(text);
        charIndex--;
      } else {
        text = currentWord.substring(0, charIndex + 1);
        setRotateText(text);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), delaySpeed);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        loopNum = (loopNum + 1) % rotateTexts.length;
        currentWord = rotateTexts[loopNum];
      }

      setTimeout(tick, isDeleting ? deleteSpeed : typingSpeed);
    };

    const typewriterEffect = setTimeout(tick, typingSpeed);

    return () => clearTimeout(typewriterEffect); // Cleanup on unmount
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center lg:justify-center overflow-hidden" style={{ minHeight: '85vh' }}>
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
          <div className="w-full md:max-w-2xl text-center" style={{ minHeight: '250px' }}>
            <h1 className="text-[40px] font-light mt-6 md:mt-12 lg:text-7xl mb-5 sm:text-3xl md:text-7xl text-center opacity-75"
              style={{ lineHeight: '120%' }}
            >
              <span className="typewriter" data-rotate='["Find your travel friends!", "Discover new adventures!", "Join the journey!"]' data-period="1500">
                {rotateText}
              </span>
            </h1>
          </div>
          <h2 className="w-full md:max-w-2xl text-[20px] font-light mt-2 md:mt-20 lg:text-4xl sm:text-2xl text-center opacity-75"
            style={{ lineHeight: '120%' }}
          >
      Group Trips for 18-32 years old
          </h2>
        </div>
      </div>
      <ScrollIndicator />

      <button className="absolute bottom-10 right-10 bg-[#F1E08F] text-[#1C2B3E] rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl">
        +
      </button>
      
    </section>
  );
};

export default Hero;