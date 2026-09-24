import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { BRAND_INFO } from '../data/pastryData';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenOrder: (prefillItem?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrder }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Histoire', href: '#histoire' },
    { label: 'Collections', href: '#collections' },
    { label: 'Pack Petite Fête', href: '#packs' },
    { label: 'Nos Douceurs', href: '#douceurs' },
    { label: 'Célébrations', href: '#celebrations' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Atelier', href: '#contact' },
  ];

  return (
    <>
      {/* Subtle top brand ticker */}
      <div className="bg-[#251814] text-[#FAF8F5] text-[11px] tracking-[0.2em] py-1.5 px-4 text-center uppercase font-sans font-light border-b border-[#C5A059]/20 flex items-center justify-center gap-4">
        <span>Atelier Tunis • Menzah 9</span>
        <span className="text-[#C5A059]">•</span>
        <span className="hidden sm:inline">Packs Petite Fête & Douceurs Fines</span>
        <span className="hidden sm:inline text-[#C5A059]">•</span>
        <a 
          href={`https://wa.me/${BRAND_INFO.whatsappNumber}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#DFCA95] transition-colors inline-flex items-center gap-1.5"
        >
          <MessageCircle className="w-3 h-3 text-[#C5A059]" />
          <span>WhatsApp : {BRAND_INFO.phoneDisplay}</span>
        </a>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(37,24,20,0.06)] py-3 border-b border-[#E5DACB]'
            : 'bg-[#FAF8F5] py-5 border-b border-[#E5DACB]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="transition-opacity hover:opacity-90">
            <BrandLogo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-sans font-medium uppercase tracking-[0.18em] text-[#251814]/85 hover:text-[#C5A059] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="p-2 text-[#251814]/70 hover:text-[#C5A059] transition-colors"
              title="Appeler l'Atelier"
              aria-label="Téléphone atelier"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenOrder()}
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-[12px] font-sans font-semibold uppercase tracking-[0.22em] text-[#FAF8F5] bg-[#251814] hover:bg-[#8C6A28] transition-all duration-300 shadow-sm overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Commander</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] group-hover:scale-125 transition-transform" />
              </span>
              <div className="absolute inset-0 border border-[#C5A059]/40 pointer-events-none" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => onOpenOrder()}
              className="px-3.5 py-2 text-[11px] uppercase font-sans font-semibold tracking-[0.18em] text-[#FAF8F5] bg-[#251814] sm:hidden"
            >
              Commander
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#251814] hover:text-[#C5A059] transition-colors"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FAF8F5] border-t border-[#E5DACB] shadow-2xl px-6 py-8 animate-fadeIn">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif tracking-[0.15em] text-[#251814] hover:text-[#C5A059] py-1 border-b border-[#E5DACB]/40"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOrder();
                  }}
                  className="w-full py-3.5 text-center text-xs font-sans font-semibold uppercase tracking-[0.25em] text-[#FAF8F5] bg-[#251814] hover:bg-[#8C6A28] transition-colors"
                >
                  Commander Maintenant
                </button>

                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-center text-xs font-sans font-medium uppercase tracking-[0.2em] text-[#251814] border border-[#C5A059] flex items-center justify-center gap-2 hover:bg-[#C5A059]/10"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Commander par WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
