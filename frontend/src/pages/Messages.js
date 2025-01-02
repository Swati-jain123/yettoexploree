
import React from "react";
import send from "../img/Vector (4).png"; // Assuming you have a send image for the button

export default function Messages() {
  return (
   
    <div className="flex flex-col lg:flex-row mx-4 lg:mx-[125px]">
      {/* Right Section for Message Body (appears first on small screens, second on large screens) */}
      <div className="w-auto md:h-[300px] lg:w-[650px] xl:w-[869px] bg-[#eff0f2] rounded-tr-xl rounded-bl-xl rounded-br-xl lg:h-[518px] mt-8 lg:mt-0 order-1 lg:order-2">
        <div className="text-[#e0e2e6] text-6xl flex justify-center font-extrabold font-montserrat p-8">
          Message Body
        </div>

        {/* Divider Line */}
        <div className="border-t border-[#e8eaec] mx-8"></div>

        {/* Input Box for Message */}
        <div className="relative w-auto mx-2 m-4 z-60">
  {/* Input Box for Message */}
  <input
    type="text"
    className="w-full lg:w-[600px] xl:w-[825px] md:mt-[45px] h-[54px] bg-white lg:mt-[250px] rounded-[26px] border border-[#e8eaec] px-4 text-[black] text-sm font-medium font-montserrat placeholder:text-[#9a9a9a]"
    placeholder="Type your message..."
  />

  {/* Send Button inside Input */}
  <div className="absolute right-4 lg:mr-[30px] md:mt-[20px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#9a9a9a] lg:mt-[125px] rounded-full flex justify-center items-center">
    <img src={send} alt="Send" />
  </div>
</div>

      </div>

      {/* Left Section for Messages List (appears second on small screens, first on large screens) */}
      <div className="lg:w-[333px] w-full lg:h-[608px] flex flex-col space-y-6 mt-8 order-2 lg:order-1">
        {/* Header: "All Messages" */}
        <div className="w-[222px] h-10 text-[#484848] text-2xl font-bold font-montserrat mb-4">
          All Messages
        </div>

        {/* Message Items */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center space-x-4">
            <div className="w-[70px] h-[70px] bg-[#c2c6cc] rounded-full overflow-hidden">
              <img
                src="https://images-platform.99static.com//ZfyttmkP5Wt1D56urMqAxapoZ7A=/217x0:1018x801/fit-in/500x500/99designs-contests-attachments/85/85248/attachment_85248569"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#484848] text-base font-bold">John Doberman</span>
              <span className="text-[#9a9a9a] text-sm">On: 12 Mar 2021</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
