import React, { useEffect, useState } from "react";

function Slideshow() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  // Define the handleHeartClick function to toggle the liked state
  const handleHeartClick = (index) => {
    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, liked: !card.liked } : card
      )
    );
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/uploads/selected-uploads"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch selected uploads");
        }
        const data = await response.json();
        console.log("Fetched data structure:", data);
        if (Array.isArray(data)) {
          setCards(data.map((card) => ({ ...card, liked: false }))); // Initialize liked state
        } else {
          console.error("Fetched data is not an array:", data);
        }
      } catch (err) {
        console.error("Error fetching selected uploads:", err);
      }
    };

    fetchCards();
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCards = Array.isArray(cards)
    ? cards.slice(startIndex, endIndex)
    : [];

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (endIndex < cards.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mx-auto mt-12    px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#484848]">
      Explore India's <br /> Hidden Gems
      </div>
      <div className="text-[#484848] text-4xl font-bold font-montserrat leading-[48px] mb-4">
       
      </div>

      {/* Underline Bar */}
      <div className="flex justify-between mb-4">
        <div className="w-[140px] h-1.5 bg-[#484848] rounded-[3px]" />
        <div className="flex gap-2">
          {/* Left Arrow */}
          <button onClick={handlePrev} disabled={currentPage === 0}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-12 ${
                currentPage === 0 ? "text-gray-300" : "text-black"
              }`}
              fill="none"
              viewBox="0 0 50 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M50 12H0m10-10L0 12l10 10"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button onClick={handleNext} disabled={endIndex >= cards.length}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-12 ${
                endIndex >= cards.length ? "text-gray-300" : "text-black"
              }`}
              fill="none"
              viewBox="0 0 50 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M0 12h50m-10-10l10 10-10 10"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Card Display (Slideshow Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleCards.map((card, index) => (
          <div
            key={card.id || index}
            className="relative bg-white rounded-lg shadow-md w-[279px] h-[340px] overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            {/* Card Background Image */}
            <div
              className="absolute inset-0 bg-gray-200 bg-cover bg-center"
              style={{
                backgroundImage: card.fileUrl ? `url(${card.fileUrl})` : "none",
              }}
            />
            {/* Heart Icon */}
            <button
              className="absolute top-2 right-2 p-2 z-10"
              onClick={() => handleHeartClick(index)} // This is where the heart click is handled
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 ${
                  card.liked ? "text-red-500" : "text-[#E0E2E6]"
                }`}
                fill="currentColor"
                stroke="#9A9A9A"
                strokeWidth="1"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
            {/* Text and Logo Overlay */}
            <div className="absolute bottom-0 left-0 right-0 text-white p-4 z-10">
              <div
                className="absolute bottom-6 left-4 w-12 h-12 rounded-full overflow-hidden"
                style={{ marginBottom: "50px", backgroundColor: "#C2C6CC" }}
              >
                <img
                  src={
                    card.profilePictureUrl ||
                    "https://via.placeholder.com/50x50"
                  }
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg font-bold text-[#f7b500]">
                {card.title || "Unnamed Location"}
              </h2>
              <p className="text-sm text-[#e0e0e0]">
                {card.description || "No description available."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
