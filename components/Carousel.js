"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";

const Carousel = () => {
  const slides = ["/slide1.png", "/slide2.png", "/slide3.png", "/slide4.png", "/slide5.png"];
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const slidesPerView = viewportWidth < 640 ? 1.2 : viewportWidth < 1024 ? 2.5 : 2;
  const spaceBetween = viewportWidth < 640 ? 15 : 30;

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-pink-100" id="target-section">
      {/* Background Blur */}
      <div className="absolute inset-0 z-0 bg-pink-400/60 blur-[100px]" style={{ opacity: 0.6 }}></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <h1
          className="text-3xl md:text-5xl font-bold text-black mb-4 mt-8 md:mt-11 text-center"
          style={{ fontFamily: "title-light" }}
        >
          Explore Top Destinations
        </h1>
        <p className="text-black text-sm md:text-lg mb-6 md:mb-11 text-center">
          At My Trip Mates and Create Lifetime Memories
        </p>

        {/* Carousel Container */}
        <div className="relative w-full mx-auto overflow-hidden md:px-6">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            coverflowEffect={{
              rotate: 0,
              stretch: 10,
              depth: 700,
              modifier: 1.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} >
                <div className="relative w-[300px] h-[360px] md:w-[900px] md:h-[571px] overflow-hidden md:px-10">
                  <Image
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover rounded-3xl z-20"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
