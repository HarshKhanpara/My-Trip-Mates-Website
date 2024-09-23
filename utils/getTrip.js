import { baliTrips } from "@/constants/bali";
import { thailandTrips } from "@/constants/thailand";
import { vietnamTrips } from "@/constants/vietnam";

/**
 * Retrieves trip details by URL identifier and location.
 * @param {string} urlId - The URL identifier of the trip (e.g., 'oct').
 * @param {string} location - The location of the trip (e.g., 'Thailand', 'Bali', 'Vietnam').
 * @returns {object|null} - Returns the trip object if found, otherwise null.
 */
export const getTripByUrlAndLocation = (urlId, location) => {
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

  // Find the trip with the matching url
  const trip = trips.find(trip => trip.url === urlId) ; 
  return trip || null;
};
