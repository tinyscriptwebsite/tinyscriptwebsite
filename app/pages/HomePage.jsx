import React from "react";
import Hero from "../components/home/hero/Hero";
import Services from "../components/home/services/Services";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Help from "../components/home/Help/Help";
import OurWork from "../components/home/ourwork/OurWork";
import OurTech from "../components/home/ourtech/OurTech";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="website relative">
        <Header />
        <Hero />
        <div className="w-full md:px-[10%] sm:px-[5%] px-[3%]  bg-[#f5f5f5]  overflow-x-hidden">
          <Services />
          <Help />
          <OurWork />
          <OurTech />
          {/* </div> */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
