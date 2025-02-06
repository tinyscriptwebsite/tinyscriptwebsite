"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import contactImage from "../assets/newfigma/Contact US Image.svg";
import Header from "../components/layout/Header";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import Footer from "../components/layout/Footer";

const ContactPage = () => {
  return (
    <div className="text-white min-h-screen bg-primary">
      <Header />
      <div className="container mx-auto flex flex-col md:px-[10%] sm:px-[5%] px-[3%] md:flex-row items-center mt-10 my-20">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full md:w-[60%] md:order-none order-2"
        >
          <ContactInfo />
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full md:w-[21rem]  md:order-none order-1 md:mt-0 mt-20 "
        >
          <div className="relative -z-0">
            <div className="md:w-[29.5rem] md:-ml-[3.2rem] mt-14">
              <Image src={contactImage} alt="Contact Us" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full md:order-none order-3 relative z-10"
        >
          <ContactForm />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
