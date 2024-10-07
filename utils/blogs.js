/**
 * Retrieves trip details by URL identifier and location.
 * @param {string} id - The URL identifier of the trip (e.g., 'oct').
 * @returns {object|null} - Returns the trip object if found, otherwise null.
 */
export const getABlog = async (id) => {
    try {
        // Create dynamic API URL based on location and urlId
        const baseUrl = `http://localhost:1337/api/blogs?filters[identity][$eq]=${id}&populate=*`; // Corrected URL
  
        // Set the authorization token
        const token = 'Bearer 4d624b0dc39f6ff6b520b323ff3e765ef229a161aafd62484e7216b2399c9263eae410b6254bcb85010b9b1db82c571af1bdd387d32d29021bdd2f0984de1008f240da1ff341fc525e2aa57a0a6a1e36d2467cb11adcde8622722138319d2e412df4ed22e83257083d4030f92998f8d57a1192caccb997ee862c331f62ddafd0';
  
        // Fetch the trip data from the API with authorization header
        const response = await fetch(baseUrl, {
            method: 'GET',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json' // Set content type if necessary
            }
        });
  
        // Check if the response is ok
        if (!response.ok) {
            throw new Error(`Error fetching trip data: ${response.statusText}`);
        }
  
        const data = await response.json();
        
        // Assuming you want to filter stories based on the location and urlId
        const story = {
            id: data.data[0].id,
            image: "http://localhost:1337"+data.data[0].image.url || '', // Safe navigation to avoid errors if image is undefined
            location: data.data[0].location,
            loc: data.data[0].loc,
            date: data.data[0].date,
            readTime: data.data[0].readTime,
            title: data.data[0].title,
            description: data.data[0].description,
            link: data.data[0].link,
            subtext: data.data[0].subtext,
            fullBlog: data.data[0].fullBlog
        };

  
        console.log(story);
        return story;
    } catch (error) {
        console.error(error);
        return null;
    }
  };




  /**
 * Retrieves trip details by URL identifier and location.
 * @returns {object|null} - Returns the trip object if found, otherwise null.
 */
export const getAllBlogs = async () => {
    try {
        // Create dynamic API URL based on location and urlId
        const baseUrl = `http://localhost:1337/api/blogs?populate=*`; // Corrected URL
  
        // Set the authorization token
        const token = 'Bearer 4d624b0dc39f6ff6b520b323ff3e765ef229a161aafd62484e7216b2399c9263eae410b6254bcb85010b9b1db82c571af1bdd387d32d29021bdd2f0984de1008f240da1ff341fc525e2aa57a0a6a1e36d2467cb11adcde8622722138319d2e412df4ed22e83257083d4030f92998f8d57a1192caccb997ee862c331f62ddafd0';
  
        // Fetch the trip data from the API with authorization header
        const response = await fetch(baseUrl, {
            method: 'GET',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json' // Set content type if necessary
            }
        });
  
        // Check if the response is ok
        if (!response.ok) {
            throw new Error(`Error fetching trip data: ${response.statusText}`);
        }
  
        const data = await response.json();
        
        // Assuming you want to filter stories based on the location and urlId
        const stories = data.data.map((item) => ({
            id: item.id,
            image: 'http://localhost:1337'+item.image?.url || '', // Safe navigation to avoid errors if image is undefined
            location: item.location,
            loc: item.loc,
            date: item.date,
            readTime: item.readTime,
            title: item.title,
            description: item.description,
            link: item.link,
            subtext: item.subtext,
            fullBlog: item.fullBlog
        }));
  
        return stories;  
    } catch (error) {
        console.error(error);
        return null;
    }
  };
  

    /**
 * Retrieves trip details by URL identifier and location.
 * @returns {object|null} - Returns the trip object if found, otherwise null.
 */
export const getCardOfBlogs = async () => {
    try {
        // Create dynamic API URL based on location and urlId
        const baseUrl = `http://localhost:1337/api/blogs?populate=*`; // Corrected URL
  
        // Set the authorization token
        const token = 'Bearer 4d624b0dc39f6ff6b520b323ff3e765ef229a161aafd62484e7216b2399c9263eae410b6254bcb85010b9b1db82c571af1bdd387d32d29021bdd2f0984de1008f240da1ff341fc525e2aa57a0a6a1e36d2467cb11adcde8622722138319d2e412df4ed22e83257083d4030f92998f8d57a1192caccb997ee862c331f62ddafd0';
  
        // Fetch the trip data from the API with authorization header
        const response = await fetch(baseUrl, {
            method: 'GET',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json' // Set content type if necessary
            }
        });
  
        // Check if the response is ok
        if (!response.ok) {
            throw new Error(`Error fetching trip data: ${response.statusText}`);
        }
  
        const data = await response.json();
        
        // Assuming you want to filter stories based on the location and urlId
        const stories = data.data.map((item) => ({
            id: item.id,
            image: 'http://localhost:1337'+item.image?.url || '', // Safe navigation to avoid errors if image is undefined
            location: item.location,
            loc: item.loc,
            date: item.date,
            readTime: item.readTime,
            title: item.title,
            description: item.description,
            link: item.link,
            subtext: item.subtext,
        }));
  
        return stories;  
    } catch (error) {
        console.error(error);
        return null;
    }
  };
  
