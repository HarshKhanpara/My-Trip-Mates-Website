import { baliTrips } from "@/constants/bali";
import { thailandTrips } from "@/constants/thailand";
import { vietnamTrips } from "@/constants/vietnam";

/**
 * Retrieves trip details by trip ID and location.
 * @param {number} id - The ID of the trip to retrieve.
 * @param {string} location - The location of the trip (e.g., 'Thailand', 'Bali', 'Vietnam').
 * @returns {object|null} - Returns the trip object if found, otherwise null.
 */
export const getTripByIdAndLocation = (id, location) => {
  let trips;
  
  // Select the appropriate trip array based on the location
  switch (location.toLowerCase()) {
    case 'thailand':
      trips = thailandTrips;
      break;
    case 'bali':
      trips = baliTrips;
      break;
    case 'vietnam':
      trips = vietnamTrips;
      break;
    default:
      return null;
  }

  // Find the trip with the matching id
  const trip = trips.find(trip => trip.id === id);
  return trip || null;
};


