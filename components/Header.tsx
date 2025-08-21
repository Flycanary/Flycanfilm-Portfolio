import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';
import Magnetic from './Magnetic';
import MenuIcon from './icons/MenuIcon';
import MobileNav from './MobileNav';

interface HeaderProps {
  onNavigate: (id: string) => void;
  onOpenServices: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenServices }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto flex items-center justify-between p-4 px-6 md:px-12">
          <Magnetic>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-2xl font-bold text-accent hover:text-accent-hover transition-colors"
            >
              AS
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Magnetic>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-text-primary p-2"
                aria-label="Open navigation menu"
              >
                <MenuIcon className="w-8 h-8" />
              </button>
            </Magnetic>
          </div>
        </nav>
      </header>
      
      {/* Mobile Navigation Panel */}
      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={onNavigate}
        onOpenServices={onOpenServices}
      />
    </>
  );
};

export default Header;