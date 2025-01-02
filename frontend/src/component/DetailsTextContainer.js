import React from "react";
import bed from "../img/bed (1).png";
import vector from "../img/Vector (1).png";
import car from "../img/Group 1.png";
import pet from "../img/pet icon (1).png";
import heart from "../img/Heart.png";
import share from "../img/share.png";
import kitchen from "../img/kitchen.png";
import air from "../img/Group.png";
import washer from "../img/laundry 1.png";
import tv from "../img/tv.png";
import wifi from "../img/wifi.png";
import balcony from "../img/balcony 1.png";
import safety from "../img/healthicons_health-data-security-outline.png";
import map from "../img/Large Map.png";
import { Link } from "react-router-dom";
export default function DetailsPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex flex-col md:flex-row mx-4 lg:mx-[125px] mt-8">
        {/* Details Text Container */}
        <div className="w-full md:w-[745px] max-w-full">
          <div className="relative">
            {/* Title */}
            <div className="text-[#484848] text-[28px] font-bold font-montserrat">
              Well Furnished Apartment
            </div>

            {/* Address */}
            <div className="text-[#9a9a9a] text-base font-medium font-montserrat">
              100 Smart Street, LA, USA
            </div>

            {/* Images side by side */}
            <div className="absolute top-[40px] right-0 flex items-center gap-[20px]">
              <img src={heart} alt="Heart icon" />
              <img src={share} alt="Share icon" />
            </div>
          </div>

          {/* Apartment Features */}
          <div className="flex flex-wrap justify-between mt-8 lg:mr-[100px] ">
            {/* Feature Card */}
            {[
              { img: bed, label: "3 Bedrooms" },
              { img: vector, label: "2 Bathrooms" },
              { img: car, label: "3 Cars/2 Bikes" },
              { img: pet, label: "0 Pets Allowed" },
            ].map((feature, index) => (
              <div
                key={index}
                className="w-[160px] lg:w-[150px] h-40 bg-[#eff0f2] rounded-lg relative mb-4 "
              >
                <img
                  src={feature.img}
                  alt={feature.label}
                  className="absolute top-1/4 left-1/4"
                />
                <div className="absolute bottom-2 left-2 text-[#484848] text-base font-semibold font-montserrat">
                  {feature.label}
                </div>
              </div>
            ))}
          </div>

          {/* Apartment Description */}
          <div className="mt-8">
            <div className="text-[#484848] text-[22px] font-bold font-montserrat">
              Apartment Description
            </div>
            <div className="text-[#9a9a9a] text-justify text-[15px] font-normal font-montserrat leading-tight mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="text-[#9a9a9a] text-[15px] text-justify font-normal font-montserrat leading-tight mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="w-full md:w-[382px] md:h-[436px] relative mt-4 md:mt-0 md:ml-12">
          <div className="md:w-[382px] md:h-[436px] bg-white rounded-[10px] shadow">
            <div className="text-[#484848] text-[22px] font-bold font-montserrat p-4">
              $ 1000 - $ 2000
            </div>

            <div className="border-t border-[#e0e2e6] my-7"></div>
            <div className="p-4">
              <div className="text-[#9a9a9a] text-base font-medium font-montserrat">
                Short Period: $ 1000
              </div>
              <div className="text-[#9a9a9a] text-base font-medium font-montserrat">
                Medium Period: $ 2000
              </div>
              <div className="text-[#9a9a9a] text-base font-medium font-montserrat">
                Long Period: $ 2000
              </div>
            </div>
            <div className="flex justify-center mb-4 ">
              <div className="w-full m-6 p-3 bg-[#484848] rounded-[30px]">
                <a
                  href=""
                  className="text-white text-[15px] font-bold font-montserrat block text-center py-2"
                >
                  Reserve Now
                </a>
              </div>
            </div>
            <div className="flex justify-between px-4">
              <div className="text-[#484848] text-[15px] font-semibold font-montserrat ">
                Property Inquiry
              </div>
              <div className="text-[#484848] text-[15px] font-semibold font-montserrat">
                Contact Host
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[595px] relative mx-4 md:mx-[125px] mt-8">
        {/* Title */}
        <div className="text-[#484848] text-[22px] font-bold font-milliard mb-4">
          Offered Amenities
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Kitchen */}
          <div className="flex items-center">
            <img src={kitchen} alt="Kitchen Icon" className="w-6 h-6 mr-2" />
            <div className="text-[#484848] text-base font-medium font-milliard">
              Kitchen
            </div>
          </div>

          {/* Air Conditioner */}
          <div className="flex items-center">
            <img
              src={air}
              alt="Air Conditioner Icon"
              className="w-6 h-6 mr-2"
            />
            <div className="text-[#484848] text-base font-medium font-milliard">
              Air Conditioner
            </div>
          </div>

          {/* Television with Netflix */}
          <div className="flex items-center">
            <img src={tv} alt="Television Icon" className="w-6 h-6 mr-2" />
            <div className="text-[#484848] text-base font-medium font-milliard">
              Television with Netflix
            </div>
          </div>

          {/* Free Wireless Internet */}
          <div className="flex items-center">
            <img src={wifi} alt="WiFi Icon" className="w-6 h-6 mr-2" />
            <div className="text-[#484848] text-base font-medium font-milliard">
              Free Wireless Internet
            </div>
          </div>

          {/* Washer */}
          <div className="flex items-center">
            <img src={washer} alt="Washer Icon" className="w-6 h-6 mr-2" />
            <div className="text-[#484848] text-base font-medium font-milliard">
              Washer
            </div>
          </div>

          {/* Balcony or Patio */}
          <div className="flex items-center">
            <img src={balcony} alt="Balcony Icon" className="w-6 h-6 mr-2" />
            <div className="text-[#484848] text-base font-medium font-milliard">
              Balcony or Patio
            </div>
          </div>
        </div>
        {/* Show All Amenities Button */}
        <div className="w-[200px] md:w-[242px] h-[60px] relative mt-8">
          <div className="w-full h-full bg-white rounded-md border border-[#484848] flex items-center justify-center">
            <a
              href=""
              className="text-[#484848] text-[15px] font-semibold font-montserrat"
            >
              Show All 10 Amenities
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[588px] mx-4 md:mx-[125px] mt-8">
        {/* Title */}
        <div className="flex items-center mb-4">
          <img src={safety} alt="Safety Icon" className="w-6 h-6 mr-2" />
          <div className="text-[#484848] text-[22px] font-bold font-montserrat">
            Safety and Hygiene
          </div>
        </div>

        {/* Safety Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Daily Cleaning */}
          <div className="flex items-center">
            <img src={safety} alt="Safety Icon" className="w-6 h-6 mr-2" />
            <div className="text-[#484848] text-base font-medium font-montserrat">
              Daily Cleaning
            </div>
          </div>

          {/* Disinfections and Sterilizations */}
          <div className="flex items-center">
            <img src={safety} alt="Safety Icon" className="w-6 h-6 mr-2" />
            <div className="text-[#484848] text-base font-medium font-montserrat">
              Disinfections and Sterilizations
            </div>
          </div>

          {/* Fire Extinguishers */}
          <div className="flex items-center">
            <img src={safety} alt="Safety Icon" className="w-6 h-6 mr-2" />
            <div className="text-[#484848] text-base font-medium font-montserrat">
              Fire Extinguishers
            </div>
          </div>

          {/* Smoke Detectors */}
          <div className="flex items-center">
            <img src={safety} alt="Safety Icon" className="w-6 h-6 mr-2" />
            <div className="text-[#484848] text-base font-medium font-montserrat">
              Smoke Detectors
            </div>
          </div>
        </div>
      </div>{" "}
      {/* map   */}
      <div className="lg:mx-[125px] w-full m-2">
        <Link to="">
          <img src={map} alt="img" />{" "}
        </Link>
      </div>
    </div>
  );
}
