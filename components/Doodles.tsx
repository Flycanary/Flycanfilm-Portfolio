
import React from 'react';
import CameraIcon from './icons/doodles/CameraIcon';
import ClapperboardIcon from './icons/doodles/ClapperboardIcon';
import FilmReelIcon from './icons/doodles/FilmReelIcon';
import PlayIcon from './icons/doodles/PlayIcon';
import SquiggleIcon from './icons/doodles/SquiggleIcon';

const Doodles: React.FC = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            {/* Top Left */}
            <CameraIcon className="absolute top-[8%] left-[10%] w-24 h-24 text-text-secondary opacity-[0.04] animate-float" />
            
            {/* Top Right */}
            <ClapperboardIcon className="absolute top-[15%] right-[8%] w-28 h-28 text-text-secondary opacity-[0.04] animate-sway" style={{ animationDelay: '1s' }}/>
            
            {/* Mid Left */}
            <PlayIcon className="absolute top-[50%] left-[15%] w-16 h-16 text-text-secondary opacity-[0.04] animate-pulse-subtle" />

            {/* Mid Right */}
            <SquiggleIcon className="absolute top-[55%] right-[12%] w-20 h-20 text-text-secondary opacity-[0.04] animate-rotate-slow" style={{ animationDelay: '3s' }}/>

            {/* Bottom Left */}
            <FilmReelIcon className="absolute bottom-[10%] left-[5%] w-32 h-32 text-text-secondary opacity-[0.04] animate-rotate-slow" />
            
            {/* Bottom Right */}
            <CameraIcon className="absolute bottom-[15%] right-[5%] w-20 h-20 text-text-secondary opacity-[0.04] animate-float" style={{ animationDelay: '2s' }} />

            {/* Floating near center - but not directly in the way */}
            <PlayIcon className="absolute top-[30%] right-[40%] w-12 h-12 text-text-secondary opacity-[0.04] animate-pulse-subtle" style={{ animationDelay: '4s' }} />
            <SquiggleIcon className="absolute bottom-[25%] left-[35%] w-16 h-16 text-text-secondary opacity-[0.04] animate-sway" />
        </div>
    );
};

export default Doodles;