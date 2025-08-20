import React from 'react';
import { PROFILE_INFO } from '../constants';
import InstagramIcon from './icons/InstagramIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import Magnetic from './Magnetic';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const AnimatedText: React.FC<{ text: string, className?: string, baseDelay?: number }> = ({ text, className, baseDelay = 0 }) => {
  return (
    <span className={className}>
      {text.split(' ').map((word, index) => (
        <span key={index} className="inline-block overflow-hidden pb-2 -mb-2">
          <span
            className="inline-block animate-reveal"
            style={{ animationDelay: `${baseDelay + index * 0.1}s` }}
          >
            {word}&nbsp;
          </span>
        </span>
      ))}
    </span>
  );
};


const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const introText = "Hey, I'm";
  const nameText = PROFILE_INFO.name;
  const introWords = introText.split(' ').length;
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          <AnimatedText text={introText} baseDelay={0.5} />
          <span className="text-accent">
            <AnimatedText text={nameText} baseDelay={0.5 + introWords * 0.1} />
          </span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-text-secondary">
          <AnimatedText text={PROFILE_INFO.title} baseDelay={0.5 + (introWords + nameText.split(' ').length) * 0.1} />
        </h2>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
          I bring ideas to life through motion and cinematic storytelling.
        </p>
        <div className="flex justify-center items-center gap-6 pt-4">
          <Magnetic>
            <button
              onClick={() => onNavigate('projects')}
              className="bg-accent text-text-primary font-bold py-3 px-8 rounded-lg hover:bg-accent-hover transition-transform transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
          </Magnetic>
          <Magnetic>
            <a
              href={`https://instagram.com/${PROFILE_INFO.instagramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-8 h-8" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={`https://linkedin.com/in/${PROFILE_INFO.linkedinUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-8 h-8" />
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default Hero;