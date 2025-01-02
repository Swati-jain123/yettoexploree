import React, { useState } from "react";

export default function AddProperty1({ onNext }) {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handlePropertyClick = (propertyType) => {
    setSelectedProperty(propertyType);
    console.log(propertyType);
  };

  return (
    <div className="mx-4 md:mx-[20px] lg:mx-[100px]">
      <div className="w-full sm:w-[605px] h-[127px] text-[#484848] text-2xl sm:text-4xl font-bold font-montserrat leading-[48px]">
        Add a short description of your place.
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-16">
        <div
          className={`w-full sm:w-[588px] h-[120px] rounded-md px-6 py-6 cursor-pointer ${
            selectedProperty === "Rental unit" ? "bg-[#C2C6CC]" : "bg-[#eff0f2]"
          }`}
          onClick={() => handlePropertyClick("Rental unit")}
        >
          <div className="w-[106px] h-[23px] text-[#484848] text-base font-bold font-montserrat">
            Rental unit
          </div>
          <div className="w-auto h-[29px] text-[#9a9a9a] text-sm font-medium font-montserrat">
            A rented place within a multi-unit residential building or complex.
          </div>
        </div>
        <div
          className={`w-full sm:w-[588px] h-[100px] rounded-md px-6 py-6 cursor-pointer ${
            selectedProperty === "Shared unit" ? "bg-[#C2C6CC]" : "bg-[#eff0f2]"
          }`}
          onClick={() => handlePropertyClick("Shared unit")}
        >
          <div className="w-[106px] h-[23px] text-[#484848] text-base font-bold font-montserrat">
            Shared unit
          </div>
          <div className="w-auto h-[29px] text-[#9a9a9a] text-sm font-medium font-montserrat">
            A rented place within a multi-unit residential building or complex.
          </div>
        </div>
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