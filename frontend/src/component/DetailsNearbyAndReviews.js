import React from "react";
import star from "../img/Vector (2).png";
import arrow from "../img/arrow.png";
import { Link } from "react-router-dom";
import star1 from "../img/Vector (3).png";
export default function DetailsNearbyAndReviews() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full md:w-[791px] mx-4 lg:mx-[125px] mt-10">
        {/* Title */}
        <div className="text-[#484848] text-[22px] font-bold font-montserrat mb-4">
          Nearby Services
        </div>

        {/* Services Grid */}
        <div className="w-auto grid grid-cols-2 md:grid-cols-4 gap-2 mr-6 lg:mr-0">
          {/* Service Card */}
          {Array(3)
            .fill()
            .map((_, index) => (
              <div key={index} className="bg-white rounded-md shadow p-4">
                <div className="text-[#484848] text-base font-bold font-montserrat">
                  Grill Restro & Bar
                </div>
                <div className="text-[#9a9a9a] text-sm font-medium font-montserrat">
                  100 meters away
                </div>
                {/* 5 Stars displayed horizontally */}
                <div className="flex space-x-1 mt-1">
                  {Array(5)
                    .fill()
                    .map((_, starIndex) => (
                      <img
                        key={starIndex}
                        src={star}
                        alt="Star icon"
                        className="w-4 h-4"
                      />
                    ))}
                </div>
              </div>
            ))}
          <div className="flex justify-center mt-5">
            {/* Circle */}
            <div className="w-[55px] h-[55px] bg-[#9a9a9a] rounded-full flex items-center justify-center">
              <Link to="">
                <img src={arrow} alt="Arrow icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex mt-6">
          <div className="w-full max-w-[189px] h-[54px] bg-[#9a9a9a] rounded-[26px] flex items-center justify-center">
            <Link
              to=""
              className="text-white text-[15px] font-bold font-montserrat"
            >
              Show On Map
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center mx-4 lg:mx-[125px] mt-8">
        <div className="text-[#484848] text-[22px] font-bold font-montserrat">
          Reviews
        </div>
        <div className="ml-4 flex items-center">
          <img src={star1} alt="star img" />
          <div className="text-[#484848] text-[22px] font-bold font-montserrat ml-2">
            5.0
          </div>
        </div>
      </div>

      <div className="w-full mx-4 lg:mx-[125px] mt-4 flex flex-wrap gap-2">
        {/* Individual container */}
        <div className="flex items-center w-full sm:w-[48%] lg:w-[37%] bg-white p-2 rounded-lg ">
          <div className="w-[30%] text-[#484848] text-base font-medium font-montserrat">
            Amenities
          </div>
          <div className="flex w-[135px] h-1 bg-[#9a9a9a] rounded-sm ml-4"></div>
          <div className="text-[#484848] text-base font-semibold font-montserrat ml-4">
            5.0
          </div>
        </div>

        <div className="flex items-center w-full sm:w-[48%] lg:w-[37%] bg-white p-2 rounded-lg">
          <div className="w-[30%] text-[#484848] text-base font-medium font-montserrat">
            Hygiene
          </div>
          <div className="flex w-[135px] h-1 bg-[#9a9a9a] rounded-sm ml-4"></div>
          <div className="text-[#484848] text-base font-semibold font-montserrat ml-4">
            5.0
          </div>
        </div>

        <div className="flex items-center w-full sm:w-[48%] lg:w-[37%] bg-white p-2 rounded-lg">
          <div className="w-[30%] text-[#484848] text-base font-medium font-montserrat">
            Communication
          </div>
          <div className="flex w-[135px] h-1 bg-[#9a9a9a] rounded-sm ml-4"></div>
          <div className="text-[#484848] text-base font-semibold font-montserrat ml-4">
            5.0
          </div>
        </div>

        <div className="flex items-center w-full sm:w-[48%] lg:w-[37%] bg-white p-2 rounded-lg">
          <div className="w-[30%] text-[#484848] text-base font-medium font-montserrat">
            Location of Property
          </div>
          <div className="flex w-[135px] h-1 bg-[#9a9a9a] rounded-sm ml-4"></div>
          <div className="text-[#484848] text-base font-semibold font-montserrat ml-4">
            5.0
          </div>
        </div>

        <div className="flex items-center w-full sm:w-[48%] lg:w-[37%] bg-white p-2 rounded-lg">
          <div className="w-[30%] text-[#484848] text-base font-medium font-montserrat">
            Value for Money
          </div>
          <div className="flex w-[135px] h-1 bg-[#9a9a9a] rounded-sm ml-4"></div>
          <div className="text-[#484848] text-base font-semibold font-montserrat ml-4">
            5.0
          </div>
        </div>
      </div>

      <div className="w-full md:w-[802px] mx-4 lg:mx-[125px] mt-10">
        {/* Title */}

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div key={index} className="bg-white rounded-md shadow p-4">
                <div className="flex items-center mb-2">
                  <div className="w-[70px] h-[70px] bg-[#9a9a9a] rounded-full mr-2"></div>
                  <div>
                    <div className="text-[#484848] text-base font-bold font-montserrat">
                      John Doberman
                    </div>
                    <div className="text-[#9a9a9a] text-sm font-medium font-montserrat">
                      Mar 12 2020
                    </div>
                  </div>
                </div>
                <div className="text-[#9a9a9a] text-[15px] font-normal font-montserrat leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            ))}
        </div>

        {/* Show All Reviews Button */}
        <div className="w-[200px] md:w-[242px] h-[60px] relative mt-12">
          <div className="bg-white rounded-md border border-[#484848] flex items-center justify-center h-[60px]">
            <Link
              to=""
              className="text-[#484848] text-[15px] font-semibold font-montserrat"
            >
              Show All 100 Reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
