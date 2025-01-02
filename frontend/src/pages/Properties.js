import React from "react";
import PropertyContainer from "../component/PropertyContainer.js";
import Newsletter from "../component/Newsletter.js";
function properties() {
  return (
    <div>
      <PropertyContainer />
      <div className="mt-[50px] mb-[170px] ">
      <Newsletter />
      </div>
    </div>
  );
}

export default properties;
