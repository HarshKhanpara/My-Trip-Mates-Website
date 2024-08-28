import Image from 'next/image';

const Card = ({ imageUrl, destination }) => {
  return (
    <div 
      className="shadow-lg rounded-lg overflow-hidden mb-5" 
      style={{ backgroundImage: "linear-gradient(to right, #237DB4, #0F364E)" }}
    >
      <div className="relative h-48">
        <Image src={imageUrl} alt={destination} layout="fill" objectFit="cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white font-bold">{destination}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;