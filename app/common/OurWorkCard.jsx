"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const OurWorkCard = ({ description, icon, title }) => {
  return (
    <div className="w-[395px] h-[293px] max-w-xs mx-auto relative">
      <div className="w-full h-full bg-slate-100 rounded-[1rem] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Image Section */}
        <div className="flex justify-center pt-6">
          <Image src={icon} alt="Service Icon" width={130} height={130} />
        </div>

        {/* Content Section */}
        <div className="p-6 mx-6 flex flex-col justify-center">
          <h1 className="text-lg font-bold text-secondry text-center mb-4">
            {title}
          </h1>
          <p className="text-sm text-black text-center mb-6">{description}</p>
        </div>
      </div>

      {/* Arrow Icon Positioned Correctly */}
      <div className="absolute bottom-4 right-4 w-10 h-10 rounded-[1rem] overflow-hidden">
        <div>
          <Link
            href=""
            className="size-12 rounded-full bg-secondry flex justify-center items-center ml-auto absolute right-0 bottom-0 ring-8 ring-primary"
          >
            <div>
              <FaArrowRight className="text-white text-2xl" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurWorkCard;
