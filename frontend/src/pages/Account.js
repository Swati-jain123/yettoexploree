import React, { useState } from "react";
import Profileimg from "../img/carbon_user-avatar-filled.png";
import { Link } from "react-router-dom";
import tick from "../img/akar-icons_check.png";
import star1 from "../img/Vector (3).png";
import wrong from "../img/uil_times.png";

export default function Account() {
  const [isEditing, setIsEditing] = useState(false); // State to toggle between views
  const [tempAbout, setTempAbout] = useState(""); // Temporary state for About
  const [tempLocation, setTempLocation] = useState(""); // Temporary state for Location
  const [tempWork, setTempWork] = useState(""); // Temporary state for Work

  const [about, setAbout] = useState(""); // State for About
  const [location, setLocation] = useState(""); // State for Location
  const [work, setWork] = useState(""); // State for Work

  const [isSaved, setIsSaved] = useState(false); // Track save state

  const handleEditClick = () => {

    setIsEditing(true); // Switch to editing view
  };

  const handleCancelClick = () => {
    setIsEditing(false); // Switch back to default view
  };

  const handleSaveClick = () => {
    // Update the main state variables with the temporary values
    setAbout(tempAbout);
    setLocation(tempLocation);
    setWork(tempWork);
    setIsEditing(false); // Switch back to default view after saving

    setIsSaved(true); // Mark as saved
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row max-w-[1200px] lg:mx-14  mx-3 p-4">
      {/* Left Side: Profile Photo and Verification */}
      <div className="flex flex-col items-center bg-[#eff0f2] h-[544px] rounded-lg p-4 w-full md:w-1/4">
        <img
          src={Profileimg}
          alt="Profile"
          className="mb-4"
        />
        <div className="text-[#484848] text-base font-semibold font-montserrat mb-2">
          Upload a Photo
        </div>
        <div className="text-[#484848] text-lg font-bold font-montserrat mb-2">
          Identity Verification
        </div>
        <div className="text-[#9a9a9a] text-sm font-normal text-center font-montserrat leading-tight mb-4">
          {isSaved ? (
            <>
              {about && <div>{about}</div>}
              {location && <div>from {location}</div>}
              {work && <div>profession {work}</div>}
            </>
          ) : (
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          )}
        </div>
        <div className="flex flex-col items-start mt-12">
  <div className="text-[#484848] text-[22px] font-bold font-montserrat mb-2">
    John Doe
  </div>

  <div className="flex items-center mb-2">
    <img src={tick} alt="Email Confirmed" />
    <div className="text-[#9a9a9a] text-[15px] font-medium font-montserrat ml-2">
      Email Confirmed
    </div>
  </div>

  <div className="flex items-center mb-2">
    <img src={tick} alt="Mobile Confirmed" />
    <div className="text-[#9a9a9a] text-[15px] font-medium font-montserrat ml-2">
      Mobile Confirmed
    </div>
  </div>
</div> 
      </div>

      {/* Right Side: User Info and Edit Section */}
      <div className="flex flex-col w-full md:w-2/3 p-4">
      <div className="text-[#484848] text-[28px] font-bold font-montserrat mb-2">
          Hello, John Doe
        </div>
        <div className="text-[#9a9a9a] text-sm font-medium font-montserrat mb-12">
          Joined in 2021
        </div>
        

        {!isEditing ? (
          <div>
            <Link to="#" onClick={handleEditClick} className=" bg-white rounded-md border border-[#484848] w-full text-center px-12 py-4 mb-4">
              <span className="text-[#484848] text-[15px] font-semibold font-montserrat">Edit Profile</span>
            </Link>
            <div className="flex items-center mb-2 mt-12">
              <img src={star1} alt="Star Icon" />
              <div className="text-[#484848] text-lg font-bold font-montserrat ml-2 ">0 Reviews</div>
            </div>
            <div className="text-[#484848] text-[15px] font-semibold font-montserrat underline mb-4 mt-8">
              Reviewed By You
            </div>
          </div>
        ) : (
          <div>
             <div className="text-[#484848] text-[15px] font-semibold font-montserrat mb-2">About</div>
           
            <div className="bg-white rounded-lg border border-[#c2c6cc] mb-4">
              
              <textarea
                className="w-full h-24 rounded-lg border-none focus:outline-none p-2 resize-none"
                placeholder="About"
                value={tempAbout}
                onChange={(e) => setTempAbout(e.target.value)}
              />
            </div>
            <div className="text-[#484848] text-[15px] font-semibold font-montserrat mb-2">Location</div>
           
            <div className="bg-white rounded-lg border border-[#c2c6cc] mb-4">
              <input
                type="text"
                className="w-full h-12 rounded-lg border-none focus:outline-none px-4"
                placeholder="Location"
                value={tempLocation}
                onChange={(e) => setTempLocation(e.target.value)}
              />
            </div>
            <div className="text-[#484848] text-[15px] font-semibold font-montserrat mb-2">Work</div>
           
             <div className="bg-white rounded-lg border border-[#c2c6cc] mb-4">
              <input
                type="text"
                className="w-full h-12 rounded-lg border-none focus:outline-none px-4"
                placeholder="Work"
                value={tempWork}
                onChange={(e) => setTempWork(e.target.value)}
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-4">
  <div className="text-[#9a9a9a] text-[15px] font-semibold font-montserrat mt-2 mb-4 md:mb-0">
    All the required user information can be added here...
  </div>
  <div className="flex space-x-4">
  <button
      className="flex items-center text-[#484848] text-[15px] font-bold font-montserrat gap-2"
      onClick={handleCancelClick}
    >
      <img src={wrong} alt="Wrong Icon" />
      Cancel
    </button>
    <button
      className="bg-[#9a9a9a] rounded-[28px] text-white text-[15px] font-bold font-montserrat py-4 px-12"
      onClick={handleSaveClick}
    >
      Save
    </button>
    
  </div>
</div>
            
          </div>
        )}
      </div>
    </div>
    </div>
  );
}