import React from 'react';
import { INSTAGRAM_POSTS, BRAND_INFO } from '../data/pastryData';
import { Instagram, ExternalLink, Heart } from 'lucide-react';

export const InstagramGallery: React.FC = () => {
  return (
    <section id="galerie" className="py-20 md:py-32 paper-bg border-b border-[#E5DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <Instagram className="w-4 h-4 text-[#8C6A28]" />
            <span className="font-script text-2xl sm:text-3xl text-[#8C6A28]">L'Univers Visuel</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#251814] font-normal tracking-tight mb-4">
            L'Atelier sur Instagram
          </h2>

          <p className="text-sm sm:text-base font-sans text-[#53433C] font-light leading-relaxed mb-6">
            Découvrez nos dernières confections, l'effervescence de l'atelier d'El Menzah 9 et les compositions de nos prestigieux Packs Petite Fête.
          </p>

          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FAF7F2] border border-[#C5A059] text-xs uppercase font-sans font-semibold tracking-[0.22em] text-[#251814] hover:bg-[#251814] hover:text-[#FAF8F5] transition-all shadow-sm"
          >
            <Instagram className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Suivre Pâtisserie Ghanem</span>
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>

        {/* Editorial Masonry/Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INSTAGRAM_POSTS.map((post, idx) => {
            // Give different cards interesting editorial heights
            const isTall = idx === 0 || idx === 4;

            return (
              <a
                key={post.id}
                href={post.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-[#FAF7F2] border border-[#E5DACB] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_35px_rgba(37,24,20,0.1)] hover:-translate-y-1`}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden bg-[#EFE8DE] ${isTall ? 'aspect-[4/5]' : 'aspect-square'}`}>
                  <img
                    src={post.imageUrl}
                    alt={post.caption}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Inner Line */}
                  <div className="absolute inset-3 border border-white/40 pointer-events-none" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#251814]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-[#FAF8F5]">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-sans uppercase tracking-widest text-[#DFCA95]">
                        @patisserieghanem
                      </span>
                      <Instagram className="w-4 h-4 text-[#C5A059]" />
                    </div>

                    <p className="font-serif text-sm italic line-clamp-3">
                      "{post.caption}"
                    </p>

                    <div className="flex items-center justify-between text-xs font-sans text-[#FAF8F5]/80 pt-2 border-t border-white/20">
                      <span className="flex items-center gap-1.5">
                        <Heart className="w-3.5 h-3.5 fill-current text-[#C5A059]" />
                        <span>{post.likes} mentions</span>
                      </span>
                      <span className="text-[11px]">{post.date}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Caption Bar */}
                <div className="p-4 bg-[#FAF7F2] border-t border-[#E5DACB]">
                  <p className="text-xs font-sans text-[#53433C] line-clamp-2 leading-relaxed">
                    {post.caption}
                  </p>
                  <span className="text-[10px] font-sans text-[#8C6A28] mt-2 block font-medium">
                    {post.tag}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Instagram handle */}
        <div className="mt-12 text-center">
          <p className="font-serif text-base text-[#53433C]">
            Partagez vos dégustations avec le mot-dièse <span className="text-[#251814] font-medium">#PatisserieGhanem</span>
          </p>
        </div>

      </div>
    </section>
  );
};
