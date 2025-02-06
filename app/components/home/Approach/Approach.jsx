import Image from "next/image";
import React from "react";
import s1 from "../../../assets/figma images/settingshape.png";
import s2 from "../../../assets/figma images/penshape.png";
import s3 from "../../../assets/figma images/recycleshape.png";

const Approach = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-8 ">
      <div className="w-full  mt-16 text-2xl md:text-6xl font-bold text-center">
        <h1 className="text-black">Our Design And Development Approach</h1>
        <p className="text-black text-center text-sm my-2 px-[8%]">
          Explore our promises to deliver excellence in every aspect of our
          services. From UX-driven engineering to safeguarding your assets, we
          are dedicated to ensuring your success with industry-leading solutions
        </p>
      </div>
      <div className="flex w-full flex-wrap gap-8 items-center justify-evenly">
        <div className=" h-[340px] gap-4 min-w-[260px] max-w-[360px] justify-evenly p-4 flex flex-col">
          <div className="bg-[#4d869c]  p-4 rounded-full w-fit">
            <Image alt="shape" src={s2} height={20} width={20}></Image>
          </div>
          <h3 className="text-black font-bold text-xl">
            UX Driven Engineering
          </h3>
          <p>
            Experiene the power of UX-Driven Engineering. Dive into our
            innovative approach, where user-centric design meets cutting-edge
            solutions, drive success, and redefine norms. Experience the future
            of digital interaction with transformative methodologies.
          </p>
        </div>
        <div className=" p-4 flex gap-4 min-w-[260px] max-w-[360px] flex-col h-[340px] justify-between">
          <div className="bg-[#4d869c] p-4 rounded-full w-fit">
            <Image alt="shape" src={s1} height={20} width={20}></Image>
          </div>
          <h3 className="text-black font-bold text-xl">
            Developing Shared Understanding
          </h3>
          <p className="">
            Empowering Team Synergy: Achieving Success Through Shared
            Understanding" At TinyScript, we prioritize fostering shared
            understanding for effective collaboration and innovative
            problem-solving, driving collective success through cohesive
            teamwork.
          </p>
        </div>
        <div className=" gap-4 min-w-[260px] h-[340px] max-w-[360px] p-4 flex flex-col justify-between ">
          <div className="bg-[#4d869c] p-4 text-white rounded-full w-fit">
            <Image alt="shape" src={s3} height={20} width={20}></Image>
          </div>
          <h3 className="text-black font-bold text-xl">
            Proven Expertise: Industry-Leading Solutions
          </h3>
          <p>
            Benefit from our team's extensive experience and expertise at
            TinyScript. With a proven track record of success, we deliver
            tailored solutions to address your unique challenges and drive
            tangible results. .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Approach;
