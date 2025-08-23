import React from 'react';
import afterEffectsLogo from './icons8-adobe-after-effects-48.png'; // import PNG

const AfterEffectsIcon: React.FC<{ className?: string }> = ({ className }) => {
  // size of the inner image (you can tweak if needed)
  const imgSize = 48;
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
        width={imgSize}
        height={imgSize}
        x={(boxWidth - imgSize) / 2}   // center horizontally
        y={(boxHeight - imgSize) / 2} // center vertically
      />
    </svg>
  );
};

export default AfterEffectsIcon;
