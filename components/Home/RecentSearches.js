import React from 'react';

const RecentSearches = () => {
  const searches = [
    { location: 'Burj Khalifa', country: 'Dubai, UAE' },
    { location: 'Museum of Tomorrow', country: 'Rio de Janeiro, Brazil' },
    { location: 'Restaurants in Canada', country: '' },
    { location: 'Hotels in Canada', country: '' },
    { location: 'Niagara Falls', country: 'New York, USA' },
  ];

  return (
    <div className="bg-gradient-to-b py-8 px-4 p-5">
      <h2 className="text-center md:text-left md:ml-2 text-white text-2xl mb-4 mt-5">Your Recent Searches</h2>
      <p className="text-center md:text-left md:ml-2 text-white mb-8">Here are some of the places you have searched</p>
      <div className="flex flex-wrap justify-between gap-4">
        {searches.map((search, index) => (
          <div
            key={index}
            className="flex items-center p-4 w-full justify-center rounded-md text-white shadow-md border border-gray-300 space-x-4 hover:bg-gray-100 hover:text-black transition-all duration-200 flex-shrink-0 min-w-[200px] md:flex-1 md:min-w-0 md:max-w-[calc(25%-1rem)] text-center md:text-left"
          >
            <div className="text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 mx-auto md:mx-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 12.414a5.5 5.5 0 117.778 0l-4.243 4.243zm0 0L18.95 18.95a2.828 2.828 0 11-4-4l.707.707m-.707.707l-6.364 6.364a2 2 0 11-2.828-2.828l6.364-6.364m8.485 8.485L21 21"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold">{search.location}</div>
              {search.country && (
                <div className="text-sm">{search.country}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;