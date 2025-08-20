import React from 'react';
import { SERVICES } from '../constants';
import CloseIcon from './icons/CloseIcon';

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServicesModal: React.FC<ServicesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-primary/90 backdrop-blur-md flex items-center justify-center z-[60] p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-text-secondary hover:text-text-primary transition-colors z-10"
          aria-label="Close services view"
        >
          <CloseIcon className="w-8 h-8" />
        </button>

        <div className="text-center mb-12 animate-smooth-slide-in-up" style={{ animationDelay: '100ms', opacity: 0 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            What I Do
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            I specialize in turning ideas into cinematic realities. Here's how I can help bring your project to the next level.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className="bg-secondary p-8 rounded-xl shadow-lg border border-transparent hover:border-accent hover:shadow-[0_0_25px_-8px_rgba(163,193,55,0.5)] transition-all duration-300 transform hover:-translate-y-2 animate-smooth-slide-in-up"
              style={{ animationDelay: `${200 + index * 100}ms`, opacity: 0 }}
            >
              <div className="text-accent mb-4 w-12 h-12">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesModal;