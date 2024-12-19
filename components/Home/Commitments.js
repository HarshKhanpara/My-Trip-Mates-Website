import Image from "next/image";

export default function CommitmentSection() {
  return (
    <section className="py-8 px-4 sm:px-8 lg:px-16">
      <div className=" pr-8 mx-auto flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 mb-8 md:mb-0  md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center md:text-left text-gray-900">
            Our Commitments
          </h2>
          <p className="text-gray-700 leading-relaxed md:text-xl">
            At <span className="text-blue-600 font-bold ">My Trip Mates</span>,
            we offer more than just travel – we create connections, memorable
            experiences, and authentic adventures.
          </p>
          <ul className="space-y-4 p-2 w-full md:text-lg text-gray-700 list-none">
            {[
              "1. Build Meaningful Connections: Meet like-minded adventurers and create lasting friendships.",
              "2. Travel Without Worries: We handle all details, so you can focus on enjoying your journey.",
              "3. Dive Into Authentic Adventures: Experience local cultures and hidden gems on every trip.",
              "4. Perfect Harmony of Group and Me-Time: Enjoy group activities with the freedom to explore on your own.",
              "5. Explore Without Breaking the Bank: Affordable travel with exceptional value.",
              "6. Create Lifelong Memories: Our goal is to give you unforgettable moments that last a lifetime.",
            ].map((item, index) => (
              <li key={index} className="font-medium leading-relaxed">
                <span className="font-bold">{item.split(":")[0]}:</span>
                {item.split(":")[1]}
              </li>
            ))}
          </ul>
        </div>

        {/* Images Section */}
        <div className="md:w-1/2 w-full relative flex justify-end md:mr-40">
          {/* Image 1 - Center */}
          <div className="w-[200px] left-[-10%] md:left-0 h-[270px] md:w-[300px] md:h-[400px] relative z-10 shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/commitment/image.png"
              alt="Plane View"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Image 2 - Bottom Left Overlap */}
          <div className="absolute w-[150px] h-[270px] md:w-[300px] md:h-[400px] bottom-[-20%] left-[5%] md:bottom-[-30%] md:left-[85%] z-20 shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/commitment/image-1.png"
              alt="Breakfast"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Image 3 - Bottom Right Overlap */}
          <div className="absolute w-[150px] h-[270px] md:w-[300px] md:h-[400px] bottom-[-20%] right-[-10%] md:bottom-[-30%] md:right-[20%] z-0 shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/commitment/image-2.png"
              alt="Scooter Ride"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
