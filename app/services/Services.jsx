import React from "react";
import Header from "../components/layout/Header";
import servicesofferImage from "../assets/newfigma/SERVICESOFFER.svg";
import Image from "next/image";
import Card from "../common/Card";
import webdevIcon from "../assets/newfigma/services/Web Development icon.svg";
import uiuxIcon from "../assets/newfigma/services/UI-UX designer icon.svg";
import ecommerceIcon from "../assets/newfigma/services/E-Commerce Development.svg";
import mobiledevIcon from "../assets/newfigma/services/Mobile app Development.svg";
import BarIcon from "../assets/newfigma/Bar.svg";
import stepImage from "../assets/newfigma/Steps.svg";

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
    <>
      <div className="w-full m-auto mt-[6vh]">
        <Header />
        <div className="md:px-[10%] sm:px-[5%] px-[3%] md:pt-16 pt-32">
          <section className="flex justify-between items-center md:flex-row flex-col-reverse md:gap-0 gap-8">
            <div>
              <Image
                src={servicesofferImage}
                alt="Web Development"
                className="w-4/5 mx-auto my-2"
              />
            </div>
            <div className="text-center md:w-[45%] w-full">
              <h1 className="text-2xl md:text-4xl font-semibold">
                Services We Offer
              </h1>
              <h2 className="md:text-2xl md:text-center md:ml-[6.5rem] text-xl w-4/5 mx-auto md:w-[65%] justify-center md:mt-6 mt-4 font-medium text-secondry">
                Empowering Your Tech Dreams, One Byte At A Time!
              </h2>
              <p className="text-lg md:mt-4 mt-2 md:text-center text-justify">
                Craft a website that seamlessly blends user-friendly design,
                captivating aesthetics, and flawless functionality, making web
                development an indispensable asset for modern businesses in the
                era of advancing technology.
              </p>
            </div>
          </section>
          <div className="w-full m-auto mt-12">
            <div className="w-full flex flex-wrap items-center md:justify-between justify-center mb-4">
              <div className="w-full flex flex-col justify-start md:justify-evenly h-full">
                <h1 className="text-secondry text-xl sm:text-2xl md:text-4xl font-bold md:leading-20 my-4 md:my-2">
                  Our Services
                  <Image src={BarIcon} alt="Bar Logo" width={50} height={3} />
                </h1>
                <p className="text-[black] text-md sm:text-lg md:text-xl">
                  "Crafting innovative web and software solutions that drive
                  your digital success."
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

              <div className="w-full flex flex-col justify-start md:justify-evenly h-full mt-12 md:mt-16">
                <h1 className="text-secondry text-xl mt-10 sm:text-2xl md:text-4xl font-bold md:leading-20 my-4 md:my-2">
                  How We Work
                  <Image src={BarIcon} alt="Bar Logo" width={50} height={3} />
                </h1>
                <p className="text-[black] text-md sm:text-lg md:text-xl mb-6">
                  "Transforming Your Projects into Digital Masterpieces"
                </p>
                <div className="flex justify-center">
                  <Image
                    src={stepImage}
                    alt="Steps Image"
                    width={1100}
                    height={600}
                    className="rounded-lg object-contain mt-5 mb-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
