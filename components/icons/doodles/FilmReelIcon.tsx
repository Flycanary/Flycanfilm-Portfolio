
import React from 'react';

const FilmReelIcon: React.FC<{ className?: string, style?: React.CSSProperties }> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className={className} style={style}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3.75V6m0 0v2.25m0-2.25h12M6 6h2.25m1.5 0H12m1.5 0h2.25m1.5 0H18m-12 0v2.25m12-2.25v2.25M6 15v2.25m0-2.25h12m0 0v2.25m0-2.25H18m-1.5 0h-2.25m-1.5 0H12m-1.5 0H8.25m-1.5 0H6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3.75H4.5v16.5H6v-2.25h12v2.25h1.5V3.75H18v2.25H6V3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
    </svg>
);

export default FilmReelIcon;
