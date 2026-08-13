import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HERO_IMAGES } from '../data/jewelleryData';

gsap.registerPlugin(ScrollTrigger);

export default function StatementTypography() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll('.statement-word');
      if (!words) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=180%',
          scrub: 0.8,
          pin: true,
        },
      });

      // Background image reveal
      tl.to(bgImageRef.current, {
        opacity: 0.6,
        scale: 1.05,
        duration: 1,
      }, 0);

      // Progressive word gold glow reveal
      tl.to(words, {
        color: '#FFF1C5',
        textShadow: '0 0 30px rgba(212,175,55,0.8)',
        stagger: 0.2,
        duration: 1.5,
      }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const statementText = 'SOME THINGS SHOULD LAST FOREVER.';
  const words = statementText.split(' ');

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#050505] overflow-hidden flex items-center justify-center text-center px-6 select-none"
    >
      {/* Background Masked Visual */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={bgImageRef}
          src={HERO_IMAGES.story3}
          alt="Diamonds Refraction"
          className="w-full h-full object-cover object-center opacity-10 transform-gpu transition-all"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-[#050505]" />
      </div>

      {/* Main Statement Typography */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.45em] text-[#D4AF37] font-medium mb-8">
          The Aurelia Credo
        </span>

        <h2
          ref={textRef}
          className="font-serif-luxury text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[1.05] font-light text-white/20 uppercase"
        >
          {words.map((word, idx) => (
            <span key={idx} className="statement-word inline-block mr-3 sm:mr-6 transition-colors">
              {word === 'FOREVER.' ? (
                <span className="text-gold-gradient italic font-normal">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </h2>

        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-12" />
      </div>
    </section>
  );
}
