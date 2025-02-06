import { useState } from "react";

const Dropdown = ({ options }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  const handleOptionClick = (option) => {
    option();
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="relative inline-block cursor-pointer"
      onMouseEnter={handleMouseEnter}
    >
      {/* Dropdown Icon */}
      <div className="w-10 h-10 bg-white text-background hover:bg-secondry hover:text-white  flex items-center justify-center rounded-full cursor-pointer hover:bg-card">
        <span className="text-xl ">☰</span>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          className="absolute right-0 mt-4 w-48 bg-card rounded-md shadow-lg z-10"
          onMouseLeave={handleMouseLeave}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option.click)}
              className="px-4 py-2 cursor-pointer hover:bg-secondry hover:text-white hover:text-background text-sm rounded"
            >
              {option.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
