import { useState, useEffect } from 'react';
import Soundscape from './Soundscape';
import { Sparkles, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  currency: 'USD' | 'INR';
  setCurrency: (c: 'USD' | 'INR') => void;
}

export default function Navbar({ onOpenBooking, currency, setCurrency }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Collections', href: '#collections' },
    { label: 'Our Story', href: '#story' },
    { label: 'Interactive Atelier', href: '#inspector' },
    { label: 'Craftsmanship', href: '#craftsmanship' },
    { label: 'The Vault', href: '#vault' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'py-6 bg-gradient-to-b from-black/80 via-black/30 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 text-left focus:outline-none"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37] group-hover:rotate-45 transition-transform duration-500" />
            <div className="flex flex-col">
              <span className="font-serif-luxury text-2xl md:text-3xl tracking-[0.22em] font-light text-gold-gradient uppercase">
                AURELIA
              </span>
              <span className="text-[9px] tracking-[0.35em] text-white/50 uppercase -mt-1 font-light">
                High Jewellery Atelier
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-xs uppercase tracking-[0.25em] text-[#EAE6DF]/70 hover:text-[#FFF1C5] transition-colors duration-300 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#D4AF37] to-[#FFF1C5] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Desktop Actions & Controls */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Currency Switcher */}
            <div className="flex items-center rounded-full border border-white/10 bg-black/40 p-0.5 text-[10px] tracking-widest text-white/60">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  currency === 'USD'
                    ? 'bg-[#D4AF37] text-black font-semibold shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'hover:text-white'
                }`}
              >
                USD $
              </button>
              <button
                onClick={() => setCurrency('INR')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  currency === 'INR'
                    ? 'bg-[#D4AF37] text-black font-semibold shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'hover:text-white'
                }`}
              >
                INR ₹
              </button>
            </div>

            {/* Soundscape Atmosphere */}
            <Soundscape />

            {/* Private Viewing CTA */}
            <button
              onClick={onOpenBooking}
              className="group relative px-5 py-2.5 rounded-full overflow-hidden border border-[#D4AF37]/50 bg-gradient-to-r from-[#D4AF37]/20 to-[#997517]/20 text-xs uppercase tracking-[0.2em] font-medium text-[#FFF1C5] hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.15)] flex items-center gap-2"
            >
              <span className="absolute inset-0 bg-gold-gradient translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <Calendar className="w-3.5 h-3.5 relative z-10 text-[#D4AF37] group-hover:text-black transition-colors" />
              <span className="relative z-10">Private Viewing</span>
            </button>
          </div>

          {/* Mobile & Tablet Actions & Menu Trigger */}
          <div className="flex lg:hidden items-center gap-3">
            <Soundscape />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full border border-white/10 bg-black/60 text-white/80 hover:text-[#D4AF37] hover:border-[#D4AF37] focus:outline-none transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 border-b border-[#D4AF37]/20 lg:hidden animate-fade-in">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left font-serif-luxury text-2xl uppercase tracking-[0.2em] text-[#EAE6DF] hover:text-[#D4AF37] transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between text-xs text-white/60 uppercase tracking-widest">
              <span>Currency</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1 rounded-full border ${
                    currency === 'USD' ? 'border-[#D4AF37] text-[#D4AF37]' : 'border-white/20'
                  }`}
                >
                  USD $
                </button>
                <button
                  onClick={() => setCurrency('INR')}
                  className={`px-3 py-1 rounded-full border ${
                    currency === 'INR' ? 'border-[#D4AF37] text-[#D4AF37]' : 'border-white/20'
                  }`}
                >
                  INR ₹
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full bg-gold-gradient text-black font-semibold uppercase tracking-[0.2em] text-xs shadow-lg shadow-[#D4AF37]/20"
            >
              Book Private Salon Viewing
            </button>
          </div>
        </div>
      )}
    </>
  );
}
