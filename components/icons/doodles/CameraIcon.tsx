
import React from 'react';

const CameraIcon: React.FC<{ className?: string, style?: React.CSSProperties }> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className={className} style={style}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5V6.75l-1.5-1.5-1.5 1.5V4.5m1.5-1.5h1.5a1.5 1.5 0 011.5 1.5V6a1.5 1.5 0 01-1.5 1.5H9A1.5 1.5 0 017.5 6V4.5A1.5 1.5 0 019 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 4.5V6.75l1.5-1.5 1.5 1.5V4.5m-1.5-1.5h-1.5a1.5 1.5 0 00-1.5 1.5V6a1.5 1.5 0 001.5 1.5h1.5A1.5 1.5 0 0018 6V4.5A1.5 1.5 0 0016.5 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 15.91a4.5 4.5 0 01-6.32-6.32m6.32 0a4.5 4.5 0 00-6.32 6.32m6.32-6.32L9.59 9.59" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12H3m18 0h-1.5" />
    </svg>
);

export default CameraIcon;
