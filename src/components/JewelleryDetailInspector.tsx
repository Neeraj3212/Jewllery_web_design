import { useState, useRef } from 'react';
import { Sparkles, Eye, ShieldCheck, Award, Layers, Sun, Flame, Moon } from 'lucide-react';
import { JewelleryItem } from '../types';

interface InspectorProps {
  item?: JewelleryItem;
  onOpenSpecs?: (item: JewelleryItem) => void;
  onHoverCursor?: (text: string, isHover: boolean) => void;
  currency: 'USD' | 'INR';
}

export default function JewelleryDetailInspector({
  item,
  onOpenSpecs,
  onHoverCursor,
  currency,
}: InspectorProps) {
  const [viewAngle, setViewAngle] = useState<'front' | 'side' | 'macro'>('front');
  const [lighting, setLighting] = useState<'daylight' | 'candlelight' | 'spotlight'>('candlelight');
  const [activeCallout, setActiveCallout] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const defaultItem: JewelleryItem = item || {
    id: 'aurora-solitaire',
    name: 'Aurora Crown Solitaire Ring',
    category: 'Rings',
    collection: 'Signature Solitaire',
    priceUSD: 14500,
    priceINR: '₹12,15,000',
    primaryImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1600&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1600&auto=format&fit=crop',
    materials: ['18K Yellow Gold', 'Platinum'],
    caratWeight: '2.50 Carats',
    gemstone: 'Oval Cut Flawless Diamond',
    description: 'A masterpiece of precision light refractions held in ultra-slender invisible prongs with a hidden pavé halo.',
    craftingHours: 94,
    specs: {
      cut: 'Oval Brilliant Cut',
      clarity: 'VVS1 Flawless',
      color: 'D Colorless',
      goldKarat: '18K Recycled Solid Gold',
      origin: 'Ethically Mined Botswana / GIA Certified',
    },
  };

  const callouts = [
    {
      id: 1,
      x: '32%',
      y: '35%',
      title: '2.5ct Flawless Diamond',
      desc: 'D-Colorless GIA certified central oval stone with 58 precision facets.',
    },
    {
      id: 2,
      x: '68%',
      y: '45%',
      title: 'Invisible Micro-Pavé Halo',
      desc: '32 micro-set diamonds concealed beneath the basket for multi-angle shimmer.',
    },
    {
      id: 3,
      x: '50%',
      y: '72%',
      title: '18K Recycled Solid Gold',
      desc: 'Forged in Paris atelier with 100% ethically sourced recycled yellow gold.',
    },
    {
      id: 4,
      x: '75%',
      y: '80%',
      title: 'Atelier Serial Hallmark',
      desc: 'Laser-engraved custom serial number verifying lifetime GIA registry.',
    },
  ];

  const getCurrentImage = () => {
    if (viewAngle === 'macro') return 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1600&auto=format&fit=crop';
    if (viewAngle === 'side') return 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1600&auto=format&fit=crop';
    return defaultItem.primaryImage;
  };

  const getLightingFilter = () => {
    if (lighting === 'candlelight') return 'sepia(25%) contrast(110%) brightness(95%)';
    if (lighting === 'spotlight') return 'contrast(125%) brightness(105%) hue-rotate(-10deg)';
    return 'brightness(100%) contrast(100%)';
  };

  return (
    <section
      id="inspector"
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#050505] py-24 px-6 md:px-12 flex flex-col justify-center select-none"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-3">
            <Eye className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-[0.35em] font-medium">
              Digital Showroom Inspector
            </span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl tracking-wide text-white font-light">
            EXAMINE THE <span className="text-gold-gradient italic font-normal">CRAFT</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-white/70 uppercase tracking-widest font-sans">
            Hover or tap hotspots to inspect 360° architectural craftsmanship.
          </p>
        </div>

        {/* Interactive Canvas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/60 rounded-3xl border border-[#D4AF37]/20 p-6 md:p-10 backdrop-blur-xl shadow-[0_0_80px_rgba(0,0,0,0.8)]">
          {/* Main Visual Stage with Hotspots */}
          <div
            className="lg:col-span-8 relative h-[50vh] sm:h-[60vh] rounded-2xl overflow-hidden border border-white/10 group bg-[#080808] flex items-center justify-center"
            onMouseEnter={() => onHoverCursor?.('INSPECT', true)}
            onMouseLeave={() => onHoverCursor?.('', false)}
          >
            <img
              src={getCurrentImage()}
              alt={defaultItem.name}
              className="w-full h-full object-cover object-center transition-all duration-700 ease-out transform group-hover:scale-105"
              style={{ filter: getLightingFilter() }}
              referrerPolicy="no-referrer"
            />

            {/* Interactive Hotspot Overlay Pins */}
            {callouts.map((c) => (
              <div
                key={c.id}
                style={{ left: c.x, top: c.y }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/pin"
                onClick={() => setActiveCallout(activeCallout === c.id ? null : c.id)}
              >
                <div className="relative flex items-center justify-center cursor-pointer">
                  <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#D4AF37] opacity-60"></span>
                  <div className="relative w-6 h-6 rounded-full bg-black/80 border border-[#D4AF37] flex items-center justify-center text-[#FFF1C5] text-[10px] font-bold shadow-[0_0_12px_rgba(212,175,55,0.8)]">
                    {c.id}
                  </div>
                </div>

                {/* Hotspot Card Popup */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-56 p-3.5 rounded-xl glass-panel border border-[#D4AF37]/40 shadow-2xl transition-all duration-300 z-30 pointer-events-none ${
                    activeCallout === c.id
                      ? 'opacity-100 scale-100 pointer-events-auto'
                      : 'opacity-0 scale-90 group-hover/pin:opacity-100 group-hover/pin:scale-100 group-hover/pin:pointer-events-auto'
                  }`}
                >
                  <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] block font-semibold mb-1">
                    Callout 0{c.id}
                  </span>
                  <h4 className="font-serif-luxury text-sm text-white font-medium mb-1">
                    {c.title}
                  </h4>
                  <p className="text-[10px] text-white/80 leading-relaxed font-sans">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Virtual Lighting Mode Badge */}
            <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/70 border border-white/10 text-[9px] uppercase tracking-[0.25em] text-[#FFF1C5] backdrop-blur-md flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Lighting: {lighting}</span>
            </div>
          </div>

          {/* Controls & Specs Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-medium block mb-2">
                {defaultItem.collection}
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
                {defaultItem.name}
              </h3>
              <p className="text-xl text-gold-gradient font-serif mt-2">
                {currency === 'USD' ? `$${defaultItem.priceUSD.toLocaleString()}` : defaultItem.priceINR}
              </p>
              <p className="mt-4 text-xs text-white/70 font-sans tracking-wider leading-relaxed">
                {defaultItem.description}
              </p>
            </div>

            {/* View Angle Switcher */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.25em] text-white/50 block">
                Perspective Angle
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setViewAngle('front')}
                  className={`py-2 rounded-lg text-[10px] uppercase tracking-widest transition-all ${
                    viewAngle === 'front'
                      ? 'bg-[#D4AF37] text-black font-semibold'
                      : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  Front Table
                </button>
                <button
                  onClick={() => setViewAngle('side')}
                  className={`py-2 rounded-lg text-[10px] uppercase tracking-widest transition-all ${
                    viewAngle === 'side'
                      ? 'bg-[#D4AF37] text-black font-semibold'
                      : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  Side Profile
                </button>
                <button
                  onClick={() => setViewAngle('macro')}
                  className={`py-2 rounded-lg text-[10px] uppercase tracking-widest transition-all ${
                    viewAngle === 'macro'
                      ? 'bg-[#D4AF37] text-black font-semibold'
                      : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  Macro Prongs
                </button>
              </div>
            </div>

            {/* Virtual Lighting Switcher */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.25em] text-white/50 block">
                Atelier Lighting
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setLighting('candlelight')}
                  className={`py-2 rounded-lg text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all ${
                    lighting === 'candlelight'
                      ? 'bg-[#D4AF37] text-black font-semibold'
                      : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  <Flame className="w-3 h-3" /> Candlelight
                </button>
                <button
                  onClick={() => setLighting('daylight')}
                  className={`py-2 rounded-lg text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all ${
                    lighting === 'daylight'
                      ? 'bg-[#D4AF37] text-black font-semibold'
                      : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  <Sun className="w-3 h-3" /> Daylight
                </button>
                <button
                  onClick={() => setLighting('spotlight')}
                  className={`py-2 rounded-lg text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all ${
                    lighting === 'spotlight'
                      ? 'bg-[#D4AF37] text-black font-semibold'
                      : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  <Moon className="w-3 h-3" /> Runway
                </button>
              </div>
            </div>

            {/* Quick Specs Snapshot */}
            <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 text-[11px] grid grid-cols-2 gap-2 text-white/80">
              <div>
                <span className="text-white/40 block text-[9px] uppercase tracking-widest">Carat Weight</span>
                <span className="font-serif text-[#FFF1C5]">{defaultItem.caratWeight}</span>
              </div>
              <div>
                <span className="text-white/40 block text-[9px] uppercase tracking-widest">GIA Clarity</span>
                <span className="font-serif text-[#FFF1C5]">{defaultItem.specs.clarity}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onOpenSpecs?.(defaultItem)}
              className="w-full py-3.5 rounded-full bg-gold-gradient text-black font-semibold uppercase tracking-[0.2em] text-xs shadow-lg shadow-[#D4AF37]/20 hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4" />
              <span>Full GIA Grading & Diamond 4 Cs</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
