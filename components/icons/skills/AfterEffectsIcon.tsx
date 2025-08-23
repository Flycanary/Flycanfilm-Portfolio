import React from 'react';
import afterEffectsLogo from './icons8-adobe-after-effects-48.png'; // your PNG

const AfterEffectsIcon: React.FC<{ className?: string }> = ({ className }) => {
  const boxWidth = 100;
  const boxHeight = 98;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${boxWidth} ${boxHeight}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={boxWidth} height={boxHeight} rx="22" fill="#1F0120" />
      <image
        href={afterEffectsLogo}
        x="0"
        y="0"
        width={boxWidth}
        height={boxHeight}
        preserveAspectRatio="xMidYMid meet" // keeps aspect ratio but fills
      />
    </svg>
  );
};

export default AfterEffectsIcon;
