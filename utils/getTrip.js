/**
 * Retrieves trip details by URL identifier and location.
 * @param {string} urlId - The URL identifier of the trip (e.g., 'oct').
 * @param {string} location - The location of the trip (e.g., 'Thailand', 'Bali', 'Vietnam').
 * @returns {object|null} - Returns the trip object if found, otherwise null.
 */
export const getTripByUrlAndLocation = async (urlId, location) => {
  try {
    // Create dynamic API URL based on location and urlId
    const baseUrl = 'http://localhost:1337/api';
    const endpoint = `${baseUrl}/${location.toLowerCase()}trips?filters[url][$eq]=${urlId}&populate[highlights]=*&populate[inclusions]=*&populate[exclusions]=*&populate[groupData][populate][0]=Group&populate[groupData][populate][1]=Group.Image&populate[groupDataTrip][populate][0]=FirstImage&populate[groupDataTrip][populate][1]=SecondImage&populate[groupDataTrip][populate][2]=ThirdImage&populate[galleryImages][populate][0]=Image1&populate[galleryImages][populate][1]=Image2&populate[galleryImages][populate][2]=Image3`;

    // Set the authorization token
    const token = 'Bearer 4d624b0dc39f6ff6b520b323ff3e765ef229a161aafd62484e7216b2399c9263eae410b6254bcb85010b9b1db82c571af1bdd387d32d29021bdd2f0984de1008f240da1ff341fc525e2aa57a0a6a1e36d2467cb11adcde8622722138319d2e412df4ed22e83257083d4030f92998f8d57a1192caccb997ee862c331f62ddafd0';

    // Fetch the trip data from the API with authorization header
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json' // Set content type if necessary
      }
    });

    // Check if the response is ok
    if (!response.ok) {
      console.log(endpoint);
      throw new Error(`Error fetching trip data: ${response.statusText}`);
    }

    // Parse the JSON data
    const data = await response.json();

    const galleryImages = [
      { imageSrc: `http://localhost:1337${data.data[0].galleryImages[0].Image1.url}` },
      { imageSrc: `http://localhost:1337${data.data[0].galleryImages[0].Image2.url}` },
      { imageSrc: `http://localhost:1337${data.data[0].galleryImages[0].Image3.url}` },
    ];

    const groupDataTrip = [
      { imageSrc: `http://localhost:1337${data.data[0].groupDataTrip[0].FirstImage.url}` },
      { imageSrc: `http://localhost:1337${data.data[0].groupDataTrip[0].SecondImage.url}` },
      { imageSrc: `http://localhost:1337${data.data[0].groupDataTrip[0].ThirdImage[0].url}` },
    ];

    const transformedData = data.data[0].groupData.map(group => 
      group.Group.map(member => ({
          imageSrc: `http://localhost:1337${member.Image.url}`, 
          name: member.Name,
          location: member.Location
      }))
  ).flat(); 
  

      
    // Structure the data
    const trip = {
      title: data.data[0].title,
      destination: data.data[0].title,
      duration: data.data[0].tripLength,
      pricing: data.data[0].pricing,
      isExclusive: data.data[0].isExclusive,
      tripLength: data.data[0].tripLength,
      price: data.data[0].pricing,
      description: data.data[0].description,
      highlights: Object.values(data.data[0].highlights[0]).filter((_, index) => index > 0), // Exclude id
      inclusions: Object.values(data.data[0].inclusions[0]).filter((_, index) => index > 0), // Exclude id
       exclusions: Object.values(data.data[0].exclusions[0]).filter((_, index) => index > 0), // Exclude id
      groupDataTrip: groupDataTrip,
      groupData: transformedData,
      // groupData: data.data[0].attributes.groupData.data,
      galleryImages: galleryImages,
    };

   console.log(trip);

    return trip;  
  } catch (error) {
    console.error(error);
    return null;
  }
};


