import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FEATURED_COLLECTIONS_DATA } from '../data/jewelleryData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FeaturedCollectionsProps {
  onHoverCursor?: (text: string, isHover: boolean) => void;
  onSelectCategory?: (category: string) => void;
}

export default function FeaturedCollectionsReveal({
  onHoverCursor,
  onSelectCategory,
}: FeaturedCollectionsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // Create ScrollTrigger to track scroll progress across this collection section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${FEATURED_COLLECTIONS_DATA.length * 90}%`,
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const newIdx = Math.min(
            FEATURED_COLLECTIONS_DATA.length - 1,
            Math.floor(self.progress * FEATURED_COLLECTIONS_DATA.length)
          );
          setActiveIndex(newIdx);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const currentCategory = FEATURED_COLLECTIONS_DATA[activeIndex];

  return (
    <section
      id="collections"
      ref={containerRef}
      className="relative w-full h-screen bg-[#050505] overflow-hidden flex items-center justify-center select-none"
    >
      {/* Background Subtle Noise & Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-black to-[#050505] opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex flex-col justify-between py-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-[#D4AF37] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase tracking-[0.35em] font-medium">
                High Jewellery Collections
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl tracking-wide text-white font-light">
              THE SIGNATURE <span className="text-gold-gradient italic font-normal">REVEAL</span>
            </h2>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
            {FEATURED_COLLECTIONS_DATA.map((col, idx) => (
              <button
                key={col.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.25em] transition-all whitespace-nowrap ${
                  activeIndex === idx
                    ? 'bg-[#D4AF37] text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'border border-white/10 text-white/60 hover:text-white hover:border-white/30'
                }`}
              >
                {col.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Main Editorial Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
          {/* Left Text / Category Meta */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-medium">
              {currentCategory.subtitle}
            </span>

            <h3 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl tracking-wide text-white leading-none font-light">
              {currentCategory.title}
            </h3>

            <p className="text-xs sm:text-sm text-white/70 font-sans tracking-widest leading-relaxed uppercase max-w-md">
              {currentCategory.description}
            </p>

            <div className="pt-4">
              <button
                onClick={() => onSelectCategory?.(currentCategory.id)}
                onMouseEnter={() => onHoverCursor?.('EXPLORE', true)}
                onMouseLeave={() => onHoverCursor?.('', false)}
                className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#D4AF37]/50 bg-black/60 text-xs uppercase tracking-[0.25em] text-[#FFF1C5] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
              >
                <span className="absolute inset-0 bg-gold-gradient translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
                <span className="relative z-10 font-medium">Explore {currentCategory.title}</span>
                <ArrowUpRight className="w-4 h-4 relative z-10 text-[#D4AF37] group-hover:text-black transition-colors" />
              </button>
            </div>
          </div>

          {/* Right Hero Image Clip Reveal Stack */}
          <div className="lg:col-span-7 relative h-[45vh] sm:h-[55vh] md:h-[60vh] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_60px_rgba(0,0,0,0.9)]">
            {FEATURED_COLLECTIONS_DATA.map((col, idx) => (
              <div
                key={col.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  activeIndex === idx
                    ? 'opacity-100 scale-100 pointer-events-auto'
                    : 'opacity-0 scale-105 pointer-events-none'
                }`}
              >
                <img
                  ref={(el) => (imgRefs.current[idx] = el)}
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover object-center transform-gpu transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

                {/* Corner Tag */}
                <div className="absolute bottom-6 right-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.3em] text-[#FFF1C5]">
                  Atelier Archive · {idx + 1} / 4
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/50 border-t border-white/10 pt-4">
          <span>Scroll to cycle collections</span>
          <div className="flex gap-2">
            {FEATURED_COLLECTIONS_DATA.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
