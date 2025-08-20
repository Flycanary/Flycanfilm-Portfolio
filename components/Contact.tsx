import React, { useRef, useState } from 'react';
import { PROFILE_INFO } from '../constants';
import InstagramIcon from './icons/InstagramIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import MailIcon from './icons/MailIcon';
import { useOnScreen } from '../hooks/useOnScreen';
import Magnetic from './Magnetic';
import ContactFormModal from './ContactFormModal';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-4xl font-bold text-center mb-12 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-accent rounded-full"></span>
    </h2>
);

const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="py-24">
      <div
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="text-center">
          <SectionTitle>Get In Touch</SectionTitle>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12">
            I'm currently open to new opportunities and collaborations. Feel free to reach out to me!
          </p>
        </div>

        <div className="max-w-xl mx-auto text-center">
          <Magnetic>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-accent text-text-primary text-xl font-bold py-4 px-10 rounded-lg hover:bg-accent-hover transition-transform transform hover:scale-105 shadow-lg mb-12"
            >
              Say Hello
            </button>
          </Magnetic>
          <div className="flex justify-center items-center space-x-8">
              <Magnetic>
                <a 
                  href={`mailto:${PROFILE_INFO.contactEmail}`} 
                  className="text-text-secondary hover:text-accent transition-colors" 
                  aria-label="Email"
                >
                    <MailIcon className="w-10 h-10" />
                </a>
              </Magnetic>
              <Magnetic>
                <a 
                  href={`https://instagram.com/${PROFILE_INFO.instagramUsername}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-text-secondary hover:text-accent transition-colors" 
                  aria-label="Instagram"
                >
                    <InstagramIcon className="w-10 h-10" />
                </a>
              </Magnetic>
              <Magnetic>
                <a 
                  href={`https://linkedin.com/in/${PROFILE_INFO.linkedinUsername}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-text-secondary hover:text-accent transition-colors" 
                  aria-label="LinkedIn"
                >
                    <LinkedInIcon className="w-10 h-10" />
                </a>
              </Magnetic>
          </div>
        </div>
      </div>
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Contact;