import React, { useState } from "react";
import AddProperty1 from "./AddProperty/AddProperty1";
import AddProperty2 from "./AddProperty/AddProperty2";
import AddProperty3 from "./AddProperty/AddProperty3";
import AddProperty4 from "./AddProperty/AddProperty4";
import AddProperty5 from "./AddProperty/AddProperty5";

export default function AddProperty() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePropertyClick = (propertyType) => {
    setSelectedProperty(propertyType);
    console.log(propertyType);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1); // Cycles through pages 0, 1, 2
  };

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return (
          <div className="mx-4 md:mx-[20px] lg:mx-[100px]">
            <div className="w-full sm:w-[605px] h-[127px] text-[#484848] text-2xl sm:text-4xl font-bold font-montserrat mt-12 leading-[48px]">
              What kind of place will you <br />
              host?
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Input boxes for property types */}
              {["Apartment", "Flat", "Room", "Villa"].map((propertyType) => (
                <div
                  key={propertyType}
                  className={`w-full sm:w-[279px] h-[100px] rounded-md ${
                    selectedProperty === propertyType
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
              onClick={handleNext}
              className="w-full sm:w-[119px] h-14 relative bg-[#9a9a9a] rounded-[28px] flex items-center justify-center mt-12"
            >
              <span className="text-white text-[15px] font-bold font-montserrat ">
                Next
              </span>
            </button>
          </div>
        );
      case 1:
        return <AddProperty1 onNext={handleNext} />;
      case 2:
        return <AddProperty2 onNext={handleNext} />;
      case 3:
        return <AddProperty3 onNext={handleNext} />;
      case 4:
        return <AddProperty4 onNext={handleNext} />;
      case 5:
        return <AddProperty5 onNext={handleNext} />;
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
}