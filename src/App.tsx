/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { PackPetiteFeteSection } from './components/PackPetiteFeteSection';
import { SignatureCollections } from './components/SignatureCollections';
import { SignatureProducts } from './components/SignatureProducts';
import { CelebrationsSection } from './components/CelebrationsSection';
import { GiftingSection } from './components/GiftingSection';
import { InstagramGallery } from './components/InstagramGallery';
import { OrderSection } from './components/OrderSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Product } from './types';
import { PRODUCTS_LIST } from './data/pastryData';

export default function App() {
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);
  const [prefilledOrderItem, setPrefilledOrderItem] = useState<string>('');

  const handleOpenOrder = (itemName?: string) => {
    if (itemName) {
      setPrefilledOrderItem(itemName);
    }
    const orderElem = document.getElementById('commander');
    if (orderElem) {
      orderElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCollections = () => {
    const colElem = document.getElementById('collections');
    if (colElem) {
      colElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    const sweetsElem = document.getElementById('douceurs');
    if (sweetsElem) {
      sweetsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen paper-bg text-[#251814] flex flex-col selection:bg-[#C5A059]/30 selection:text-[#251814]">
      {/* Navigation */}
      <Header onOpenOrder={handleOpenOrder} />

      {/* Main Experience */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreCollections={handleExploreCollections}
          onOpenOrder={() => handleOpenOrder('Pack Petite Fête — Gold')}
        />

        {/* Brand Story & Craftsmanship */}
        <BrandPhilosophy />

        {/* Dedicated Pack Petite Fête (Gold, Platinum, Silver) Section */}
        <PackPetiteFeteSection
          onSelectPack={(packTitle) => handleOpenOrder(packTitle)}
        />

        {/* Signature Collections Overview */}
        <SignatureCollections
          onSelectCategory={handleSelectCategory}
        />

        {/* Signature Pastry Individual Delicacies Showcase */}
        <SignatureProducts
          onOpenProductModal={(product) => setSelectedProductModal(product)}
          onOrderProduct={(productName) => handleOpenOrder(productName)}
        />

        {/* Celebrations & Receptions */}
        <CelebrationsSection
          onPlanCelebration={(occasion) => handleOpenOrder(`Célébration : ${occasion}`)}
        />

        {/* Luxury Gifting & Coffrets */}
        <GiftingSection
          onCustomGift={() => handleOpenOrder('Coffret Cadeau Personnalisé')}
        />

        {/* Instagram Visual Gallery */}
        <InstagramGallery />

        {/* Interactive Order & WhatsApp Section */}
        <OrderSection
          prefilledItem={prefilledOrderItem}
        />

        {/* Boutique Location in El Menzah 9 */}
        <LocationSection />
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        onOrderProduct={(productName) => handleOpenOrder(productName)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
