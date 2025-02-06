"use client";

import Link from "next/link";
import React, { useState } from "react";
import p1 from "../../../assets/figma images/p1.png";
import p2 from "../../../assets/figma images/p2.png";
import p3 from "../../../assets/figma images/p3.png";
import p4 from "../../../assets/figma images/p4.png";
import p5 from "../../../assets/figma images/p5.png";
import p6 from "../../../assets/figma images/p6.png";
import Image from "next/image";

const Work = ({ link }) => {
  const [isShow, setIsShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsShow(true);
  };

  const handleCloseModal = () => {
    setIsShow(false);
    setCurrentImage(null);
  };
  return (
    <div className="bg-[#28293E] relative p-[5%] py-[5%] pb-0">
      <h4 className="text-[#4D869C] text-center">PORTFOLIO</h4>
      <h1 className="text-white text-center font-bold text-xl sm:text-2xl md:text-4xl md:leading-16 my-4 md:my-4">
        Latest Work
      </h1>
      <div className="relative h-[60vh] sm:h-[90vh] md:h-[120vh] lg:h-[180vh] ">
        <Link target="_blank" href="https://condominiumportal.com/">
          <Image
            src={p1}
            className="absolute h-[20%] z-0 top-[0%] w-[40%] left-[7%]"
            alt="project image"
            width="auto"
            height="auto"
          ></Image>
        </Link>
        <div>
          <Image
            src={p2}
            className="absolute h-[33%] top-[22%] z-[1] left-[0%] w-[55%]"
            alt="project image"
            width="auto"
            height="auto"
          ></Image>
        </div>
        {/* <div onClick={() => setIsShow(!isShow)}>
          <Image
            src={p2}
            className="absolute h-[33%] top-[22%] z-[1] left-[0%] w-[55%]"
                        alt="project image"

            width="auto"
            height="auto"
          ></Image>
        </div> */}
        <Link target="_blank" href="https://wellwalla.com/">
          <Image
            src={p3}
            className="absolute h-[30%] top-[7%] z-0 left-[48%] w-[50%]"
            alt="project image"
            width="auto"
            height="auto"
          ></Image>
        </Link>
        <div>
          <Image
            src={p4}
            className="absolute h-[20%] top-[38%] z-[3] left-[57%] w-[38%]"
            alt="project image"
            width="auto"
            height="auto"
          ></Image>
        </div>
        <Link target="_blank" href="https://www.shivohamphotography.com/">
          <Image
            src={p5}
            className="absolute h-[30%] top-[53%] z-[4] left-[12%] w-[50%]"
            alt="project image"
            width="auto"
            height="auto"
          ></Image>
        </Link>
        <Link
          target="_blank"
          href="https://travel-website-rho-livid.vercel.app/"
        >
          <Image
            src={p6}
            className="absolute h-[18%] top-[63%] z-[4] left-[64%] w-[35%]"
            alt="project image"
            width="auto"
            height="auto"
          ></Image>
        </Link>
        {link && (
          <button className="w-full m-auto absolute bottom-[5%]">
            <Link
              href="/portfolio"
              className=" whitespace-nowrap border-2 p-3 transition-all duration-300 font-bold border-white text-white hover:bg-[#4D869C] hover:border-none"
            >
              EXPLORE MORE
            </Link>
          </button>
        )}
      </div>
      {/* {isShow && currentImage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <Image
              src={currentImage}
              alt="Selected Work"
              className="max-w-[90vw] max-h-[90vh] rounded-lg"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white bg-gray-700 p-2 rounded-full hover:bg-gray-500"
            >
              ✕
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Work;
