import React, { useEffect } from 'react';
import NinjaIcon from './icons/NinjaIcon';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  useEffect(() => {
    // Prevent scrolling while the preloader is active
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      // Add a delay to match the fade-out transition before restoring scroll
      const timer = setTimeout(() => {
        document.body.style.overflow = 'auto';
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div
      className={`fixed inset-0 bg-primary flex flex-col items-center justify-center z-[100] transition-opacity duration-700 ease-in-out ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isLoading}
      role="status"
    >
      <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <NinjaIcon className="w-32 h-32 md:w-48 md:h-48" />
      </div>
      <p 
        className="text-accent font-semibold text-lg md:text-xl mt-4 tracking-widest animate-fade-in"
        style={{ animationDelay: '1s' }}
      >
        Preparing the way...
      </p>
    </div>
  );
};

export default Preloader;
