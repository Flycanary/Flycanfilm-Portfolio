import React from 'react';
import premiereLogo from './icons8-adobe-premiere-pro-48.png'; // your PNG

const PremiereProIcon: React.FC<{ className?: string }> = ({ className }) => {
  const boxWidth = 100;
  const boxHeight = 98;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${boxWidth} ${boxHeight}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={boxWidth} height={boxHeight} rx="22" fill="#1A0023" />
      <image
        href={premiereLogo}
        x="0"
        y="0"
        width={boxWidth}
        height={boxHeight}
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
};

export default PremiereProIcon;
