"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation,Autoplay } from 'swiper/modules';
import Image from 'next/image';
import styles from './Carousel.module.css'; // Corrected the filename
import { useEffect, useState } from 'react';

const Carousel = () => {
  const slides = ["/slide1.png", "/slide2.png", "/slide3.png", "/slide4.png", "/slide5.png"];
  const [viewportWidth, setViewportWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState('auto'); // State variable for dynamic height

  useEffect(() => {
    const updateWidth = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWidth);
    updateWidth(); // Initial call to set width
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Dynamically adjust the container height based on viewport width
  useEffect(() => {
    if (viewportWidth < 640) {
      setContainerHeight('300px'); // Adjust these values as needed
    } else if (viewportWidth < 768) {
      setContainerHeight('400px');
    } else {
      setContainerHeight('500px');
    }
  }, [viewportWidth]); // Re-run this effect when viewportWidth changes

  // Determine slidesPerView and spaceBetween dynamically based on viewport width
  const slidesPerView = viewportWidth < 640 ? 1.5 : viewportWidth < 1024 ? 2 : 3;
  const spaceBetween = viewportWidth < 640 ? 10 : 20;

  return (
    <div className="relative" id='target-section'>
      {/* Blurred background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ backgroundColor: "#ED8C99", filter: 'blur(100px)', opacity: 0.6 }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 max-w-full w-full flex flex-col items-center p-0 pb-7 opacity-100">    
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 mt-8 md:mt-11 text-center"
        style={{fontFamily:'title-light'}}
        >
          Explore Top Destinations
        </h1>
        <p className="text-black text-sm md:text-lg mb-6 md:mb-11 text-center">
          At My Trip Mates and Create Lifetime Memories
        </p>
        <div className="relative w-full overflow-hidden rounded-lg mx-auto" style={{ minHeight: containerHeight, maxWidth: '95%' }}>
          <div className={styles.carouselContainer}>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={slidesPerView} // Dynamically adjust slides per view
              spaceBetween={spaceBetween}  // Add space between slides
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 1000,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              // navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
              autoplay={{
                delay: 1000, // 3 seconds delay between slides
                disableOnInteraction: false, // Keeps autoplay running even after manual interaction
              }}

              className={styles.mySwiper}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.slideContent}>
                    <Image
                      src={slide}
                      alt={`Slide ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className={`${styles.image} rounded-3xl`}
                    />
                    <div className={styles.textOverlay}>
                      <h2 className="text-lg font-bold text-white">{"Destination Title"}</h2>
                      <p className="text-white">{"Description of the destination."}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
