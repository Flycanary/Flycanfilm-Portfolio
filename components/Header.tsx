import React, { useState } from "react";
import Magnetic from "./Magnetic";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo + Brand */}
          <Magnetic>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="flex items-center space-x-3"
            >
              {/* Logo box */}
              <div className="h-12 w-12 rounded-md bg-accent p-1.5 overflow-hidden flex items-center justify-center">
                <img
                  src="/header-logo.png"
                  alt="Flycanfilm logo"
                  className="h-full w-full object-contain"
                />
              </div>
              {/* Brand text */}
              <span className="text-xl font-semibold text-accent hover:text-accent-hover transition-colors">
                Flycanfilm
              </span>
            </a>
          </Magnetic>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-base font-medium">
            {["Home", "Showreel", "About", "Projects", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="text-gray-300 hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Contact button (Desktop) */}
          <div className="hidden md:block">
            <Magnetic>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="bg-accent text-black px-4 py-2 rounded-md font-semibold hover:bg-accent-hover transition-colors"
              >
                Contact Me
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 px-6 py-4 space-y-4">
          {["Home", "Showreel", "About", "Projects", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="block text-gray-300 hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
