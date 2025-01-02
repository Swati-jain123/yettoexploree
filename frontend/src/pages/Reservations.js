import React, { useState } from "react";

export default function Reservations() {
  const [activeTab, setActiveTab] = useState("upcoming"); // State to track active tab
  const [upcomingReservations, setUpcomingReservations] = useState([
    {
      id: 1,
      title: "Fully Furnished Apartment",
      checkIn: "12 Mar 2021",
      duration: "Long (2 - 5 Years)",
      guests: "4 Adults",
      price: "$1000 USD",
    },
    {
      id: 2,
      title: "Double Flat with 3 Rooms",
      checkIn: "25 Apr 2021",
      duration: "Long (2 - 3 Years)",
      guests: "4 Adults",
      price: "$1000 USD",
    },
    {
      id: 3,
      title: "Fully Furnished Apartment",
      checkIn: "12 Mar 2021",
      duration: "Long (2 - 5 Years)",
      guests: "4 Adults",
      price: "$1000 USD",
    },
  ]);

  const [pastReservations, setPastReservations] = useState([
    {
      id: 1,
      title: "Luxury Villa",
      checkIn: "15 Jan 2020",
      duration: "Medium (6 - 12 Months)",
      guests: "6 Adults",
      price: "$2000 USD",
    },
    {
      id: 2,
      title: "Fully Furnished Apartment",
      checkIn: "12 Mar 2021",
      duration: "Long (2 - 5 Years)",
      guests: "4 Adults",
      price: "$1000 USD",
    },
  ]);

  // Function to handle reservation cancellation
  const handleCancelReservation = (id) => {
    if (activeTab === "upcoming") {
      // Move the reservation from upcoming to past
      const canceledReservation = upcomingReservations.find(
        (reservation) => reservation.id === id
      );

      setPastReservations((prevPastReservations) => [
        ...prevPastReservations,
        canceledReservation,
      ]);

      setUpcomingReservations((prevUpcomingReservations) =>
        prevUpcomingReservations.filter((reservation) => reservation.id !== id)
      );
    }
  };

  // Function to render reservation cards
  const renderReservations = (reservations) =>
    reservations.map((reservation) => (
      <div
        key={reservation.id}
        className="flex flex-col sm:flex-row items-start sm:items-center p-4 mb-4 border-b border-gray-200"
      >
        {/* Image Section */}
        <div className="w-[107px] h-[94px] mb-4 sm:mb-0">
          <img
            src="https://via.placeholder.com/107x94"
            alt="Apartment Thumbnail"
            className="rounded-md"
          />
        </div>

        {/* Details Section */}
        <div className="ml-0 sm:ml-4 flex-1">
          <div className="text-[#484848] text-base sm:text-lg font-bold font-montserrat">
            {reservation.title}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-x-8 text-[13px] text-[#484848] font-semibold font-montserrat">
            <div>
              <span>Check In: </span>
              <span className="text-[#9a9a9a] font-medium">
                {reservation.checkIn}
              </span>
            </div>
            <div>
              <span>Duration: </span>
              <span className="text-[#9a9a9a] font-medium">
                {reservation.duration}
              </span>
            </div>
            <div>
              <span>Guests: </span>
              <span className="text-[#9a9a9a] font-medium">
                {reservation.guests}
              </span>
            </div>
          </div>

          <div className="mt-2 text-[#484848] text-base sm:text-lg font-semibold font-montserrat">
            {reservation.price}
          </div>
        </div>

        {/* Cancel Button - Only show in "Upcoming" tab */}
        {activeTab === "upcoming" && (
          <div className="mt-4 sm:mt-0">
            <button
              onClick={() => handleCancelReservation(reservation.id)}
              className="px-6 py-2 bg-[#9a9a9a] text-white text-sm sm:text-base font-semibold font-montserrat rounded-full"
            >
              Cancel Reservation
            </button>
          </div>
        )}
      </div>
    ));

  return (
    <div className="mx-4 sm:mx-[100px]">
      {/* Header */}
      <div className="text-[#484848] text-2xl sm:text-[38px] font-extrabold font-montserrat mt-6">
        Reservations
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mt-4">
        <div
          onClick={() => setActiveTab("upcoming")}
          className={`text-lg sm:text-xl font-bold font-montserrat cursor-pointer ${
            activeTab === "upcoming" ? "text-[#484848]" : "text-gray-400"
          }`}
        >
          Upcoming
        </div>
        <div
          onClick={() => setActiveTab("past")}
          className={`text-lg sm:text-xl font-bold font-montserrat cursor-pointer ${
            activeTab === "past" ? "text-[#484848]" : "text-gray-400"
          }`}
        >
          Past
        </div>
      </div>

      {/* Black Line */}
      <div className="relative mt-1">
        <div
          className={`absolute transition-all duration-300 ${
            activeTab === "upcoming"
              ? "left-0 w-[86px]"
              : "left-[105px] w-[56px]"
          } h-[3px] bg-[#484848]`}
        />
      </div>

      {/* Reservations List */}
      <div className="mt-6">
        {activeTab === "upcoming" && renderReservations(upcomingReservations)}
        {activeTab === "past" && renderReservations(pastReservations)}
      </div>
    </div>
  );
}
