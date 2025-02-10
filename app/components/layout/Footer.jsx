import Link from "next/link";
import logo from "../../assets/logo.png";
import LinkLine from "../../assets/newfigma/LinkLine.svg";
import FooterLine from "../../assets/newfigma/FooterLine.svg";
import Image from "next/image";
import { Icon } from "@iconify/react";
import faceBookIcons from "../../assets/newfigma/facebook.svg";
import InstagramIcons from "../../assets/newfigma/Instagram.svg";
import linkedInIcons from "../../assets/newfigma/Linkedin.svg";

import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import indiaIcon from "../../assets/indiaIcon.svg";
import franceIcon from "../../assets/franceIcon.svg";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex flex-col font-normal justify-evenly items-center md:px-14 sm:px-12 px-6 shadow-inner w-full bg-black text-white py-6 ">
      <div className="flex flex-col flex-nowrap w-full justify-evenly lg:flex-row lg:items-start md:gap-8">
        {/* Site Logo and Name */}
        <div className="flex flex-row items-center justify-start md:w-auto">
          <Link href="/">
            <div className="flex items-center">
              <Image
                sizes=""
                src={logo}
                alt="Site Logo"
                className=""
                priority
              />
            </div>
          </Link>
        </div>
        <Image
          alt="FooterLine"
          src={FooterLine}
          className="md:block hidden h-[15rem]"
        />

        {/* Menu */}
        <nav className="flex md:w-1/4 w-full flex-1 flex-col gap-1 justify-start md:mt-0 mt-8">
          <h3 className="font-bold text-secondry md:text-2xl text-xl">
            Quick Links
          </h3>
          <div className="flex flex-col md:gap-3 gap-1 mt-1 md:text-lg text-base">
            <Link
              href="/"
              className="text-white hover:text-secondry font-normal"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-secondry font-normal"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-secondry font-normal"
            >
              About Us
            </Link>
            <Link
              href="/portfolio"
              className="text-white hover:text-secondry font-normal"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-secondry font-normal"
            >
              Contact Us
            </Link>
            <Link
              href="/careers"
              className="text-white hover:text-secondry font-normal"
            >
              Careers
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-secondry font-normal"
            >
              Gallery
            </Link>
          </div>
        </nav>
        <Image
          alt="FooterLine"
          src={FooterLine}
          className="md:block hidden h-[18rem]"
        />

        {/* Email and Phone and address */}
        <div className="flex md:w-1/4 w-full flex-1 flex-col gap-2 font-normal justify-start md:mt-0 mt-6">
          <h3 className="font-bold text-secondry md:text-2xl text-xl">
            Get In Touch
          </h3>
          <div className="flex flex-row items-center gap-2 mt-1">
            <div className="border-2 p-1 rounded-full border-white">
              <IoIosMail className="size-4" />
            </div>
            <Link
              href="mailto:contact@tinyscript.in"
              className="text-white md:text-lg text-base font-normal hover:text-secondry"
            >
              Contact@Tinyscript.in
            </Link>
          </div>
          <div className="flex items-start gap-2 mt-1">
            <div className="border-2 p-1.5 rounded-full  border-white">
              <FaPhoneAlt className="size-3.5" />
            </div>
            <div className="flex flex-col ">
              <Link
                href="tel:+917490935158"
                className="flex gap-1 items-center md:text-lg font-normal text-base hover:text-secondry"
              >
                <Image alt="india" width={25} src={indiaIcon} />{" "}
                <span className="font-normal">+91 7490935158</span>
              </Link>
              <Link
                href="tel:+916352063734"
                className="flex gap-1 !font-light items-center md:text-lg text-base hover:text-secondry"
              >
                <Image alt="india" width={25} src={indiaIcon} />{" "}
                <span className="font-normal">+91 6352063734</span>
              </Link>
              <Link
                href="tel:+33782094294"
                className="flex gap-1 font-normal items-center md:text-lg text-base hover:text-secondry"
              >
                <Image alt="france" width={25} src={franceIcon} />{" "}
                <span className="font-normal">+33 782094294</span>
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-2 mt-1">
            <div className="border-2 p-1 rounded-full border-white">
              <MdLocationOn className="size-4" />
            </div>
            <div className="flex flex-col">
              <Link
                href="https://maps.app.goo.gl/7hyjrfdVwgvUzFFL9"
                className="flex gap-1 items-center md:text-lg text-base font-normal hover:text-secondry duration-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Office Address: Sanidhya Arcade And Bungalows Villa-213,
                Vastral, Ahmedabad, Gujarat 382418
              </Link>
            </div>
          </div>
        </div>
        <Image
          alt="FooterLine"
          src={FooterLine}
          className="md:block hidden h-[6rem]"
        />
        {/* Socials */}
        <div className="flex md:w-1/4 w-full flex-1 flex-col gap-2 justify-start md:mt-0 mt-6">
          <h3 className="font-bold text-secondry md:text-2xl text-xl">
            Socials
          </h3>
          <nav className="flex gap-4 ">
            <Link
              target="_blank"
              href=""
              className="rounded-full hover:bg-secondry size-[45px] grid place-items-center hover:border-none border hover:text-white duration-500 transition-all"
            >
              <Icon icon={"ri:facebook-fill"} className="text-2xl" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/tinyscript_softtech/"
              className="rounded-full hover:bg-secondry hover:text-white size-[45px] border hover:border-none grid place-items-center duration-500 transition-all"
            >
              <Icon icon={"ri:instagram-fill"} className="text-2xl" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/tiny-script-soft-tech-pvt-ltd/"
              className="rounded-full hover:bg-secondry hover:text-white size-[45px] border hover:border-none grid place-items-center"
            >
              <Icon icon={"cib:linkedin-in"} className="text-2xl" />
            </Link>
          </nav>
        </div>
      </div>

      <div className="flex items-center justify-between w-full flex-wrap gap-6 mt-6 md:px-12 px-0">
        <p className="text-white text-sm md:text-start text-center">
          Copyright &copy; 2024 TinyScript Soft Tech All Rights Reserved
        </p>
        <div className="flex gap-8 h-full items-center md:mx-0 mx-auto">
          <Link href="/" className="text-white text-sm hover:text-secondry">
            Terms Of Use
          </Link>
          <Image alt="LinkLine" src={LinkLine} className="h-[2rem]" />
          <Link
            href="/privacy-policy"
            className="text-white text-sm hover:text-secondry"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
