"use client";

import React, { useEffect, useRef, useState } from "react";
// import { Icon } from "@iconify/react/dist/iconify.js";

const NestedDropdown = ({ title, icon, options = [], className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    if (option.subOptions) {
      setOpenSubmenu(openSubmenu === option.label ? null : option.label);
    } else {
      option.action();
      setIsDropdownOpen(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative inline-block w-fit h-fit md:w-auto"
      ref={dropdownRef}
    >
      {/* Main Dropdown Button */}
      <button onClick={toggleDropdown} className={className}>
        {/* <Icon icon={icon} className="text-lg" /> */}
        <span>{title}</span>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-full md:w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <div key={index} className="relative group">
              <button
                onClick={() => handleOptionClick(option)}
                className="w-full text-left px-4 py-3 focus:outline-none text-sm text-gray-700 hover:bg-gray-100 transition duration-200 ease-in-out"
              >
                {option.label}
              </button>

              {/* Submenu */}
              {option.subOptions && openSubmenu === option.label && (
                <div className="absolute top-0 right-full mt-0 w-full md:w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                  {option.subOptions.map((subOption, subIndex) => (
                    <button
                      key={subIndex}
                      onClick={() => {
                        subOption.action();
                        setOpenSubmenu(null);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left focus:outline-none px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition duration-200 ease-in-out"
                    >
                      {subOption.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NestedDropdown;
