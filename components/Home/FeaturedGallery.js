import React from "react";

const FeaturedGallery = () => {
  const images = [
    "/featuring/image-4.png", // Column 1
    "/featuring/image-3.png", // Column 2
    "/featuring/image-2.png", // Column 3 (wide image)
    "/featuring/image-14.png", // Column 4, Row 1
    "/featuring/image-10.png", // Column 4, Row 2
    "/featuring/image-12.png", // Column 4, Row 3 - 1
    "/featuring/image-13.png", // Column 4, Row 3 - 2
    "/featuring/image-11.png", // Column 4, Row 3 - 3
    "/featuring/image-9.png", // Column 4, Row 4
    "/featuring/image.png", // Column 5, Row 1 (small image)
    "/featuring/image-1.png", // Column 5, Row 2 (large image)
  ];

  return (
    <section className="p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:justify-between text-center md:text-left space-y-4 mb-6">
        <div className="w-full">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold">
            Featuring <span className="text-blue-600">YOU</span>
          </h2>
          <p className="text-gray-600">
            Captured Moments: Adventures You’ll Never Forget
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center md:justify-end">
          <button
            className="text-base md:text-lg font-semibold py-2 px-8 whitespace-nowrap rounded-md border hover:bg-opacity-90 transition duration-300 ease-in-out"
            style={{
              color: "#000",
              borderColor: "#000",
              backgroundColor: "transparent",
            }}
          >
            Explore More
          </button>
        </div>
      </div>
      {/* Grid Layout */}
      <div className="hidden md:grid grid-cols-12 gap-4">
        {/* Column 1 - Small */}
        <div className="col-span-1 ">
          <img
            src={images[0]}
            alt="Column 1"
            className="h-[702px]  w-full object-cover rounded-lg"
          />
        </div>

        {/* Column 2 - Small */}
        <div className="col-span-1">
          <img
            src={images[1]}
            alt="Column 2"
            className="h-[702px] w-full object-cover rounded-lg"
          />
        </div>

        {/* Column 3 - Wide */}
        <div className="col-span-3">
          <img
            src={images[2]}
            alt="Column 3"
            className="h-[702px] w-full object-cover rounded-lg"
          />
        </div>

        {/* Column 4 */}
        <div className="col-span-3 flex flex-col gap-2">
          {/* Row 1 */}
          <img
            src={images[3]}
            alt="Row 1"
            className="h-[175.5px] w-full object-cover rounded-lg"
          />
          {/* Row 2 */}
          <img
            src={images[4]}
            alt="Row 2"
            className="h-[175.5px] w-full object-cover rounded-lg"
          />
          {/* Row 3 - 3 Images */}
          <div className="grid grid-cols-3 gap-2">
            <img
              src={images[5]}
              alt="Row 3-1"
              className="h-[175.5px] w-full object-cover rounded-lg"
            />
            <img
              src={images[6]}
              alt="Row 3-2"
              className="h-[175.5px] w-full object-cover rounded-lg"
            />
            <img
              src={images[7]}
              alt="Row 3-3"
              className="h-[175.5px] w-full object-cover rounded-lg"
            />
          </div>
          {/* Row 4 */}
          <img
            src={images[8]}
            alt="Row 4"
            className="h-[175.5px] w-full object-cover rounded-lg"
          />
        </div>

        {/* Column 5 */}
        <div className="col-span-4 flex flex-col gap-2">
          {/* Row 1 - Small */}
          <img
            src={images[9]}
            alt="Small Image"
            className="h-[351px] w-full object-cover rounded-lg"
          />
          {/* Row 2 - Big */}
          <img
            src={images[10]}
            alt="Large Image"
            className="h-[351px] w-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Grid Layout for Mobile */}
{/* Grid Layout for Mobile */}
<div className="grid md:hidden grid-cols-2 gap-4">
  {images.map((image, index) => 
    index !== 0 && (
      <img
        key={index}
        src={image}
        alt={`Mobile Image ${index + 1}`}
        className="h-32 w-full object-cover rounded-lg"
      />
    )
  )}
</div>
    </section>
  );
};

export default FeaturedGallery;
