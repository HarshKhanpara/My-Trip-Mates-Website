export default function ComingSoon() {
    return (
      <div className="relative bg-blue-100 overflow-hidden min-h-screen">
        {/* Header Blue Shape */}
        <div className="absolute m-10 top-0 left-0 w-[481px] h-[220px] bg-[#88bdee] rounded-b-none rounded-tl-[200px]"></div>
  
        {/* White Header Finishing */}
        <div className="absolute top-0 left-[481px] w-full h-[220px] m-10 bg-white"></div>
  
        {/* Main Content */}
        <div className="relative text-center py-20 z-10">
          {/* Title */}
          <h1 className="text-4xl font-extrabold text-gray-800">
            COMING SOON FOR YOU
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            Making the Most of Your Travel Experience in 2023
          </p>
        </div>
  
        {/* Content Cards */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto z-10">
          {[
            { name: "FINLAND", image: "/images/finland.jpg" },
            { name: "SPAIN", image: "/images/spain.jpg" },
            { name: "KASHMIR", image: "/images/kashmir.jpg" },
            { name: "MANALI", image: "/images/manali.jpg" },
          ].map((place, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 w-full bg-gray-900 bg-opacity-70 text-white py-2 text-center">
                <h3 className="text-lg font-bold uppercase">{place.name}</h3>
              </div>
            </div>
          ))}
        </div>
  
        {/* Footer White Shape */}
        <div className="absolute m-10 bottom-0 left-0 w-[70%] h-[220px] bg-white"></div>
  
        {/* Footer Blue Shape */}
        <div className="absolute m-10 bottom-0 right-0 w-[30%] h-[220px] bg-[#88bdee] rounded-tl-[200px]"></div>
      </div>
    );
  }
  