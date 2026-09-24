import React, { useState } from 'react';
import { PRODUCTS_LIST } from '../data/pastryData';
import { Product } from '../types';
import { Sparkles, Eye, ArrowRight } from 'lucide-react';

interface SignatureProductsProps {
  onOpenProductModal: (product: Product) => void;
  onOrderProduct: (productName: string) => void;
  selectedCategory?: string;
}

export const SignatureProducts: React.FC<SignatureProductsProps> = ({
  onOpenProductModal,
  onOrderProduct,
  selectedCategory = 'all',
}) => {
  const [filter, setFilter] = useState<string>(selectedCategory);

  const categories = [
    { id: 'all', label: 'Toutes les Créations' },
    { id: 'baklava', label: 'Baklava' },
    { id: 'kaak-warka', label: 'Kaak Warka' },
    { id: 'dattes', label: 'Dattes Farcies' },
    { id: 'amande-pistache', label: 'Douceurs Fines' },
    { id: 'coffrets', label: 'Coffrets' },
  ];

  const filteredProducts = filter === 'all'
    ? PRODUCTS_LIST
    : PRODUCTS_LIST.filter(p => p.category === filter);

  return (
    <section id="douceurs" className="py-20 md:py-32 paper-bg border-b border-[#E5DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="font-script text-2xl sm:text-3xl text-[#8C6A28]">L'Artisanat du Palais</span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#251814] font-normal tracking-tight mb-4">
            Nos Douceurs Signatures
          </h2>

          <p className="text-sm sm:text-base font-sans text-[#53433C] font-light leading-relaxed">
            Chaque pièce est une célébration de la précision artisanale, confectionnée à la commande pour préserver toute la fraîcheur des pistaches, du beurre doux et des effluves de rose.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 sm:px-5 py-2 text-xs uppercase font-sans tracking-[0.2em] transition-all ${
                filter === cat.id
                  ? 'bg-[#251814] text-[#FAF8F5] shadow-sm border border-[#251814]'
                  : 'bg-[#FAF7F2] text-[#53433C] hover:text-[#251814] border border-[#E5DACB] hover:border-[#C5A059]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#FAF7F2] border border-[#E5DACB] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_35px_rgba(37,24,20,0.08)] hover:-translate-y-1"
            >
              {/* Product Visual */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE8DE]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Visual Frame */}
                <div className="absolute inset-3 border border-white/40 pointer-events-none" />

                {/* Signature Badge */}
                {product.isSignature && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#251814]/90 text-[#FAF8F5] text-[9px] uppercase font-sans tracking-[0.25em] flex items-center gap-1.5">
                    <Sparkles className="w-2.5 h-2.5 text-[#C5A059]" />
                    <span>Signature</span>
                  </div>
                )}

                {/* Quick view overlay button */}
                <button
                  onClick={() => onOpenProductModal(product)}
                  className="absolute bottom-3 right-3 p-2 bg-[#FAF8F5]/90 hover:bg-[#251814] text-[#251814] hover:text-[#FAF8F5] transition-colors border border-[#E5DACB] text-[11px] font-sans uppercase tracking-wider flex items-center gap-1.5"
                  title="Voir les détails"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Détails</span>
                </button>
              </div>

              {/* Information */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-[#8C6A28] block mb-1">
                    {product.categoryLabel}
                  </span>
                  
                  <h3 className="font-serif text-xl sm:text-2xl text-[#251814] font-medium mb-1.5 leading-snug group-hover:text-[#8C6A28] transition-colors">
                    {product.name}
                  </h3>

                  <p className="font-script text-lg text-[#8C6A28] mb-3">
                    {product.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm font-sans text-[#53433C] leading-relaxed line-clamp-2 font-light mb-4">
                    {product.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-[#E5DACB] flex items-center justify-between gap-2">
                  <span className="text-[11px] font-sans text-[#53433C]">
                    {product.piecesOrWeight ? product.piecesOrWeight : 'Sur commande'}
                  </span>

                  <button
                    onClick={() => onOrderProduct(product.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-[0.18em] text-[#251814] hover:text-[#8C6A28] transition-colors"
                  >
                    <span>Commander</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
