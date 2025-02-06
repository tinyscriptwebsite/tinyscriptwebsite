import Image from "next/image";
import Link from "next/link";
import React from "react";
import s1 from "../../../assets/figma images/stack.png";

const Stack = () => {
  return (
    <div className="w-full flex flex-wrap items-center md:justify-between justify-center my-16 gap-8 md:gap-2">
      <div className="w-2.5/5">
        <Image src={s1} alt="stack pic" height={400} width={400}></Image>
      </div>
      <div className="w-full md:w-[50%]  flex flex-col justify-start md:justify-evenly h-full">
        <h4 className="text-[#4D869C]">TECHNOLOGIES</h4>
        <h1 className="text-black font-bold text-xl sm:text-2xl md:text-4xl md:leading-16 my-4 md:my-4">
          Our Tech Stack
        </h1>
        <p className="text-[#4D869C]">
          At Tiny script Soft Tech, we are dedicated to leveraging the latest
          advancements in technology to drive innovation and empower our
          clients. Our team of skilled engineers and developers are at the
          forefront of cutting-edge technologies, constantly pushing the
          boundaries to deliver solutions that exceed expectations.
        </p>
        <button className="text-[#4d869c]  bg-white rounded-md shadow-lg cursor-pointer my-8 font-bold h-12 w-36 whitespace-nowrap">
          <Link href="/technologies">READ MORE</Link>
        </button>
      </div>
    </div>
  );
};

export default Stack;
