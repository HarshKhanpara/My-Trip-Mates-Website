import { BarLoader, BeatLoader, PuffLoader } from 'react-spinners';

const Spinner = ({ loading, size = 60, color = "#ED8C99" }) => {
  return (
    <div className="flex justify-center items-center min-h-[300px]">
      {/* Add a console log for debugging */}
      {loading ? (
        <PuffLoader color={color} size={size} />      ) : (
        <div>Loading...</div> // Fallback content if not loading
      )}
    </div>
  );
};

export default Spinner;
