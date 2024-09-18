"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useEffect, useState } from 'react';
// import { debounce } from 'lodash';
import styles from './Carousel.module.css'; 
// import Spinner from './Spinner';

const Carousel = () => {
  const slides = ["/slide1.png", "/slide2.png", "/slide3.png", "/slide4.png", "/slide5.png"];
  const [viewportWidth, setViewportWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState('auto');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateWidth = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    if (viewportWidth < 640) {
      setContainerHeight('300px');
    } else if (viewportWidth < 768) {
      setContainerHeight('400px');
    } else {
      setContainerHeight('500px');
    }
  }, [viewportWidth]);

  // Simulate loading for 1.5 seconds using lodash debounce
  // useEffect(() => {
  //   const delayedLoader = debounce(() => setIsLoading(false), 1500);
  //   delayedLoader(); 

  //   return () => {
  //     delayedLoader.cancel();
  //   };
  // }, []);

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
        <div className="relative overflow-hidden rounded-lg mx-auto" style={{ minHeight: containerHeight, maxWidth: '95%' }}>
          {/* Spinner */}
          {/* {isLoading ? (
            <Spinner loading={true} />
          ) : ( */}
            <div className={styles.carouselContainer}>
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 1000,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                autoplay={{
                  delay: 1000, 
                  disableOnInteraction: false,
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
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
