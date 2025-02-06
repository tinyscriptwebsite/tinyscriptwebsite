"use client";

import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import policyintro from "../assets/lottie/policyintro.json";
import datacollection from "../assets/lottie/datacollection.json";
import security from "../assets/lottie/security.json";
import cookies from "../assets/lottie/cookies.json";
import info from "../assets/lottie/information.json";
import policy from "../assets/lottie/policy.json";
import Lottie from "lottie-react";
import Pages from "../components/pages";

function PrivacyPolicyPage() {
  return (
    <>
      <Pages>
        <div className="text-white">
          <Header />
        </div>
        {/* Hero section */}
        <div className="flex items-center bg-black flex-col justify-center h-[40vh] px-[5%] mt-8">
          <h1 className="text-white text-xl sm:text-2xl md:text-[45px] font-bold md:leading-16 my-4 md:my-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">
            Crafting Big Solutions in Tiny Scripts: Welcome to Tiny Script Soft
            Tech's World.
          </p>
          <h1></h1>
        </div>

        {/* 1st section */}
        <div className="w-full  text-black px-[4%] lg:px-[5%] pt-[5vh] flex flex-col gap-6">
          <section className="mb-8 flex flex-row items-center justify-between">
            <p className="text-gray-500 text-md hover:text-[#4d869c] text-justify">
              Welcome to our Privacy Policy page. This page is designed to
              inform you of our policies regarding the collection, use, and
              disclosure of personal information we receive from users of our
              website. We use your personal information only for providing and
              improving our website. By using the site, you agree to the
              collection and use of information in accordance with this policy.
              Please take a moment to review our practices carefully. If you
              have any questions or concerns regarding this Privacy Policy,
              please contact us.
            </p>
          </section>

          <section className="mb-8 flex flex-col-reverse lg:flex-row items-center justify-between">
            <div className="lg:w-1/4 w-3/4 p-6 lg:p-0 flex justify-center">
              {/* <Lottie
                animationData={datacollection}
                loop={true}
                className="w-full"
              /> */}
            </div>
            <div className="lg:w-1/2 w-full">
              <h1 className="text-black hover:text-[#4d869c] text-xl sm:text-2xl md:text-4xl font-bold md:leading-16 my-4 md:my-4">
                DATA COLLECTION
              </h1>
              <p className="text-gray-500 text-md hover:text-[#4d869c] text-justify">
                We collect information that you provide to us directly when you
                use our website. This may include personal information such as
                your name, email address, and any other details that you
                voluntarily submit through forms on our website. Additionally,
                we may automatically collect certain information about your
                device and usage of our website, such as your IP address,
                browser type, operating system, and pages visited. We use this
                information to analyze trends, administer the site, track users'
                movements around the site, and gather demographic information.
                We may also use cookies and similar tracking technologies to
                collect information about your interactions with our website.
                Cookies are small files that are stored on your device when you
                visit a website, and they help us improve your user experience
                and tailor our services to your needs. By using our website, you
                consent to the collection and use of your information as
                described in this Privacy Policy. If you do not agree with this
                policy, please do not use our website or provide any personal
                information to us.
              </p>
            </div>
          </section>

          <section className="mb-8 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 w-full">
              <h1 className="text-black hover:text-[#4d869c] text-xl sm:text-2xl md:text-4xl font-bold md:leading-16 my-4 md:my-4">
                USE OF INFORMATION
              </h1>
              <p className="text-gray-500 text-md hover:text-[#4d869c] text-justify">
                We use the information collected from you to provide, maintain,
                and improve our services, as well as to develop new features and
                functionalities. This may include, but is not limited to,
                personalizing your experience on our website, analyzing usage
                trends, and troubleshooting technical issues. Additionally, we
                may use your information to communicate with you, such as
                sending you important updates or notifications about our
                services, responding to your inquiries, and providing customer
                support. We may also use your information for marketing
                purposes, such as sending you promotional materials or special
                offers that we believe may be of interest to you. However, you
                have the right to opt out of receiving such communications at
                any time. We will not sell, rent, or otherwise share your
                personal information with third parties for their own marketing
                purposes without your consent.
              </p>
            </div>
            <div className="lg:w-1/4 w-3/4 p-6 lg:p-0 flex justify-center">
              {/* <Lottie animationData={info} loop={true} className="w-full" /> */}
            </div>
          </section>

          <section className="mb-8 flex flex-col-reverse lg:flex-row items-center justify-between">
            <div className="lg:w-1/4 w-3/4 p-6 lg:p-0 flex justify-center">
              {/* <Lottie
                animationData={policyintro}
                loop={true}
                className="w-full"
              /> */}
            </div>
            <div className="lg:w-1/2 w-full">
              <h1 className="text-black hover:text-[#4d869c] text-xl sm:text-2xl md:text-4xl font-bold md:leading-16 my-4 md:my-4">
                DATA SHARING
              </h1>
              <p className="text-gray-500 text-md hover:text-[#4d869c] text-justify">
                We may share your information with third-party service providers
                who perform services on our behalf, such as hosting, data
                analysis, payment processing, and customer service. These
                service providers are authorized to use your personal
                information only as necessary to provide services to us and are
                contractually obligated to maintain the confidentiality and
                security of your information. In certain circumstances, we may
                also share your information with law enforcement agencies,
                government officials, or other third parties if we believe that
                such disclosure is necessary to comply with applicable laws,
                regulations, legal processes, or governmental requests, or to
                protect our rights, property, or safety, or the rights,
                property, or safety of our users or others. We may also share
                your information in connection with a corporate transaction,
                such as a merger, acquisition, consolidation, or asset sale, or
                in the unlikely event of bankruptcy.
              </p>
            </div>
          </section>

          <section className="mb-8 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 w-full">
              <h1 className="text-black hover:text-[#4d869c] text-xl sm:text-2xl md:text-4xl font-bold md:leading-16 my-4 md:my-4">
                COOKIES
              </h1>
              <p className="text-gray-500 text-md hover:text-[#4d869c] text-justify">
                Cookies are small text files that are placed on your computer or
                mobile device when you visit a website. They are widely used to
                make websites work, or work more efficiently, as well as to
                provide information to the owners of the site. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Sed vitae lorem non ex
                rhoncus consequat. Fusce consequat est sed odio tristique, eu
                posuere ipsum ultrices. Nullam in ex eget justo faucibus
                vestibulum sit amet eu lacus. Fusce luctus elit sed urna
                consectetur, sit amet convallis lacus congue.
              </p>
            </div>
            <div className="lg:w-1/4 w-3/4 p-6 lg:p-0 flex justify-center">
              {/* <Lottie animationData={cookies} loop={true} className="w-full" /> */}
            </div>
          </section>

          <section className="mb-8 flex flex-col-reverse lg:flex-row items-center justify-between">
            <div className="lg:w-1/4 w-3/4 p-6 lg:p-0 flex justify-center">
              {/* <Lottie animationData={security} loop={true} className="w-full" /> */}
            </div>
            <div className="lg:w-1/2 w-full">
              <h1 className="text-black hover:text-[#4d869c] text-xl sm:text-2xl md:text-4xl font-bold md:leading-16 my-4 md:my-4">
                SECURITY
              </h1>
              <p className="text-gray-500 text-md hover:text-[#4d869c] text-justify">
                We take the security of your personal information seriously and
                use industry-standard security measures to protect it. Our
                website is encrypted using SSL (Secure Sockets Layer) technology
                to ensure that your data is transmitted securely over the
                internet. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed vitae lorem non ex rhoncus consequat. Fusce consequat
                est sed odio tristique, eu posuere ipsum ultrices. Nullam in ex
                eget justo faucibus vestibulum sit amet eu lacus. Fusce luctus
                elit sed urna consectetur, sit amet convallis lacus congue.
              </p>
            </div>
          </section>

          <section className="mb-8 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 w-full">
              <h1 className="text-black hover:text-[#4d869c] text-xl sm:text-2xl md:text-4xl font-bold md:leading-16 my-4 md:my-4">
                CHANGES TO THIS POLICY
              </h1>
              <p className="text-gray-500 text-md hover:text-[#4d869c] text-justify">
                We reserve the right to modify this privacy policy at any time,
                so please review it frequently. Changes and clarifications will
                take effect immediately upon their posting on the website. If we
                make material changes to this policy, we will notify you here
                that it has been updated, so that you are aware of what
                information we collect, how we use it, and under what
                circumstances, if any, we use and/or disclose it.
              </p>
            </div>
            <div className="lg:w-1/4 w-3/4 p-6 lg:p-0 flex justify-center">
              {/* <Lottie animationData={policy} loop={true} className="w-full" /> */}
            </div>
          </section>
        </div>
        <Footer />
      </Pages>
    </>
  );
}

export default PrivacyPolicyPage;
