import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Cookies from "universal-cookie";
import portfolio from "../../../assets/lottie/portfolio.json";
import Lottie from "lottie-react";

const Portfolio = ({
  promises,
  heading,
  description,
  port,
  width,
  h,
  loading,
}) => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`api/portfolio?id=${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  };

  return (
    <>
      <div className="mt-[6vh] px-[5%]" id="portfolio">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          {port && (
            <div className="w-full md:w-[50%]">
              <Lottie animationData={portfolio} loop={true} className="w-4/5" />
            </div>
          )}
          <div className="w-full md:w-[90%]">
            <h1
              id="heading-large"
              className=" animate-charcter text-2xl sm:text-4xl w-full text-center"
            >
              {heading}
            </h1>
            <p className="text-justify mt-6 text-white">{description}</p>
          </div>
        </div>
        <div className="promise_cards flex flex-row flex-wrap justify-evenly items-center w-full mb-4 gap-6">
          {loading ? (
            <div className="loader"></div>
          ) : (
            <>
              {promises.map((promise, index) => (
                <div
                  key={index}
                  className={`case-study-card border w-[100%] sm:w-[360px] min-h-[${h}px] animate_container sm:mx-[1%] rounded-md mb-6 shadow-lg hover:transform hover:scale-105 transition-all duration-300 relative`}
                >
                  {token && (
                    <button
                      className="absolute top-2 right-2 text-red-600 group-hover:block"
                      onClick={() => handleDelete(promise._id)}
                    >
                      <RiDeleteBinLine />
                    </button>
                  )}
                  {promise.href === "/" ? (
                    <div className="font-bold  text-white flex flex-col items-center">
                      <Image
                        src={promise.image}
                        alt="PROJECT IMAGE"
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
                  ) : (
                    <Link href={promise.href} passHref>
                      <div className="font-bold  text-white flex flex-col items-center">
                        <Image
                          src={promise.image}
                          alt="PROJECT IMAGE"
                          sizes=""
                          width={240}
                          style={{ width: width }}
                          height={120}
                          className="m-auto text-white block"
                        />
                        <span className="block p-4">{promise.title}</span>
                        <p className="text-white p-4 font-normal text-justify">
                          {promise.description}
                        </p>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
