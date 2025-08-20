import React from 'react';

const Cinema4DIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="98" rx="22" fill="#222222"/>
        <rect x="22" y="21" width="56" height="56" rx="10" fill="#4F85FF"/>
        <path d="M50 35C49.1667 38.5 45.6 47.4 39 49.5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <path d="M60.5 63C61.3333 59.5 64.9 50.6 71.5 48.5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
    </svg>
);

export default Cinema4DIcon;