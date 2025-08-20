
import React from 'react';

const ClapperboardIcon: React.FC<{ className?: string, style?: React.CSSProperties }> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className={className} style={style}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0-2.25l2.25 1.313M4.5 15.75l2.25-1.313M4.5 15.75l2.25 1.313M4.5 15.75V18m15-2.25l-2.25-1.313m-12.5 0l2.25 1.313M19.5 15.75l-2.25 1.313m0-2.626l2.25-1.313M19.5 15.75V18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75v-2.25m0 2.25h15M4.5 12.75v2.25m15-2.25h-15m15 0v-2.25m0 2.25v2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5v10.5h-16.5z" />
    </svg>
);

export default ClapperboardIcon;
