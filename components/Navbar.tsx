import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Columns } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
        isScrolled ? 'bg-brand-black/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
        {/* Logo Area */}
        <div className="flex items-center gap-3 cursor-pointer group">
           <div className="border-2 border-white p-1 group-hover:bg-white group-hover:text-brand-black transition-colors duration-300">
             <Columns size={28} strokeWidth={1.5} />
           </div>
           <div className="flex flex-col">
             <span className="font-serif text-2xl tracking-widest leading-none">ACCOLADE</span>
             <span className="text-[10px] tracking-[0.4em] uppercase opacity-80 pl-1">Furniture</span>
           </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm tracking-widest font-light">
          {['Collections', 'New Arrivals', 'Bespoke', 'About Us'].map((item) => (
            <a key={item} href="#" className="hover:text-brand-gold transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-brand-gold after:transition-all hover:after:w-full">
              {item.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 cursor-pointer hover:text-brand-gold transition-colors" />
          <div className="relative cursor-pointer hover:text-brand-gold transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-2 bg-brand-gold text-brand-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-black border-t border-white/10 p-6 flex flex-col gap-6 md:hidden">
           {['Collections', 'New Arrivals', 'Bespoke', 'About Us'].map((item) => (
            <a key={item} href="#" className="text-white text-lg font-serif tracking-wider hover:text-brand-gold">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};