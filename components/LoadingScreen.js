import { useState, useEffect } from 'react';
import { PuffLoader } from 'react-spinners'; // Import the spinner

const Loading3D = ({ loadingMessage = "LOADING YOUR CONTENT " }) => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const duration = 3000; // 3 seconds

    // Set fallback message after 3 seconds
    const fallbackTimeout = setTimeout(() => {
      setShowFallback(true);
    }, duration);

    return () => {
      clearTimeout(fallbackTimeout);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white relative">
      {/* Blurred background effect */}
      <div className="absolute inset-0 backdrop-blur-lg bg-white/30"></div> {/* Stronger blur and subtle white overlay */}
      
      {/* Centered content with relative positioning */}
      <div className="relative text-center bg-white p-12 rounded-xl shadow-2xl backdrop-blur-lg transform transition duration-500 hover:scale-105 z-10">
        <h2 className="text-4xl font-extrabold text-black bg-clip-text bg-white animate-pulse tracking-tight">
          {loadingMessage}
        </h2>
        <div className="flex justify-center mt-6">
          <PuffLoader color="#6a0dad" size={70} /> {/* Use the spinner here */}
        </div>
        {/* Show fallback text after 3 seconds */}
        {showFallback && (
          <p className="text-red-500 mt-8 text-lg font-semibold animate-pulse tracking-wide">
          This is taking longer than expected... We are working on it.
          </p>
        )}
      </div>
    </div>
  );
};

export default Loading3D;
