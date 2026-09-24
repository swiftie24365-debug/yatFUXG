import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/pastryData';

interface HeroProps {
  onExploreCollections: () => void;
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCollections, onOpenOrder }) => {
  return (
    <section className="relative overflow-hidden paper-bg pt-10 pb-20 md:pt-16 md:pb-28 border-b border-[#E5DACB]">
      {/* Decorative fine gold geometry lines */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-gradient-to-b from-[#C5A059]/20 via-[#C5A059]/5 to-transparent hidden lg:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-gradient-to-b from-[#C5A059]/20 via-[#C5A059]/5 to-transparent hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High-contrast Editorial Typography & Intentional Asymmetry */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-8">
            
            {/* Subtle Brand Tag / Script Accent */}
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-[1px] w-8 bg-[#C5A059]" />
              <span className="font-script text-2xl sm:text-3xl text-[#8C6A28] tracking-wider">
                Haute Pâtisserie Tunisienne
              </span>
              <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#53433C] px-2.5 py-0.5 border border-[#C5A059]/40 bg-[#FAF7F2]">
                Menzah 9 • Tunis
              </span>
            </div>

            {/* Brand Monolith Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.08] text-[#251814] font-normal tracking-tight mb-6">
              Pâtisserie Ghanem
              <span className="block italic font-light text-3xl sm:text-4xl md:text-5xl text-[#53433C] mt-2 font-serif">
                L’art de sublimer vos plus doux instants
              </span>
            </h1>

            {/* Editorial Description */}
            <p className="text-base sm:text-lg font-sans text-[#53433C] max-w-xl leading-relaxed font-light mb-8">
              De nos baklavas royales dorées au smen pur aux anneaux immaculés de Kaak Warka, chaque création est façonnée à la main selon les traditions séculaires et les exigences de la haute pâtisserie.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreCollections}
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#251814] text-[#FAF8F5] text-xs uppercase font-sans font-semibold tracking-[0.25em] hover:bg-[#8C6A28] transition-all duration-300 shadow-[0_10px_25px_rgba(37,24,20,0.12)]"
              >
                <span>Découvrir la Collection</span>
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onOpenOrder}
                className="inline-flex items-center justify-center px-7 py-4 bg-transparent text-[#251814] border border-[#C5A059] text-xs uppercase font-sans font-medium tracking-[0.22em] hover:bg-[#C5A059]/10 transition-colors"
              >
                Commander en Ligne
              </button>
            </div>

            {/* Hallmark Trust Details */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E5DACB] w-full max-w-lg">
              <div>
                <span className="block font-serif text-xl sm:text-2xl text-[#251814] font-semibold">100%</span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#53433C]">Artisanal & Fait Main</span>
              </div>
              <div className="border-l border-[#E5DACB] pl-4">
                <span className="block font-serif text-xl sm:text-2xl text-[#251814] font-semibold">Pistache</span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#53433C]">Sélection Pure d’Alep</span>
              </div>
              <div className="border-l border-[#E5DACB] pl-4">
                <span className="block font-serif text-xl sm:text-2xl text-[#251814] font-semibold">Packs</span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#53433C]">Gold, Platinum & Silver</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Asymmetrical Composition with Luxury Shadows */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Featured Visual: Baklava Royale on Textured Paper Matting */}
              <div className="relative z-20 p-3 sm:p-4 bg-[#FAF7F2] shadow-[0_20px_50px_rgba(37,24,20,0.14)] border border-[#E5DACB]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1200&auto=format&fit=crop"
                    alt="Baklava Royale Pâtisserie Ghanem aux pistaches d'exception"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle inner gold frame */}
                  <div className="absolute inset-3 border border-[#C5A059]/40 pointer-events-none" />
                </div>
                
                {/* Visual Label Tag */}
                <div className="pt-3 pb-1 flex items-center justify-between">
                  <div>
                    <span className="block font-serif text-base text-[#251814]">Baklava Royale d’Alep</span>
                    <span className="font-script text-lg text-[#8C6A28]">Signature Pâtisserie Ghanem</span>
                  </div>
                  <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#53433C] px-2 py-1 bg-[#F3ECE2]">
                    Écrin Prestige
                  </span>
                </div>
              </div>

              {/* Secondary Floating Floating Card: Pack Petite Fête Preview */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 z-30 w-56 sm:w-64 p-3.5 bg-[#FAF8F5] border border-[#C5A059]/60 shadow-[0_15px_35px_rgba(37,24,20,0.18)] hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span className="font-script text-xl text-[#8C6A28]">Pack Petite Fête</span>
                </div>
                <p className="text-[11px] font-sans text-[#53433C] leading-snug">
                  Plateaux de fête confectionnés pour vos mariages et fiançailles.
                </p>
                <div className="mt-2.5 flex items-center justify-between text-[10px] font-sans uppercase tracking-widest text-[#251814] font-medium pt-2 border-t border-[#E5DACB]">
                  <span>Gold • Silver • Platinum</span>
                  <Sparkles className="w-3 h-3 text-[#C5A059]" />
                </div>
              </div>

              {/* Decorative Geometric Backdrop Accent */}
              <div className="absolute -top-6 -right-6 w-full h-full border border-[#C5A059]/30 pointer-events-none -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
