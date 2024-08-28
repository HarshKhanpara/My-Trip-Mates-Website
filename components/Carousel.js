"use client";

import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/assets/images/banner.jpeg',
    '/assets/images/banner.jpeg',
    '/assets/images/banner.jpeg',
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center p-20 h-screen text-white" style={{backgroundColor:"#15191D"}}>
      <h1 className="text-4xl font-bold mb-4">EXPLORE TOP DESTINATIONS</h1>
      <p className="text-lg mb-8">AT MY TRIP MATES AND CREATE LIFETIME MEMORIES</p>
      <div className="relative w-full max-w-4xl overflow-hidden">
        <div className="flex justify-center gap-4 transition-transform duration-300 ease-in-out">
          {images.map((image, index) => {
            const isCurrent = index === currentIndex;
            const isPrevious = index === (currentIndex - 1 + images.length) % images.length;
            const isNext = index === (currentIndex + 1) % images.length;

            return (
              <div
                key={index}
                className={`w-1/3 transform transition-transform duration-300 ease-in-out ${
                  isCurrent ? 'scale-100' : 'scale-90'
                } ${isPrevious ? '-translate-x-full' : ''} ${isNext ? 'translate-x-full' : ''}`}
                style={{
                  visibility: isCurrent || isPrevious || isNext ? 'visible' : 'hidden',
                }}
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-purple-600' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
