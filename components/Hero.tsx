import React from 'react';
import { HERO_IMAGES } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-105"
        style={{ backgroundImage: `url(${HERO_IMAGES[0]})` }}
      />
      <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <span className="text-brand-gold tracking-[0.3em] text-sm uppercase mb-4 animate-fade-in-up">
          Est. 1998 • Craftsmanship Redefined
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight max-w-4xl mx-auto">
          The Art of <br/> <span className="italic text-brand-stone">Living Well</span>
        </h1>
        <p className="font-light text-gray-200 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Curating the finest Modern Italian and Mid-Century furniture directly from our ateliers to your sanctuary.
        </p>
        
        <button className="group flex items-center gap-3 border border-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-brand-black transition-all duration-300">
          Explore Collection
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-10 left-0 w-full flex justify-center gap-10 text-white/60 text-xs tracking-widest uppercase">
        <span>Worldwide Shipping</span>
        <span>•</span>
        <span>5-Year Warranty</span>
        <span>•</span>
        <span>Custom Upholstery</span>
      </div>
    </div>
  );
};