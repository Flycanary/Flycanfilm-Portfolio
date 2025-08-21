import React from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';
import CloseIcon from './icons/CloseIcon';
import Magnetic from './Magnetic';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
  onOpenServices: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, onNavigate, onOpenServices }) => {
  if (!isOpen) {
    return null;
  }

  const handleLinkClick = (href: string) => {
    onNavigate(href);
    onClose();
  };

  const handleServicesClick = () => {
    onOpenServices();
    onClose();
  };
  
  return (
    <div
      className="fixed inset-0 bg-primary/90 backdrop-blur-md z-[60] animate-fade-in md:hidden"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute top-0 right-0 h-full w-full max-w-xs bg-secondary shadow-2xl flex flex-col p-8 animate-slide-in-right"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-12">
          <button onClick={onClose} aria-label="Close menu" className="p-2">
            <CloseIcon className="w-8 h-8 text-text-secondary hover:text-text-primary" />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center flex-1">
          <ul className="space-y-8 text-center">
            {NAV_LINKS.map((link: NavLink, index) => (
              <li key={link.name} className="animate-smooth-slide-in-up" style={{ animationDelay: `${100 + index * 75}ms`, opacity: 0 }}>
                {link.name === 'Services' ? (
                  <button
                    onClick={handleServicesClick}
                    className="text-3xl font-semibold text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-3xl font-semibold text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-center mt-12 animate-smooth-slide-in-up" style={{ animationDelay: `${100 + NAV_LINKS.length * 75}ms`, opacity: 0 }}>
          <Magnetic>
             <button
              onClick={() => handleLinkClick('contact')}
              className="bg-accent text-text-primary font-bold py-3 px-8 rounded-lg hover:bg-accent-hover transition-transform transform hover:scale-105 shadow-lg"
            >
              Contact Me
            </button>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;