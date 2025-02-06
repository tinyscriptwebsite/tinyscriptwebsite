import Link from "next/link";
import React, { useState } from "react";
import { Fade, Flip, Slide, Zoom } from "react-awesome-reveal";
import {
  FaServer,
  FaDesktop,
  FaDatabase,
  FaWordpress,
  FaCloud,
  FaFlask,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaReact,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaGithub,
  FaGit,
  FaJenkins,
  FaDigitalOcean,
  FaShopify,
  FaWix,
  FaJoomla,
  FaDrupal,
  FaRedditSquare,
  FaAws,
  FaGoogleDrive,
  FaMicrosoft,
  FaDotCircle,
  FaHashtag,
  FaMemory,
  FaFileAlt,
  FaCube,
} from "react-icons/fa";
import { TbLetterC } from "react-icons/tb";

const Tech = () => {
  const [activeTab, setActiveTab] = useState("Backend");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderIcons = () => {
    switch (activeTab) {
      case "Backend":
        return (
          <>
            <Fade direction="left" cascade duration={1000} damping={0.2}>
              <div className="flex gap-4 justify-between items-center">
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaServer className="icon text-4xl md:text-6xl  text-[#2FE6FF]" />
                  <span>Server</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaNodeJs className="icon text-4xl md:text-6xl  text-[#2FE6FF]" />
                  <span>Node.js</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaPython className="icon text-4xl md:text-6xl  text-[#2FE6FF]" />
                  <span>Python</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaDocker className="icon text-4xl md:text-6xl  text-[#2FE6FF]" />
                  <span>Docker</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaNodeJs className="icon text-4xl md:text-6xl  text-[#2FE6FF]" />
                  <span>Node.js</span>
                </div>
              </div>
            </Fade>
          </>
        );
      case "Frontend":
        return (
          <>
            <Flip cascade duration={1100} damping={0.2}>
              <div className="flex gap-4 justify-between items-center">
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaDesktop className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>Desktop</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaReact className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>React</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaHtml5 className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>HTML5</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaCss3 className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>CSS3</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaJsSquare className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>JavaScript</span>
                </div>
              </div>
            </Flip>
          </>
        );
      case "CMS":
        return (
          <>
            <Zoom direction="right" cascade duration={1200} damping={0.2}>
              <div className="flex gap-4 justify-between items-center">
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaWordpress className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>WordPress</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaDrupal className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>Drupal</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaJoomla className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>Joomla</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaWix className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>Wix</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaShopify className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>Shopify</span>
                </div>
              </div>
            </Zoom>
          </>
        );
      case "Databases":
        return (
          <>
            <Zoom direction="left" cascade duration={1300} damping={0.2}>
              <div className="flex gap-4 justify-between items-center">
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaCube className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>MongoDB</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaMemory className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>SQL</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaServer className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>MySQL</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaFileAlt className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>PostgreSQL</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaDatabase className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>SQLite</span>
                </div>
              </div>
            </Zoom>
          </>
        );
      case "Cloud":
        return (
          <>
            <Slide direction="bottom" cascade duration={1400} damping={0.2}>
              <div className="flex gap-4 justify-between items-center">
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaCloud className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>Cloud</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaDigitalOcean className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>DigitalOcean</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaAws className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>AWS</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaGoogleDrive className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>Google Cloud</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaMicrosoft className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>Microsoft Azure</span>
                </div>
              </div>
            </Slide>
          </>
        );
      case "DevOps":
        return (
          <>
            <Fade direction="right" cascade duration={1500} damping={0.2}>
              <div className="flex gap-4 justify-between items-center">
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaFlask className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>Flask</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaJenkins className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>Jenkins</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaGit className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>Git</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaGithub className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>GitHub</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaDocker className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>Docker</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <div>
                    <TbLetterC className="icon text-4xl md:text-6xl p-0 m-0 text-[#2FE6FF] inline" />
                    <FaHashtag className="icon text-4xl md:text-6xl p-0 m-0 text-[#2FE6FF] inline" />
                  </div>
                  <span>C#</span>
                </div>
                <div className="icon-container flex flex-col justify-center items-center">
                  <FaDotCircle className="icon text-4xl md:text-6xl text-[#2FE6FF]" />
                  <span>.NET</span>
                </div>
              </div>
            </Fade>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="text-center my-4 sm:my-[2rem]">
      <h1 className=" text:2xl sm:text-4xl  my-8">
        Our <span className="animate-charcter text:2xl sm:text-4xl">Tech</span>{" "}
        Stack
      </h1>
      <nav className="flex justify-center flex-wrap gap-2 sm:gap-6 mb-8">
        <button
          className={`px-2 sm:px-4 py-1 sm:py-2  sm:mr-4 rounded-md focus:outline-none hover:bg-[#2FE6FF] ${
            activeTab === "Backend"
              ? "bg-[#2FE6FF] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onMouseEnter={() => handleTabChange("Backend")}
        >
          Backend
        </button>
        <button
          className={`px-2 sm:px-4 py-1 sm:py-2 sm:mr-4 rounded-md focus:outline-none hover:bg-[#2FE6FF] ${
            activeTab === "Frontend"
              ? "bg-[#2FE6FF] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onMouseEnter={() => handleTabChange("Frontend")}
        >
          Frontend
        </button>
        <button
          className={`px-2 sm:px-4 py-1 sm:py-2 sm:mr-4 rounded-md focus:outline-none hover:bg-[#2FE6FF] ${
            activeTab === "CMS"
              ? "bg-[#2FE6FF] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onMouseEnter={() => handleTabChange("CMS")}
        >
          CMS
        </button>
        <button
          className={`px-2 sm:px-4 py-1 sm:py-2  sm:mr-4 rounded-md focus:outline-none hover:bg-[#2FE6FF] ${
            activeTab === "DevOps"
              ? "bg-[#2FE6FF] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onMouseEnter={() => handleTabChange("DevOps")}
        >
          DevOps
        </button>
        <button
          className={`px-2 sm:px-4 py-1 sm:py-2  sm:mr-4 rounded-md focus:outline-none hover:bg-[#2FE6FF] ${
            activeTab === "Databases"
              ? "bg-[#2FE6FF] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onMouseEnter={() => handleTabChange("Databases")}
        >
          Databases
        </button>
        <button
          className={`px-2 sm:px-4 py-1 sm:py-2 sm:mr-4 rounded-md focus:outline-none hover:bg-[#2FE6FF] ${
            activeTab === "Cloud"
              ? "bg-[#2FE6FF] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onMouseEnter={() => handleTabChange("Cloud")}
        >
          Cloud
        </button>
      </nav>
      <div className="flex justify-start sm:justify-center items-center flex-wrap w-full">
        {renderIcons()}
      </div>
      {/* <div className="bg-slate-700 my-4 sm:my-12 p-4 sm:p-6 rounded-full w-full flex sm:flex-row flex-col items-center justify-between">
        <div className="text-lg sm:text-2xl">
          Have a Vision for Your Project? Let's Make it Happen!
        </div>
        <button className="px-3 py-1 sm:px-4 sm:py-2 mr-4 rounded-md focus:outline-none bg-white text-black hover:bg-[#2FE6FF]">
          <Link href="/contact"> Contact Us</Link>
        </button>
      </div> */}
    </div>
  );
};

export default Tech;
