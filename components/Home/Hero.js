import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center lg:justify-start overflow-hidden" style={{ minHeight: '70vh' }}>
      <div className="absolute z-0 inset-0">
        <Image
          src="/assets/images/banner.jpeg"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background"
        />
        {/* Enhanced gradient overlay with Tailwind CSS */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-[#15191D]/50 to-transparent opacity-50"></div>
      </div>

      <div className="relative z-10 px-6 sm:px-8 md:px-10 lg:px-16 lg:ml-0 lg:text-left sm:text-center">
        <div className="w-full mx-auto lg:mx-0 text-center lg:text-left text-white">
          <h1 className="text-5xl font-light shadow-lg mt-6 md:mt-8 lg:text-7xl md:max-w-28 mb-5 text-center sm:text-6xl md:text-7xl lg:text-left sm:text-center">Adventure awaits.</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mt-4 md:mt-6 lg:text-5xl shadow-lg mb-7">Let's go!</h2>
          <div className="mt-6 sm:mt-8">
            <p className="text-lg sm:text-xl shadow-lg text-center lg:text-left">Forest Stay</p>
            <p className="text-sm sm:text-lg mt-4 sm:mt-6 max-w-sm mx-auto md:max-w-xs lg:max-w-sm mb-10 text-center lg:text-left shadow-lg">
              Integration with social media platforms for sharing travel plans and experiences.
            </p>
            <p className="text-sm sm:text-lg mt-4 sm:mt-6 max-w-sm mx-auto md:max-w-xs lg:max-w-sm text-center lg:text-left shadow-lg">
              Discover unique experiences in remote locations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;