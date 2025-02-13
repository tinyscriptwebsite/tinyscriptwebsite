"use client";
import Image from "next/image";
import React from "react";

const Card1 = ({ description, icon, border, staticIcon }) => {
  return (
    <div className="grid">
      <div className="flex justify-center items-center relative -mb-[1.5rem]">
        <div className="animate-spin">
          <Image src={border} alt="Border Icon" width={100} height={100} />
        </div>
        <div className="absolute">
          <Image src={staticIcon} alt="Design Icon" width={45} height={45} />
        </div>
      </div>
      <div className="flex justify-center -mb-[3.5rem] relative z-10">
        <Image src={icon} alt="Service Icon" width={250} height={250} />
      </div>

      <div className="md:w-80 md:h-96 sm:h-72 sm:w-60 mx-auto shadow-[0px_0px_10px_0px_rgba(16,184,219,0.3)] rounded-[1rem] bg-white overflow-hidden hover:shadow-[0px_0px_15px_0px_rgba(16,184,219,0.2)] duration-500 transition-shadow">
        <div className="px-4 py-12  h-full flex flex-col justify-center ">
          <p className="text-black text-center mt-8 mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card1;
