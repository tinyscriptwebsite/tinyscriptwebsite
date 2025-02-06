"use client";
import React, { useState } from "react";
import BarIcon from "../../../assets/newfigma/Bar.svg";
import Image from "next/image";
import F1 from "../../../assets/newfigma/fronendicons/React.svg";
import F2 from "../../../assets/newfigma/fronendicons/angular.svg";
import F3 from "../../../assets/newfigma/fronendicons/CSS.svg";
import F4 from "../../../assets/newfigma/fronendicons/HTML.svg";
import F5 from "../../../assets/newfigma/fronendicons/Vue JS.svg";
import F6 from "../../../assets/newfigma/fronendicons/Next Js.svg";
import B1 from "../../../assets/newfigma/backendicons/Node.svg";
import B2 from "../../../assets/newfigma/backendicons/JS.svg";
import B3 from "../../../assets/newfigma/backendicons/java.svg";
import B4 from "../../../assets/newfigma/backendicons/PHP.svg";
import B5 from "../../../assets/newfigma/backendicons/Paython.svg";
import B6 from "../../../assets/newfigma/backendicons/net.svg";
import D1 from "../../../assets/newfigma/databaseicons/Database.svg";
import D2 from "../../../assets/newfigma/databaseicons/MongoDB.svg";
import D3 from "../../../assets/newfigma/databaseicons/Mysql.svg";
import D4 from "../../../assets/newfigma/databaseicons/Oracle.svg";
import D5 from "../../../assets/newfigma/databaseicons/postgresql.svg";
import C1 from "../../../assets/newfigma/cloudicons/AWS.svg";
import C2 from "../../../assets/newfigma/cloudicons/Google Cloud Platform.svg";
import C3 from "../../../assets/newfigma/cloudicons/Microsoft Azure.svg";

const OurTech = () => {
  const [activeItem, setActiveItem] = useState("Frontend");

  const images = {
    Frontend: [F1, F2, F3, F4, F5, F6],
    Backend: [B1, B2, B3, B4, B5, B6],
    Database: [D1, D2, D3, D4, D5],
    CloudServices: [C1, C2, C3],
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div>
      <div className="flex flex-col justify-between">
        <div className="w-full md:w-[50%] flex flex-col justify-start md:justify-evenly h-full">
          <h1 className="text-black text-xl sm:text-2xl md:text-4xl font-bold md:leading-20 my-4 md:my-4">
            Our Technology
            <Image src={BarIcon} alt="Bar Logo" width={50} height={3} />
          </h1>
          <p className="text-black text-md sm:text-lg md:text-xl">
            "Extensive experience across all industries."
          </p>
        </div>
      </div>

      <div className="mt-6 flex md:flex-row flex-col">
        <button
          onClick={() => handleItemClick("Frontend")}
          className={`cursor-pointer text-lg py-2 px-4 transition duration-300
    ${activeItem === "Frontend" ? "text-secondry" : "text-[#00000080]"}
"}`}
        >
          Frontend
          {activeItem === "Frontend" ? (
            <Image
              src={BarIcon}
              alt="Bar Logo"
              width={30}
              height={3}
              className="md:mx-0 mx-auto"
            />
          ) : (
            ""
          )}
        </button>
        <button
          onClick={() => handleItemClick("Backend")}
          className={`cursor-pointer text-lg py-2 px-4 transition duration-300
    ${activeItem === "Backend" ? "text-secondry" : "text-[#00000080]"}`}
        >
          Backend
          {activeItem === "Backend" ? (
            <Image
              src={BarIcon}
              alt="Bar Logo"
              width={30}
              height={3}
              className="md:mx-0 mx-auto"
            />
          ) : (
            ""
          )}
        </button>
        <button
          onClick={() => handleItemClick("Database")}
          className={`cursor-pointer text-lg py-2 px-4 transition duration-300
    ${activeItem === "Database" ? "text-secondry" : "text-[#00000080]"}`}
        >
          Database
          {activeItem === "Database" ? (
            <Image
              src={BarIcon}
              alt="Bar Logo"
              width={30}
              height={3}
              className="md:mx-0 mx-auto"
            />
          ) : (
            ""
          )}
        </button>
        <button
          onClick={() => handleItemClick("CloudServices")}
          className={`cursor-pointer text-lg py-2 px-4 transition duration-300
    ${activeItem === "CloudServices" ? "text-secondry" : "text-[#00000080]"}`}
        >
          Cloud Services
          {activeItem === "CloudServices" ? (
            <Image
              src={BarIcon}
              alt="Bar Logo"
              width={30}
              height={3}
              className="md:mx-0 mx-auto"
            />
          ) : (
            ""
          )}
        </button>
      </div>
      <div className="mt-4 mb-6 flex p-2 gap-2 ">
        {images[activeItem].map((image, index) => (
          <div
            key={index}
            className="sm:w-1/2 md:w-1/3 lg:w-[10%] py-1 flex items-center rounded-md group hover:shadow-[0px_0px_5px_0.1px_#3DB8DB80] justify-center p-1 bg-white "
          >
            <Image
              src={image}
              alt={`${activeItem} image ${index + 1}`}
              width={140}
              className="object-contain rounded-md filter grayscale group-hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTech;
