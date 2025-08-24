import React from 'react';
import cinema4dLogo from './icons8-cinema-4d-48.png'; // your PNG

const Cinema4DIcon: React.FC<{ className?: string }> = ({ className }) => {
  const boxWidth = 100;
  const boxHeight = 98;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${boxWidth} ${boxHeight}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={boxWidth} height={boxHeight} rx="22" fill="#222222" />
      <image
        href={cinema4dLogo}
        x="0"
        y="0"
        width={boxWidth}
        height={boxHeight}
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
};

export default Cinema4DIcon;
