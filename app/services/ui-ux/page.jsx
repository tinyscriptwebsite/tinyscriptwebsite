"use client";

import Header from "@/app/components/layout/Header";
import Pages from "../../components/pages";
import Footer from "@/app/components/layout/Footer";
import Image from "next/image";
import webDev from "../../assets/newfigma/services/ui-ux/UI-UX.svg";
import bar from "../../assets/newfigma/Bar.svg";
import { uiCards, uiMobileCards } from "../../constants/constants";
import WebServiceCard from "../../common/WebServiceCard";
import { useEffect, useState } from "react";

const page = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth < 768 && setIsMobile(true);
  }, []);

  return (
    <Pages>
      <div className="text-white">
        <Header />
      </div>
      <div className="md:px-[10%] sm:px-[5%] px-[3%] md:pt-40 pt-32">
        {/* Hero Section */}
        <section className="flex justify-between items-center md:flex-row flex-col-reverse">
          <div>
            <Image src={webDev} alt="Web Development" />
          </div>
          <div className="text-center md:w-[45%] w-full">
            <h1 className="text-2xl md:text-4xl font-semibold text-secondry">
              UI-UX Designer
            </h1>
            <p className="text-lg md:mt-4 mt-2 md:text-center text-justify">
              Designing intuitive and visually stunning user interfaces to
              enhance user experiences, optimize website performance, and
              elevate your brand's digital presence.
            </p>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="md:py-16 py-12">
          <div className="container mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold">
              Why Choose Us
            </h2>
            <Image src={bar} alt="bar" />
            <p className="mt-2">
              "We are experts in User Experience (UX) design and development."
            </p>
            <div className=" mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {!isMobile ? (
                <WebServiceCard services={uiCards} />
              ) : (
                <WebServiceCard services={uiMobileCards} isMobile={true} />
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Pages>
  );
};

export default page;
