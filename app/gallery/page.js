import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Gallery from '@/components/gallery'
import React from 'react'

const Photos = () => {
  return (
    <>
    <Navbar />
    <div className="relative w-full">
    <img
      src="/gallery/background.jpg"
      alt="Background"
      className="object-cover w-full h-[350px]"
    />
    <div className="absolute inset-0 flex pt-48 justify-center text-white">
      <h1 className="text-3xl md:text-5xl font-serif italic"
      style={{fontFamily:'title-light'}}
      >
        Visual Gallery
      </h1>
    </div>
    <Gallery 
        subtitle="Journey to Bali"
        images={["/gallery/bali-1.jpg","/gallery/bali-2.jpg","/gallery/bali-3.jpg","/gallery/bali-4.jpg","/gallery/bali-5.jpg","/gallery/bali-6.jpg","/gallery/bali-7.jpg","/gallery/bali-8.jpg","/gallery/bali-9.jpg","/gallery/bali-10.jpg"]}
    />
    <Gallery 
        subtitle="Journey to Vietnam"
        images={["/gallery/vietnam-1.jpg","/gallery/vietnam-2.jpg","/gallery/vietnam-3.jpg","/gallery/vietnam-4.jpg","/gallery/vietnam-5.jpg","/gallery/vietnam-6.jpg","/gallery/vietnam-7.jpg","/gallery/vietnam-8.jpg","/gallery/vietnam-9.jpg","/gallery/vietnam-10.jpg"]}
    />
    <Gallery 
        subtitle="Journey to Thailand"
        images={["/gallery/thailand-1.jpg","/gallery/thailand-2.jpg","/gallery/thailand-3.jpg","/gallery/thailand-4.jpg","/gallery/thailand-5.jpg","/gallery/thailand-6.jpg","/gallery/thailand-7.jpg","/gallery/thailand-8.jpg","/gallery/thailand-9.jpg","/gallery/thailand-10.jpg"]}
    />
  </div>
      <Footer />
    </>
)
}

export default Photos