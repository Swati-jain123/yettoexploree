import React,{useState,useEffect} from "react";
const PhotoModal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
        <div className="bg-white p-12 rounded-lg w-full max-w-lg relative">
          <button 
            onClick={onClose} 
            className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800 focus:outline-none"
            style={{ zIndex: 10 }} // Ensure the button is above other elements
          >
            ✖
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&w=360&h=160" 
              alt="Image 1" 
              className="w-full h-[200px] rounded" 
            />
            <img 
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&w=360&h=160" 
              alt="Image 2" 
              className="w-full h-[200px] rounded" 
            />
          </div>
        </div>
      </div>
    )
  );
};
const DetailsImageContainer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  // Effect to manage body scroll
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'unset'; // Enable scrolling
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="flex flex-col md:flex-row ml-4 mr-4 mt-7">
      {/* Main large image */}
      <div className="w-full h-[540px] relative">
        <img
          className="w-full h-full rounded-2xl object-cover"
          src="https://via.placeholder.com/650x540"
          alt="Main large"
        />

        {/* Logo and content at the bottom of the large image, overlaid */}
        <div className="absolute bottom-0 left-0 w-full flex items-center p-4 rounded-b-2xl">
          <div className="w-[76px] h-[76px] rounded-full overflow-hidden bg-[#C2C6CC] mr-4">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-[#484848] text-xs font-medium font-montserrat">
              Listed By:
            </div>
            <div className="text-[#484848] text-lg font-bold font-montserrat">
              John Doberman
            </div>
            <div className="text-[#484848] text-base font-medium font-montserrat">
              For: $1000 - 5000 USD
            </div>
          </div>
        </div>
      </div>

      {/* Right side container for smaller images */}
      <div className="flex flex-col justify-between w-full md:ml-4 mt-4 md:mt-0">
        {/* Top smaller images */}
        <div className="flex">
          <img
            className="w-auto md:w-[360px] h-[260px] rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&w=360&h=260"
            alt="Top small 1"
          />
          <div className="relative ml-2">
            <img
              className="w-auto md:w-[360px] h-[260px] rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&w=360&h=260h"
              alt="Bottom small 2"
            />
          </div>
        </div>

        {/* Bottom smaller images */}
        <div className="flex mt-2">
          <img
            className="w-auto md:w-[360px] h-[260px] rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&w=360&h=260"
            alt="Bottom small 1"
          />
          <div className="relative ml-2">
            <img
              className="w-auto md:w-[360px] h-[260px] rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&w=360&h=260h"
              alt="Bottom small 2"
            />
            {/* Overlay text for "+2 More Photos" */}
            <div className="absolute inset-0 flex items-center justify-center text-[#484848] text-5xl font-bold font-montserrat rounded">
            <div onClick={handleOpenModal} className="cursor-pointer flex items-center">
        +2
        <div className="text-sm ml-2 font-medium">
          More <br /> Photos
        </div>
      </div>
      <PhotoModal isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailsImageContainer;
