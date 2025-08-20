import React, { useRef } from 'react';
import { SKILLS, PROFILE_INFO } from '../constants';
import type { Skill } from '../types';
import { useOnScreen } from '../hooks/useOnScreen';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-4xl font-bold text-center mb-12 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-accent rounded-full"></span>
    </h2>
);

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <section id="about" className="py-24">
      <div 
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="text-center">
          <SectionTitle>About Me</SectionTitle>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden shadow-2xl border-4 border-accent bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1504532242162-8a9d15024d27?q=80&w=800&h=800&fit=crop&fm=jpg&auto=format"
                alt="Abstract image representing Abhishek Singh's artistic style"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg text-text-secondary mb-8">
              {PROFILE_INFO.bio}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {SKILLS.map((skill: Skill) => (
                <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg w-28 h-28 transition-transform transform hover:-translate-y-2">
                  <div className="mb-2">
                      {skill.icon}
                  </div>
                  <span className="text-text-primary font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;