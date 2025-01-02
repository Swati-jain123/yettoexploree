import React from "react";
import { Link } from "react-router-dom";
export default function AddProperty5() {
  return (
    <div className="mx-4 md:mx-[20px] lg:mx-[100px]">
      <div className="w-full sm:w-[605px] h-[95px] text-[#484848] text-2xl sm:text-4xl font-bold font-montserrat leading-[48px] mt-12">
        Information can be added in a similar way.
      </div>
      <div className="w-full sm:w-[533px] h-[58px] text-[#484848] text-base font-medium font-montserrat leading-normal mt-12">
        The other required information can be added in a similar presentation
        for listing the property fluently...
      </div>
      <div className="w-full sm:w-[222px] h-14 relative mt-12">
        <div className="w-full h-14 bg-[#9a9a9a] rounded-[28px] flex items-center justify-center">
          <Link className="text-white text-[15px] font-bold font-montserrat" to="/admin">
            Post My Property
          </Link>
        </div>
      </div>
    </div>
  );
}