// components/ContactInfo.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="bg-white shadow-[0px_0px_15px_0px_rgba(16,184,219,0.2)] px-6 py-10 md:max-w-[23rem] mx-auto md:my-6 font-sans md:mt-20 rounded-[2.5rem]">
      <div className="mb-3">
        <div className="flex gap-2 items-center">
          <span className="font-medium leading-none">
            <IoIosMail className="text-4xl text-secondry leading-none" />
          </span>
          <p className="text-2xl text-secondry leading-none">Mail</p>
        </div>
        <Link
          href="mailto:contact@tinyscript.in"
          className="text-black text-base ml-11"
        >
          contact@Tinyscript.in
        </Link>
      </div>
      <div className="mb-3">
        <div className="flex gap-2 items-center">
          <span className="font-medium mr-2">
            <FaPhoneAlt className="text-2xl text-secondry leading-none" />
          </span>
          <p className="text-2xl text-secondry leading-none">Phone</p>
        </div>
        <div className="flex text-black flex-col ml-11">
          <Link
            href="tel:+917490935158"
            className="flex gap-1 items-center text-base"
          >
            <span>+91 7490935158</span>
          </Link>
          <Link
            href="tel:+916352063734"
            className="flex gap-1 items-center text-base"
          >
            <span>+91 6352063734</span>
          </Link>
          <Link
            href="tel:+33782094294"
            className="flex gap-1 items-center text-base"
          >
            <span>+33 782094294</span>
          </Link>
        </div>
      </div>
      <div className="mb-3">
        <div className="flex gap-2 items-center">
          <span className="font-medium mr-2">
            <MdLocationOn className="text-3xl text-secondry" />
          </span>
          <p className="text-2xl text-secondry">Address</p>
        </div>
        <div className="flex text-black flex-col ml-11">
          <Link
            href="https://maps.app.goo.gl/7hyjrfdVwgvUzFFL9"
            className="flex gap-1 items-center text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            213, Sanidhya Arcade, Vastral, Ahmedabad, Gujarat 382418
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
