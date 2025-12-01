import React from 'react';
import { Columns, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
                <Columns className="text-brand-gold" size={24} />
                <span className="font-serif text-xl tracking-widest">ACCOLADE</span>
            </div>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Redefining interiors with superior craftsmanship and timeless aesthetics. From our factory to your home.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Collections</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Modern Italian</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Mid-Century</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Contemporary</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Bespoke Orders</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm font-light mb-4">Subscribe for design updates and exclusive factory offers.</p>
            <div className="flex border-b border-gray-700 pb-2">
              <input type="email" placeholder="Email Address" className="bg-transparent outline-none flex-1 text-sm text-white placeholder-gray-600"/>
              <button className="text-xs uppercase tracking-widest hover:text-brand-gold">Join</button>
            </div>
            <div className="flex gap-4 mt-8">
               <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
               <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
               <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Accolade Furniture. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};