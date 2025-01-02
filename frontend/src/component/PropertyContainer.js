import React, { useState, useEffect } from "react";
import Frame3 from "../img/Frame (3).png";
import PropertiesFilter from "./PropertiesFilter";
import FilterComponent from "./Filter";

import Card from "./Card"; // Import the Card component
function PropertyContainer() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [searchQuery, setSearchQuery] = useState(""); // State for the search input

  const [filteredCards, setFilteredCards] = useState([]); // State for the search input

  const cards = [
    {
      title: "Well Furnished Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "John Doberman",
      details: ["3", "1", "2", "0"],
      logo: "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
      category: "Resorts",
    },
    {
      title: "Blue Door Villa Modern",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "John Doberman",
      details: ["3", "1", "2", "0"],
      logo: "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
      category: "Resorts",
    },
    {
      title: "Beach House Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "Harry potter",
      details: ["3", "1", "2", "0"],
      logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
      category: "Resorts",
    },
    {
      title: "Country Boys Hostel",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "Harry potter",
      details: ["3", "1", "2", "0"],
      logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
      rent: "Home Room on Rent",
      period: "For Short Period: 3 - 5 Months",
      category: "Resorts",
    },
    {
      title: "Large Family Flat on Rent",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      details: ["3", "1", "2", "0"],
      name: "John Doberman",
      logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
      category: "Resorts",
    },
    {
      title: "Beach House Apartment",
      priceRange: "$2000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "John Doberman",
      details: ["3", "1", "2", "0"],
      logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
      category: "Resorts",
    },
    {
      title: "Well Furnished Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "John Doberman",
      details: ["3", "1", "2", "0"],
      logo: "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
      category: "Farm stays",
    },
    {
      title: "Blue Door Villa Modern",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "John Doberman",
      details: ["3", "1", "2", "0"],
      logo: "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
      category: "Farm stays",
    },
    {
      title: "Beach House Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "Harry potter",
      details: ["3", "1", "2", "0"],
      logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
      category: "Farm stays",
    },
    {
      title: "Country Boys Hostel",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "Harry potter",
      details: ["3", "1", "2", "0"],
      logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
      rent: "Home Room on Rent",
      period: "For Short Period: 3 - 5 Months",
      category: "Farm stays",
    },
    {
      title: "Large Family Flat on Rent",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      details: ["3", "1", "2", "0"],
      name: "John Doberman",
      logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
      category: "Villas",
    },
    {
      title: "Beach House Apartment",
      priceRange: "$2000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "John Doberman",
      details: ["3", "1", "2", "0"],
      logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
      category: "Villas",
    },
    {
      title: "Well Furnished Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "John Doberman",
      details: ["3", "1", "2", "0"],
      logo: "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
      category: "Homestays",
    },
    {
      title: "Blue Door Villa Modern",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "John Doberman",
      details: ["3", "1", "2", "0"],
      logo: "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
      category: "Homestays",
    },
    {
      title: "Beach House Apartment",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "Harry potter",
      details: ["3", "1", "2", "0"],
      logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
      category: "Homestays",
    },
    {
      title: "Country Boys Hostel",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "Harry potter",
      details: ["3", "1", "2", "0"],
      logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
      rent: "Home Room on Rent",
      period: "For Short Period: 3 - 5 Months",
      category: "Homestays",
    },
    {
      title: "Large Family Flat on Rent",
      priceRange: "$1000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      details: ["3", "1", "2", "0"],
      name: "John Doberman",
      logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
      category: "More",
    },
    {
      title: "Beach House Apartment",
      priceRange: "$2000 - 5000 USD",
      address: "Demo address in India",
      imageUrl: "https://via.placeholder.com/574x384",
      name: "John Doberman",
      details: ["3", "1", "2", "0"],
      logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
      rent: "Apartment on Rent",
      period: "For Long Period: 1 - 2 Years",
      category: "More",
    },
  ];

  useEffect(() => {
    const result = cards.filter((card) => {
      // Check if the card matches the selected category
      const matchesCategory =
        selectedCategory === "All" || card.category === selectedCategory;

      // Check if the card matches the search query
      const matchesSearch =
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.address.toLowerCase().includes(searchQuery.toLowerCase());

      // Return true if the card matches both conditions
      return matchesCategory && matchesSearch;
    });

    setFilteredCards(result);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="<div className=container mx-auto px-4">
      {/* PropertiesFilter Component */}
      <PropertiesFilter
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Section */}
      <div className="flex">
        {/* Left Side: Filter */}
        <div className="flex-shrink-0 ">
          <FilterComponent
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </div>
        {/* Right Side: Cards */}
        <div className="flex-1">
          {/* Text Lines */}
          <div className="flex flex-row lg:flex-row justify-between items-center mt-4">
            {/* Showing Products */}
            <div className="text-black/60 text-base font-normal font-abhaya lg:ml-[130px] mb-2 lg:mb-0">
              {filteredCards.length === 0
                ? "Showing 0-0 of 0 Products"
                : `Showing 1-${filteredCards.length} of ${filteredCards.length} Products`}
            </div>

            {/* Sort by */}
            <div className="flex justify-between items-center gap-2 lg:mr-12">
              <span className="text-black/60 text-base lg:text-xl font-normal font-abhaya">
                Sort by:{" "}
              </span>
              <span className="text-black text-base lg:text-xl font-medium font-abhaya">
                Most Popular
              </span>
              <img
                src={Frame3}
                alt="Sort icon"
                className="lg:ml-2 w-5 h-5 lg:w-auto lg:h-auto lg:block md:block hidden"
              />
            </div>
          </div>

          {/* Property Cards */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            {filteredCards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                priceRange={card.priceRange}
                address={card.address}
                imageUrl={card.imageUrl}
                logo={card.logo}
                details={card.details}
                rent={card.rent}
                period={card.period}
                name={card.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyContainer;
