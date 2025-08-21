import React from "react";
import MenuIcon from "./icons/MenuIcon";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold">My Portfolio</div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-gray-700">
        <a href="#about" className="hover:text-black">
          About
        </a>
        <a href="#projects" className="hover:text-black">
          Projects
        </a>
        <a href="#contact" className="hover:text-black">
          Contact
        </a>
      </nav>

      {/* Mobile Menu Icon */}
      <button className="md:hidden p-2">
        <MenuIcon className="w-6 h-6 text-gray-700" />
      </button>
    </header>
  );
};

export default Header;
