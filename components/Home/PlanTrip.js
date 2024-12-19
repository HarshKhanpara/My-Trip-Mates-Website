import Image from "next/image";
import styles from "./PlanTrip.module.css";
import { FaGoogle, FaFacebook, FaYoutube, FaPinterest } from "react-icons/fa";

export default function PlanTrip() {
  return (
    <div className="w-full mb-14 h-[80vh] flex items-center justify-center mt-36">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left Section */}
        <div className="w-full md:w-4/6 bg-white p-6 md:p-8 flex flex-col justify-center">
          <p className="text-blue-600 font-semibold uppercase mb-2 ml-4 md:ml-14 text-sm sm:text-base">
            Solve Your Problem
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl mt-4 font-bold text-gray-800 mb-4 leading-tight w-full md:w-2/5 ml-4 md:ml-14">
            Let’s Start Planning Your Trip
          </h1>
          <p className="text-gray-500 mb-6 w-full sm:w-3/4 md:w-1/3 ml-4 md:ml-14 text-sm sm:text-base">
            Not sure which trip is right for you? Let us help! Tell us about
            your dream adventure, and we’ll find the perfect group trip for you.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 ml-4 md:ml-14">
            <a className="bg-blue-600 text-center rounded-full text-white px-6 py-3 shadow-md hover:bg-blue-700 transition text-sm sm:text-base"
            href = "https://calendly.com/khanparaharsh2003/30min"
            target = "_blank"
            rel = "noreferrer noopener"
            >
              Plan My Trip
            </a>
            <a className="border rounded-full text-center border-blue-600 text-blue-600 px-6 py-3 hover:bg-blue-100 transition text-sm sm:text-base"
            href = "https://calendly.com/khanparaharsh2003/30min"
            target = "_blank"
            rel = "noreferrer noopener"

            >
              Learn More
            </a>
          </div>
          {/* Trusted By */}
          {/* Trusted By */}
          <hr className="border-gray-200 md:my-8 ml-7 w-3/4" />
          <div className="mt-8 ml-4 text-center md:text-left md:ml-14">
            <p className="text-gray-400 uppercase text-xl mb-4 md:mt-14 md:text-2xl">
              Trusted by teams around the world
            </p>
            <div className="grid grid-cols-2 gap-4 md:flex md:justify-start items-center text-gray-500">
              <div className="flex flex-col items-center">
                <FaGoogle className="text-4xl mb-2" />
                <span className="text-sm sm:text-base">Google</span>
              </div>
              <div className="flex flex-col items-center">
                <FaFacebook className="text-4xl mb-2" />
                <span className="text-sm sm:text-base">Facebook</span>
              </div>
              <div className="flex flex-col items-center">
                <FaYoutube className="text-4xl mb-2" />
                <span className="text-sm sm:text-base">YouTube</span>
              </div>
              <div className="flex flex-col items-center">
                <FaPinterest className="text-4xl mb-2" />
                <span className="text-sm sm:text-base">Pinterest</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/6 h-[40vh] md:h-full relative bg-white md:bg-[#385C85] ">
          {/* Background Image */}
          <div
            className={`${styles.container} absolute w-[300px] h-[400px] md:w-[500px] md:h-[600px] lg:w-[900px] lg:h-[800px] top-[285%] md:top-[58%] left-[50%] md:left-[25%] lg:top-[58%] lg:left-[25%] transform -translate-x-1/2 -translate-y-1/2`}
          >
            <Image
              src="/calendar.png"
              alt="Trip Image"
              width={1000}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
