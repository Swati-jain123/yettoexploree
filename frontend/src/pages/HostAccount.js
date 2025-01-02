import React from 'react' 
import Profileimg from '../img/carbon_user-avatar-filled.png'; 
import { Link } from 'react-router-dom';
import tick from '../img/akar-icons_check.png';
import star1 from "../img/Vector (3).png";
export default function HostAccount() {
  return (
    <div>
  
      <div className="w-[584px] h-[608px] left-[80px] top-[40px] relative">
  <div className="w-[279px] h-[566px]  absolute bg-[#eff0f2] rounded-lg" > <img src={Profileimg
  } alt="img" style={{marginLeft:"50px",marginTop:"30px"}}></img></div>
  <div className="w-[163px] h-[163px] pl-[10.19px] pr-[10.29px] py-[10.18px] left-[74px] top-[50px] absolute justify-center items-center inline-flex" />
  <div className="w-32 h-[22px] left-[64px] top-[198px] absolute text-[#484848] text-base font-semibold font-montserrat">Upload a Photo</div>
  <div className="w-[149px] h-[22px] left-[339px] top-[261px] absolute text-[#484848] text-[15px] font-semibold 'font-montserrat underline">Reviewed By You</div>
  <div className="w-[201px] h-11 left-[41px] top-[421px] absolute text-[#484848] text-[22px] font-bold font-montserrat ">John Doe - Host</div>
  <div className="w-[158px] h-[54px] left-[339px] top-[101px] absolute">
    <div className="w-[158px] h-[54px] left-0 top-0 absolute bg-white rounded-md border border-[#484848]" />
    <div className="w-[92px] h-[22px] left-[37px] top-[18px] absolute text-[#484848] text-[15px] font-semibold font-montserrat"><Link to="">Edit Profile</Link></div>
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
  <div className="w-[105px] h-[22px] left-[344px] top-[189px] absolute text-[#484848] text-lg font-bold font-milliard "><img src={star1} alt="img"></img></div>
  <div className="w-[105px] h-[22px] left-[374px] top-[186px] absolute text-[#484848] text-lg font-bold font-milliard">0 Reviews</div>
</div>
      
    </div>
  )
}
