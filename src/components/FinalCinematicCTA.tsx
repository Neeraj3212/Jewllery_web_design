import React, { useState } from 'react';
import { HERO_IMAGES, ATELIER_LOCATIONS } from '../data/jewelleryData';
import { Sparkles, Calendar, MapPin, Send, ArrowUp } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
  onHoverCursor?: (text: string, isHover: boolean) => void;
}

export default function FinalCinematicCTA({ onOpenBooking, onHoverCursor }: FinalCTAProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#050505] text-[#F9F8F6] overflow-hidden select-none">
      {/* --- FINAL CINEMATIC CTA SCENE --- */}
      <div className="relative min-h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={HERO_IMAGES.heroMain}
            alt="Aurelia Solitaire"
            className="w-full h-full object-cover object-center brightness-50 contrast-110 scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/50 to-[#050505]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/60 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#FFF1C5]">
              Atelier Invitation
            </span>
          </div>

          <h2 className="font-serif-luxury text-5xl sm:text-7xl md:text-8xl tracking-wide leading-tight text-white font-light">
            Your story deserves something <span className="text-gold-gradient italic font-normal">timeless</span>.
          </h2>

          <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.2em] text-white/80 max-w-lg mx-auto leading-relaxed">
            Experience our private salons in Paris, Milan, New York, and Tokyo.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              onMouseEnter={() => onHoverCursor?.('BOOK SALON', true)}
              onMouseLeave={() => onHoverCursor?.('', false)}
              className="px-8 py-4 rounded-full bg-gold-gradient text-black font-semibold uppercase tracking-[0.2em] text-xs shadow-2xl shadow-[#D4AF37]/30 hover:opacity-95 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Private Viewing</span>
            </button>

            <button
              onClick={() => {
                const vault = document.querySelector('#vault');
                vault?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full border border-white/20 bg-black/50 hover:bg-white/10 text-xs uppercase tracking-[0.2em] text-white transition-all"
            >
              Discover The Collection
            </button>
          </div>
        </div>
      </div>

      {/* --- FOOTER ATELIER INFORMATION --- */}
      <div className="border-t border-white/10 bg-black/90 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Atelier Salon Locations Grid */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold block mb-6">
              International Salons & Ateliers
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {ATELIER_LOCATIONS.map((loc) => (
                <div
                  key={loc.city}
                  className="p-5 rounded-xl border border-white/5 bg-white/5 space-y-2 hover:border-[#D4AF37]/40 transition-colors"
                >
                  <div className="flex items-center gap-2 text-[#FFF1C5]">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <h4 className="font-serif-luxury text-xl tracking-wider">{loc.city}</h4>
                  </div>
                  <p className="text-xs text-white/60 font-sans tracking-wide leading-relaxed">
                    {loc.address}
                  </p>
                  <p className="text-[11px] text-[#D4AF37] font-mono tracking-widest pt-1">
                    {loc.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter & Ethics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-b border-white/10 py-12">
            {/* Gazette Newsletter */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-medium block">
                The Aurelia Gazette
              </span>
              <h4 className="font-serif-luxury text-2xl text-white font-light">
                Receive Private Invitations & Archival Releases
              </h4>
              <p className="text-xs text-white/60 font-sans tracking-wider max-w-md">
                Subscribers receive exclusive access to limited high jewellery launches, private salon viewings, and gemological publications.
              </p>

              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <span>Join</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-[#D4AF37] font-sans tracking-wider animate-fade-in">
                  Thank you. You have been added to the private Gazette registry.
                </p>
              )}
            </div>

            {/* Ethics & Sustainability Statement */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-medium block">
                Ethical Sourcing & Guarantee
              </span>
              <h4 className="font-serif-luxury text-2xl text-white font-light">
                100% Conflict-Free & Recycled 18K Gold
              </h4>
              <p className="text-xs text-white/60 font-sans tracking-wider leading-relaxed">
                Aurelia is committed to environmental stewardship. Every diamond is GIA certified and strictly compliant with the Kimberley Process. All gold used across our collections is 100% recycled 18K gold forged in certified European refiners.
              </p>
            </div>
          </div>

          {/* Copyright & Scroll To Top */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-white/40">
            <div>
              © 2026 AURELIA High Jewellery Atelier. All Rights Reserved.
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-colors group"
            >
              <span>Back To Top</span>
              <div className="w-6 h-6 rounded-full border border-white/20 group-hover:border-[#D4AF37] flex items-center justify-center">
                <ArrowUp className="w-3 h-3 text-[#D4AF37]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
