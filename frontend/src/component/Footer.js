import React from "react";
import yetlogo from "../img/footerlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGooglePlay,
  faAppStoreIos,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="p-6 text-[#484848]" style={{ backgroundColor: "#EDEDED" }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <img src={yetlogo} alt="Your Logo" className="mb-4 w-36 sm:w-48" />
            <p className="text-sm text-[#9A9A9A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-wrap mt-4 gap-4">
              <div
                className="flex items-center justify-center bg-[#E0E2E6] w-40 h-12 rounded-lg"
              >
                <a href="#" className="flex items-center">
                  <FontAwesomeIcon icon={faGooglePlay} className="text-[#484848]" />
                  <span className="ml-2 text-sm text-[#484848]">PlayStore</span>
                </a>
              </div>
              <div
                className="flex items-center justify-center bg-[#E0E2E6] w-40 h-12 rounded-lg"
              >
                <a href="#" className="flex items-center">
                  <FontAwesomeIcon icon={faAppStoreIos} className="text-[#484848]" />
                  <span className="ml-2 text-sm text-[#484848]">AppStore</span>
                </a>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="mt-8 sm:mt-0">
            <h4 className="text-lg font-bold mb-4 text-[#484848]">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Legal Information</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
            </ul>
          </div>

          {/* Help Center Section */}
          <div className="mt-8 sm:mt-0">
            <h4 className="text-lg font-bold mb-4 text-[#484848]">HELP CENTER</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Find a Property</a>
              </li>
              <li>
                <a href="#">How To Host?</a>
              </li>
              <li>
                <a href="#">Why Us?</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Rental Guides</a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="mt-8 sm:mt-0">
            <h4 className="text-lg font-bold mb-4 text-[#484848]">CONTACT INFO</h4>
            <ul className="space-y-2 text-sm">
              <li>Phone: 1234567890</li>
              <li>Email: company@email.com</li>
              <li>Location: 100 Smart Street, LA, USA</li>
            </ul>
            <div className="flex mt-4 gap-4">
              <a href="#">
                <FontAwesomeIcon icon={faSquareFacebook} size="lg" className="text-[#484848]" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} size="lg" className="text-[#484848]" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} size="lg" className="text-[#484848]" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-[#484848]" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-4 border-t text-sm text-center sm:text-left flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; 2024 Midlead Technovations | All rights reserved</p>
          <p>Created with love by Midlead</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
