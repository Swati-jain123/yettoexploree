import React from "react";
import { Link } from "react-router-dom";
export default function HostPageContent() {
  return (
    <div>
      <div className="bg-cover w-full h-[711px] relative">
        <div className="bg-cover w-full h-[711px] left-0 top-0 absolute bg-[#eff0f2]" />

        <div className="w-[220px] h-[60px] lg:left-[80px] mx-6 top-[550px] absolute">
          <div className="w-[220px] h-[60px]  left-0 top-0 absolute bg-[#484848] rounded-[30px]" />
          <div className="w-[132px] h-[17px] left-[49px] top-[21px] absolute text-white text-[15px] font-bold font-['Montserrat']">
            <Link to="">Lets Get Started</Link>
          </div>
        </div>
        <div className="lg:w-[691px] top-1/2 mx-6 lg:left-[80px] lg:top-[464px] absolute text-[#9a9a9a] text-base font-normal font-['Montserrat'] leading-relaxed">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias.
        </div>
        <div className="lg:left-[82px] lg:top-[389px] mx-6 top-1/4 absolute text-[#484848] text-[46px] font-bold font-['Montserrat']">
          Try Hosting With Us
        </div>
      </div>
      
{/* some title here */}
<div
  className="w-full max-w-[1206px] h-auto relative mx-auto flex flex-col md:flex-row mt-0 md:mt-[90px]"
>
  {/* Image Section */}
  <div className="w-full md:w-1/2 h-auto rounded-xl overflow-hidden">
    <img
      src="https://via.placeholder.com/574x450"
      alt="img"
      className="w-full h-full object-cover rounded-xl"
    />
  </div>

  {/* Text Content Section */}
  <div className="w-full md:w-1/2 h-auto flex flex-col justify-center lg:p-12 p-4 lg:mb-[150px]">
    <div className="text-[#484848] lg:text-[46px] text-[28px] font-bold font-['Montserrat']">
      Some Title Here
    </div>
    <div className="text-[#9a9a9a] text-justify text-base font-normal font-['Montserrat'] leading-relaxed mb-4 max-w-[700px] mx-auto ">
  At vero eos et accusamus et iusto odio dignissimos ducimus qui
  blanditiis praesentium voluptatum deleniti atque corrupti quos
  dolores et quas molestias.
</div>

    <div className="text-[#9a9a9a] text-justify text-base font-normal font-['Montserrat'] leading-relaxed mb-4">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti atque corrupti quos
      dolores et quas molestias.
    </div>
    <div className="text-[#9a9a9a] text-justify text-base font-normal font-['Montserrat'] leading-relaxed mb-4">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti atque corrupti quos
      dolores et quas molestias.
    </div>
  </div>
</div>

    {/* {Hosting tips} */}
<div className="max-w-[1251px] mx-auto px-4">
  <div className="text-[#484848] text-[2.0rem] lg:text-[2.5rem] font-bold font-['Montserrat'] leading-[1.2] mt-8">
    Hosting Tips & Guides
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
    <div className="relative">
      <div className="rounded-xl overflow-hidden">
        <img
          src="https://via.placeholder.com/382x340"
          alt="img"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="text-[#484848] text-lg font-bold font-['Montserrat'] mt-2">
        Choose the right property!
      </div>
      <div className="text-[#9a9a9a] text-sm font-semibold font-['Montserrat']">
        Economy
      </div>
    </div>
    <div className="relative">
      <div className="rounded-xl overflow-hidden">
        <img
          src="https://via.placeholder.com/382x340"
          alt="img"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="text-[#484848] text-lg font-bold font-['Montserrat'] mt-2">
        Best environment for rental
      </div>
      <div className="text-[#9a9a9a] text-sm font-semibold font-['Montserrat']">
        Lifestyle
      </div>
    </div>
    <div className="relative">
      <div className="rounded-xl overflow-hidden">
        <img
          src="https://via.placeholder.com/382x340"
          alt="img"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="text-[#484848] text-lg font-bold font-['Montserrat'] mt-2">
        Boys Hostel Apartment
      </div>
      <div className="text-[#9a9a9a] text-sm font-semibold font-['Montserrat']">
        Property
      </div>
    </div>
  </div>
  <div className="text-white text-[15px] font-bold font-['Montserrat'] text-center mt-8">
    View All Blogs
  </div>
</div>
    </div>
  );
}
