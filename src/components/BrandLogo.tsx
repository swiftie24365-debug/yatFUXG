import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'gold' | 'monochrome';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const textColor = 
    variant === 'light' 
      ? 'text-[#FAF8F5]' 
      : variant === 'gold' 
      ? 'text-[#C5A059]' 
      : 'text-[#251814]';

  const subtitleColor = 
    variant === 'light' 
      ? 'text-[#FAF8F5]/80' 
      : variant === 'gold' 
      ? 'text-[#8C6A28]' 
      : 'text-[#8C6A28]';

  const ringColor = 
    variant === 'light' 
      ? 'stroke-[#FAF8F5]/50' 
      : 'stroke-[#C5A059]';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const titleSizes = {
    sm: 'text-sm tracking-[0.25em]',
    md: 'text-base tracking-[0.28em]',
    lg: 'text-xl tracking-[0.32em]',
    xl: 'text-2xl sm:text-3xl tracking-[0.35em]',
  };

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Refined PG Monogram Emblem */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle outer delicate ring */}
          <circle cx="50" cy="50" r="46" className={ringColor} strokeWidth="1.2" strokeDasharray="2 1.5" opacity="0.6" />
          <circle cx="50" cy="50" r="42" className={ringColor} strokeWidth="1" />
          
          {/* Cardinal decorative points */}
          <circle cx="50" cy="4" r="1.5" fill="#C5A059" />
          <circle cx="50" cy="96" r="1.5" fill="#C5A059" />
          <circle cx="4" cy="50" r="1.5" fill="#C5A059" />
          <circle cx="96" cy="50" r="1.5" fill="#C5A059" />

          {/* Interlocking Serif PG Monogram */}
          <g transform="translate(18, 20)">
            {/* P letter */}
            <path
              d="M18 10V52M18 10H34C40 10 44 14 44 21C44 28 40 32 34 32H18"
              stroke={variant === 'light' ? '#FAF8F5' : '#C5A059'}
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* P serif bases */}
            <path d="M12 10H24M12 52H24" stroke={variant === 'light' ? '#FAF8F5' : '#C5A059'} strokeWidth="2" strokeLinecap="round" />
            
            {/* G letter entwined */}
            <path
              d="M48 24C44 14 36 12 28 15C18 19 15 30 18 42C21 51 32 55 42 50C47 47 50 42 50 36H36"
              stroke={variant === 'light' ? '#FAF8F5' : '#251814'}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Small diamond highlight */}
            <path d="M49 14L52 18L49 22L46 18Z" fill="#C5A059" />
          </g>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <span className={`font-serif font-semibold uppercase text-balance ${titleSizes[size]} ${textColor} leading-tight`}>
          Pâtisserie Ghanem
        </span>
        {showSubtitle && (
          <span className={`font-sans uppercase text-[9px] sm:text-[10px] tracking-[0.3em] ${subtitleColor} font-medium mt-0.5`}>
            Atelier de Haute Pâtisserie • Tunis
          </span>
        )}
      </div>
    </div>
  );
};
