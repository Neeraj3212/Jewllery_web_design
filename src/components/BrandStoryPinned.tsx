import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HERO_IMAGES } from '../data/jewelleryData';

gsap.registerPlugin(ScrollTrigger);

export default function BrandStoryPinned() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scene1Ref = useRef<HTMLDivElement>(null);
  const scene2Ref = useRef<HTMLDivElement>(null);
  const scene3Ref = useRef<HTMLDivElement>(null);
  const scene4Ref = useRef<HTMLDivElement>(null);

  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);
  const img4Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=350%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // SCENE 1 -> SCENE 2
      tl.to(scene1Ref.current, {
        opacity: 0,
        y: -50,
        scale: 0.95,
        duration: 1,
      })
        .fromTo(
          scene2Ref.current,
          { opacity: 0, y: 80, scale: 1.1 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2 }
        )
        .fromTo(
          img2Ref.current,
          { scale: 1.3, filter: 'blur(8px)' },
          { scale: 1.0, filter: 'blur(0px)', duration: 1.2 },
          '<'
        );

      // SCENE 2 -> SCENE 3
      tl.to(scene2Ref.current, {
        opacity: 0,
        y: -50,
        scale: 0.95,
        duration: 1,
      })
        .fromTo(
          scene3Ref.current,
          { opacity: 0, y: 80, scale: 1.1 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2 }
        )
        .fromTo(
          img3Ref.current,
          { scale: 1.3, filter: 'blur(8px)' },
          { scale: 1.0, filter: 'blur(0px)', duration: 1.2 },
          '<'
        );

      // SCENE 3 -> SCENE 4
      tl.to(scene3Ref.current, {
        opacity: 0,
        y: -50,
        scale: 0.95,
        duration: 1,
      })
        .fromTo(
          scene4Ref.current,
          { opacity: 0, y: 80, scale: 1.1 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2 }
        )
        .fromTo(
          img4Ref.current,
          { scale: 1.3, filter: 'blur(8px)' },
          { scale: 1.0, filter: 'blur(0px)', duration: 1.2 },
          '<'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="story"
      ref={sectionRef}
      className="relative w-full h-screen bg-[#050505] overflow-hidden flex items-center justify-center select-none"
    >
      {/* Background Gold Ambient Radial Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* --- SCENE 1 --- */}
      <div
        ref={scene1Ref}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-medium mb-6">
          CHAPTER I · THE CREATION
        </span>
        <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-8xl tracking-wider leading-tight text-white max-w-4xl font-light">
          "Every piece begins with a <span className="text-gold-gradient italic font-normal">story</span>."
        </h2>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-8" />
      </div>

      {/* --- SCENE 2 --- */}
      <div
        ref={scene2Ref}
        className="absolute inset-0 flex items-center justify-center px-6 z-10 opacity-0 pointer-events-none"
      >
        <div className="relative w-full max-w-5xl h-[70vh] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_80px_rgba(0,0,0,0.9)] flex items-center justify-center">
          <img
            ref={img2Ref}
            src={HERO_IMAGES.story1}
            alt="A Moment"
            className="absolute inset-0 w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="relative z-20 text-center px-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FFF1C5] font-light block mb-2">
              CHAPTER II
            </span>
            <h3 className="font-serif-luxury text-5xl sm:text-7xl md:text-9xl tracking-widest text-white uppercase font-light">
              "A <span className="text-gold-gradient italic">moment</span>."
            </h3>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/70 mt-4 max-w-md mx-auto">
              Captured in solid gold and cut by hands that accept nothing less than perfection.
            </p>
          </div>
        </div>
      </div>

      {/* --- SCENE 3 --- */}
      <div
        ref={scene3Ref}
        className="absolute inset-0 flex items-center justify-center px-6 z-10 opacity-0 pointer-events-none"
      >
        <div className="relative w-full max-w-5xl h-[70vh] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_80px_rgba(0,0,0,0.9)] flex items-center justify-center">
          <img
            ref={img3Ref}
            src={HERO_IMAGES.story2}
            alt="A Memory"
            className="absolute inset-0 w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="relative z-20 text-center px-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FFF1C5] font-light block mb-2">
              CHAPTER III
            </span>
            <h3 className="font-serif-luxury text-5xl sm:text-7xl md:text-9xl tracking-widest text-white uppercase font-light">
              "A <span className="text-gold-gradient italic">memory</span>."
            </h3>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/70 mt-4 max-w-md mx-auto">
              Refracting light from anniversaries, milestones, and vows that endure forever.
            </p>
          </div>
        </div>
      </div>

      {/* --- SCENE 4 --- */}
      <div
        ref={scene4Ref}
        className="absolute inset-0 flex items-center justify-center px-6 z-10 opacity-0 pointer-events-none"
      >
        <div className="relative w-full max-w-5xl h-[70vh] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_80px_rgba(0,0,0,0.9)] flex items-center justify-center">
          <img
            ref={img4Ref}
            src={HERO_IMAGES.story4}
            alt="A Piece of You"
            className="absolute inset-0 w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="relative z-20 text-center px-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FFF1C5] font-light block mb-2">
              CHAPTER IV · THE LEGACY
            </span>
            <h3 className="font-serif-luxury text-5xl sm:text-7xl md:text-9xl tracking-widest text-white uppercase font-light">
              "A piece of <span className="text-gold-gradient italic">you</span>."
            </h3>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/80 mt-4 max-w-lg mx-auto font-light">
              An intimate physical extension of your elegance, worn every day with silent pride.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">Scroll Story</span>
      </div>
    </div>
  );
}
