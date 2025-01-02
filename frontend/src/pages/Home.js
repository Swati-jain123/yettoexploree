import React, { useState } from "react";
import bannerimg from "../img/sreehari-devadas-Asnwfq5mQ3w-unsplash 1.png";
import roundsearch from "../img/round-search.png";
import Slideshow from "../component/Slideshow.js";
import PickSlideshow from "../component/PickSlideshow.js";
import Collectioncard from "../component/CollectionCard.js";
import mobile from "../img/icomoon-free_mobile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import PropertyImages from "../component/PropertyImages.js";
import Cloud from "../img/cloudmountain2 1.png";
import NewsletterSignup from "../component/Newsletter.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Importing styles
function Home() {
  const [startDate, setStartDate] = useState(new Date()); // "Check In" date
  const [endDate, setEndDate] = useState(new Date()); // "Check Out" date
  return (
    <div className="flex flex-col overflow-hidden ">
      <main className="flex-grow relative">
        <div className="relative">
          {/* Banner Image with lowered brightness */}
          <img
            src={bannerimg}
            alt="Banner"
            className="mx-auto w-full h-[70vh] sm:h-auto md:h-[100vh] lg:h-full object-cover"
            style={{
              filter: "brightness(70%)",
            }}
          />

          {/* Overlay text content */}
          <div
            className="absolute z-20 flex flex-col items-start px-8 py-4"
            style={{
              left: "5%", // Relative positioning for better responsiveness
              top: "30%", // Adjusted to avoid overlapping the header
            }}
          >
            {/* Title */}
            <h1 className="text-[25px] md:text-[60px] lg:text-[70px] font-bold text-[#E8EAEC] leading-tight font-battambang">
              Explore the <br />
              <span className="block mt-4 md:mt-8">
                Unexplored Places in India
              </span>
            </h1>

            {/* Search bar */}
            <div className="mt-12 md:mt-12 lg:mt-[100px] lg:ml-[150px] w-full flex justify-center">
              <div className="ml-[-40px] space-x-3 bg-white rounded-[30px] p-3 flex items-center w-[340px] sm:w-[90%] md:w-[70%] lg:w-[90%] shadow-lg lg:space-x-4">
                {/* Location Field */}
                <div className="flex items-center flex-1">
                  <div>
                    <p
                      className="text-xs text-gray-500 font-semibold"
                      style={{ color: "#484848" }}
                    >
                      Location
                    </p>
                    <input
                      type="text"
                      placeholder="Which city / State do you prefer?"
                      className="text-sm font-semibold bg-transparent border-none outline-none w-full"
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="border-l border-gray-300 h-8 "></div>

                {/* Check In Field */}
                <div className="flex items-center flex-1">
                  <div className="ml-[-10px] lg:ml-0 md:ml-0">
                    <p
                      className="text-xs text-gray-500 font-semibold"
                      style={{ color: "#484848" }}
                    >
                      Check In
                    </p>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd MMM yyyy" // Abbreviated month format (e.g., 25 Dec 2024)
                      className="text-xs sm:text-sm md:text-base lg:text-sm font-semibold bg-transparent border-none outline-none w-full "
                      popperPlacement="bottom-start"
                      showPopperArrow={false}
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="border-l border-gray-300 h-8"></div>

                {/* Check Out Field */}
                <div className="flex items-center flex-1">
                  <div className="ml-[-10px] lg:ml-0 md:ml-0">
                    <p
                      className="text-[11px] lg:text-xs md:text-xs text-gray-500 font-semibold"
                      style={{ color: "#484848" }}
                    >
                      Check Out
                    </p>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)} // Update Check Out date
                      dateFormat="dd MMM yyyy" // Abbreviated month format
                      className="text-xs sm:text-sm md:text-base lg:text-sm font-semibold bg-transparent border-none outline-none w-full"
                      popperPlacement="bottom-start"
                      showPopperArrow={false}
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="border-l border-gray-300 h-8"></div>

                {/* Guests Field */}
                <div className="flex items-center flex-1">
                  <div>
                    <p
                      className="text-[11px] lg:text-xs md:text-xs text-gray-500 font-semibold"
                      style={{ color: "#484848" }}
                    >
                      Guests
                    </p>
                    <input
                      type="text"
                      placeholder="Add Guests"
                      className="text-sm font-semibold bg-transparent border-none outline-none w-full"
                    />
                  </div>
                </div>

                {/* Search Icon */}
                <div className="flex items-center">
                  <img src={roundsearch} alt="Search Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slideshow */}

        <Slideshow />

        <PickSlideshow />

        {/* Browse for  */}

        <div className="w-auto lg:mx-8  mx-4 mt-12 px-4 sm:px-6 lg:px-8 bg-[#1cb2f6]">
          <div className="relative rounded-xl h-[427px]">
            {/* Overlay
    {/* <div className="w-[90%] lg:w-[100%] max-w-[1206px] h-[395px] absolute bg-black/10 rounded-xl ml-6 top-[12px] lg:left-[15px] left-[-5px]" /> */}

            <div className="absolute inset-0 bg-black/10 rounded-xl mt-4 mb-4"></div>

            {/* Title Section */}
            <div className="absolute top-[10%] left-[10%] lg:left-[60px] text-white text-[38px] font-bold font-montserrat leading-[52px]">
              Browse For <br /> More Properties
            </div>

            {/* Subtext */}
            <div className="absolute top-[50%] lg:top-[40%] left-[10%] lg:left-[67px] text-white text-base font-medium font-montserrat lg:leading-[52px]">
              Explore properties by their categories/types...
            </div>

            {/* Button */}
            <div className="absolute top-[293px] lg:top-[263px] left-[10%] lg:left-[66px] w-[220px] h-[60px] bg-[#484848] rounded-[30px] flex items-center justify-center">
              <a
                href="/properties"
                className="text-white text-[15px] font-bold font-montserrat"
              >
                Find A Property
              </a>
            </div>
          </div>
        </div>

        {/* collection comonent  */}

        <Collectioncard />

        <div className="w-full relative mx-auto mt-12 px-4 sm:px-6 lg:px-8">
          {/* Background Section */}
          <div className="w-full mx-auto h-auto sm:h-[400px] bg-[#43feb6] rounded-xl relative flex flex-col sm:flex-row items-center sm:items-start py-8 sm:py-0">
            {/* Text Section */}
            <div className="flex flex-col items-center lg:mt-12 sm:items-start sm:ml-8 sm:mt-8 lg:ml-16">
              {/* Download App Text */}
              <div className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold font-montserrat text-center sm:text-left leading-[1.2]">
                Download Our <br /> Mobile App
              </div>

              {/* Subtext */}
              <div className="text-black text-sm sm:text-base font-semibold font-montserrat mt-4 text-center sm:text-left">
                Available for free on these platforms
              </div>

              {/* Buttons */}
              <div className="flex mt-6 space-x-4">
                {/* Play Store Button */}
                <div className="flex items-center bg-white rounded-md shadow-md px-4 py-2">
                  <FontAwesomeIcon
                    icon={faGooglePlay}
                    className="text-2xl text-gray-800"
                  />
                  <span className="ml-2 text-sm sm:text-base font-semibold text-black">
                    PlayStore
                  </span>
                </div>

                {/* Apple Store Button */}
                <div className="flex items-center bg-white rounded-md shadow-md px-4 py-2">
                  <FontAwesomeIcon
                    icon={faApple}
                    className="text-2xl text-gray-800"
                  />
                  <span className="ml-2 text-sm sm:text-base font-semibold text-black">
                    AppleStore
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Image */}
            <div className="hidden sm:block lg:mt-12 sm:mt-8 sm:mt-0 sm:absolute sm:right-8 lg:right-16">
              <img
                src={mobile} // Replace with actual image URL
                alt="Mobile App Preview"
                className=""
              />
            </div>
          </div>
        </div>

        {/* PropertyImages part */}
        <PropertyImages />

        <div className="w-full relative mx-auto mt-12 px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#1bd0d4] rounded-xl">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

            {/* Content */}
            <div className="relative flex flex-col md:flex-row items-center justify-between h-full p-6 md:p-12">
              {/* Text Section */}
              <div className="text-center md:text-left max-w-[410px] space-y-4">
                <h2 className="text-[#484848] text-2xl sm:text-3xl font-bold font-montserrat leading-tight">
                  List Your Property
                </h2>
                <p className="text-[#292929] text-sm sm:text-base font-medium font-montserrat">
                  Experience hassle-free hosting. Get started today!
                </p>
                <div className="mt-6">
                  <a
                    href="/host"
                    className="inline-block px-6 py-3 bg-[#484848] text-[#1bd0d4] text-sm sm:text-base font-bold font-montserrat rounded-full"
                  >
                    Become A Host
                  </a>
                </div>
              </div>

              {/* Image Section */}
              <div className="mt-8 md:mt-0 max-w-md md:max-w-lg">
                <img
                  src={Cloud}
                  alt="Hosting illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative mx-auto mt-12 px-4 sm:px-6 lg:px-8 max-w-screen-xl"
          style={{ marginTop: "50px" }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Left Section: Text */}
            <div className="lg:w-[472px] space-y-4">
              <h2 className="text-[#484848] text-3xl sm:text-4xl font-bold font-montserrat leading-tight">
                Discover More About Property Rental
              </h2>
              <div className="w-[140px] h-1.5 bg-[#484848] rounded-[3px]"></div>
              <p className="text-[#9a9a9a] text-sm sm:text-base font-normal font-montserrat leading-relaxed">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                {/* Ask A Question and List A Property on the same line */}
                <div className="flex gap-4 space-x-8">
                  <button className="text-[#484848] text-sm font-bold font-montserrat">
                    Ask A Question
                  </button>
                  <button className="text-[#484848] text-sm font-bold font-montserrat">
                    List A Property
                  </button>
                </div>
              </div>

              {/* Container for "Discover More" Button */}
              <div className="relative w-full max-w-[220px] h-[60px] ">
                <div className="mt-12 w-full h-full bg-[#484848] rounded-[30px] flex items-center justify-center">
                  <a
                    href="/properties"
                    className="text-white text-[15px] font-bold font-montserrat"
                  >
                    Discover More
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section: Image */}
            <div className="lg:w-[382px] flex-shrink-0">
              <img
                src="https://via.placeholder.com/382x437"
                alt="Property Image"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* NEWSLETTER */}

        <NewsletterSignup />
      </main>
    </div>
  );
}

export default Home;
