import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Heart, Eye } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Modern Italian' | 'Mid-Century'>('All');

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-serif text-4xl text-brand-black mb-4">Curated Selections</h2>
            <p className="text-gray-500 font-light">Explore our latest arrivals in design excellence.</p>
          </div>
          
          <div className="flex gap-8 text-sm uppercase tracking-widest border-b border-gray-300 pb-2">
            {['All', 'Modern Italian', 'Mid-Century'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`transition-colors pb-2 -mb-2.5 border-b-2 ${filter === cat ? 'border-brand-black text-brand-black' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-200 mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[10px] uppercase tracking-wider px-3 py-1">
                    New Arrival
                  </span>
                )}

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                   <button className="bg-white p-3 rounded-full hover:bg-brand-gold hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                     <Eye size={20} />
                   </button>
                   <button className="bg-white p-3 rounded-full hover:bg-brand-gold hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                     <Heart size={20} />
                   </button>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-lg text-brand-black mb-1 group-hover:text-brand-gold transition-colors">{product.name}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{product.category}</p>
                </div>
                <span className="font-medium text-brand-black">${product.price.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <button className="inline-block border-b border-brand-black pb-1 uppercase tracking-widest text-sm hover:text-brand-gold hover:border-brand-gold transition-colors">
                View All Products
            </button>
        </div>
      </div>
    </section>
  );
};