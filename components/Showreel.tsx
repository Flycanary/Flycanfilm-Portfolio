import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-accent rounded-full"></span>
  </h2>
);

const Showreel: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <section id="showreel" className="py-24">
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center">
          <SectionTitle>Showreel</SectionTitle>
        </div>
        <div className="max-w-4xl mx-auto">
          <div
            className="relative w-full overflow-hidden rounded-xl shadow-2xl animate-pulse-glow-border"
            style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}
          >
            <iframe
              src="https://www.youtube.com/embed/Sgxbx65IDeM?autoplay=1&mute=1&loop=1&playlist=Sgxbx65IDeM"
              title="Showreel Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showreel;
