import React, { useState } from "react";
import Frame3 from "../img/Frame (3).png";

import bed from "../img/bed.png";
import vector from "../img/Vector.png";
import car from "../img/car icon.png";
import pet from "../img/pet icon.png";
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
  const [liked, setLiked] = useState(false); // State to track if the card is liked

  const handleHeartClick = () => {
    setLiked((prevLiked) => !prevLiked); // Toggle the liked state
  };

  return (
    <div
      className="w-[574px] h-[558px] relative bg-white rounded-2xl shadow-lg mt-20 "
      style={{ marginBottom: "0px" }}
    >
      {/* Image Section */}
      <div className="relative w-[574px] h-[384px] ">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
        {/* White Dots Above Image */}
        <div className="w-[55px] h-2.5 relative absolute bottom-12 left-4">
          <div className="w-2.5 h-2.5 left-[530px] top-0 absolute bg-white rounded-full" />
          <div className="w-2.5 h-2.5 left-[515px] top-0 absolute bg-white rounded-full" />
          <div className="w-2.5 h-2.5 left-[500px] top-0 absolute bg-white rounded-full" />
          <div className="w-2.5 h-2.5 left-[485px] top-0 absolute bg-white rounded-full" />
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
      <div className="mt-4 ml-6 text-xl font-bold text-[#484848]">{title}</div>

      {/* Address */}
      <div className="text-sm font-medium text-[#9a9a9a] ml-6">{address}</div>
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
      <div className="flex mt-4 space-x-6 text-[#484848] ml-6">
        {details.map((detail, index) => (
          <div
            key={index}
            className="flex items-center text-base font-semibold space-x-2"
          >
            <img src={icons[index]} alt={"icon image"}></img>
            <span>{detail}</span>
          </div>
        ))}
      </div>

      {/* Rent and Period */}
      <div className="w-[422px] h-6 relative ml-6 mt-4">
        <div className="w-[156px] h-6 left-0 top-0 absolute text-[#9a9a9a] text-sm font-semibold font-montserrat">
          {rent}
        </div>
        <div className="w-[239px] h-6 left-[183px] top-0 absolute text-[#9a9a9a] text-sm font-semibold font-montserrat">
          {period}
        </div>
        <div className="w-[18px] h-[0px] left-[166px] top-[1px] absolute origin-top-left rotate-90 border border-[#e0e2e6]"></div>
      </div>
    </div>
  );
}

function SearchContainer() {
  const cards = [
    {
      title: "Well Furnished Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "John Doberman",
      details: ["3", "1", "2", "0"],
      logo: "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
    },
    {
      title: "Blue Door Villa Modern",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "John Doberman",
      details: ["3", "1", "2", "0"],
      logo: "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
    },
    {
      title: "Beach House Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "Harry potter",
      details: ["3", "1", "2", "0"],
      logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
    },
    {
      title: "Country Boys Hostel",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "Harry potter",
      details: ["3", "1", "2", "0"],
      logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
      rent: "Home Room on Rent",
      period: "For Short Period: 3 - 5 Months",
    },
    {
      title: "Large Family Flat on Rent",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      details: ["3", "1", "2", "0"],
      name: "John Doberman",
      logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
    },
    {
      title: "Beach House Apartment",
      priceRange: "$2000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "John Doberman",
      details: ["3", "1", "2", "0"],
      logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
    },
  ];

  return (
    <div className="container" style={{ marginLeft: "-15px" }}>
      {/* Text Lines (Showing 1-10 and Sort by) */}

      {/* Property Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            priceRange={card.priceRange}
            address={card.address}
            imageUrl={card.imageUrl}
            logo={card.logo}
            details={card.details}
            rent={card.rent}
            period={card.period}
            name={card.name}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchContainer;
