import React from "react";
import Header from "../component/header.js";
import Propertiesfilter from "../component/propertiesfilter.js";
import Filter from "../component/filter.js";
import SearchContainer from "../component/searchcontainer.js";
import Footer from "../component/footer.js";
function Search() {
  return (
    <div>
      <Header />
      <Propertiesfilter/>
      <div className="flex">
        {/* Filter Component */}
        <div>
          <Filter />
        </div>
        
      

        {/* Image Container */}
        <div className="flex-1">
          <SearchContainer />
        </div>
      </div>
      <div className="mt-[200px]"></div>
      <Footer/>
    </div>
  );
}

export default Search;
