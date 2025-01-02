import React from "react";
import DetailsImageContainer from "../component/DetailsImageContainer";
import DetailsTextContainer from "../component/DetailsTextContainer";
import DetailsNearbyAndReviews from "../component/DetailsNearbyAndReviews";
import Newsletter from "../component/Newsletter";
export default function Details() {
  return (
    <div>
      <DetailsImageContainer />
      <DetailsTextContainer />
      <DetailsNearbyAndReviews />
      <div className="mt-[50px] mb-[170px] ">
        <Newsletter />
      </div>
    </div>
  );
}
