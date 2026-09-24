import React, { useState } from 'react';
import { PACKS_PETITE_FETE } from '../data/pastryData';
import { PackPetiteFete, PackTier } from '../types';
import { Sparkles, Check, ArrowUpRight, Info } from 'lucide-react';

interface PackPetiteFeteProps {
  onSelectPack: (packTitle: string) => void;
  onViewProductDetail?: (productName: string) => void;
}

export const PackPetiteFeteSection: React.FC<PackPetiteFeteProps> = ({ onSelectPack }) => {
  const [activePackId, setActivePackId] = useState<string>('pack-gold');

  return (
    <section id="packs" className="py-20 md:py-32 paper-bg border-b border-[#E5DACB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C5A059]" />
            <span className="font-script text-2xl sm:text-3xl text-[#8C6A28]">Les Collections Emblématiques</span>
            <span className="w-6 h-[1px] bg-[#C5A059]" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#251814] font-normal tracking-tight mb-5">
            Pack Petite Fête
          </h2>

          <p className="text-base sm:text-lg font-sans text-[#53433C] font-light leading-relaxed">
            Directement inspirés de nos créations pour les célébrations d’exception, nos Packs Petite Fête déclinent l'excellence pâtissière en trois signatures chromatiques et gustatives : <strong className="font-medium text-[#8C6A28]">Gold</strong>, <strong className="font-medium text-[#766D65]">Platinum</strong> et <strong className="font-medium text-[#5B676E]">Silver</strong>.
          </p>
        </div>

        {/* 3 Dedicated Luxury Pack Cards with Visual Atmosphere */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKS_PETITE_FETE.map((pack) => {
            const isGold = pack.tier === 'gold';
            const isPlatinum = pack.tier === 'platinum';
            const isSilver = pack.tier === 'silver';

            // Background treatments based on Instagram posts:
            // Gold: Warm champagne/gold background
            // Platinum: Muted taupe / dusty mauve background
            // Silver: Soft cool grey background
            const cardBgStyle = isGold 
              ? 'bg-[#F9F4EB] border-[#C5A059]/50 shadow-[0_15px_40px_rgba(197,160,89,0.12)]' 
              : isPlatinum 
              ? 'bg-[#EFEAE5] border-[#B5A490]/50 shadow-[0_15px_40px_rgba(118,109,101,0.12)]' 
              : 'bg-[#F3F5F7] border-[#8F9CA4]/50 shadow-[0_15px_40px_rgba(143,156,164,0.12)]';

            const scriptColor = isGold 
              ? 'text-[#8C6A28]' 
              : isPlatinum 
              ? 'text-[#61574E]' 
              : 'text-[#475258]';

            const buttonStyle = isGold
              ? 'bg-[#251814] text-[#FAF8F5] hover:bg-[#8C6A28] border border-[#C5A059]'
              : isPlatinum
              ? 'bg-[#251814] text-[#FAF8F5] hover:bg-[#61574E] border border-[#B5A490]'
              : 'bg-[#251814] text-[#FAF8F5] hover:bg-[#475258] border border-[#8F9CA4]';

            return (
              <div
                key={pack.id}
                id={`pack-card-${pack.tier}`}
                className={`relative flex flex-col justify-between p-7 sm:p-9 border transition-all duration-300 hover:-translate-y-1.5 ${cardBgStyle}`}
              >
                {/* Top Badge & Tier Name */}
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-black/10 mb-6">
                    <div>
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-[#53433C] block">
                        Collection Célébration
                      </span>
                      <span className="font-serif text-2xl text-[#251814] tracking-wide">
                        {pack.title}
                      </span>
                    </div>

                    {/* Script Accent Typeface like in the Instagram posts */}
                    <div className="text-right">
                      <span className={`font-script text-3xl sm:text-4xl block leading-none ${scriptColor}`}>
                        {pack.scriptBadge}
                      </span>
                      <span className="text-[9px] font-sans uppercase tracking-widest text-[#53433C]">
                        Édition Limitée
                      </span>
                    </div>
                  </div>

                  {/* Pack Imagery Preview */}
                  <div className="relative aspect-[16/10] overflow-hidden mb-6 border border-black/10 bg-white/40">
                    <img
                      src={pack.image}
                      alt={`${pack.title} - ${pack.scriptBadge} Pâtisserie Ghanem`}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#FAF8F5]/90 backdrop-blur-sm text-[10px] font-sans uppercase tracking-wider text-[#251814] font-medium border border-[#E5DACB]">
                      {pack.pieceCount}
                    </div>
                  </div>

                  {/* Tagline & Description */}
                  <h3 className="font-serif text-lg text-[#251814] font-medium mb-2 leading-snug">
                    {pack.tagline}
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-sans text-[#53433C] leading-relaxed mb-6 font-light">
                    {pack.description}
                  </p>

                  {/* Included Products List */}
                  <div className="space-y-3 pt-4 border-t border-black/10 mb-6">
                    <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#251814] block">
                      Composition du Plateau :
                    </span>
                    {pack.selectionItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs">
                        <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${scriptColor}`} />
                        <div>
                          <span className="font-serif font-medium text-[#251814]">{item.name}</span>
                          {item.portion && (
                            <span className="text-[10px] font-sans text-[#53433C]/70 ml-1.5 font-normal">
                              ({item.portion})
                            </span>
                          )}
                          <p className="text-[11px] font-sans text-[#53433C] leading-tight mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions & Price Notice */}
                <div className="pt-6 border-t border-black/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-sans text-[#53433C]">Recommandé :</span>
                    <span className="text-xs font-sans font-medium text-[#251814]">{pack.recommendedFor}</span>
                  </div>

                  <div className="bg-white/60 p-2.5 mb-5 border border-black/5 text-center">
                    <span className="block text-[10px] uppercase font-sans tracking-widest text-[#53433C]">
                      {pack.packagingDetails}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectPack(`${pack.title} — ${pack.scriptBadge}`)}
                    className={`w-full py-3.5 px-4 text-xs font-sans font-semibold uppercase tracking-[0.22em] transition-all flex items-center justify-center gap-2 shadow-sm ${buttonStyle}`}
                  >
                    <span>Commander le Pack {pack.scriptBadge}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] font-sans text-center text-[#53433C]/80 mt-2.5">
                    Tarif & devis sur mesure selon le nombre d'invités
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customization Callout */}
        <div className="mt-14 p-6 sm:p-8 bg-[#FAF7F2] border border-[#C5A059]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#C5A059] flex items-center justify-center shrink-0 text-[#8C6A28]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#251814] font-medium">
                Besoin d'une composition sur-mesure pour votre événement ?
              </h4>
              <p className="text-xs sm:text-sm font-sans text-[#53433C]">
                Nos maîtres pâtissiers adaptent les assortiments, pièces personnalisées et plateaux pour mariages et réceptions d'envergure.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectPack('Pack Sur-Mesure Cérémonie')}
            className="shrink-0 px-6 py-3 border border-[#251814] text-[#251814] hover:bg-[#251814] hover:text-[#FAF8F5] transition-colors text-xs uppercase font-sans font-semibold tracking-[0.2em]"
          >
            Demander un Devis Cérémonie
          </button>
        </div>

      </div>
    </section>
  );
};
