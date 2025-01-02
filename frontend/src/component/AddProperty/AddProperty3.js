import React, { useState } from "react";

export default function AddProperty3({ onNext }) {
  const [selectedProperties, setSelectedProperties] = useState([]); // Stores multiple selected properties

  const handlePropertyClick = (propertyType) => {
    setSelectedProperties((prevSelected) => {
      const updatedSelection = prevSelected.includes(propertyType)
        ? prevSelected.filter((item) => item !== propertyType) // Remove if selected
        : [...prevSelected, propertyType]; // Add if not selected

      console.log("Selected Properties:", updatedSelection); // Log the updated array
      return updatedSelection;
    });
  };

  return (
    <div className="mx-4 md:mx-[20px] lg:mx-[100px]">
      <div className="w-full sm:w-[605px] h-[127px] text-[#484848] text-2xl sm:text-4xl font-bold font-montserrat mt-12 leading-[48px]">
        Add amenities available at your place.
      </div>
      <div className="flex flex-wrap gap-4">
        {/* Input boxes for property types */}
        {[
          "Television",
          "Wifi",
          "Washer",
          "Balcony",
          "Cleaner",
          "Radio",
          "Lift",
          "Other",
        ].map((propertyType) => (
          <div
            key={propertyType}
            className={`w-full sm:w-[23%] h-[100px] rounded-md ${
              selectedProperties.includes(propertyType)
                ? "bg-[#C2C6CC]"
                : "bg-[#eff0f2]"
            } flex items-center justify-center cursor-pointer`}
            onClick={() => handlePropertyClick(propertyType)}
          >
            <div className="text-black text-center text-lg sm:text-xl font-bold font-montserrat">
              {propertyType}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onNext}
        className="w-full sm:w-[119px] h-14 relative bg-[#9a9a9a] rounded-[28px] flex items-center justify-center mt-12"
      >
        <span className="text-white text-[15px] font-bold font-montserrat">
          Next
        </span>
      </button>
    </div>
  );
}