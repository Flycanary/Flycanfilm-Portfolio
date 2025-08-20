import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioAssistant from './components/PortfolioAssistant';
import LightningBackground from './components/LightningBackground';
import Preloader from './components/Preloader';
import Showreel from './components/Showreel';
import ServicesModal from './components/ServicesModal';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time for assets, etc.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-primary min-h-screen font-sans antialiased relative isolate">
      <Preloader isLoading={isLoading} />
      <LightningBackground />
      <Header onNavigate={scrollToSection} onOpenServices={() => setIsServicesModalOpen(true)} />
      <main className="container mx-auto px-6 md:px-12">
        <Hero onNavigate={scrollToSection} />
        <Showreel />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <PortfolioAssistant />
      <ServicesModal isOpen={isServicesModalOpen} onClose={() => setIsServicesModalOpen(false)} />
    </div>
  );
};

export default App;