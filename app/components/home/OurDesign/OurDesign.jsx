"use client";

import Image from "next/image";
import img from "../../../assets/home/Rectangle 8.png";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import EmblaCarousel from "./EmblaCarousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const OurDesign = ({ promises, description, h, width }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 8;
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <div className="mt-[6vh] px-[5%]" id="portfolio">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-[90%]">
            <h1
              id="heading-large"
              className="text-black text-xl sm:text-2xl md:text-4xl font-bold w-full text-center"
            >
              Our Approach
            </h1>
            <p className=" mt-6 text-black text-center">{description}</p>
          </div>
        </div>
        <EmblaCarousel
          width={width}
          h={h}
          slides={promises}
          options={OPTIONS}
        />

        {/* <div className="promise_cards flex flex-row flex-wrap justify-evenly items-center w-full mb-4 gap-6 mt-[8vh]">
          <>
            {promises.map((promise, index) => (
              <div
                key={index}
                className={`case-study-card border w-[100%] sm:w-[360px] min-h-[${h}px] animate_container sm:mx-[1%] rounded-md mb-6 shadow-lg hover:transform hover:scale-105 transition-all duration-300 relative`}
              >
                <div className="font-bold  text-white flex flex-col items-center">
                  <Image
                    src={promise.image}
                    alt=""
                    sizes=""
                    width={240}
                    style={{ width: width }}
                    height={120}
                    className="m-auto text-white block pt-[5px]"
                  />
                  <span className="block p-4">{promise.title}</span>
                  <p className="text-white p-4 font-normal text-justify">
                    {promise.description}
                  </p>
                </div>
              </div>
            ))}
          </>
        </div> */}
      </div>
    </>
  );
};

export default OurDesign;
