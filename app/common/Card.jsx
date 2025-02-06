"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Card = ({ title, description, icon, link }) => {
  return (
    <div className="group relative w-full hover:shadow-[0px_0px_15px_0px_rgba(16,184,219,0.2)] duration-300 max-w-xs mx-auto bg-white rounded-2xl rounded-br-[1.25rem] overflow-hidden h-full flex flex-col">
      <div className="w-24 grid place-items-center h-24 mb-4 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:ring-primary group-hover:ring-8 transition-transform duration-300 ease-out relative rounded-lg">
        <Image
          className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300 ease-out"
          src={icon}
          alt="Home Icon"
          width={50}
          height={50}
        />
      </div>
      <div className="px-6 pb-12 -mt-2 group-hover:translate-y-2 transition-transform duration-300 ease-out">
        <h1 className="text-lg font-bold text-secondry ">{title}</h1>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
      <div>
        <Link
          href={link}
          className="size-10 rounded-full bg-secondry flex justify-center items-center ml-auto absolute right-0 bottom-0 ring-8 ring-primary"
        >
          <div>
            <FaArrowRight className="text-white text-xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
