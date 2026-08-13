import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HERO_IMAGES } from '../data/jewelleryData';
import { ChevronDown, Compass } from 'lucide-react';

interface HeroSectionProps {
  onHoverCursor?: (text: string, isHover: boolean) => void;
}

export default function HeroSection({ onHoverCursor }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgImgRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleWordsRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for luxury page load entrance
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Background image slow reveal scale down
      tl.fromTo(
        bgImgRef.current,
        { scale: 1.25, opacity: 0, filter: 'blur(10px)' },
        { scale: 1.05, opacity: 0.85, filter: 'blur(0px)', duration: 2.2 }
      )
        // 2. Atelier badge
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 1 },
          '-=1.4'
        )
        // 3. Headline words reveal
        .fromTo(
          titleWordsRef.current?.querySelectorAll('.hero-word') || [],
          { opacity: 0, y: 40, rotateX: -30 },
          { opacity: 1, y: 0, rotateX: 0, duration: 1.4, stagger: 0.15 },
          '-=1.0'
        )
        // 4. Supporting text
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.8'
        )
        // 5. Scroll indicator
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const headline = 'Crafted to Be Remembered.';
  const words = headline.split(' ');

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black text-[#F9F8F6] select-none"
    >
      {/* Background Hero Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={bgImgRef}
          src={HERO_IMAGES.heroMain}
          alt="Aurelia Solitaire Diamond Ring"
          className="w-full h-full object-cover object-center transform-gpu origin-center opacity-0"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic Multi-layer Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-[#050505]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-transparent to-[#050505]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050505_100%)] opacity-80" />
      </div>

      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Top Heritage Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/60 backdrop-blur-md mb-8 opacity-0"
        >
          <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#FFF1C5] font-light">
            Place Vendôme · Paris
          </span>
        </div>

        {/* Main Headline */}
        <h1
          ref={titleWordsRef}
          onMouseEnter={() => onHoverCursor?.('AURELIA', true)}
          onMouseLeave={() => onHoverCursor?.('', false)}
          className="font-serif-luxury text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.06em] leading-[0.95] font-light text-[#F9F8F6] max-w-4xl cursor-default"
        >
          {words.map((word, i) => (
            <span key={i} className="hero-word inline-block mr-3 sm:mr-5">
              {word === 'Remembered.' ? (
                <span className="text-gold-gradient italic font-normal">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>

        {/* Supporting Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-8 text-sm sm:text-base md:text-lg font-light tracking-[0.15em] text-[#EAE6DF]/80 max-w-xl font-sans uppercase opacity-0"
        >
          Jewellery designed to capture moments that last forever.
        </p>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group opacity-0"
          onClick={() => {
            const nextSec = document.querySelector('#transition-section');
            nextSec?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] font-medium group-hover:text-[#FFF1C5] transition-colors">
            Scroll To Discover
          </span>
          <div className="w-6 h-10 rounded-full border border-[#D4AF37]/40 flex justify-center pt-2 group-hover:border-[#D4AF37] transition-colors">
            <div className="w-1 h-2 rounded-full bg-[#D4AF37] animate-bounce" />
          </div>
          <ChevronDown className="w-4 h-4 text-[#D4AF37] opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
}
