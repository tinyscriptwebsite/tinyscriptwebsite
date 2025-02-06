import Image from "next/image";
import React from "react";
import f1 from "../../../assets/figma images/features.png";
import check from "../../../assets/figma images/check.png";

const Features = () => {
  return (
    <div className="w-full mt-16 pt-16 flex flex-wrap items-center md:justify-between justify-center gap-8 md:gap-2">
      <div className="w-full text-white p-4 md:w-[50%] bg-[#467487e2] rounded-md  flex flex-col justify-start md:justify-evenly h-full">
        <h4>FEATURES</h4>
        <h1 className=" text-2xl font-bold md:text-6xl md:leading-16 my-4 md:my-4">
          Refresh, Your Website's Appearance
        </h1>
        <p className="text-sm text-white my-4">
          Elevate your online presence with our strategic website makeover.
        </p>
        <ul>
          <li className="flex items-center gap-2 my-2">
            <Image alt="check" src={check} />
            Range including technical skills
          </li>
          <li className="flex items-center gap-2 my-2">
            <Image alt="check" src={check} />
            Business understandings
          </li>
          <li className="flex items-center gap-2 my-2">
            <Image alt="check" src={check} />
            Partner on the long run
          </li>
        </ul>
      </div>
      <div className="w-2.5/5">
        <Image src={f1} alt="check" height={400} width={400}></Image>
      </div>
    </div>
  );
};

export default Features;
