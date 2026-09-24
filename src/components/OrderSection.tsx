import React, { useState } from 'react';
import { BRAND_INFO, PACKS_PETITE_FETE, PRODUCTS_LIST } from '../data/pastryData';
import { MessageCircle, Phone, Calendar, User, Package, Send, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

interface OrderSectionProps {
  prefilledItem?: string;
}

export const OrderSection: React.FC<OrderSectionProps> = ({ prefilledItem = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    selectedProduct: prefilledItem || 'Pack Petite Fête — Gold',
    quantity: '1 plateau (environ 60-80 pcs)',
    preferredDate: '',
    orderType: 'retrait',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Update if prefilledItem changes from prop
  React.useEffect(() => {
    if (prefilledItem) {
      setFormData(prev => ({ ...prev, selectedProduct: prefilledItem }));
    }
  }, [prefilledItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `*COMMANDE PÂTISSERIE GHANEM*\n\n` +
      `👤 *Client :* ${formData.name || 'Client'}\n` +
      `📞 *Téléphone :* ${formData.phone || 'Non renseigné'}\n` +
      `🎁 *Sélection :* ${formData.selectedProduct}\n` +
      `⚖️ *Quantité / Convives :* ${formData.quantity}\n` +
      `📅 *Date souhaitée :* ${formData.preferredDate || 'À convenir'}\n` +
      `🚗 *Mode :* ${formData.orderType === 'retrait' ? 'Retrait à l’Atelier (El Menzah 9)' : 'Livraison Grand Tunis / Tunisie'}\n` +
      (formData.notes ? `📝 *Remarques :* ${formData.notes}\n` : '') +
      `\n_Envoyé depuis le site officiel Pâtisserie Ghanem_`
    );

    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="commander" className="py-20 md:py-32 paper-bg border-b border-[#E5DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="font-script text-2xl sm:text-3xl text-[#8C6A28]">Réservations & Commandes</span>
            <span className="w-8 h-[1px] bg-[#C5A059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#251814] font-normal tracking-tight mb-4">
            Passer Votre Commande
          </h2>

          <p className="text-sm sm:text-base font-sans text-[#53433C] font-light leading-relaxed">
            Pour garantir une fraîcheur absolue, nos douceurs sont confectionnées à la demande. Réservez votre plateau ou contactez directement nos conseillers à l'Atelier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Form Left Side */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-8 sm:p-10 border border-[#C5A059]/40 shadow-[0_15px_35px_rgba(37,24,20,0.06)]">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto text-[#8C6A28]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#251814]">Votre demande a été transmise</h3>
                <p className="text-sm font-sans text-[#53433C] max-w-md mx-auto leading-relaxed">
                  Merci <strong>{formData.name}</strong>. Notre équipe à l'Atelier d'El Menzah 9 prend en charge votre réservation pour le <strong>{formData.preferredDate || 'créneau indiqué'}</strong>. Nous vous contacterons au <strong>{formData.phone}</strong> dans les plus brefs délais.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 border border-[#251814] text-xs uppercase font-sans tracking-widest text-[#251814] hover:bg-[#251814] hover:text-[#FAF8F5] transition-colors"
                  >
                    Nouvelle Commande
                  </button>
                  <button
                    onClick={handleWhatsAppOrder}
                    className="px-6 py-2.5 bg-[#25D366] text-white text-xs uppercase font-sans tracking-widest flex items-center gap-2 hover:bg-[#1EBE5D] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirmer sur WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Client Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-[0.18em] text-[#251814] mb-2">
                      Nom & Prénom *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Selma Ben Amor"
                        className="w-full bg-[#FAF8F5] border border-[#E5DACB] focus:border-[#C5A059] px-4 py-3 text-sm font-sans text-[#251814] outline-none transition-colors"
                      />
                      <User className="w-4 h-4 text-[#53433C]/50 absolute right-3 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-[0.18em] text-[#251814] mb-2">
                      Numéro de Téléphone *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+216 -- --- ---"
                        className="w-full bg-[#FAF8F5] border border-[#E5DACB] focus:border-[#C5A059] px-4 py-3 text-sm font-sans text-[#251814] outline-none transition-colors"
                      />
                      <Phone className="w-4 h-4 text-[#53433C]/50 absolute right-3 top-3.5" />
                    </div>
                  </div>
                </div>

                {/* Product / Pack selection */}
                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-[0.18em] text-[#251814] mb-2">
                    Sélection du Produit ou Pack *
                  </label>
                  <select
                    value={formData.selectedProduct}
                    onChange={(e) => setFormData({ ...formData, selectedProduct: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E5DACB] focus:border-[#C5A059] px-4 py-3 text-sm font-sans text-[#251814] outline-none transition-colors"
                  >
                    <optgroup label="Packs Petite Fête">
                      <option value="Pack Petite Fête — Gold">Pack Petite Fête — Gold (Prestige & Cérémonie)</option>
                      <option value="Pack Petite Fête — Platinum">Pack Petite Fête — Platinum (Moderne & Poudré)</option>
                      <option value="Pack Petite Fête — Silver">Pack Petite Fête — Silver (Intime & Délicatesse)</option>
                    </optgroup>
                    <optgroup label="Douceurs & Spécialités">
                      <option value="Baklava Royale Pistache d’Alep">Baklava Royale Pistache d’Alep</option>
                      <option value="Kaak Warka Pur Amande">Kaak Warka d’Églantier</option>
                      <option value="Dattes Deglet Nour Farcies Pistache">Dattes Deglet Nour Farcies Pistache</option>
                      <option value="Dattes Farcies Noisette Pralinée">Dattes Farcies Noisette Pralinée</option>
                      <option value="Mlabes Amande de Prestige">Mlabes Amande de Prestige</option>
                      <option value="Samsa Dorée aux Pistaches">Samsa Dorée aux Pistaches</option>
                      <option value="Coffret Grand Cadeau Ghanem">Coffret Grand Cadeau Ghanem</option>
                      <option value="Composition Sur-Mesure Cérémonie">Composition Sur-Mesure Cérémonie</option>
                    </optgroup>
                  </select>
                </div>

                {/* Quantity & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-[0.18em] text-[#251814] mb-2">
                      Quantité ou Nombre de Convives
                    </label>
                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="Ex: 1 plateau (60 pcs) ou 15 convives"
                      className="w-full bg-[#FAF8F5] border border-[#E5DACB] focus:border-[#C5A059] px-4 py-3 text-sm font-sans text-[#251814] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-[0.18em] text-[#251814] mb-2">
                      Date Souhaitée de Retrait/Livraison
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#E5DACB] focus:border-[#C5A059] px-4 py-3 text-sm font-sans text-[#251814] outline-none transition-colors"
                      />
                      <Calendar className="w-4 h-4 text-[#53433C]/50 absolute right-3 top-3.5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Service type: Retrait à l'atelier vs Livraison */}
                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-[0.18em] text-[#251814] mb-2">
                    Mode de Réception
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, orderType: 'retrait' })}
                      className={`py-3 px-4 text-xs font-sans font-medium uppercase tracking-wider border transition-all ${
                        formData.orderType === 'retrait'
                          ? 'bg-[#251814] text-[#FAF8F5] border-[#251814]'
                          : 'bg-[#FAF8F5] text-[#53433C] border-[#E5DACB]'
                      }`}
                    >
                      Retrait à l'Atelier (Menzah 9)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, orderType: 'livraison' })}
                      className={`py-3 px-4 text-xs font-sans font-medium uppercase tracking-wider border transition-all ${
                        formData.orderType === 'livraison'
                          ? 'bg-[#251814] text-[#FAF8F5] border-[#251814]'
                          : 'bg-[#FAF8F5] text-[#53433C] border-[#E5DACB]'
                      }`}
                    >
                      Livraison Grand Tunis
                    </button>
                  </div>
                </div>

                {/* Special Request */}
                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-[0.18em] text-[#251814] mb-2">
                    Demande Particulière ou Message (Optionnel)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Allergies, personnalisation de ruban, événement spécial..."
                    className="w-full bg-[#FAF8F5] border border-[#E5DACB] focus:border-[#C5A059] px-4 py-3 text-sm font-sans text-[#251814] outline-none transition-colors"
                  />
                </div>

                {/* Double CTA Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-[#251814] text-[#FAF8F5] text-xs font-sans font-semibold uppercase tracking-[0.22em] hover:bg-[#8C6A28] transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Envoyer la Commande</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppOrder}
                    className="flex-1 py-4 bg-[#25D366] text-white text-xs font-sans font-semibold uppercase tracking-[0.22em] hover:bg-[#1EBE5D] transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Commander via WhatsApp</span>
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Contact & Direct Info Right Side */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Atelier Direct Contact Card */}
            <div className="bg-[#FAF7F2] p-7 border border-[#E5DACB]">
              <span className="font-script text-2xl text-[#8C6A28] block mb-1">
                L’Atelier en Direct
              </span>
              <h3 className="font-serif text-2xl text-[#251814] font-normal mb-4">
                Assistance & Commandes Spéciales
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#53433C] leading-relaxed mb-6 font-light">
                Vous organisez un mariage ou une réception importante ? Nos maîtres artisans vous accompagnent personnellement dans le choix des plateaux et le calcul des pièces.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#E5DACB]">
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-center gap-3 text-xs font-sans text-[#251814] hover:text-[#8C6A28] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full border border-[#C5A059] flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#8C6A28]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#53433C] block">Téléphone Atelier</span>
                    <strong className="font-semibold text-sm">{BRAND_INFO.phoneDisplay}</strong>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs font-sans text-[#251814] hover:text-[#25D366] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full border border-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#53433C] block">WhatsApp Express</span>
                    <strong className="font-semibold text-sm">Discuter directement</strong>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-xs font-sans text-[#251814]">
                  <div className="w-8 h-8 rounded-full border border-[#C5A059] flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#8C6A28]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#53433C] block">Adresse</span>
                    <span className="font-medium text-xs">{BRAND_INFO.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Commitment Notice */}
            <div className="p-6 bg-[#F3ECE2] border border-[#C5A059]/30">
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#8C6A28] block mb-1">
                Engagement Qualité Fraîcheur
              </span>
              <p className="text-xs font-sans text-[#53433C] leading-relaxed">
                Toutes nos pâtisseries sont préparées artisanalement avec du beurre doux de tradition, des pistaches torréfiées sur place et sans conservateurs artificiels.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
