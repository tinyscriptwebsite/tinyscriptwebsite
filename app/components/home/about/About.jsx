import React from "react";
import about from "../../../assets/newfigma/About Us Image.svg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col mt-16 items-center md:flex-row justify-between w-full">
      <div className="w-full md:w-1/2">
        <Image src={about} alt="about pic" width="auto" height="auto"></Image>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start text-left">
        <p className="text-black">
          We believe in building strong relationships with our clients, based on
          trust, transparency, and open communication. We work closely with our
          clients to understand their business needs and goals, and we
          collaborate with them throughout the project to ensure that the final
          solution meets their expectations.
        </p>
        <button className="text-[#4d869c] bg-white rounded-md shadow-lg ml-auto mr-auto md:ml-0  cursor-pointer my-8 font-bold h-12 w-36 whitespace-nowrap">
          <Link href="/about">ABOUT US</Link>
        </button>
      </div>
    </div>
  );
};

export default About;
