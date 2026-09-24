import React from 'react';
import { CRAFTSMANSHIP_PILLARS, BRAND_INFO } from '../data/pastryData';
import { Sparkles, HeartHandshake, Award, Compass } from 'lucide-react';

export const BrandPhilosophy: React.FC = () => {
  return (
    <section id="histoire" className="py-20 md:py-32 paper-bg border-b border-[#E5DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Story Section: Asymmetric Double Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="p-3 sm:p-4 bg-[#FAF7F2] border border-[#E5DACB] shadow-[0_15px_40px_rgba(37,24,20,0.1)]">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop"
                    alt="L'artisanat pâtissier de Pâtisserie Ghanem"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-4 border border-white/50 pointer-events-none" />
                </div>
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 p-5 bg-[#251814] text-[#FAF8F5] max-w-xs shadow-xl hidden sm:block border border-[#C5A059]/40">
                <p className="font-serif italic text-base leading-snug mb-2">
                  "Chaque douceur doit être un écrin de mémoire et de fête."
                </p>
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#DFCA95]">
                  Maison Pâtisserie Ghanem
                </span>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#C5A059]" />
              <span className="font-script text-2xl sm:text-3xl text-[#8C6A28]">L’Héritage & La Passion</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#251814] font-normal tracking-tight mb-6">
              L'Élégance Gourmande au Cœur de Tunis
            </h2>

            <div className="space-y-4 text-sm sm:text-base font-sans text-[#53433C] font-light leading-relaxed">
              <p>
                Née d’une passion inconditionnelle pour la haute pâtisserie et les trésors de la confiserie méditerranéenne, <strong>Pâtisserie Ghanem</strong> s’est forgée une identité singulière : élever chaque recette traditionnelle au rang d’art décoratif et sensoriel.
              </p>
              <p>
                Dans notre atelier situé à El Menzah 9, nous refusons les compromis industriels. De la sélection méticuleuse des amandes fraîches mondées au dosage précis des eaux distillées de rose et d’églantier, chaque étape honore la patience et la dextérité humaine.
              </p>
              <p>
                Nos créations ne sont pas de simples pâtisseries : elles accompagnent les serments d’amour lors des fiançailles, les joies familiales des mariages et le raffinement des réceptions d’exception.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5DACB] flex items-center gap-6">
              <div>
                <span className="block font-serif text-2xl text-[#251814] font-semibold">Tunis</span>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#8C6A28]">Atelier d’Art</span>
              </div>
              <div className="h-8 w-[1px] bg-[#E5DACB]" />
              <div>
                <span className="block font-serif text-2xl text-[#251814] font-semibold">Fait Main</span>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#8C6A28]">Artisanal & Pur</span>
              </div>
              <div className="h-8 w-[1px] bg-[#E5DACB]" />
              <div>
                <span className="block font-serif text-2xl text-[#251814] font-semibold">Célébration</span>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#8C6A28]">Moments Précieux</span>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Pillars of Craftsmanship */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-script text-2xl sm:text-3xl text-[#8C6A28] block mb-1">
              Notre Savoir-Faire
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#251814] font-normal">
              Les Piliers de l’Atelier Ghanem
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CRAFTSMANSHIP_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 bg-[#FAF7F2] border border-[#E5DACB] relative hover:border-[#C5A059] transition-all duration-300"
              >
                <span className="font-script text-2xl text-[#8C6A28] block mb-2">
                  {pillar.scriptSubtitle}
                </span>
                <h4 className="font-serif text-lg text-[#251814] font-medium mb-3">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm font-sans text-[#53433C] leading-relaxed font-light">
                  {pillar.description}
                </p>
                <div className="mt-4 pt-3 border-t border-[#E5DACB]/60 flex items-center justify-between text-[10px] uppercase font-sans tracking-widest text-[#8C6A28]">
                  <span>Atelier Ghanem</span>
                  <span>0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
