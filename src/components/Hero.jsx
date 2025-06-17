import React from "react";
import shoe from "../assets/shoe.png";
import stamp from "../assets/stamp.png";

const Hero = () => {
  return (
    <div className="w-full h-[750px] bg-[#72B778] relative z-[-2] overflow-hidden">
      {/* Desktop screen... */}
      <div className="max-md:hidden w-full h-[568px] md:absolute md:top-[69px] md:left-[60px]">
        <h5 className="text-white font-[anton] text-[139px] leading-[160px]">
          RETRO LOW
        </h5>
        <div className="bg-[#E5BE67] w-[487px] font-[anton] text-[140px] text-center">
          <span>VOODOO</span>
        </div>
        <p className=" text-white text-[20px] leading-[36px] w-[487px] font-[inter] py-4">
          The Nike Dunk Low SE Jackpot GS is a low-cut sneaker with hints of
          grey, white, blue, and red.
        </p>
        <div className=" bg-white w-[277px]  text-center font-[anton] text-[60px] p-4 leading-[100%]">
          <span>SHOP NOW!</span>
        </div>
      </div>
      <div className="max-md:hidden w-[647px] h-[684px] absolute top-[36px] left-[793px] bg-[#E5BE67] rounded-full "></div>
      <div className="max-md:hidden w-[214px] h-[214px] absolute top-[530px] left-[1219px] bg-[#E5BE6780] rounded-full rotate-0"></div>
      <div className="max-md:hidden w-[264px] h-[264px] absolute top-[661px] left-[-72px] bg-[#E5BE6780] rounded-full rotate-0"></div>
      <div className="max-md:hidden w-[802.31px] h-[318.05px] absolute top-[200px] left-[526px] rotate-[-14.58deg]">
        <img
          src={shoe}
          alt="shoe"
          width={802.32}
          className="rotate-[14deg] mt-0"
        />
      </div>
      <div className="max-md:hidden w-[177.52px] h-[178.52px] absolute top-[77px] left-[725px]">
        <img src={stamp} alt="stamp" />
      </div>

      {/* Mobile viem */}
      <div className="md:hidden max-w-full text-center">
        <h1 className="text-center text-white font-[anton] text-[80px] pt-8">
          RETRO LOW
        </h1>
        <div className="inline-block bg-[#E5BE67] w-[245px]  font-[anton] text-[70px] mx-auto justify-center">
          <span>VOODOO</span>
        </div>
        <div className="relative w-full h-[389px] mt-[251px]">
          <div className="w-[295px] h-[295px] rounded-full bg-[#E5BE67] absolute top-[64px] left-[calc((100%-259px)/2)]"></div>
          <img
            src={shoe}
            alt="shoe"
            width={383.17}
            height={115.89}
            className="  absolute top-[100px] left-[18px] rotate-[-1deg]"
          />
          <div className="w-[98px] h-[99px] rounded-full bg-[#E5BE6780] absolute top-[20px] left-[189px]"></div>
          <div className="w-[118px] h-[119px] rounded-full bg-[#E5BE6780] absolute top-[223px] left-[347px]"></div>
          <div className="w-[72px] h-[73px] rounded-full bg-[#E5BE6780] absolute top-[316px] left-[8px]"></div>
        </div>
        <img
          src={stamp}
          alt="stamp"
          className="w-[151px] h-[151px] absolute top-[307.79px] left-[18px] rotate-[-17.65deg]"
        />
      </div>
    </div>
  );
};

export default Hero;
