import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { AboutSection } from './components/AboutSection';
import { AIChat } from './components/AIChat';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-brand-gray text-brand-black selection:bg-brand-gold selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <AboutSection />
        <ProductGrid />
      </main>

      <AIChat />
      <Footer />
    </div>
  );
};

export default App;