import { useState, useRef } from 'react';
import { CRAFTSMANSHIP_STEPS } from '../data/jewelleryData';
import { Hammer, Sparkles, ShieldCheck } from 'lucide-react';

export default function CraftsmanshipSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="craftsmanship"
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#050505] py-28 px-6 md:px-12 flex flex-col justify-center select-none"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0907] to-[#050505]" />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-3">
            <Hammer className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-[0.35em] font-medium">
              Intimate Atelier Handcraft
            </span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl tracking-wide text-white font-light">
            CRAFTED WITH <span className="text-gold-gradient italic font-normal">INTENTION</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-white/70 font-sans tracking-widest leading-relaxed uppercase">
            Over 100 hours of bench sculpting, hand-milling, and microscope diamond setting go into every single piece.
          </p>
        </div>

        {/* 3 Step Story Progression */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CRAFTSMANSHIP_STEPS.map((step) => (
            <div
              key={step.id}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 p-6 flex flex-col justify-between space-y-6 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-xl"
            >
              <div className="relative h-64 rounded-xl overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-85"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#D4AF37]/30 text-[10px] uppercase tracking-widest text-[#FFF1C5]">
                  Step 0{step.id}
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
                  {step.subtitle}
                </span>
                <h3 className="font-serif-luxury text-2xl text-white font-light">
                  {step.title}
                </h3>
                <p className="text-xs text-white/70 font-sans leading-relaxed tracking-wider">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#FFF1C5]/80 font-medium">
                <span>{step.detail}</span>
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Before/After Gold Transformation Slider */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-[#D4AF37]/30 bg-black/80 p-8 shadow-[0_0_60px_rgba(0,0,0,0.9)] space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-medium block mb-1">
                Atelier Transformation
              </span>
              <h3 className="font-serif-luxury text-2xl text-white font-light">
                Raw 18K Gold Forging vs Mirror Hand Polish
              </h3>
            </div>
            <span className="text-xs text-white/50 uppercase tracking-widest">
              Drag Slider To Compare
            </span>
          </div>

          <div className="relative h-80 rounded-2xl overflow-hidden select-none cursor-ew-resize">
            {/* After Image (Finished Polished Masterpiece) */}
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1600&auto=format&fit=crop"
              alt="Polished Masterpiece"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#D4AF37] text-[10px] uppercase tracking-widest text-[#FFF1C5] z-10">
              Finished Masterpiece
            </div>

            {/* Before Image (Raw Forging & Uncut Gem) clipped by sliderPos */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1600&auto=format&fit=crop"
                alt="Raw Gold Forging"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-widest text-white z-10">
                Raw Forged Gold
              </div>
            </div>

            {/* Drag Line Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#D4AF37] z-20 shadow-[0_0_15px_rgba(212,175,55,1)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#D4AF37] text-black font-bold flex items-center justify-center text-xs shadow-xl">
                ↔
              </div>
            </div>

            {/* Invisible Range Input Slider */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
