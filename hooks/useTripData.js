const useTripData = (id, location) => {
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchTripData = async () => {
        if (id && location) {
          try {
            const tripId = parseInt(id, 10);
            const tripLocation = String(location);
            const fetchedTrip = await getTripByIdAndLocation(tripId, tripLocation);
            setTrip(fetchedTrip);
          } catch (err) {
            setError(err);
          } finally {
            setLoading(false);
          }
        } else {
          setLoading(false); // Ensure loading state is reset if id or location is not available
        }
      };
  
      fetchTripData();
    }, [id, location]); // Dependency array should include id and location
  
    return { trip, loading, error };
  };
  