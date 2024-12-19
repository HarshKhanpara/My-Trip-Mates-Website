import Image from "next/image";

export default function OurStory() {
  return (
    <section className="bg-white px-6 py-12" id="our-story">
      <div className="md:flex md:items-start md:justify-between">
        {/* IMAGE GRID */}
        <div className="md:grid hidden grid-cols-2 md:w-2/3 md:grid-cols-3 gap-8 items-start">
          {/* COLUMN 1 */}
          <div className="space-y-8 relative">
            <div className="relative top-10">
              <Image
                src="/story/image-1.png"
                alt="First Column - 1"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="relative top-32">
              <Image
                src="/story/image-2.png"
                alt="First Column - 2"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="relative top-48">
              <Image
                src="/story/image-3.png"
                alt="First Column - 3"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-8 relative">
            <div className="relative">
              <Image
                src="/story/image-4.png"
                alt="Second Column - 1"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/story/image-5.png"
                alt="Second Column - 2"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/story/image-6.png"
                alt="Second Column - 3"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/story/image-7.png"
                alt="Second Column - 4"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-8 relative">
            <div className="relative top-10">
              <Image
                src="/story/image-8.png"
                alt="Third Column - 1"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="relative top-20">
              <Image
                src="/story/image-9.png"
                alt="Third Column - 2"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="relative top-32">
              <Image
                src="/story/image-10.png"
                alt="Third Column - 3"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="relative top-44">
              <Image
                src="/story/image.png"
                alt="Third Column - 4"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* STORY TEXT */}
        <hr/>
        <div className="md:w-1/3 md:pl-12 mt-12 md:mt-0 md:mr-4">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 text-center md:text-left">Our Story</h2>
          <p className="text-gray-700 leading-loose mb-6 mt-6">
            We believe that travel is not just about exploring new
            destinations—it’s about the connections we make, the stories we
            share, and the experiences that transform us.
          </p>
          <p className="text-gray-700 leading-loose mb-6">
            Our journey began with a simple idea: to create a space where solo
            travellers could step out of their comfort zones, meet like-minded
            adventurers, and embark on unforgettable journeys together.
          </p>
          <p className="text-gray-700 leading-loose mb-6">
            We realised that while travel offers endless opportunities, it can
            often feel isolating for solo explorers. So, we set out to change
            that. We’ve built a community where people from all walks of life
            come together to experience the world as one—sharing laughter,
            embracing new cultures, and creating lifelong memories along the
            way.
          </p>
          <p className="text-gray-700 leading-loose mb-6">
            Our mission is clear: to provide travel experiences that are as
            enriching as they are affordable. We handle the details, from
            comfortable accommodations to expert guides, so you can focus on the
            adventure and the joy of discovering new places. Whether it's
            finding hidden gems, immersing in authentic cultural encounters, or
            simply enjoying the perfect balance of group camaraderie and
            personal exploration, My Trip Mates is here to make every trip
            unforgettable.
          </p>
          <p className="text-gray-700 leading-loose">
            Every journey with us is more than just a trip—it’s an opportunity
            to connect with others, explore new horizons, and create memories
            that will last a lifetime. Join us at My Trip Mates, where the world
            is your adventure, and your adventure is just beginning.
          </p>
        </div>

        {/* IMAGE GRID FOR MOBILE */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:hidden items-center mt-12">
          <Image
            src="/story/image-1.png"
            alt="Mobile - 1"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/story/image-2.png"
            alt="Mobile - 2"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/story/image-3.png"
            alt="Mobile - 3"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/story/image-4.png"
            alt="Mobile - 4"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/story/image-5.png"
            alt="Mobile - 5"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/story/image-6.png"
            alt="Mobile - 6"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
