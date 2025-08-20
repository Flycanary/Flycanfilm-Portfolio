import React from 'react';

const DaVinciResolveIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="98" rx="22" fill="#222222"/>
        <circle cx="38.5" cy="49" r="20" fill="#FF6B6B"/>
        <circle cx="61.5" cy="49" r="20" fill="#6B81FF" fillOpacity="0.8"/>
        <circle cx="50" cy="35" r="20" fill="#FFE66B" fillOpacity="0.8"/>
    </svg>
);

export default DaVinciResolveIcon;