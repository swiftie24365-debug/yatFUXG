import React from 'react';
import { SIGNATURE_COLLECTIONS } from '../data/pastryData';
import { CollectionCategory } from '../types';
import { ArrowRight } from 'lucide-react';

interface SignatureCollectionsProps {
  onSelectCategory: (categoryId: string) => void;
}

export const SignatureCollections: React.FC<SignatureCollectionsProps> = ({ onSelectCategory }) => {
  return (
    <section id="collections" className="py-20 md:py-32 paper-bg border-b border-[#E5DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#C5A059]" />
              <span className="font-script text-2xl sm:text-3xl text-[#8C6A28]">Nos Créations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#251814] font-normal tracking-tight">
              Les Collections Signatures
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-sans text-[#53433C] font-light leading-relaxed">
            Chaque collection incarne une facette de notre savoir-faire : l'or croustillant des pâtes feuilletées, la blancheur veloutée du Kaak Warka et la générosité des fruits nobles.
          </p>
        </div>

        {/* Large Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SIGNATURE_COLLECTIONS.map((col, index) => {
            // First 2 items get slightly larger visual presence on desktop
            const isFeatured = index === 0;

            return (
              <div
                key={col.id}
                className={`group relative bg-[#FAF7F2] border border-[#E5DACB] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_40px_rgba(37,24,20,0.09)] ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Visual Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EFE8DE]">
                  <img
                    src={col.image}
                    alt={`${col.name} - Pâtisserie Ghanem`}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Inner Border */}
                  <div className="absolute inset-4 border border-white/40 pointer-events-none" />
                  
                  {/* Script Tag in Corner */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#FAF8F5]/90 backdrop-blur-sm border border-[#C5A059]/40">
                    <span className="font-script text-xl text-[#8C6A28]">
                      {col.scriptAccent}
                    </span>
                  </div>
                </div>

                {/* Editorial Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-[#8C6A28] block mb-1">
                      {col.tagline}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#251814] font-normal mb-3 group-hover:text-[#8C6A28] transition-colors">
                      {col.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-[#53433C] leading-relaxed font-light mb-6">
                      {col.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E5DACB] flex items-center justify-between">
                    <span className="text-[11px] font-sans uppercase tracking-wider text-[#53433C]">
                      Spécialité : <strong className="font-medium text-[#251814]">{col.featuredItem}</strong>
                    </span>

                    <button
                      onClick={() => onSelectCategory(col.id)}
                      className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-[0.18em] text-[#251814] group-hover:text-[#8C6A28] transition-colors"
                    >
                      <span>Explorer</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
