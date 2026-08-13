import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeroTransition from './components/HeroTransition';
import BrandStoryPinned from './components/BrandStoryPinned';
import FeaturedCollectionsReveal from './components/FeaturedCollectionsReveal';
import JewelleryDetailInspector from './components/JewelleryDetailInspector';
import HorizontalGallery from './components/HorizontalGallery';
import CraftsmanshipSection from './components/CraftsmanshipSection';
import StatementTypography from './components/StatementTypography';
import CuratedVaultProducts from './components/CuratedVaultProducts';
import FinalCinematicCTA from './components/FinalCinematicCTA';
import AppointmentModal from './components/AppointmentModal';
import ProductDrawer from './components/ProductDrawer';

import { JewelleryItem, CollectionCard } from './types';
import { FEATURED_PRODUCTS } from './data/jewelleryData';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<JewelleryItem | null>(null);

  // Custom Cursor hover state
  const [cursorState, setCursorState] = useState({ text: '', isHovering: false });

  const handleCursorHover = (text: string, isHover: boolean) => {
    setCursorState({ text, isHovering: isHover });
  };

  useEffect(() => {
    // Initialize Lenis Smooth Scrolling for luxury award-winning momentum scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  const handleSelectCategory = (categoryId: string) => {
    const matchingItem = FEATURED_PRODUCTS.find((p) => p.category.toLowerCase().includes(categoryId.toLowerCase())) || FEATURED_PRODUCTS[0];
    setSelectedProduct(matchingItem);
  };

  const handleSelectCollectionCard = (card: CollectionCard) => {
    const matchingItem = FEATURED_PRODUCTS.find((p) => p.collection.toLowerCase().includes(card.title.toLowerCase())) || FEATURED_PRODUCTS[0];
    setSelectedProduct(matchingItem);
  };

  return (
    <div className="relative bg-[#050505] text-[#F9F8F6] font-sans overflow-x-hidden min-h-screen selection:bg-[#D4AF37] selection:text-black">
      {/* Custom Interactive Cursor */}
      <CustomCursor cursorText={cursorState.text} isHovering={cursorState.isHovering} />

      {/* Luxury Floating Header Navigation */}
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* Main Scroll Storytelling Sections */}
      <main className="relative w-full">
        {/* 1. Hero Section */}
        <HeroSection onHoverCursor={handleCursorHover} />

        {/* 2. Cinematic Scroll Zoom Transition */}
        <HeroTransition />

        {/* 3. Pinned Brand Story Sequence */}
        <BrandStoryPinned />

        {/* 4. Featured Collections Reveal */}
        <FeaturedCollectionsReveal
          onHoverCursor={handleCursorHover}
          onSelectCategory={handleSelectCategory}
        />

        {/* 5. Interactive Detail Inspector */}
        <JewelleryDetailInspector
          item={selectedProduct || FEATURED_PRODUCTS[0]}
          onOpenSpecs={(item) => setSelectedProduct(item)}
          onHoverCursor={handleCursorHover}
          currency={currency}
        />

        {/* 6. Horizontal Scroll Collection Gallery */}
        <HorizontalGallery
          onHoverCursor={handleCursorHover}
          onSelectCollection={handleSelectCollectionCard}
        />

        {/* 7. Craftsmanship Section */}
        <CraftsmanshipSection />

        {/* 8. Statement Typography Section */}
        <StatementTypography />

        {/* 9. Curated Vault Featured Products */}
        <CuratedVaultProducts
          onSelectProduct={(item) => setSelectedProduct(item)}
          onOpenBooking={() => setBookingOpen(true)}
          onHoverCursor={handleCursorHover}
          currency={currency}
        />

        {/* 10. Final Cinematic CTA & Footer */}
        <FinalCinematicCTA
          onOpenBooking={() => setBookingOpen(true)}
          onHoverCursor={handleCursorHover}
        />
      </main>

      {/* Modals & Drawers */}
      <AppointmentModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      <ProductDrawer
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenBooking={() => setBookingOpen(true)}
        currency={currency}
      />
    </div>
  );
}
