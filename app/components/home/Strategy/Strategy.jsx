import React from "react";
import icon1 from "../../../assets/figma images/icon.png";
import icon2 from "../../../assets/figma images/icon3.png";
import icon3 from "../../../assets/figma images/icon5.png";
import icon4 from "../../../assets/figma images/icon7.png";
import icon5 from "../../../assets/figma images/icon8.png";
import icon6 from "../../../assets/figma images/icon10.png";
import icon7 from "../../../assets/figma images/icon12.png";
import Image from "next/image";

const Strategy = () => {
  return (
    <div className="flex flex-wrap items-center justify-evenly md:justify-between mt-16">
      <div className="flex flex-col md:w-2/6 items-center justify-between py-4 shadow-lg gap-12 text-black">
        <div className=" flex justify-start w-72 items-center mx-6 hover:text-[#4D869C]">
          <Image
            src={icon1}
            alt="strategy pic"
            width="auto"
            height="auto"
          ></Image>
          <span className="mx-4">BUSINESS STRATEGY</span>
        </div>
        <div className=" flex justify-start w-72 items-center hover:text-[#4D869C]">
          <Image
            src={icon2}
            alt="strategy pic"
            width="auto"
            height="auto"
          ></Image>
          <span className="mx-4">RESEARCH</span>
        </div>
        <div className=" flex justify-start w-72 items-center hover:text-[#4D869C]">
          <Image
            src={icon3}
            alt="strategy pic"
            width="auto"
            height="auto"
          ></Image>
          <span className="mx-4">DATA ANALYSIS</span>
        </div>
        <div className=" flex justify-start w-72 items-center hover:text-[#4D869C]">
          <Image
            src={icon4}
            alt="strategy pic"
            width="auto"
            height="auto"
          ></Image>
          <span className="mx-4">UI DESIGN</span>
        </div>
        <div className=" flex justify-start w-72 items-center hover:text-[#4D869C]">
          <Image
            src={icon5}
            alt="strategy pic"
            width="auto"
            height="auto"
          ></Image>
          <span className="mx-4">UX DESIGN</span>
        </div>
        <div className=" flex justify-start w-72 items-center hover:text-[#4D869C]">
          <Image
            src={icon6}
            alt="strategy pic"
            width="auto"
            height="auto"
          ></Image>
          <span className="mx-4">TECHNOLOGY</span>
        </div>
        <div className=" flex justify-start w-72 items-center hover:text-[#4D869C]">
          <Image
            src={icon7}
            alt="strategy pic"
            width="auto"
            height="auto"
          ></Image>
          <span className="mx-4">CREATIVITY</span>
        </div>
      </div>
      <div className="flex flex-col items-start w-full md:w-4/6 md:pl-12 h-full ">
        <h3 className="text-black md:my-4 mt-6 md:md-0">
          OUR BUSINESS STRATEGY
        </h3>
        <h1 className="text-black font-bold text-xl sm:text-2xl md:text-4xl my-4 md:mt-4 mt-0 hover:text-[#4d869c]">
          Elevate Your Business With Precision-Powered IT Solutions.
        </h1>
        <p className="text-[#4d869c]">
          Welcome to Tiny Script Soft Tech, where we specialize in crafting
          precision-powered IT solutions tailored to elevate your business. With
          our expertise, your company can reach new heights, streamline
          operations, and stay ahead in today's competitive landscape. Let's
          embark on a journey towards success together.
        </p>
      </div>
    </div>
  );
};

export default Strategy;
