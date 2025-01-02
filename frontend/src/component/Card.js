import React, { useState } from "react";
import bed from "../img/bed.png";
import vector from "../img/Vector.png";
import car from "../img/car icon.png";
import pet from "../img/pet icon.png";
import { Link } from "react-router-dom";

function Card({
  title,
  priceRange,
  address,
  imageUrl,
  logo,
  details,
  rent,
  period,
  name,
}) {
  const icons = [bed, vector, car, pet];
  const [liked, setLiked] = useState(false);

  const handleHeartClick = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <div className="w-full md:w-full h-auto relative bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-[384px]">
        <Link to="/details">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-xl"
          />
        </Link>

        {/* White Dots Above Image */}
        <div className="absolute bottom-12 right-4 flex space-x-1">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="w-2.5 h-2.5 bg-white rounded-full" />
          ))}
        </div>
        {/* Heart Icon */}
        <button
          className="absolute top-2 right-2 p-2 z-10"
          onClick={handleHeartClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-8 w-8 ${liked ? "text-[#9A9A9A]" : "text-[#E0E2E6]"}`}
            fill="currentColor"
            stroke="#9A9A9A"
            strokeWidth="1"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      {/* Title */}
      <div className="mt-4 ml-4 sm:ml-6 text-xl font-bold text-[#484848]">
        {title}
      </div>

      {/* Address */}
      <div className="text-sm font-medium text-[#9a9a9a] ml-4 sm:ml-6">
        {address}
      </div>

      {/* Logo */}
      <div
        className="absolute bottom-8 left-4 w-[76px] h-[76px] rounded-full overflow-hidden"
        style={{
          marginBottom: "170px",
          marginLeft: "30px",
          backgroundColor: "#C2C6CC",
        }}
      >
        <img src={logo} alt="Logo" className="w-full h-full object-cover" />
      </div>

      {/* Listed By */}
      <div
        className="absolute left-36 bottom-12 w-[272px] h-[76px]"
        style={{ marginBottom: "150px" }}
      >
        <div className="absolute bottom-12 left-0.5 w-[88px] h-[23px] text-[#484848] text-xs font-medium font-montserrat">
          Listed By:
        </div>
        <div className="absolute top-5 left-0 w-[155px] h-[23px] text-[#484848] text-lg font-bold font-montserrat">
          {name}
        </div>
        <div className="absolute bottom-2 left-0 w-[175px] h-[23px] text-[#484848] text-base font-medium font-montserrat">
          For: {priceRange}
        </div>
      </div>

      {/* Details */}
      <div className="flex mt-4 space-x-4 sm:space-x-6 text-[#484848] ml-4 sm:ml-6">
        {details.map((detail, index) => (
          <div
            key={index}
            className="flex items-center text-base font-semibold space-x-2"
          >
            <img src={icons[index]} alt="icon" className="w-5 h-5" />
            <span>{detail}</span>
          </div>
        ))}
      </div>

      {/* Rent and Period */}
      <div className="flex flex-col sm:flex-row w-full h-6 relative ml-4 sm:ml-6 mt-4">
        <div className="text-[#9a9a9a] text-sm font-semibold font-montserrat">
          {rent}
        </div>
        <div className="text-[#9a9a9a] text-sm font-semibold font-montserrat">
          {period}
        </div>
        <div className="w-[18px] h-[0px] absolute origin-top-left rotate-90 border border-[#e0e2e6]" />
      </div>
    </div>
  );
}

export default Card;
