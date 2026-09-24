import React from 'react';
import { CELEBRATIONS_DATA } from '../data/pastryData';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

interface CelebrationsSectionProps {
  onPlanCelebration: (occasionTitle: string) => void;
}

export const CelebrationsSection: React.FC<CelebrationsSectionProps> = ({ onPlanCelebration }) => {
  return (
    <section id="celebrations" className="py-20 md:py-32 paper-bg border-b border-[#E5DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="font-script text-2xl sm:text-3xl text-[#8C6A28]">L’Art de Recevoir</span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#251814] font-normal tracking-tight mb-4">
            Pour Vos Plus Précieux Instants
          </h2>

          <p className="text-sm sm:text-base font-sans text-[#53433C] font-light leading-relaxed">
            Un mariage mémorable, des fiançailles éclatantes ou une réception privée de prestige : nous orchestrons l’orfèvrerie sucrée de vos tables pour éblouir chaque convive.
          </p>
        </div>

        {/* Celebrations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CELEBRATIONS_DATA.map((occ) => (
            <div
              key={occ.id}
              className="bg-[#FAF7F2] border border-[#E5DACB] flex flex-col justify-between overflow-hidden group hover:border-[#C5A059] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(37,24,20,0.08)]"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EFE8DE]">
                  <img
                    src={occ.image}
                    alt={occ.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-3 border border-white/40 pointer-events-none" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#251814]/90 text-[#FAF8F5]">
                    <span className="font-script text-lg text-[#DFCA95] block leading-none">
                      {occ.scriptLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="font-serif text-2xl text-[#251814] font-normal mb-1 group-hover:text-[#8C6A28] transition-colors">
                    {occ.title}
                  </h3>
                  <p className="font-script text-lg text-[#8C6A28] mb-3">
                    {occ.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm font-sans text-[#53433C] leading-relaxed font-light mb-6">
                    {occ.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#E5DACB]">
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#251814] block mb-2">
                      Prestations Dédiées :
                    </span>
                    {occ.curatedOfferings.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-sans text-[#53433C]">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => onPlanCelebration(occ.title)}
                  className="w-full py-3 px-4 border border-[#251814] text-[#251814] hover:bg-[#251814] hover:text-[#FAF8F5] text-xs font-sans font-semibold uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Organiser votre Réception</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
