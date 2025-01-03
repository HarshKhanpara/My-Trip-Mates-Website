import Image from "next/image";

export default function QuoteSection() {
  return (
    <div className="mt-64 py-8 px-4 sm:px-8 lg:px-16">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col sm:flex-row items-center sm:justify-between">
        {/* Image Section */}
        <div className="w-[340px] h-[340px] relative mb-4 sm:mb-0 flex-shrink-0">
          <Image
            src="/david.png" // Replace with your image path
            alt="David Mitchell"
            fill
            className="rounded-md object-cover"
          />
        </div>

        {/* Quote Section */}
        <div className="max-w-2xl text-right flex-1 sm:ml-auto">
          <p className="text-gray-600 italic text-lg leading-relaxed">
            "Travel far enough, you meet yourself. It's not always about the
            destination but the journey, the stories you collect, and the
            transformation within."
          </p>
          <p className="text-gray-800 font-semibold mt-4">– David Mitchell</p>
        </div>
      </div>
    </div>
  );
}
