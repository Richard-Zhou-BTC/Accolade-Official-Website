import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Factory Craftsmanship" 
                    className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-brand-stone p-8 hidden md:flex flex-col justify-center">
                <h4 className="font-serif text-3xl mb-4 text-brand-black">Authentic Quality</h4>
                <p className="font-light text-sm leading-relaxed text-gray-800">
                    Sourced directly from our dedicated facilities in China, ensuring cost-efficiency without compromising the rigorous standards of Italian design principles.
                </p>
             </div>
          </div>
          
          <div className="pl-0 md:pl-10">
            <span className="text-brand-gold uppercase tracking-[0.2em] text-sm mb-4 block">Our Heritage</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-black mb-8 leading-tight">
              Bridging Eastern Efficiency with <br/> <span className="italic">Western Elegance</span>
            </h2>
            <p className="text-gray-600 font-light leading-relaxed mb-6">
              At ACCOLADE FURNITURE, we believe luxury should be accessible. By controlling the entire manufacturing process, we deliver mid-to-high-end furniture that rivals luxury European brands.
            </p>
            <p className="text-gray-600 font-light leading-relaxed mb-10">
              Whether you are drawn to the clean lines of Modern Italian aesthetics or the nostalgic warmth of Mid-Century pieces, every item is a testament to precision engineering and artistic vision.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h5 className="font-serif text-xl mb-2">Sustainable</h5>
                    <p className="text-xs text-gray-500 leading-relaxed">Responsibly sourced timbers and eco-friendly manufacturing processes.</p>
                </div>
                <div>
                    <h5 className="font-serif text-xl mb-2">Bespoke</h5>
                    <p className="text-xs text-gray-500 leading-relaxed">Custom upholstery and finish options available for wholesale partners.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};