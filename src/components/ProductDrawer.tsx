import { useState } from 'react';
import { JewelleryItem } from '../types';
import { X, Award, ShieldCheck, Clock, Compass, Send } from 'lucide-react';

interface ProductDrawerProps {
  item: JewelleryItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
  currency: 'USD' | 'INR';
}

export default function ProductDrawer({
  item,
  onClose,
  onOpenBooking,
  currency,
}: ProductDrawerProps) {
  const [selectedMaterial, setSelectedMaterial] = useState<string>('');
  const [inquirySent, setInquirySent] = useState(false);

  if (!item) return null;

  const currentMat = selectedMaterial || item.materials[0];

  const handleSendInquiry = () => {
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end animate-fade-in select-none">
      <div className="relative w-full max-w-xl h-full bg-[#08080a] border-l border-[#D4AF37]/30 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto shadow-[0_0_100px_rgba(0,0,0,0.9)] text-white">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-medium block">
              Atelier Archive Specifications
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
              {item.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-white/10 hover:border-[#D4AF37] text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-8 my-6">
          {/* Main Image Stage */}
          <div className="relative h-72 rounded-2xl overflow-hidden border border-white/10 bg-black">
            <img
              src={item.primaryImage}
              alt={item.name}
              className="w-full h-full object-cover object-center brightness-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#FFF1C5]">
              <span className="font-serif text-2xl font-light">
                {currency === 'USD' ? `$${item.priceUSD.toLocaleString()}` : item.priceINR}
              </span>
              <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-widest">
                {item.collection}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
              Design Philosophy
            </span>
            <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed tracking-wider">
              {item.description}
            </p>
          </div>

          {/* Material Picker */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 block">
              Selected Metal Alloy
            </span>
            <div className="flex gap-2">
              {item.materials.map((mat) => (
                <button
                  key={mat}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all ${
                    currentMat === mat
                      ? 'bg-[#D4AF37] text-black font-semibold'
                      : 'border border-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>

          {/* GIA Diamond 4 Cs Specs Table */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <Award className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">
                GIA Certificate & 4 Cs Grading
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl border border-white/10 bg-white/5 text-xs text-white/80 font-sans">
              <div>
                <span className="text-white/40 block text-[9px] uppercase tracking-widest">Diamond Cut</span>
                <span className="font-serif text-sm text-[#FFF1C5]">{item.specs.cut || 'Brilliant Oval'}</span>
              </div>
              <div>
                <span className="text-white/40 block text-[9px] uppercase tracking-widest">Clarity Grade</span>
                <span className="font-serif text-sm text-[#FFF1C5]">{item.specs.clarity || 'VVS1'}</span>
              </div>
              <div>
                <span className="text-white/40 block text-[9px] uppercase tracking-widest">Color Grade</span>
                <span className="font-serif text-sm text-[#FFF1C5]">{item.specs.color || 'D Flawless'}</span>
              </div>
              <div>
                <span className="text-white/40 block text-[9px] uppercase tracking-widest">Carat Weight</span>
                <span className="font-serif text-sm text-[#FFF1C5]">{item.caratWeight}</span>
              </div>
              <div className="col-span-2 pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-white/40 text-[9px] uppercase tracking-widest">Bench Crafting Hours</span>
                <span className="font-mono text-[#D4AF37]">{item.craftingHours} Hours Hand Sculpted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 space-y-3">
          {inquirySent && (
            <p className="text-xs text-[#D4AF37] text-center font-sans tracking-wider animate-fade-in">
              Concierge inquiry sent! Our senior gemologist will contact you shortly.
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleSendInquiry}
              className="flex-1 py-3.5 rounded-full border border-[#D4AF37] bg-black hover:bg-[#D4AF37]/20 text-xs uppercase tracking-[0.2em] text-[#FFF1C5] font-medium transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Inquire With Concierge</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 py-3.5 rounded-full bg-gold-gradient text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#D4AF37]/20 hover:opacity-95 transition-opacity"
            >
              Book Salon Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
