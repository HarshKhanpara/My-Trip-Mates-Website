import Image from "next/image";

export default function Itinerary({
  itineraryData = {},
  groupData = [],
  groupDataTrip = [],
  isDarkMode = false,
}) {
  const {
    title = "ITINERARY",
    date = "7th-15th September",
    tripLength = "9 days",
    groupSize = "15 person avg",
    description = "Thailand, located in Southeast Asia, is celebrated for its stunning beaches, rich cultural heritage, and lively cities. Thailand's diverse landscapes include tropical islands, lush jungles, and mountainous regions. The country is also famous for its delicious cuisine, such as pad Thai and green curry, and its colorful festivals like Songkran (Thai New Year) and Loy Krathong. Thailand's friendly locals and unique blend of tradition and modernity make it a popular travel destination.",
    highlights = [],
    inclusions = [],
    exclusions = [],
    pricingDetails = [],
  } = itineraryData;

  const firstFiveHighlights = highlights.slice(0, 5);
  const remainingHighlights = highlights.slice(5);

  // Theme-based styles
  const themeStyles = {
    background: isDarkMode ? "bg-black" : "bg-white",
    text: isDarkMode ? "text-white" : "text-black",
    subText: isDarkMode ? "text-gray-300" : "text-gray-600",
    border: isDarkMode ? "border-gray-600" : "border-gray-300",
    highlight: isDarkMode ? "bg-gray-700" : "bg-gray-100",
  };

  return (
    <div className={`p-6 md:p-10 ${themeStyles.background} ${themeStyles.text}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left Side - Itinerary Details */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-left">
            {title}
          </h1>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-left md:text-lg">Date</p>
              <p className="font-semibold text-left">{date}</p>
            </div>
            <div>
              <p className="text-base md:text-lg text-left">Trip Length</p>
              <p className="font-semibold text-left">{tripLength}</p>
            </div>
            <div>
              <p className="text-base md:text-lg text-left">Group Size</p>
              <p className="font-semibold text-left">{groupSize}</p>
            </div>
          </div>
          <p className="text-base md:text-lg mb-6">{description}</p>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Highlights</h2>
              <ul className="list-disc list-inside space-y-2">
                {firstFiveHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Additional Highlights
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {remainingHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Inclusions</h2>
              <ul className="list-disc list-inside space-y-2">
                {inclusions.map((inclusion, index) => (
                  <li key={index}>{inclusion}</li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Exclusions</h2>
              <ul className="list-disc list-inside space-y-2">
                {exclusions.map((exclusion, index) => (
                  <li key={index}>{exclusion}</li>
                ))}
              </ul>
            </div>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Pricing Details
          </h2>
          <ul className="list-none space-y-2">
            <p className="bg-gradient-to-r from-green-400 to-green-600 text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold px-4 py-3 rounded-md shadow-lg animate-pulse w-full sm:w-auto text-center">
              Booking Amount: ₹15,000 to reserve your slot.
            </p>
            {pricingDetails.map((price, index) => (
              <li key={index} className="text-sm md:text-base lg:text-lg">
                {price}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Meet Our Group */}
        <div className="space-y-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Travelers in this trip
          </h1>
          {groupData.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 w-full space-y-4">
              <h2
                className={`text-2xl md:text-3xl font-bold ${themeStyles.text} text-center`}
              >
                Coming Soon...
              </h2>
              <p
                className={`text-sm md:text-base ${themeStyles.subText} text-center max-w-xs`}
              >
                Stay tuned! Exciting group details will be revealed shortly.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 mb-8">
              {groupData.map(({ imageSrc, name, location }, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center transition-transform transform hover:scale-105"
                >
                  <div className="w-24 h-24 md:w-44 md:h-44 relative rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={imageSrc}
                      alt={`${name}'s Image`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-full"
                      quality={100}
                    />
                  </div>
                  <p className="mt-4 text-base md:text-lg font-semibold">
                    {name}
                  </p>
                  <p className={`text-xs md:text-sm ${themeStyles.subText}`}>
                    {location}
                  </p>
                </div>
              ))}
            </div>
          )}
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Recent Trip Gallery
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto">
            {groupDataTrip.slice(0, 3).map(({ imageSrc }, idx) => (
              <div
                key={idx}
                className="w-[250px] h-[250px] relative mb-4 sm:mb-0 mx-auto"
              >
                <Image
                  src={imageSrc}
                  alt={`Group Photo ${idx + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
