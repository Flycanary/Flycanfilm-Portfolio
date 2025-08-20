import React from 'react';

const NinjaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Ninja Avatar">
    {/* Main head/mask shape using a dark, secondary color */}
    <path
      d="M50,5 C25,5 10,25 10,50 C10,75 25,95 50,95 C75,95 90,75 90,50 C90,25 75,5 50,5 Z M20,55 C25,65 40,70 50,70 C60,70 75,65 80,55 V45 C75,35 60,30 50,30 C40,30 25,35 20,45 V55 Z"
      className="fill-current text-secondary"
    />
    
    {/* Dark eye-slit area, matching the primary background color to create negative space */}
    <path
      d="M20 45 C25,35 40,30 50,30 C60,30 75,35 80,45 V55 C75,65 60,70 50,70 C40,70 25,65 20,55 V45 Z"
      className="fill-current text-primary"
    />

    {/* Glowing eyes, wrapped in a group to apply the pulse animation */}
    <g className="animate-pulse-glow">
      {/* Left Eye */}
      <path 
        d="M30,52 C35,48 42,48 45,52 C42,56 35,56 30,52 Z"
        className="fill-current text-accent"
      />
      {/* Right Eye */}
      <path
        d="M70,52 C65,48 58,48 55,52 C58,56 65,56 70,52 Z"
        className="fill-current text-accent"
      />
    </g>
  </svg>
);

export default NinjaIcon;
