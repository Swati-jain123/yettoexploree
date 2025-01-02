import React, { useState } from "react";
import Frame from "../img/Frame (1).png";
import Frame2 from "../img/Frame.png";
import Filter from "../img/filter-icon.png";

export default function FilterComponent({
  setSelectedCategory,
  selectedCategory,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null); // Track the selected category

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Set the active category
  };

  const applyFilter = () => {
    setSelectedCategory(activeCategory); // Apply the selected category
    setActiveCategory(null); // Reset active category after applying the filter
    setShowDropdown(false); // Close the dropdown
  };

  return (
    <div className="relative lg:block hidden">
      {/* Filter button */}
      {!showDropdown && (
        <div className="w-[136px] h-12 flex justify-center items-center mt-5 mr-5">
          <div
            className="w-full h-12 bg-white rounded-3xl border border-[#9a9a9a] flex items-center justify-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <img src={Filter} alt="Filter Icon" className="mr-3" />
            <div className="text-[#484848] text-sm font-semibold font-montserrat">
              Filters
            </div>
          </div>
        </div>
      )}

      {/* Dropdown menu */}
      {showDropdown && (
        <div className="w-[90%] sm:w-[295px] overflow-y-auto px-6 py-5 rounded-[20px] border border-black/10 flex-col justify-start items-start gap-6 inline-flex ml-[-15px] mt-5">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-black text-xl font-semibold font-abhaya">
              Filters
            </div>
            <div
              className="w-6 h-6 px-[1.88px] py-[2.62px] justify-center items-center flex cursor-pointer"
              onClick={toggleDropdown}
            >
              <img src={Frame} alt="Close Icon" />
            </div>
          </div>
          <div className="self-stretch h-[0px] border border-black/10"></div>

          {/* Categories */}
          <div className="self-stretch h-[220px] flex-col justify-start items-start gap-5 flex w-full">
            {[
              "Resorts",
              "Farm stays",
              "Villas",
              "Homestays",
              "Tent Stays",
              "Others",
            ].map((category, index) => (
              <div
                key={index}
                className={`self-stretch justify-between items-center inline-flex cursor-pointer ${
                  activeCategory === category
                    ? "text-red-500"
                    : "text-[#484848]"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                <div className="text-base font-semibold font-montserrat">
                  {category}
                </div>
                {/* Dropdown Icon (no functionality) */}
                <div className="flex justify-center items-center cursor-pointer">
                  <img src={Frame2} alt="Dropdown Icon" />
                </div>
              </div>
            ))}
          </div>

          {/* Apply Filter button */}
          <div
            className="w-full h-12 px-4 py-4 bg-black rounded-[62px] mt-[400px] mb-[100px] justify-center items-center gap-3 inline-flex cursor-pointer"
            onClick={applyFilter}
          >
            <div className="text-white text-sm font-medium font-abhaya">
              Apply Filter
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
