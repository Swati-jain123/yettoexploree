import React from "react";
import bed from "../img/bed.png";
import vector from "../img/Vector.png";
import car from "../img/car icon.png";
import pet from "../img/pet icon.png";

function Card({ title, priceRange, address, details, imageUrl }) {
  const icons = [bed, vector, car, pet];

  return (
    <div className="w-full max-w-[382px] p-4 relative">
      {/* Image Section */}
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
        {/* Price at the Bottom of Image */}
        <div
          className="absolute bottom-2 left-2 text-sm font-medium font-montserrat"
          style={{ color: "#9a9a9a" }}
        >
          {priceRange}
        </div>
      </div>

      {/* Title */}
      <div className="mt-4 text-lg sm:text-xl font-bold text-[#484848]">
        {title}
      </div>

      {/* Address */}
      <div className="text-sm font-medium text-[#9a9a9a]">{address}</div>

      {/* Details */}
      <div className="flex mt-4 space-x-4 sm:space-x-6 text-[#484848]">
        {details.map((detail, index) => (
          <div
            key={index}
            className="flex items-center text-sm sm:text-base font-semibold space-x-2"
          >
            <img src={icons[index]} alt="icon" className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>{detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CollectionCard() {
  const cards = [
    {
      title: "Well Furnished Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      details: ["3", "1", "2", "0"],
      imageUrl: "https://via.placeholder.com/382x340",
    },
    {
      title: "Blue Door Villa Modern",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      details: ["3", "1", "2", "0"],
      imageUrl: "https://via.placeholder.com/382x340",
    },
    {
      title: "Beach House Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      details: ["3", "1", "2", "0"],
      imageUrl: "https://via.placeholder.com/382x340",
    },
    {
      title: "Country Boys Hostel",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      details: ["3", "1", "2", "0"],
      imageUrl: "https://via.placeholder.com/382x340",
    },
    {
      title: "Large Family Flat on Rent",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      details: ["3", "1", "2", "0"],
      imageUrl: "https://via.placeholder.com/382x340",
    },
    {
      title: "Beach House Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      details: ["3", "1", "2", "0"],
      imageUrl: "https://via.placeholder.com/382x340",
    },
  ];

  return (
    <div className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#484848]">
        CHOOSE A COLLECTION
      </h2>
      <div className="w-[100px] sm:w-[140px] h-1.5 bg-[#484848] rounded-[3px] mt-2 "></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            priceRange={card.priceRange}
            address={card.address}
            details={card.details}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default CollectionCard;
