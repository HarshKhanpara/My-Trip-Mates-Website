// components/Slideshow.js
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Slideshow = ({ images, autoplay = true, interval = 1500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(nextSlide, interval);

    // Cleanup the interval on component unmount or if autoplay changes
    return () => clearInterval(timer);
  }, [autoplay, interval, nextSlide]);

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden">
      <div className="relative h-64">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out"
        />
        <button
          className="slideshow-button absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
          onClick={prevSlide}
        >
          &#9664;
        </button>
        <button
          className="slideshow-button absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
          onClick={nextSlide}
        >
          &#9654;
        </button>
      </div>
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
              index === currentIndex ? 'bg-black' : 'bg-gray-300'
            } transition-colors duration-300`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
