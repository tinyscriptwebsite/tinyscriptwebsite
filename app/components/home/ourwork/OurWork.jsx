"use client";
import React from "react";
import CpLogo from "../../../assets/newfigma/portfolio/CondominiumLogo.png";
import AttendancePortalLogo from "../../../assets/newfigma/portfolio/AttendancePortalLogo.png";
import ShivohamPhotographyLogo from "../../../assets/newfigma/portfolio/shivohamphotography.png";
import Image from "next/image";
import BarIcon from "../../../assets/newfigma/Bar.svg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const OurWork = () => {
  const cards = [
    {
      image: CpLogo,
      title: "Condominium portal",
      desc: "platform empowers corporations to post their contracts, allowing contractors to submit detailed proposals. Through our streamlined process, contracts are ...",
      link: "https://condominiumportal.com/",
      isLink: true,
    },
    {
      image: AttendancePortalLogo,
      title: "Attendance Portal",
      desc: "An Attendance Portal is a centralized platform designed to efficiently track, manage, and report attendance for organizations, educational institutions, or ",
      isLink: false,
    },
    {
      image: ShivohamPhotographyLogo,
      title: "Shivoham Photography",
      desc: "Shivoham Photography is a professional photography service dedicated to preserving life’s most cherished moments with artistic finesse.",
      link: "https://shivohamphotography.com/",
      isLink: true,
    },
  ];
  return (
    <div className="flex flex-col justify-between">
      <div>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold">
          Our Work
        </h2>
        <Image src={BarIcon} alt="bar" />
        <p className="mt-2">
          "Delivering innovative solutions and impactful results tailored to
          your needs."
        </p>
      </div>
      <div className="flex flex-col flex-wrap md:flex-row gap-6 justify-around">
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${
                !card.isLink ? "pb-8" : ""
              } relative bg-white p-8 pb-0 rounded-2xl flex flex-col hover:shadow-[0px_0px_30px_0px_rgba(16,184,219,0.2)] duration-500 items-center gap-8 md:min-h-[27rem] max-w-[410px] mx-auto`}
            >
              <div className={``}>
                <Image
                  src={card.image}
                  className="h-[4rem] w-full mx-auto"
                  alt={`Card ${index + 1}`}
                />
              </div>
              <div
                className={`flex flex-col items-start justify-start md:items-start text-center md:text-start gap-4`}
              >
                <h4 className="text-xl md:text-2xl text-secondry">
                  {card.title}
                </h4>
                <p>{card.desc}</p>
              </div>
              {card.isLink && (
                <div>
                  <Link
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-12 rounded-full bg-secondry flex justify-center items-center ml-auto absolute right-0 bottom-0 ring-8 ring-primary"
                  >
                    <div>
                      <FaArrowRight className="text-white text-2xl" />
                    </div>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-10">
        <button className="bg-white hover:bg-secondry hover:text-white transition-all duration-300 text-secondry font-bold py-2 px-4 rounded-[2rem] border-2 border-secondry hover:border-secondry">
          <Link href="/portfolio">Explore More</Link>
        </button>
      </div>
    </div>
  );
};

export default OurWork;
