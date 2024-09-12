import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"

const ErrorPage = () => {
  return (
    <>
    <Navbar
        backgroundColor='white'  // Light background color
        textColor='black'        // Dark text color for contrast
        buttonColor='#E15E2E'    // Color for buttons
        hoverColor='#E15E2E'     // Hover color for links
        dropdownBgColor='white'  // Light dropdown background
        dropdownTextColor='black' // Dark dropdown text color
      />
          <div className="flex flex-col justify-center items-center min-h-screen text-center bg-white">
      <h1 className="text-9xl font-bold text-orange-600">
        <span className="inline-block">
          <Image
            src="/not-found.png" 
            alt="404"
            width={300}
            height={300}
          />
        </span>
      </h1>
      <p className="text-lg mt-4 text-gray-500">
        Are you lost? Don’t worry, we’ll get you home.
      </p>
      <Link href="/"         className="mt-6 px-8 py-2 text-lg font-semibold bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600">
          HOME  
      </Link>
    </div>

    </>
    )
}

export default ErrorPage