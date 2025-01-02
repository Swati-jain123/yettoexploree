import React, { useState } from "react";
import minus from "../../img/akar-icons_minus.png";
import plus from "../../img/akar-icons_plus.png";

function AddProperty2({ onNext }) {
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [parking, setParking] = useState(0);

  const handleDecrement = (type) => {
    if (type === "bedrooms" && bedrooms > 0) setBedrooms(bedrooms - 1);
    if (type === "bathrooms" && bathrooms > 0) setBathrooms(bathrooms - 1);
    if (type === "parking" && parking > 0) setParking(parking - 1);
  };

  const handleIncrement = (type) => {
    if (type === "bedrooms") setBedrooms(bedrooms + 1);
    if (type === "bathrooms") setBathrooms(bathrooms + 1);
    if (type === "parking") setParking(parking + 1);
  };

  return (
    <div className="mx-4 md:mx-[20px] lg:mx-[100px]">
      <div className="w-full sm:w-[605px] h-[127px] text-[#484848] text-2xl sm:text-4xl font-bold font-montserrat mt-12 leading-[48px]">
        Add facilities available at your <br /> place.
      </div>

      {/* Facilities Section */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-16">
        {/* Bedrooms */}
        <div className="flex items-center justify-between w-auto sm:w-auto">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold w-10 h-10 rounded-full flex items-center justify-center"
            onClick={() => handleDecrement("bedrooms")}
          >
            <img src={minus} alt="Minus" />
          </button>
          <div className="w-[19px] h-[29px] text-[#484848] text-[22px] font-bold font-montserrat px-4 mb-1">
            {bedrooms}
          </div>
          <span className="text-[#484848] text-base font-semibold font-montserrat px-2">
            Bedrooms
          </span>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold w-10 h-10 rounded-full flex items-center justify-center"
            onClick={() => handleIncrement("bedrooms")}
          >
            <img src={plus} alt="Plus" />
          </button>
        </div>

        {/* Bathrooms */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold w-10 h-10 rounded-full flex items-center justify-center"
            onClick={() => handleDecrement("bathrooms")}
          >
            <img src={minus} alt="Minus" />
          </button>
          <div className="w-[19px] h-[29px] text-[#484848] text-[22px] font-bold font-montserrat px-4 mb-1">
            {bathrooms}
          </div>
          <span className="text-[#484848] text-base font-semibold font-montserrat px-2">
            Bathrooms
          </span>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold w-10 h-10 rounded-full flex items-center justify-center"
            onClick={() => handleIncrement("bathrooms")}
          >
            <img src={plus} alt="Plus" />
          </button>
        </div>

        {/* Parking */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold w-10 h-10 rounded-full flex items-center justify-center"
            onClick={() => handleDecrement("parking")}
          >
            <img src={minus} alt="Minus" />
          </button>
          <div className="w-[19px] h-[29px] text-[#484848] text-[22px] font-bold font-montserrat px-4 mb-1">
            {parking}
          </div>
          <span className="text-[#484848] text-base font-semibold font-montserrat px-2">
            Parking
          </span>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold w-10 h-10 rounded-full flex items-center justify-center"
            onClick={() => handleIncrement("parking")}
          >
            <img src={plus} alt="Plus" />
          </button>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full sm:w-[119px] h-14 bg-[#9a9a9a] rounded-[28px] flex items-center justify-center mt-12"
      >
        <span className="text-white text-[15px] font-bold font-['Montserrat']">
          Next
        </span>
      </button>
    </div>
  );
}

export default AddProperty2;