
import React from 'react';
import { PROFILE_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary border-t border-primary">
      <div className="container mx-auto py-6 px-6 md:px-12 text-center text-text-secondary">
        <p>&copy; {currentYear} {PROFILE_INFO.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;