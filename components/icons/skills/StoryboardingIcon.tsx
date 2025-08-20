import React from 'react';

const StoryboardingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="98" rx="22" fill="#222222"/>
        <rect x="20" y="32" width="20" height="34" rx="3" stroke="#CCCCCC" strokeWidth="3"/>
        <rect x="44" y="32" width="20" height="34" rx="3" stroke="#CCCCCC" strokeWidth="3"/>
        <rect x="68" y="32" width="12" height="34" rx="3" stroke="#CCCCCC" strokeWidth="3"/>
        <path d="M26 50L31 44L36 50" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M48 44L56 55" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M56 44L48 55" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default StoryboardingIcon;