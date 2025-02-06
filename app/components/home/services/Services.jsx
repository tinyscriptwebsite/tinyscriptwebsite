"use client";

import React from "react";
import "./Services.css";
import Card from "../../../common/Card";
import webdevIcon from "../../../assets/newfigma/services/Web Development icon.svg";
import uiuxIcon from "../../../assets/newfigma/services/UI-UX designer icon.svg";
import ecommerceIcon from "../../../assets/newfigma/services/E-Commerce Development.svg";
import mobiledevIcon from "../../../assets/newfigma/services/Mobile app Development.svg";
import BarIcon from "../../../assets/newfigma/Bar.svg";
import stepImage from "../../../assets/newfigma/Steps.svg";
import Image from "next/image";

const Services = () => {
  const card = [
    {
      title: "Web Development",
      description:
        "At Tiny Script Soft Tech, we craft digital symphonies, blending design finesse with developmental prowess to...",
      icon: webdevIcon,
      link: "/services/webdevelopment",
    },
    {
      title: "UI-UX Desiner",
      description:
        "At Tiny Script Soft Tech, we craft digital symphonies, blending design finesse with developmental prowess to...",
      icon: uiuxIcon,
      link: "/services/ui-ux",
    },
    {
      title: "E-Commerce Development",
      description:
        "At Tiny Script Soft Tech, we craft digital symphonies, blending design finesse with developmental prowess to...",
      icon: ecommerceIcon,
      link: "/services/ecommerce",
    },
    {
      title: "Mobile App Development",
      description:
        "At Tiny Script Soft Tech, we craft digital symphonies, blending design finesse with developmental prowess to...",
      icon: mobiledevIcon,
      link: "/services/appdevelopment",
    },
  ];

  return (
    <div className="w-full m-auto mt-12">
      <div className="w-full flex flex-wrap items-center md:justify-between justify-center mb-4">
        <div className="w-full flex flex-col justify-start md:justify-evenly h-full">
          <h1 className="text-black text-xl sm:text-2xl md:text-4xl font-bold md:leading-20 my-4 md:my-2">
            Our Services
            <Image src={BarIcon} alt="Bar Logo" width={50} height={3} />
          </h1>
          <p className="text-[black] text-md sm:text-lg md:text-xl">
            "Crafting innovative web and software solutions that drive your
            digital success."
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 mx-auto mt-8">
          {card.map((card, index) => (
            <div key={index}>
              <Card
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
