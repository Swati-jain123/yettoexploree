import React from "react";
import plus from "../img/bi_plus-lg.png";

export default function Stories() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row mx-4 lg:mx-[125px]">
        <div className="absolute text-[#484848] text-[38px] font-extrabold font-montserrat">
          Stories
        </div>

        {/* Wrapper for the layout adjustment */}
        <div className="flex flex-col sm:flex-row relative sm:space-x-4">
          {/* Add Your Story Section */}
          <div className="w-full h-20 left-0 sm:absolute sm:left-0">
            <div className="w-20 h-20 absolute top-[66px]">
              <div className="w-20 h-20 absolute bg-[#9a9a9a] rounded-full">
                <img src={plus} alt="img" className="mt-[28px] ml-[28px]" />
              </div>
            </div>
            <div className="w-[157px] h-[26px] left-[104px] top-[70px] absolute text-[#484848] text-lg font-bold font-montserrat">
              Add Your Story
            </div>
            <div className="lg:w-72 left-[104px] top-[100px] absolute text-[#9a9a9a] text-sm font-medium font-montserrat">
              Share your moments, experiences...
            </div>
          </div>
        </div>
        {/* Right Section for Message Body (appears first on small screens, second on large screens) */}
        <div className="w-auto h-auto mt-[100px] md:mt-[200px] rounded-tr-xl rounded-bl-xl rounded-br-xl lg:h-[518px] lg:mt-0 lg:ml-[200px] order-1 lg:order-2">
          <img
            src="https://via.placeholder.com/774x574"
            alt="large img"
            className="rounded-xl"
          />
        </div>

        {/* Left Section for Messages List (appears second on small screens, first on large screens) */}
        <div className="lg:w-[333px] w-full lg:h-[608px] flex flex-col space-y-6 lg:mt-[200px] mt-8 order-2 lg:order-1">
          {/* Header: "All Messages" */}
          <div className="text-[#484848] text-2xl font-bold font-montserrat mb-4">
            All Stories
          </div>

          {/* Message Items */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="w-[70px] h-[70px] bg-[#c2c6cc] rounded-full overflow-hidden">
                <img
                  src="https://images-platform.99static.com//ZfyttmkP5Wt1D56urMqAxapoZ7A=/217x0:1018x801/fit-in/500x500/99designs-contests-attachments/85/85248/attachment_85248569"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#484848] text-base font-bold">
                  John Doberman
                </span>
                <span className="text-[#9a9a9a] text-sm">On: 12 Mar 2021</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
