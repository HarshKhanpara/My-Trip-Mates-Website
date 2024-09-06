import React from 'react'

const Gallery = ({subtitle,images}) => {
  return (
    <>
          {/* Gallery Section */}
          <div className="py-12 ">
          <h2 className="text-center pt-5 text-8xl sm:text-4xl font-serif italic mb-8">
            {subtitle}
          </h2>
          <div className="grid grid-cols-1 pt-10 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="object-cover w-full h-48 md:h-80 transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
        </>
  )
}

export default Gallery