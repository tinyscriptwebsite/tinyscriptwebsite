"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { Toaster } from "react-hot-toast";
import Cookies from "universal-cookie";
import { usePathname, useRouter } from "next/navigation";
import HomeNavigationBar from "../../assets/newfigma/Bar.svg";
import ServiceDropdown from "../../common/ServiceDropdown";

const Header = () => {
  const cookies = new Cookies();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.pageYOffset > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = windowWidth <= 768;
      if (!isMobile) {
        setIsMobileMenuOpen(false);
      } else {
        !isMobile && setIsMobileMenuOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    cookies.remove("token");
    router.push("/");
  };

  return (
    <header
      className={`fixed top-0 w-full text-white flex items-center py-6 md:px-[3%] sm:px-[2%] px-[1%] bg-black shadow-[0px_5px_5px_0px_#28293E26] z-50 ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <Toaster />
      <div className="w-full flex items-center justify-between">
        <Logo />

        <div className="flex items-center space-x-6">
          <MobileMenuToggle
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          {windowWidth > 768 ? (
            <NavigationMenu
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMenu={() => setIsMobileMenuOpen(false)}
            />
          ) : (
            <MobileNavigationMenu
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMenu={() => setIsMobileMenuOpen(false)}
            />
          )}
          <ContactButton />
        </div>
      </div>
    </header>
  );
};

const Logo = () => (
  <div className="flex items-center">
    <Link href="/">
      <Image
        src={logo}
        alt="Site Logo"
        className="md:w-[17rem] sm:w-60 w-40"
        priority
      />
    </Link>
  </div>
);

const MobileMenuToggle = ({ isMobileMenuOpen, toggleMenu }) => (
  <div className="md:hidden">
    <svg
      onClick={toggleMenu}
      className="size-7 cursor-pointer"
      fill="white"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </div>
);

const NavigationMenu = ({ isMobileMenuOpen, toggleMenu }) => {
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us", mobileOnly: true },
  ];

  return (
    <nav
      className={`flex flex-col md:flex-row items-center gap-6 transition-all  ${
        isMobileMenuOpen
          ? "flex w-1/2 absolute right-0 bg-black h-screen top-full"
          : "hidden md:flex"
      }`}
    >
      {menuItems.map(({ href, label, mobileOnly }) => (
        <NavigationLink
          key={href}
          href={href}
          label={label}
          toggleMenu={toggleMenu}
          mobileOnly={mobileOnly}
        />
      ))}
    </nav>
  );
};

const MobileNavigationMenu = ({ isMobileMenuOpen, toggleMenu }) => {
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us", mobileOnly: true },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 right-0 h-screen bg-black md:pl-0 pl-10 md:pt-0 pt-20 text-white w-[45%] p-6 flex flex-col gap-6 transition-transform duration-300 z-50 md:hidden ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 text-white"
      >
        ✖
      </button>
      {menuItems.map(({ href, label, mobileOnly }) => (
        <NavigationLink
          key={href}
          href={href}
          label={label}
          toggleMenu={toggleMenu}
          mobileOnly={mobileOnly}
        />
      ))}
    </nav>
  );
};

const NavigationLink = ({ href, label, toggleMenu, mobileOnly = false }) => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path
  const isActive = pathname === href; // Check if the link matches the current path

  return (
    <>
      {href === "/services" ? (
        <ServiceDropdown
          title={label}
          options={[
            {
              label: "Web Development",
              action: () => {
                router.push("/services/webdevelopment");
              },
            },
            {
              label: "Software Development",
              action: () => {
                router.push("/services/webdevelopment");
              },
            },
            {
              label: "Shopify Development",
              action: () => {
                router.push("/services/ecommerce");
              },
            },
            {
              label: "Mobile App Development",
              action: () => {
                router.push("/services/appdevelopment");
              },
            },
            {
              label: "UI/UX Design",
              action: () => {
                router.push("/services/ui-ux");
              },
            },
          ]}
          lableClick={() => router.push("/services")}
        />
      ) : (
        <Link
          href={href}
          onClick={toggleMenu}
          className={`group relative flex items-center ${
            mobileOnly ? "md:hidden" : ""
          }  ${isActive ? "text-secondry font-bold" : ""}`}
        >
          <span className="hover:text-secondry transition-colors duration-500">
            {label}
          </span>
          <div
            className={`absolute left-0 top-full mt-1 w-full h-auto opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
              isActive ? "opacity-100" : ""
            }`}
          >
            <Image
              src={HomeNavigationBar}
              className="-mt-[5px]"
              alt={`${label} Navigation Bar`}
              width={40}
              height={10}
            />
          </div>
        </Link>
      )}
    </>
  );
};

const ContactButton = () => (
  <Link href="/contact" className="hidden md:flex items-center text-white">
    <span className="border  transition-colors duration-500 border-secondry py-2 px-4 bg-[#FFFFFF] text-secondry hover:bg-[#3DB8DB] hover:text-white rounded-[2rem]">
      Contact Us
    </span>
  </Link>
);

export default Header;
