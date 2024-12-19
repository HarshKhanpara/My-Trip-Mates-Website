"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import ScrollIndicator from "./Scroll";

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);
  const [currentImage, setCurrentImage] = useState("/banner1.png");
  const images = ["/banner1.png", "/banner2.png", "/banner3.png"];

  // Track mouse position for dynamic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      const sparkle = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 12 + 6,
        duration: Math.random() * 0.8 + 0.5,
      };
      setSparkles((prev) => [...prev, sparkle]);

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
      }, 1200);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Rotate background images
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        return images[(currentIndex + 1) % images.length];
      });
    }, 3000);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen text-white overflow-hidden bg-gradient-to-r from-[#1E3A8A] to-[#2563EB]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentImage}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/70 to-[#15191D]"></div>
      </div>

      {/* Cursor Sparkles */}
      <div>
        <div
          className="absolute w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] bg-gradient-to-br from-[#FACC15] to-[#FFA500] rounded-full pointer-events-none filter blur-3xl opacity-40"
          style={{
            top: cursorPosition.y - 40,
            left: cursorPosition.x - 40,
            transform: `translate(-50%, -50%)`,
          }}
        ></div>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute bg-white rounded-full pointer-events-none"
            style={{
              width: sparkle.size,
              height: sparkle.size,
              top: sparkle.y - sparkle.size / 2,
              left: sparkle.x - sparkle.size / 2,
            }}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 2 }}
            transition={{ duration: sparkle.duration, ease: "easeOut" }}
          ></motion.div>
        ))}
      </div>

      {/* Decorative Image */}
      <motion.div
        className="relative w-full lg:w-1/2 h-[35vh] md:h-[50vh] lg:h-full flex items-center justify-center mt-8 lg:mt-0 order-2 lg:order-1"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative hidden md:block p-2 bg-gradient-to-br from-[#FACC15] to-[#FFA500] rounded-xl shadow-lg hover:scale-105 transition-transform">
          <Image
            src="/hero.jpg"
            alt="Your next destination awaits"
            width={600}
            height={500}
            className="rounded-xl"
          />
          <div className="absolute md:m-auto bottom-0 text-white text-sm md:text-base px-3 py-2 w-full text-center">
            Your Next Destination Awaits
          </div>
        </div>
        <div className="relative md:hidden mb-64 p-2 bg-gradient-to-br from-[#FACC15] to-[#FFA500] rounded-xl shadow-lg hover:scale-105 transition-transform">
          <Image
            src="/hero.jpg"
            alt="Your next destination awaits"
            width={250}
            height={250}
            className="rounded-xl"
          />
          <div className="absolute md:m-auto bottom-0 text-white text-sm md:text-base px-3 py-2 w-full text-center">
            Your Next Destination Awaits
          </div>
        </div>

      </motion.div>

      {/* Text Content */}
      <div className="relative z-10 w-full lg:w-1/2 px-6 lg:px-16 flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-6 order-1 lg:order-2">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight min-h-[120px] md:min-h-[250px]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#FACC15]">
            <Typewriter
              words={[
                "Discover Your Next Adventure",
                "Find Your Travel Friends!",
                "Create Unforgettable Memories",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={120}
              deleteSpeed={70}
              delaySpeed={1200}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-sm md:text-lg lg:text-2xl text-gray-200 mt-14"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Join group trips curated for young travelers. Meet like-minded people
          and create unforgettable memories.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <button className="px-6 py-3 bg-[#FACC15] text-[#1E3A8A] font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
          onClick={() => router.push('/upcoming-trips')}
          >
            Upcoming Trips
          </button>
          <button className="px-6 py-3 bg-transparent border border-[#FACC15] text-[#FACC15] font-semibold rounded-lg shadow-md hover:bg-[#FACC15]/20 transition"
          //Scroll to our story id on click
          onClick={() => window.scrollTo({ top: document.getElementById('our-story').offsetTop, behavior: 'smooth' })}
          >
            Learn More
          </button>
        </motion.div>
      </div>

      {/* <ScrollIndicator /> */}
    </section>
  );
};

export default Hero;
