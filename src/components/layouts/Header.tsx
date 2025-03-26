import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 py-4 px-6 flex justify-between items-center w-full">
      {/* Logo */}
      <div className="text-blue-700 font-bold text-lg">
        <img
          src="Logo.svg"
          className="h-10 md:h-12 lg:h-14"
          alt="Supreme logo"
          title="logo"
        />
      </div>

      {/* Nav Items */}
      <div className="flex items-center space-x-4 md:space-x-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm md:text-base">
          Contact Us
        </button>
        <span className="cursor-pointer text-sm md:text-base">in</span>
        <span className="cursor-pointer text-sm md:text-base">ENG</span>
      </div>
    </header>
  );
};

export default Header;