import React from 'react';
import { BrandLogo } from './BrandLogo';
import { BRAND_INFO } from '../data/pastryData';
import { Instagram, MessageCircle, Phone, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A120E] text-[#FAF8F5] border-t border-[#C5A059]/30 relative pt-16 pb-12 overflow-hidden">
      {/* Decorative top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Presentation Column */}
          <div className="lg:col-span-5 space-y-6">
            <BrandLogo variant="light" size="lg" />
            
            <p className="text-sm font-sans text-[#FAF8F5]/70 max-w-sm leading-relaxed font-light">
              Maison de haute pâtisserie artisanale à Tunis. Nous célébrons l'art des douceurs tunisiennes et orientales avec des ingrédients purs, des gestes séculaires et un raffinement sans concession.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#C5A059]/40 flex items-center justify-center text-[#DFCA95] hover:border-[#C5A059] hover:bg-[#C5A059]/10 transition-colors"
                aria-label="Instagram Pâtisserie Ghanem"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#25D366]/40 flex items-center justify-center text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10 transition-colors"
                aria-label="WhatsApp Pâtisserie Ghanem"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#FAF8F5]/80 hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
                aria-label="Téléphone atelier"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg tracking-wider text-[#FAF8F5] uppercase border-b border-white/10 pb-2">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs font-sans uppercase tracking-[0.18em] text-[#FAF8F5]/70">
              <li>
                <a href="#packs" className="hover:text-[#DFCA95] transition-colors">Pack Petite Fête — Gold</a>
              </li>
              <li>
                <a href="#packs" className="hover:text-[#DFCA95] transition-colors">Pack Petite Fête — Platinum</a>
              </li>
              <li>
                <a href="#packs" className="hover:text-[#DFCA95] transition-colors">Pack Petite Fête — Silver</a>
              </li>
              <li>
                <a href="#douceurs" className="hover:text-[#DFCA95] transition-colors">Baklavas d'Alep</a>
              </li>
              <li>
                <a href="#douceurs" className="hover:text-[#DFCA95] transition-colors">Kaak Warka Pur Amande</a>
              </li>
              <li>
                <a href="#douceurs" className="hover:text-[#DFCA95] transition-colors">Dattes Farcies de Prestige</a>
              </li>
              <li>
                <a href="#celebrations" className="hover:text-[#DFCA95] transition-colors">Cérémonies & Réceptions</a>
              </li>
            </ul>
          </div>

          {/* Boutique Atelier Information Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg tracking-wider text-[#FAF8F5] uppercase border-b border-white/10 pb-2">
              Atelier & Boutique
            </h4>
            
            <div className="space-y-3 text-xs font-sans text-[#FAF8F5]/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.address}</span>
              </div>
              <p className="text-[#FAF8F5]/50 pl-6">
                El Menzah 9, Tunis 1013
              </p>

              <div className="pt-2">
                <span className="block text-[#DFCA95] font-semibold uppercase tracking-wider text-[10px] mb-1">
                  Horaires
                </span>
                <p className="text-[11px] leading-relaxed">
                  {BRAND_INFO.hours}
                </p>
              </div>

              <div className="pt-2">
                <span className="block text-[#DFCA95] font-semibold uppercase tracking-wider text-[10px] mb-1">
                  Commandes Express
                </span>
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="hover:text-white font-medium text-sm transition-colors block text-[#FAF8F5]"
                >
                  {BRAND_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#FAF8F5]/50">
          <p>
            © {new Date().getFullYear()} Pâtisserie Ghanem. Tous droits réservés. Haute Pâtisserie Tunisienne.
          </p>

          <div className="flex items-center gap-6">
            <a 
              href={BRAND_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#DFCA95] transition-colors"
            >
              Instagram officiel : @patisserieghanem
            </a>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[#DFCA95] transition-colors uppercase tracking-widest text-[10px]"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
