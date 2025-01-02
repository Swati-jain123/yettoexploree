import React from "react";

function Card({ title, priceRange, address, details, imageUrl }) {
  return (
    <div className="w-full max-w-[382px] p-4 relative mx-auto">
      {/* Image Section */}
      <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[340px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Title */}
      <div className="mt-4 text-lg md:text-xl font-bold text-[#484848]">
        {title}
      </div>

      {/* Address */}
      <div className="text-sm font-medium text-[#9a9a9a]">{address}</div>
    </div>
  );
}

function PropertyImages() {
  const cards = [
    {
      title: "Choose the right property!",
      address: "Economy",
      imageUrl: "https://via.placeholder.com/382x340",
    },
    {
      title: "Best environment for rental",
      address: "Lifestyle",
      imageUrl: "https://via.placeholder.com/382x340",
    },
    {
      title: "Boys Hostel Apartment",
      address: "Property",
      imageUrl: "https://via.placeholder.com/382x340",
    },
  ];

  return (
    <div className="container mt-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#484848]">
        Property Rental <br /> Guides & Tips
      </h2>
      <div className="w-[140px] h-1.5 bg-[#484848] rounded-[3px] mt-2 sm:mx-0"></div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            address={card.address}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>

      {/* View All Blogs Button */}
      <div className="flex justify-center mt-8">
        <a
          href="#"
          className="w-[180px] sm:w-[220px] h-[50px] sm:h-[60px] bg-[#484848] rounded-[30px] flex items-center justify-center"
        >
          <span className="text-white text-sm sm:text-[15px] font-bold font-montserrat">
            View All Blogs
          </span>
        </a>
      </div>
    </div>
  );
}

export default PropertyImages;
