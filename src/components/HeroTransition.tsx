import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HERO_IMAGES } from '../data/jewelleryData';
import { Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textLeftRef = useRef<HTMLDivElement>(null);
  const textRightRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. Camera Zoom into the Macro Diamond Image
      tl.to(imageRef.current, {
        scale: 1.4,
        y: -30,
        ease: 'none',
      }, 0);

      // 2. Split Typography Moving Outwards in Parallax
      tl.to(textLeftRef.current, {
        x: -180,
        opacity: 0.2,
        ease: 'none',
      }, 0);

      tl.to(textRightRef.current, {
        x: 180,
        opacity: 0.2,
        ease: 'none',
      }, 0);

      // 3. Ambient Gold Overlay shift
      tl.to(overlayRef.current, {
        opacity: 0.85,
        background: 'radial-gradient(circle at center, rgba(212,175,55,0.18) 0%, rgba(5,5,5,0.95) 75%)',
        ease: 'none',
      }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="transition-section"
      ref={containerRef}
      className="relative w-full h-screen bg-[#050505] overflow-hidden flex items-center justify-center select-none"
    >
      {/* Background Macro Zoom Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src={HERO_IMAGES.heroZoomDetail}
          alt="Macro Solitaire Diamond Refraction"
          className="w-full h-full object-cover object-center transform-gpu origin-center brightness-75 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Dynamic Dark Vignette & Light Mesh */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-60"
        />
      </div>

      {/* Floating Story Ambient Particles */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 text-[#F9F8F6]">
        {/* Left Editorial Text Block */}
        <div ref={textLeftRef} className="max-w-md text-left">
          <div className="flex items-center gap-2 mb-3 text-[#D4AF37]">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium">
              Atelier Philosophy
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl md:text-5xl tracking-wide leading-tight text-white font-light">
            Entering the World of <span className="italic text-gold-gradient">Flawless Light</span>
          </h2>
          <p className="mt-4 text-xs md:text-sm text-white/70 tracking-widest leading-relaxed uppercase">
            Each diamond is chosen for its unique optical story, hand-selected by master gemologists under neutral north light.
          </p>
        </div>

        {/* Center Decorative Diamond Emblem */}
        <div className="w-24 h-24 rounded-full border border-[#D4AF37]/30 flex items-center justify-center backdrop-blur-md bg-black/40 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
          <div className="w-16 h-16 rounded-full border border-[#D4AF37]/60 flex items-center justify-center rotate-45">
            <span className="font-serif-luxury text-xl text-[#FFF1C5]">A</span>
          </div>
        </div>

        {/* Right Editorial Text Block */}
        <div ref={textRightRef} className="max-w-md text-right md:text-right">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-medium block mb-3">
            GIA Certified Solitaires
          </span>
          <h2 className="font-serif-luxury text-3xl md:text-5xl tracking-wide leading-tight text-white font-light">
            Crafted Beyond <span className="italic text-gold-gradient">Time</span>
          </h2>
          <p className="mt-4 text-xs md:text-sm text-white/70 tracking-widest leading-relaxed uppercase">
            Where traditional French hand-carving meets modern architectural precision.
          </p>
        </div>
      </div>
    </div>
  );
}
