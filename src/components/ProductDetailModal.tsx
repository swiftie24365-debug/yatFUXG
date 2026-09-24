import React from 'react';
import { Product } from '../types';
import { X, Sparkles, Check, MessageCircle, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/pastryData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOrderProduct: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOrderProduct,
}) => {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Bonjour Pâtisserie Ghanem, je souhaiterais obtenir des informations et commander votre création : "${product.name}".`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-[#FAF8F5] border border-[#C5A059] shadow-2xl overflow-hidden paper-bg my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#FAF8F5]/80 hover:bg-[#251814] text-[#251814] hover:text-[#FAF8F5] transition-colors border border-[#E5DACB]"
          aria-label="Fermer la fenêtre"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Visual Left Frame */}
          <div className="relative aspect-[4/3] md:aspect-auto min-h-[260px] md:min-h-[420px] bg-[#EFE8DE] overflow-hidden border-b md:border-b-0 md:border-r border-[#E5DACB]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-4 border border-white/50 pointer-events-none" />
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-[#251814]/90 text-[#FAF8F5] text-[10px] uppercase tracking-[0.2em] font-sans">
              {product.categoryLabel}
            </div>
          </div>

          {/* Details Right Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-[#8C6A28] block mb-1">
                Atelier Pâtisserie Ghanem
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#251814] mb-2 leading-tight">
                {product.name}
              </h3>
              <p className="font-script text-xl text-[#8C6A28] mb-4">
                {product.subtitle}
              </p>

              <div className="gold-divider my-4" />

              <p className="text-xs sm:text-sm font-sans text-[#53433C] leading-relaxed mb-4 font-light">
                {product.description}
              </p>

              <p className="text-xs font-sans text-[#251814] italic mb-6">
                "{product.details}"
              </p>

              {/* Ingredients & Allergens */}
              <div className="space-y-3 mb-6 bg-[#FAF7F2] p-3.5 border border-[#E5DACB]">
                <div>
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#251814] block mb-1">
                    Ingrédients d'exception :
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.ingredients.map((ing, i) => (
                      <span key={i} className="text-[11px] font-sans px-2 py-0.5 bg-white border border-[#E5DACB] text-[#53433C]">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#53433C] block mb-1">
                    Allergènes : {product.allergens.join(', ')}
                  </span>
                </div>
              </div>

              {product.piecesOrWeight && (
                <div className="flex items-center justify-between text-xs font-sans text-[#53433C] mb-6 pt-2 border-t border-[#E5DACB]">
                  <span>Conditionnement :</span>
                  <strong className="text-[#251814] font-medium">{product.piecesOrWeight}</strong>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#E5DACB] space-y-2.5">
              <button
                onClick={() => {
                  onClose();
                  onOrderProduct(product.name);
                }}
                className="w-full py-3 px-4 bg-[#251814] text-[#FAF8F5] text-xs font-sans font-semibold uppercase tracking-[0.22em] hover:bg-[#8C6A28] transition-colors flex items-center justify-center gap-2"
              >
                <span>Commander cette Douceur</span>
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              </button>

              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 border border-[#25D366] text-[#251814] hover:bg-[#25D366]/10 text-xs font-sans font-medium uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Demander sur WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
