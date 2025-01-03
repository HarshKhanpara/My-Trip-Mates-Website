import Image from "next/image";

export default function BlogLayout() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center tracking-[0.5em] mb-16">
        BLOGS
      </h1>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* First Blog - Large Image + Text */}
        <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div className="relative h-[400px] overflow-hidden">
            <Image
              src="/bali/card1.jpg"
              alt="Mountain peak above clouds"
              fill
              className="object-cover rounded-tl-[30%]"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-center md:text-right">
              Why Group Travel is Perfect for Solo Travelers?
            </h2>
            <p className="text-gray-600 leading-relaxed text-center md:text-right">
              Traveling with others provides you with a solid support system. Travel offers the best of both worlds: independence and connection, letting you explore the world while making lifelong friends up. Whether it's sharing stories around a beach bonfire in Bali or teaming up for an adventure trek in Vietnam, every moment is more memorable when shared.
            </p>
          </div>
        </div>

        {/* Second Blog - Left Text + Right Image */}
        <div className="col-span-1">
        <div className="relative md:hidden h-[300px] md:h-[800px] w-full">
            <Image
              src="/bali/card2.jpg"
              alt="Waterfall and people"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center mb-10">

          <h2 className="text-xl text-center md:text-left font-semibold mt-4 mb-4">
            Traveling on a Budget Without Missing Out!
          </h2>
          <p className="text-gray-600 text-center md:text-left leading-relaxed mb-4">
            You don't have to spend a fortune to explore the world. With group travel, you get shared costs, planned activities, and curated itineraries that save you time and money. Learn how to maximize your experience without breaking the bank!
          </p>
          </div>
          <div className="relative hidden md:block h-[300px] md:h-[800px] w-full">
            <Image
              src="/bali/card2.jpg"
              alt="Waterfall and people"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Third Blog - Image + Text Below */}
        <div className="col-span-1">
          <div className="relative h-[400px] w-full mb-4">
            <Image
              src="/bali/card3.jpg"
              alt="Sunset and people"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center mb-10">

          <h2 className="text-xl text-center md:text-right md:mt-[420px] font-semibold mb-4">
            Hidden Gems in Bali, Thailand, and Vietnam!
          </h2>
          <p className="text-gray-600 text-center leading-relaxed md:text-right">
            Beyond the popular spots, there are hidden treasures waiting to be explored. Discover Bali's secret beaches, Thailand's lesser temples, or Vietnam's lesser-known floating markets. These gems are often the highlight of any trip, offering unique experiences away from the crowds.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

