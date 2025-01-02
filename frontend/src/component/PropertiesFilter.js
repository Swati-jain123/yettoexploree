import React from "react";
import Frame from "../img/Frame.png";
import Frame2 from "../img/Frame (2).png";

export default function PropertiesFilter({
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  selectedCategory,
}) {
  return (
    <div className="ml-[10px] lg:mt-[50px]">
      <div className="flex items-center gap-10 flex-wrap sm:flex-nowrap">
        {/* Breadcrumb Section */}
        <div
          className="flex items-center gap-2 ml-4 sm:ml-0 w-full sm:w-auto justify-center sm:justify-start"
          style={{ marginTop: "-10px" }}
        >
          <div
            className="text-black/60 text-base font-normal font-abhaya lg:block hidden"
            style={{ minWidth: "60px", textAlign: "center" }}
          >
            <button onClick={() => setSelectedCategory("All")}>Home</button>
          </div>
          {/* Conditional rendering for arrow and selected category */}
          {selectedCategory !== "All" && selectedCategory !== "Home" && (
            <>
              <img src={Frame} alt="Arrow Icon" className="lg:block hidden" />
              <div
                className="text-black text-base font-normal font-abhaya lg:block hidden"
                style={{ minWidth: "100px", textAlign: "center" }}
              >
                {selectedCategory}
              </div>
            </>
          )}
        </div>

        <div className="flex items-center gap-6 sm:gap-1 lg:ml-[100px] w-full justify-between">
  {/* Filters Container */}
  <div className="flex items-center gap-1 sm:gap-1 overflow-x-auto sm:overflow-visible whitespace-nowrap w-1/2 sm:w-full">
    {/* Filters */}
    <div className="flex items-center gap-1 sm:flex-wrap sm:justify-start w-max">
      {/* Resorts */}
      <div className="w-[56px] h-8 relative inline-block">
        <div
          className={`w-10 h-[3px] left-0 top-[29px] absolute ${
            selectedCategory === "Resorts" ? "bg-[#484848]" : "bg-transparent"
          }`}
        />
        <div className="left-0 top-0 absolute text-[#484848] text-base lg:text-base font-semibold font-montserrat">
          <button onClick={() => setSelectedCategory("Resorts")}>Resorts</button>
        </div>
      </div>
      <div className="w-1.5 h-1.5 bg-[#C2C6CC] rounded-full mx-6 inline-block"></div>

      {/* Farm stays */}
      <div className="w-[56px] h-8 relative inline-block">
        <div
          className={`w-10 h-[3px] left-0 top-[29px] absolute ${
            selectedCategory === "Farm stays" ? "bg-[#484848]" : "bg-transparent"
          }`}
        />
        <div className="left-0 top-0 absolute text-[#484848] text-base lg:text-base font-semibold font-montserrat whitespace-nowrap">
          <button onClick={() => setSelectedCategory("Farm stays")}>Farm stays</button>
        </div>
      </div>
      <div className="w-1.5 h-1.5 bg-[#C2C6CC] rounded-full mx-6 inline-block"></div>

      {/* Villas */}
      <div className="w-[56px] h-8 relative inline-block">
        <div
          className={`w-10 h-[3px] left-0 top-[29px] absolute ${
            selectedCategory === "Villas" ? "bg-[#484848]" : "bg-transparent"
          }`}
        />
        <div className="left-0 top-0 absolute text-[#484848] text-base lg:text-base font-semibold font-montserrat">
          <button onClick={() => setSelectedCategory("Villas")}>Villas</button>
        </div>
      </div>
      <div className="w-1.5 h-1.5 bg-[#C2C6CC] rounded-full mx-6 inline-block"></div>

      {/* Homestays */}
      <div className="w-[56px] h-8 relative inline-block">
        <div
          className={`w-10 h-[3px] left-0 top-[29px] absolute ${
            selectedCategory === "Homestays" ? "bg-[#484848]" : "bg-transparent"
          }`}
        />
        <div className="left-0 top-0 absolute text-[#484848] text-base lg:text-base font-semibold font-montserrat">
          <button onClick={() => setSelectedCategory("Homestays")}>Homestays</button>
        </div>
      </div>
      <div className="w-1.5 h-1.5 bg-[#C2C6CC] rounded-full mx-6 inline-block"></div>

      {/* More */}
      <div className="w-[56px] h-8 relative inline-block">
        <div
          className={`w-10 h-[3px] left-0 top-[29px] absolute ${
            selectedCategory === "More" ? "bg-[#484848]" : "bg-transparent"
          }`}
        />
        <div className="left-0 top-0 absolute text-[#484848] text-base lg:text-base font-semibold font-montserrat">
          <button onClick={() => setSelectedCategory("More")}>More</button>
        </div>
      </div>
    </div>
  </div>

  {/* Search Bar */}
  <div className="w-1/3 h-12 px-4 py-3 bg-white rounded-[62px] border border-black flex items-center mt-2 lg:mr-[120px] sm:mt-0">
    <div className="w-[27px] h-[27px] flex justify-center items-center">
      <img src={Frame2} alt="Search Icon" />
    </div>
    <input
      type="text"
      placeholder="Search for stays"
      className="w-full text-black text-xl font-normal font-abhaya outline-none pl-2"
      value={searchQuery} // Controlled input
      onChange={(e) => setSearchQuery(e.target.value)} // Update search query
    />
  </div>
</div>

      </div>
    </div>
  );
}
