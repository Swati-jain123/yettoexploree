import React from 'react'
import { Link } from 'react-router-dom'
export default function ReservationFormContent() {
  return (
    <div>
        <div className="flex justify-between mx-[125px] mt-8">
        <div className="w-[620px] h-[298px] relative" >
    <div className="w-[556px] left-0 top-[177px] absolute text-[#484848] text-lg font-medium font-['Montserrat'] leading-7">Sample reservation form to be provided for the concept and further design...</div>
    <div className="w-[618px] h-[81px] left-[2px] top-0 absolute text-[#e8eaec] text-6xl font-extrabold font-['Montserrat']">Reservation<br/></div>
    <div className="w-[198px] h-[81px] left-[2px] top-[80px] absolute text-[#e8eaec] text-6xl font-extrabold font-['Montserrat']">Form</div>
    <div className="w-[357px] h-8 left-[2px] top-[266px] absolute text-[#484848] text-lg font-semibold font-['Montserrat'] leading-7"><Link to="/">Go To Home</Link></div>
  </div>
  
  <div className="w-[480px] h-[349px] relative">
  <div className="w-[480px] h-[349px] left-0 top-0 absolute bg-[#eff0f2] rounded-[10px]" />
  <div className="w-[198px] h-[125px] left-[30px] top-[177px] absolute">
    <div className="w-[181px] h-7 left-[1px] top-[42px] absolute text-[#9a9a9a] text-[15px] font-medium font-['Montserrat']">Short Period: $ 1000</div>
    <div className="w-[197px] h-7 left-[1px] top-[69px] absolute text-[#9a9a9a] text-[15px] font-medium font-['Montserrat']">Medium Period: $ 2000</div>
    <div className="w-[191px] h-7 left-[1px] top-[97px] absolute text-[#9a9a9a] text-[15px] font-medium font-['Montserrat']">Long Period: $ 2000</div>
    <div className="w-[123px] h-[25px] left-0 top-0 absolute text-[#484848] text-lg font-bold font-['Montserrat']">Price Details</div>
  </div>
  <div className="w-[428px] h-[101px] left-[31px] top-[30px] absolute">
    <div className="w-[100px] h-[100px] left-0 top-0 absolute bg-[#c2c6cc] rounded-md" />
    <div className="w-[239px] h-[25px] left-[122px] top-[8px] absolute text-[#484848] text-base font-bold font-['Montserrat']">Fully Furnished Apartment</div>
    <div className="w-[188px] h-[25px] left-[122px] top-[33px] absolute text-[#9a9a9a] text-sm font-medium font-['Montserrat']">100 Smart Street, LA, USA</div>
    <div className="w-[79px] h-[25px] left-[122px] top-[75px] absolute text-[#9a9a9a] text-sm font-semibold font-['Montserrat']">1 Bedroom</div>
    <div className="w-[87px] h-[25px] left-[216px] top-[75px] absolute text-[#9a9a9a] text-sm font-semibold font-['Montserrat']">1 Bathroom</div>
    <div className="w-[87px] h-[25px] left-[317px] top-[76px] absolute text-[#9a9a9a] text-sm font-semibold font-['Montserrat']">1 Parking</div>
    <div className="w-[305px] h-[0px] left-[123px] top-[65px] absolute border border-[#e0e2e6]"></div>
  </div>
</div>
</div>
  </div>
  )
}
