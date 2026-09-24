import React from 'react';
import { BRAND_INFO } from '../data/pastryData';
import { MapPin, Clock, Phone, Navigation, MessageCircle, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Pâtisserie Ghanem, 9 Rue Hassen Kenani, Menzah 9, Tunis'
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 paper-bg border-b border-[#E5DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-[#8C6A28]" />
            <span className="font-script text-2xl sm:text-3xl text-[#8C6A28]">Visiter Notre Boutique</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#251814] font-normal tracking-tight mb-4">
            L'Atelier d'El Menzah 9
          </h2>

          <p className="text-sm sm:text-base font-sans text-[#53433C] font-light leading-relaxed">
            Venez déguster et composer vos plateaux directement à notre comptoir de vente à Tunis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Information Column */}
          <div className="lg:col-span-5 bg-[#FAF7F2] p-8 sm:p-10 border border-[#E5DACB] flex flex-col justify-between">
            <div>
              <div className="pb-6 border-b border-[#E5DACB] mb-6">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-[#8C6A28] block mb-1">
                  Boutique & Laboratoire
                </span>
                <h3 className="font-serif text-2xl text-[#251814]">
                  Pâtisserie Ghanem
                </h3>
                <p className="text-xs font-sans text-[#53433C] mt-1">
                  Atelier de douceurs tunisiennes de prestige
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#C5A059] flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-[#8C6A28]" />
                  </div>
                  <div>
                    <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#251814] block">
                      Adresse
                    </span>
                    <p className="text-sm font-sans text-[#53433C] leading-snug mt-1">
                      {BRAND_INFO.address}
                    </p>
                    <span className="text-xs font-sans text-[#8C6A28] mt-0.5 block">
                      Tunis, Tunisie
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#C5A059] flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-[#8C6A28]" />
                  </div>
                  <div>
                    <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#251814] block">
                      Horaires d’Ouverture
                    </span>
                    <p className="text-sm font-sans text-[#53433C] leading-snug mt-1">
                      {BRAND_INFO.hours}
                    </p>
                    <span className="text-xs font-sans text-[#53433C]/70 mt-0.5 block italic">
                      Commandes pour événements disponibles sur rendez-vous
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#C5A059] flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-[#8C6A28]" />
                  </div>
                  <div>
                    <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#251814] block">
                      Téléphone & Commandes
                    </span>
                    <a
                      href={`tel:${BRAND_INFO.phone}`}
                      className="text-sm font-sans font-medium text-[#251814] hover:text-[#8C6A28] transition-colors block mt-1"
                    >
                      {BRAND_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-8 border-t border-[#E5DACB] space-y-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#251814] text-[#FAF8F5] text-xs font-sans font-semibold uppercase tracking-[0.22em] hover:bg-[#8C6A28] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Ouvrir l'Itinéraire Google Maps</span>
              </a>

              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 border border-[#25D366] text-[#251814] hover:bg-[#25D366]/10 text-xs font-sans font-medium uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Écrire sur WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Visual Map Representation */}
          <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#E5DACB] p-4 relative flex flex-col justify-between overflow-hidden">
            <div className="relative w-full h-[360px] lg:h-full min-h-[360px] bg-[#EBE4D8] overflow-hidden border border-[#E5DACB]">
              {/* Stylized Luxury Map Graphic Pattern */}
              <div 
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px), radial-gradient(#C5A059 1px, #EBE4D8 1px)`,
                  backgroundSize: '24px 24px',
                  backgroundPosition: '0 0, 12px 12px'
                }}
              />

              {/* Map Streets Simulation */}
              <svg className="absolute inset-0 w-full h-full stroke-[#D5C9B8] stroke-[2]" fill="none">
                <line x1="0" y1="120" x2="800" y2="120" />
                <line x1="0" y1="260" x2="800" y2="280" />
                <line x1="220" y1="0" x2="220" y2="600" />
                <line x1="480" y1="0" x2="520" y2="600" stroke="#C5A059" strokeWidth="3" />
                <circle cx="500" cy="240" r="40" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>

              {/* Pinpoint Indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#251814] text-[#C5A059] border-2 border-[#FAF8F5] shadow-2xl flex items-center justify-center animate-pulse">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="w-4 h-4 bg-[#251814] rotate-45 mx-auto -mt-2 border-r-2 border-b-2 border-[#FAF8F5]" />
                </div>
                <div className="mt-3 px-4 py-2 bg-[#FAF8F5] shadow-lg border border-[#C5A059] text-center whitespace-nowrap">
                  <span className="font-serif font-semibold text-sm text-[#251814] block">
                    Pâtisserie Ghanem
                  </span>
                  <span className="font-sans text-[10px] text-[#53433C]">
                    9 Rue Hassen Kenani, Menzah 9
                  </span>
                </div>
              </div>

              {/* Bottom Right Map Tag */}
              <div className="absolute bottom-4 right-4 z-20">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#FAF8F5]/90 backdrop-blur-sm border border-[#E5DACB] text-[11px] font-sans font-medium text-[#251814] hover:text-[#8C6A28] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Note under map */}
            <div className="pt-3 px-2 flex items-center justify-between text-[11px] font-sans text-[#53433C]">
              <span>Parking aisé à proximité de la boutique</span>
              <span className="text-[#8C6A28] font-medium">{BRAND_INFO.deliveryZone}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
