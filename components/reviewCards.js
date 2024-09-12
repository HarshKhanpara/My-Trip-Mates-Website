import { reviews } from "@/constants/reviews";
import Image from "next/image";

const ReviewCards = () => {
  return (
    <>
      <div className="container mx-auto px-4 pt-20 sm:pt-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-5 mt-12 md:mt-24 md:mb-10"
            style={{ fontFamily: 'title-light' }}
        >
          What's it like once you travel with us!
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-start text-left relative" // Increased min height
            >
              <div className="absolute top-3 right-3 sm:top-2 sm:right-2">
                <span className="text-2xl sm:text-xl">{review.heartIcon}</span>
              </div>

              <div className="w-24 h-24 sm:w-20 sm:h-20 relative mb-4">
                {" "}
                {/* Centered the avatar */}
                <Image
                  src={review.avatar}
                  alt={review.name}
                  fill
                  className="rounded-md object-cover"
                />
              </div>

              <p className="mb-4 text-gray-700 text-base sm:text-sm">
                {" "}
                "{review.text}"
              </p>

              <div className="mt-auto text-left w-full">
                {" "}
                <h3 className="font-bold text-lg sm:text-base">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>

              <div className="absolute bottom-10 right-4 sm:right-2">
                <span className="text-2xl sm:text-xl">{review.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewCards;
