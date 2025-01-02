import React from 'react'
export default function HostProperties() {
  return (
    <div>
        <div className='mx-[125px] mt-[50px]'>
        <div className="w-[382px] h-[53px] text-[#484848] text-[38px] font-extrabold font-montserrat">Listed Properties<br/></div>
        <div className="w-[1205px] h-[300px] pr-[926px] justify-start items-center inline-flex">
  <div className="w-[279px] h-[300px] relative">
    <div className="w-[279px] h-[300px] left-0 top-0 absolute  " >
      <img src="https://via.placeholder.com/279x300" alt="img" className='rounded-lg mt-[20px]'></img>
    </div>
    <div className="w-[161px] h-[21px] left-[24px] top-[263px] absolute text-white text-base font-bold font-montserrat">Family Apartment</div>
    <div className="w-[222px] h-[21px] left-[24px] top-[286px] absolute text-white text-xs font-medium font-montserrat">100 Smart Street, LA, USA</div>
  </div>
</div>
<div className="flex space-x-4 mt-[50px]">
 
  <button className="w-[116px] h-[38px] bg-[#9a9a9a] rounded-[20px] flex items-center justify-center">
    <span className="text-white text-sm font-semibold font-montserrat">Modify</span>
  </button>
  
  <button className="w-[116px] h-[38px] bg-[#e8eaec] rounded-[20px] flex items-center justify-center">
    <span className="text-[#484848] text-sm font-semibold font-montserrat">Remove</span>
  </button>
</div>
  </div>
    </div>
  )
}
