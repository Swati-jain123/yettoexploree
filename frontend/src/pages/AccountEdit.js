import React from 'react'
import AfterLoginHeader from '../component/AfterLoginHeader'
import Footer from '../component/footer' 
import Profileimg from '../img/carbon_user-avatar-filled.png'; 
import tick from '../img/akar-icons_check.png';
import wrong from '../img/uil_times.png';
export default function AccountEdit() {
  return (
    <div>
      <AfterLoginHeader/>
  
      <div className="w-[584px] h-[608px] left-[80px] top-[60px] relative">
  <div className="w-[279px] h-[566px]  absolute bg-[#eff0f2] rounded-lg" > <img src={Profileimg
  } alt="img" style={{marginLeft:"50px",marginTop:"30px"}}></img></div>
  <div className="w-[163px] h-[163px] pl-[10.19px] pr-[10.29px] py-[10.18px] left-[74px] top-[50px] absolute justify-center items-center inline-flex" />
  <div className="w-32 h-[22px] left-[64px] top-[198px] absolute text-[#484848] text-base font-semibold font-montserrat">Upload a Photo</div>
  <div className="w-[123px] h-11 left-[41px] top-[421px] absolute text-[#484848] text-[22px] font-bold font-montserrat ">John Doe</div>
  <div className="w-[158px] h-[54px] left-[339px] top-[101px] absolute">
    
  </div>
 
  <div className="w-[267px] h-11 left-[334px] top-[10px] absolute text-[#484848] text-[28px] font-bold font-montserrat">Hello, John Doe</div> 
  <div className="w-[111px] h-5 left-[339px] top-[54px] absolute text-[#9a9a9a] text-sm font-medium font-montserrat">Joined in 2021</div>
  <div className="w-[178px] left-[39px] top-[462px] absolute">
  <div className=" left-[24px] top-[1px] "><img src={tick} alt="img"></img></div>
   
    <div className="w-[149px] h-[22px] left-[29px] top-[1px] absolute text-[#9a9a9a] text-[15px] font-medium font-montserrat">Email Confirmed</div>
    <div className="w-[19px] h-[19px] px-[3.17px] py-[4.75px] left-0 top-0 absolute justify-center items-center inline-flex" />
  </div>
  <div className="w-[180px] left-[39px] top-[490px] absolute">
  <div className=" left-[24px] top-[1px] "><img src={tick} alt="img"></img></div>
  
    <div className="w-[151px] h-[22px] left-[29px] top-[1px] absolute text-[#9a9a9a] text-[15px] font-medium font-montserrat ">Mobile Confirmed</div>
    <div className="w-[19px] h-[19px] px-[3.17px] py-[4.75px] left-0 top-0 absolute justify-center items-center inline-flex" />
  </div>
  <div className="w-[253px] h-[30px] left-[41px] top-[283px] absolute text-[#484848] text-lg font-bold font-montserrat ">Identity Verification</div>
  <div className="w-[239px] h-[72px] left-[41px] top-[315px] absolute text-[#9a9a9a] text-sm font-normal ffont-montserrat leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
  <div className="w-[780px] h-[124px] left-[336px] top-[126px] absolute bg-white rounded-lg border border-[#c2c6cc]">
  <textarea
    className="w-full h-full rounded-lg border-none focus:outline-none p-4 resize-none"
    placeholder="About"
  />
</div>
<div className="w-[59px] h-6 left-[336px] top-[98px] absolute text-[#484848] text-[15px] font-semibold font-montserrat">
  About
</div>

<div className="w-[780px] h-[46px] left-[336px] top-[304px] absolute bg-white rounded-lg border border-[#c2c6cc]">
  <input
    type="text"
    className="w-full h-full rounded-lg border-none focus:outline-none px-4"
    placeholder="Location"
  />
</div>
<div className="w-[89px] h-6 left-[336px] top-[266px] absolute text-[#484848] text-[15px] font-semibold font-montserrat">
  Location
</div>

<div className="w-[780px] h-[46px] left-[336px] top-[402px] absolute bg-white rounded-lg border border-[#c2c6cc]">
  <input
    type="text"
    className="w-full h-full rounded-lg border-none focus:outline-none px-4"
    placeholder="Work"
  />
</div>
<div className="w-[52px] h-6 left-[336px] top-[372px] absolute text-[#484848] text-[15px] font-semibold font-montserrat">
  Work
</div>

<div className="w-[119px] h-14 left-[997px] top-[481px] absolute">
  <button className="w-full h-full bg-[#9a9a9a] rounded-[28px] text-white text-[15px] font-bold font-montserrat">
    Save
  </button>
</div>

<div className="w-24 h-[30px] left-[883px] top-[501px] absolute">
  <button className="w-full h-full flex items-center justify-center text-[#484848] text-[15px] font-bold font-montserrat gap-2">
    <img
      src={wrong}
      alt="Wrong Icon"
    />
    Cancel
  </button>
</div>


<div className="w-[435px] h-[26px] left-[336px] top-[501px] absolute text-[#9a9a9a] text-[15px] font-semibold font-montserrat">
  All the required user information can be added here...
</div>

 </div>
     <div className="mt-[105px]"><Footer/></div> 
    </div>
  )
}
