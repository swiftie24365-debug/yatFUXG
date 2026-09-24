import React from 'react';
import { Gift, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface GiftingSectionProps {
  onCustomGift: () => void;
}

export const GiftingSection: React.FC<GiftingSectionProps> = ({ onCustomGift }) => {
  return (
    <section className="py-20 md:py-28 bg-[#F3ECE2] border-b border-[#E5DACB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#C5A059]/40 p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(37,24,20,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <Gift className="w-4 h-4 text-[#8C6A28]" />
                <span className="font-script text-2xl text-[#8C6A28]">L’Art d’Offrir</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#251814] font-normal tracking-tight mb-4">
                Écrins & Coffrets d'Exception
              </h2>

              <p className="text-sm sm:text-base font-sans text-[#53433C] font-light leading-relaxed mb-6">
                Chaque coffret Pâtisserie Ghanem est confectionné en carton rigide haute densité, habillé d'un papier texturé ivoire ou taupe, estampé de notre monogramme doré à chaud et fermé d'un ruban en satin ou velours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-[#FAF7F2] border border-[#E5DACB]">
                  <span className="font-serif text-base text-[#251814] block font-medium mb-1">
                    Coffrets Personnalisés
                  </span>
                  <p className="text-xs font-sans text-[#53433C]">
                    Composez votre sélection selon les goûts : pistache pure, Kaak Warka, dattes farcies et assortiments fins.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF7F2] border border-[#E5DACB]">
                  <span className="font-serif text-base text-[#251814] block font-medium mb-1">
                    Commandes Entreprises & VIP
                  </span>
                  <p className="text-xs font-sans text-[#53433C]">
                    Cartes de vœux calligraphiées, personnalisation de rubans et expéditions coordonnées.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onCustomGift}
                  className="px-8 py-4 bg-[#251814] text-[#FAF8F5] text-xs font-sans font-semibold uppercase tracking-[0.22em] hover:bg-[#8C6A28] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Créer Votre Coffret Cadeau</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <span className="text-xs font-sans text-[#53433C] text-center sm:text-left">
                  Disponible dès 500g jusqu'aux plateaux cérémoniaux monumentaux.
                </span>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative">
              <div className="p-3 bg-[#FAF7F2] border border-[#E5DACB] shadow-lg">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop"
                    alt="Coffret Cadeau Prestige Pâtisserie Ghanem"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-3 border border-white/50 pointer-events-none" />
                </div>
                <div className="p-3 text-center">
                  <span className="font-serif text-base text-[#251814] block">Coffret Carré Prestige Or</span>
                  <span className="font-script text-lg text-[#8C6A28]">Présentation Signature Pâtisserie Ghanem</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
