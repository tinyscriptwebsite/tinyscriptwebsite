"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/app/assets/newfigma/Landing Page Image.svg";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen grid place-items-center bg-black text-white md:px-[7%] sm:px-[5%] px-[3%] md:pb-0 pb-8 md:pt-0 pt-24 rounded-b-3xl">
      <section className="flex justify-between gap-16 items-center md:flex-row flex-col mt-8 ">
        <div
          className={`text-center flex flex-col gap-6 overflow-hidden ${
            loaded ? "loaded" : ""
          }`}
        >
          <h1
            className={`text-3xl sm:text-3xl md:text-5xl/[4rem] font-semibold text-center transform transition-all duration-700 ease-in-out ${
              loaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
          >
            Transforming Your <span className="text-secondry">Vision </span>
            <br />
            Into Reality,<span className="text-secondry">Hand In</span> <br />
            <span className="text-secondry">Hand</span>
          </h1>
          <p
            className={`text-lg text-center transform transition-all duration-500 ease-in-out ${
              loaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            Pledged To Offer Inventive And Top-notch Technology <br /> Services
            Crafted To Suit Businesses <br /> Of All Dimensions.
          </p>
          <Link
            href="/contact"
            className={`md:flex items-center text-white mx-auto w-fit transform  ease-in-out ${
              loaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[50%]"
            }`}
          >
            <span className="border border-secondry py-2 px-4 bg-[#FFFFFF] transition-all duration-300 text-[#3DB8DB] hover:bg-[#3DB8DB] hover:text-white rounded-[2rem]">
              Contact Us
            </span>
          </Link>
        </div>
        <div>
          <Image
            src={heroImage}
            className="w-[85%] md:ml-auto mx-auto"
            alt="Web Development"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
