"use client";
import Image from "next/image";
import React from "react";
import Card1 from "../../../common/Card1";
import TirleBoxDesignIcon from "../../../assets/newfigma/Title Box.svg";
import TrialBoxDevIcon from "../../../assets/newfigma/Title Box dev.svg";
import TitleBoxQA from "../../../assets/newfigma/Title Box QA.svg";
import border from "../../../assets/newfigma/Border.svg";
import designIcon from "../../../assets/newfigma/Design.svg";
import developmentIcon from "../../../assets/newfigma/Development.svg";
import qaIcon from "../../../assets/newfigma/QA.svg";
import BarIcon from "../../../assets/newfigma/Bar.svg";
import AboutusMettingImage from "../../../assets/newfigma/About Us Image.svg";
import Link from "next/link";

const Help = () => {
  const cards = [
    {
      desc: "Tiny Script Soft Tech offers comprehensive services encompassing web design and UI/UX design, catering to all your digital needs with expertise and innovation.",
      staticIcon: designIcon,
      icon: TirleBoxDesignIcon,
    },
    {
      desc: "From front-end design to back-end functionality, our development services encompass a comprehensive range of technologies and frameworks to meet your project's diverse needs.",
      staticIcon: developmentIcon,
      icon: TrialBoxDevIcon,
    },
    {
      desc: "Tiny Script Soft Tech delivers expert QA support to ensure flawless functionality, seamless user experiences, and optimal performance, enhancing reliability and client satisfaction.",
      staticIcon: qaIcon,
      icon: TitleBoxQA,
    },
  ];
  return (
    <div className="flex flex-col w-full gap-8 px-4 md:px-8 md:mt-20 mt-12">
      <div>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold">
          How We Can Help
        </h2>
        <Image src={BarIcon} alt="bar" />
        <p className="mt-2">
          "Empowering your growth with tailored web and software development
          solutions."
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12 justify-center">
        {cards.map((card, index) => (
          <Card1
            key={index}
            description={card.desc}
            icon={card.icon}
            border={border}
            staticIcon={card.staticIcon}
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center mt-10 gap-24">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-4xl text-center font-semibold text-secondry">
            We are the decisive factor behind your success
          </h2>
          <p className="text-lg md:mt-4 mt-2 md:text-center text-justify">
            We believe in building strong relationships with our clients, based
            on trust, transparency, and open communication. We work closely with
            our clients to understand their business needs and goals, and we
            collaborate with them throughout the project to ensure that the
            final solution meets their expectations.
          </p>
          <div className="flex justify-center mt-4">
            <button className="bg-[#FFFFFF] hover:bg-[#3DB8DB] transition-colors duration-500 hover:text-white text-secondry font-bold py-2 px-6 rounded-[2rem] border-2 border-[#3DB8DB] hover:border-[#3DB8DB]">
              <Link href="/about">About Us</Link>
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src={AboutusMettingImage}
            height={542}
            width={542}
            alt="About Us Meeting"
          />
        </div>
      </div>
    </div>
  );
};

export default Help;
