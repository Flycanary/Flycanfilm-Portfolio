import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';
import Magnetic from './Magnetic';

interface HeaderProps {
  onNavigate: (id: string) => void;
  onOpenServices: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenServices }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-secondary/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between p-4 px-6 md:px-12">
        {/* Logo + Brand */}
        <Magnetic>
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center space-x-3"
          >
            {/* Logo background uses your accent green */}
            <div className="h-10 w-10 rounded-md bg-accent p-1 overflow-hidden">
              <img
                src="/header-logo.png"
                alt="Flycanfilm logo"
                className="h-full w-full object-contain"
              />
            </div>
            {/* Text */}
            <span className="text-2xl font-bold text-accent hover:text-accent-hover transition-colors">
              Flycanfilm
            </span>
          </a>
        </Magnetic>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {NAV_LINKS.map((link: NavLink) => (
              <li key={link.name}>
                {link.name === 'Services' ? (
                  <button
                    onClick={onOpenServices}
                    className="text-text-secondary hover:text-text-primary transition-colors font-medium"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-text-secondary hover:text-text-primary transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <Magnetic>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-accent text-text-primary font-bold py-2 px-4 rounded-md hover:bg-accent-hover transition-transform transform hover:scale-105"
            >
              Contact Me
            </button>
          </Magnetic>
        </div>
      </nav>
    </header>
  );
};

export default Header;
