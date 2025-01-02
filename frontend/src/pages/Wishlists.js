import React, { useState } from "react";
import cross from "../img/Vector (8).png"; // Ensure this path is correct

const initialWishlistItems = [
  {
    id: 1,
    image: "https://via.placeholder.com/279x300?text=Image+1",
    title: "Family Apartment",
    address: "100 Smart Street, LA, USA",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/279x300?text=Image+2",
    title: "Cozy Cottage",
    address: "200 Cozy Lane, NY, USA",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/279x300?text=Image+3",
    title: "Luxury Villa",
    address: "300 Luxury Blvd, Miami, USA",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/279x300?text=Image+4",
    title: "Modern Studio",
    address: "400 Modern Ave, San Francisco, USA",
  },
  
];

export default function Wishlists() {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);

  const handleClose = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="mx-4 md:mx-10 lg:mx-[125px]">
      <div className="text-[#484848] text-[28px] md:text-[32px] lg:text-[38px] font-extrabold font-montserrat">
        Wishlists
      </div>
      <div className="flex flex-wrap justify-center items-start gap-4 mt-10">
        {wishlistItems.map((item) => (
          <div key={item.id} className="relative w-full sm:w-[279px] h-[300px]">
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg w-full h-full object-cover"
            />

            {/* Close Button */}
            <button
              onClick={() => handleClose(item.id)}
              className="absolute top-2 right-2 hover:bg-opacity-70 transition-all"
            >
              <img
                src={cross}
                alt="Close"
              />
            </button>

            {/* Title and Address */}
            <div className="absolute left-4 bottom-8 text-white text-base font-bold font-montserrat">
              {item.title}
            </div>
            <div className="absolute left-4 bottom-4 text-white text-xs font-medium font-montserrat">
              {item.address}
            </div>
          </div>
        ))}
        {wishlistItems.length === 0 && (
          <div className="text-center text-[#484848] text-lg font-semibold mt-8">
            Your wishlist is empty.
          </div>
        )}
      </div>
    </div>
  );
}
