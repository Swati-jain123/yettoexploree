import React from "react";
import Send from "../img/ph_paper-plane.png";
const Newsletter = () => {
  return (
    <div className="w-full relative mt-[80px] mb-[50px]">
      {/* Background Overlay */}
      <div className="w-full h-[228px] left-0 top-[-43px] absolute bg-[#18b7bb]/70" />

      {/* Content Wrapper */}
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-[#484848] text-[32px] font-bold font-montserrat leading-tight">
            NEWSLETTER
          </h2>
          <p className="text-[#484848] text-[17px] font-medium font-montserrat mt-2">
            Stay Upto Date
          </p>
        </div>

        {/* Input Section */}
        <div className="mt-4 md:mt-0 md:absolute md:left-[262px] md:top-[27px]">
          <div className="w-full max-w-[794px] h-[52px] md:w-[500px] lg:w-[700px] bg-white rounded-[26px] border border-[#e8eaec] flex items-center">
            <input
              type="email"
              placeholder="Your Email..."
              className="w-full px-6 py-2 text-sm text-[#9a9a9a] font-medium font-montserrat rounded-[26px] outline-none"
            />
            {/* Send Button */}
            <button className="w-12 h-12 bg-[#64cfd1] rounded-full flex justify-center items-center ml-[-48px]">
              <img src={Send} alt="send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
