import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HORIZONTAL_GALLERY } from '../data/jewelleryData';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CollectionCard } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalGalleryProps {
  onHoverCursor?: (text: string, isHover: boolean) => void;
  onSelectCollection?: (col: CollectionCard) => void;
}

export default function HorizontalGallery({
  onHoverCursor,
  onSelectCollection,
}: HorizontalGalleryProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 120);

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: targetRef.current,
        start: 'top top',
        end: () => `+=${Math.abs(getScrollAmount())}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    }, targetRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={targetRef}
      className="relative w-full h-screen bg-[#050505] overflow-hidden flex flex-col justify-between py-16 select-none"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between border-b border-white/10 pb-6 z-20">
        <div>
          <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[10px] uppercase tracking-[0.35em] font-medium">
              Horizontal Collection Gallery
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl tracking-wide text-white font-light">
            THE ARCHIVAL <span className="text-gold-gradient italic font-normal">SUITE</span>
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/50">
          <span>Drag or Scroll Vertically</span>
          <ArrowRight className="w-4 h-4 text-[#D4AF37] animate-pulse" />
        </div>
      </div>

      {/* Horizontal Moving Track */}
      <div className="relative w-full my-auto overflow-hidden py-6">
        <div
          ref={trackRef}
          className="flex gap-8 px-6 md:px-12 w-max items-center transform-gpu"
        >
          {HORIZONTAL_GALLERY.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectCollection?.(card)}
              onMouseEnter={() => onHoverCursor?.('VIEW SUITE', true)}
              onMouseLeave={() => onHoverCursor?.('', false)}
              className="group relative w-[80vw] sm:w-[50vw] lg:w-[38vw] h-[55vh] rounded-3xl overflow-hidden border border-[#D4AF37]/30 bg-black/80 shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col justify-between p-8 sm:p-10 cursor-pointer transition-all duration-500 hover:border-[#D4AF37]"
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover object-center transform-gpu transition-transform duration-1000 ease-out group-hover:scale-110 brightness-75 group-hover:brightness-90"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Top Card Meta */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/20 pb-4">
                <span className="font-serif text-3xl sm:text-4xl text-[#FFF1C5]">
                  {card.number}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/80">
                  {card.year}
                </span>
              </div>

              {/* Bottom Card Copy */}
              <div className="relative z-10 space-y-3">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-medium block">
                  {card.tagline}
                </span>

                <h3 className="font-serif-luxury text-4xl sm:text-5xl text-white font-light tracking-wide group-hover:text-[#FFF1C5] transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm font-sans tracking-wider text-white/80 line-clamp-2 uppercase">
                  {card.description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore {card.highlightPiece}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Track Indicator */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/50 border-t border-white/10 pt-4 z-20">
        <span>01 — 04 Collections</span>
        <span>Aurelia High Jewellery Archives</span>
      </div>
    </section>
  );
}
