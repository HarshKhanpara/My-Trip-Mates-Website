import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Gallery from '@/components/gallery';
import React from 'react';
import Head from 'next/head'; // Importing Head for metadata

const Photos = () => {
  return (
    <>
      <Head>
        <title>Visual Gallery - Bali, Vietnam, and Thailand Journeys</title>
        <meta name="description" content="Explore stunning visual galleries from trips to Bali, Vietnam, and Thailand. Capture the essence of these beautiful destinations through our curated image collections." />
        <meta property="og:title" content="Visual Gallery - Bali, Vietnam, and Thailand Journeys" />
        <meta property="og:description" content="Join us in an immersive visual journey across Bali, Vietnam, and Thailand. Discover the vibrant cultures, landscapes, and unforgettable memories captured in these galleries." />
        <meta property="og:image" content="/gallery/background.jpg" /> {/* Update if needed */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <div className="relative w-full">
        <img
          src="/gallery/background.jpg"
          alt="Background"
          className="object-cover w-full h-[350px]"
        />
        <div className="absolute inset-0 flex pt-48 justify-center text-white">
          <h1 className="text-3xl md:text-5xl font-serif italic"
            style={{ fontFamily: 'title-light' }}
          >
            Visual Gallery
          </h1>
        </div>
        <Gallery
          subtitle="Journey to Bali"
          images={[
            "/gallery/bali-1.jpg",
            "/gallery/bali-2.jpg",
            "/gallery/bali-3.jpg",
            "/gallery/bali-4.jpg",
            "/gallery/bali-5.jpg",
            "/gallery/bali-6.jpg",
            "/gallery/bali-7.jpg",
            "/gallery/bali-8.jpg",
            "/gallery/bali-9.jpg",
            "/gallery/bali-10.jpg"
          ]}
        />
        <Gallery
          subtitle="Journey to Vietnam"
          images={[
            "/gallery/vietnam-1.jpg",
            "/gallery/vietnam-2.jpg",
            "/gallery/vietnam-3.jpg",
            "/gallery/vietnam-4.jpg",
            "/gallery/vietnam-5.jpg",
            "/gallery/vietnam-6.jpg",
            "/gallery/vietnam-7.jpg",
            "/gallery/vietnam-8.jpg",
            "/gallery/vietnam-9.jpg",
            "/gallery/vietnam-10.jpg"
          ]}
        />
        <Gallery
          subtitle="Journey to Thailand"
          images={[
            "/gallery/thailand-1.jpg",
            "/gallery/thailand-2.jpg",
            "/gallery/thailand-3.jpg",
            "/gallery/thailand-4.jpg",
            "/gallery/thailand-5.jpg",
            "/gallery/thailand-6.jpg",
            "/gallery/thailand-7.jpg",
            "/gallery/thailand-8.jpg",
            "/gallery/thailand-9.jpg",
            "/gallery/thailand-10.jpg"
          ]}
        />
      </div>
      <Footer />
    </>
  );
};

export default Photos;
