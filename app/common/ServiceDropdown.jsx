import React, { useEffect, useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const NestedDropdown = ({
  title,
  icon,
  lableClick,
  options = [],
  className,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const dropdownRef = useRef(null);

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
      onMouseEnter={() => setIsDropdownOpen(true)} // Open dropdown on hover
      onMouseLeave={() => {
        setIsDropdownOpen(false);
        setOpenSubmenu(null); // Close both dropdown and submenu
      }}
    >
      {/* Main Dropdown Button */}
      <button
        className={`${className} flex items-center`}
        onClick={() => lableClick()}
      >
        <span>{title}</span>
        {isDropdownOpen ? (
          <FaMinus className="text-sm ml-1" />
        ) : (
          <FaPlus className="text-sm ml-1" />
        )}
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute md:-left-1/2 mt-0 w-64 -right-[10%]  bg-black overflow-hidden rounded-2xl p-4 shadow-lg z-20 transition-all duration-300 ${
          isDropdownOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              className="relative group"
              onClick={() => {
                option.action();
                setIsDropdownOpen(false);
              }}
            >
              <button className="w-full text-left px-4 py-3 rounded-md focus:outline-none text-sm hover:text-secondry text-white transition duration-500 ease-in-out">
                &bull; {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NestedDropdown;
