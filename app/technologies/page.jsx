import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Pages from "../components/pages";
import check from "../assets/figma images/check.png";
import sr1 from "../assets/figma images/t1.png";
import sr2 from "../assets/figma images/t2.png";
import sr3 from "../assets/figma images/t3.png";
import sr4 from "../assets/figma images/t4.png";
import srb1 from "../assets/figma images/srb1.png";
import Cta from "../components/home/CTA/Cta";
import Image from "next/image";

function Page() {
  return (
    <>
      <Pages>
        <div className="text-white">
          <Header />
        </div>
        <div className="bg-[#28293E] flex items-center flex-col justify-center h-[40vh] px-[5%]">
          <h1 className="text-white text-xl sm:text-2xl md:text-[45px] font-bold md:leading-16 my-4">
            Technologies
          </h1>
          <p className="text-gray-400 text-sm">
            Crafting Big Solutions in Tiny Scripts: Welcome to Tiny Script Soft
            Tech's World.
          </p>
        </div>

        <div className="bg-[#FDF0E9] px-[5%] py-16">
          <p>
            Welcome to our Technology page! At Tinyscript Soft Tech, we are
            dedicated to leveraging the latest advancements in technology to
            drive innovation and empower our clients. Our team of skilled
            engineers and developers are at the forefront of cutting-edge
            technologies, constantly pushing the boundaries to deliver solutions
            that exceed expectations.
          </p>
        </div>

        {/* 2nd Section */}
        <div className="w-full flex flex-wrap items-center lg:justify-between justify-center bg-[#FDF0E9] gap-8 md:gap-2 px-[5%] py-8">
          <div className="w-full text-black p-4 lg:w-[50%] rounded-md  flex flex-col justify-start md:justify-evenly h-full">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold hover:text-[#4D869C] md:leading-16 my-4">
              Transforming static designs into dynamic journeys.
            </h1>
            <p className="text-sm text-black md:my-4">
              Building bridges between creativity and functionality, one line of
              HTML, CSS, and JavaScript at a time. Creating user interfaces that
              speak volumes without saying a word.
            </p>
            <ul className="text-[#4D869C] hover:text-black">
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                HTML CSS
              </li>
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                React JS
              </li>
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                Next JS
              </li>
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                Angular JS
              </li>
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                Vue JS
              </li>
            </ul>
          </div>
          <div className="relative">
            <Image src={sr1} alt="Web Development" height={480} width={480} />
            <Image
              className="absolute opacity-[0.9] z-1 top-0 h-1/4"
              src={srb1}
              alt="Background"
              height={480}
              width={400}
            />
            <div className="absolute text-white top-0 left-0 flex items-center justify-center w-4/5 h-1/4 text-lg">
              WEB DEVELOPMENT
            </div>
          </div>
        </div>

        {/* 3rd Section */}
        <div className="w-full flex flex-wrap items-center lg:justify-between justify-center bg-[#FDF0E9] gap-8 md:gap-2 px-[5%] py-8">
          <div className="w-full text-black p-4 lg:w-[50%] rounded-md  flex flex-col justify-start md:justify-evenly h-full">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold hover:text-[#4D869C] md:leading-16 my-4">
              Weaving code into the unseen fabric of functionality.
            </h1>
            <p className="text-sm text-black md:my-4">
              Where the real work happens, our back end virtuosos engineer the
              gears that power digital dreams. In the shadows of front-facing
              brilliance, our back end sages ensure stability and reliability.
            </p>
            <ul className="text-[#4D869C] hover:text-black">
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                Python (Django or Flask)
              </li>
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                PHP Laravel
              </li>
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                Node js
              </li>
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                Javascript
              </li>
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                Java
              </li>
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                .net
              </li>
            </ul>
          </div>
          <div className="relative">
            <Image
              src={sr2}
              alt="Backend Development"
              height={480}
              width={480}
            />
            <Image
              className="absolute opacity-[0.9] z-1 top-0 h-1/4 w-full"
              src={srb1}
              alt="Background"
              height={480}
              width={400}
            />
            <div className="absolute text-white top-0 left-0 flex items-center justify-center w-full h-1/4 text-lg">
              BACK-END DEVELOPMENT
            </div>
          </div>
        </div>

        {/* 4th Section */}
        <div className="w-full flex flex-col lg:flex-row-reverse items-center lg:justify-between justify-center bg-[#FDF0E9] gap-8 md:gap-2 px-[5%] py-8">
          <div className="w-full text-black p-4 lg:w-[50%] rounded-md  flex flex-col justify-start md:justify-evenly h-full">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold hover:text-[#4D869C] md:leading-16 my-4">
              Where data dreams find their eternal home.
            </h1>
            <p className="text-sm text-black md:my-4">
              Let our database be the map to navigate the labyrinth of
              information, guiding you to your data oasis. Nurturing the seeds
              of data, cultivating forests of knowledge within our database.
            </p>
            <ul className="text-[#4D869C] hover:text-black">
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                MySQL
              </li>
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                MongoDB
              </li>
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                SQL Server
              </li>
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                Oracle
              </li>
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                PostgreSQL
              </li>
            </ul>
          </div>
          <div className="relative">
            <Image
              src={sr3}
              alt="Database Development"
              height={480}
              width={480}
            />
            <Image
              className="absolute opacity-[0.9] z-1 bottom-0 h-1/4 w-1/2"
              src={srb1}
              alt="Background"
              height={480}
              width={400}
            />
            <div className="absolute text-white left-0 bottom-0 flex items-center justify-center w-1/2 h-1/4 text-lg">
              DATABASE
            </div>
          </div>
        </div>

        {/* 5th Section */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:justify-between justify-center bg-[#FDF0E9] gap-8 md:gap-2 px-[5%] py-8">
          <div className="w-full text-black p-4 lg:w-[50%] rounded-md flex flex-col justify-start md:justify-evenly h-full">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold hover:text-[#4D869C] md:leading-16 my-4">
              Where Dreams Take Flight, Our Cloud Services Ignite.
            </h1>
            <p className="text-sm text-black md:my-4">
              Embark on a journey through the clouds, where reliability and
              resilience are the guiding winds of our services. Amidst the
              clouds, find sanctuary for your data – where security meets
              serenity.
            </p>
            <ul className="text-[#4D869C] hover:text-black">
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                Microsoft Azure
              </li>
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                Amazon Web Services
              </li>
              {/* <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                Flutter App Development
              </li> */}

              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                Google Cloud Platform
              </li>
              {/* <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                IBM Cloud
              </li>
              <li className="flex items-center gap-2 my-2">
                <Image src={check} alt="check" />
                Oracle Cloud
              </li> */}
            </ul>
          </div>
          <div className="relative">
            <Image src={sr4} alt="Cloud Services" height={480} width={480} />
            <Image
              className="absolute opacity-[0.9] z-1 right-[12%] bottom-0 h-1/4 w-2/4"
              src={srb1}
              alt="Background"
              height={480}
              width={400}
            />
            <div className="absolute text-white right-[12%] bottom-0 h-1/4 w-2/4 flex items-center justify-center text-lg">
              CLOUD SERVICES
            </div>
          </div>
        </div>
        <div className="text-white">
          <Cta />
        </div>
        <Footer />
      </Pages>
    </>
  );
}

export default Page;
