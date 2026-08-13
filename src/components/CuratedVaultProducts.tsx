import { useState } from 'react';
import { FEATURED_PRODUCTS } from '../data/jewelleryData';
import { JewelleryItem } from '../types';
import { Eye, Sparkles, Filter, ShieldCheck, ArrowRight } from 'lucide-react';

interface CuratedVaultProps {
  onSelectProduct: (item: JewelleryItem) => void;
  onOpenBooking: () => void;
  onHoverCursor?: (text: string, isHover: boolean) => void;
  currency: 'USD' | 'INR';
}

export default function CuratedVaultProducts({
  onSelectProduct,
  onOpenBooking,
  onHoverCursor,
  currency,
}: CuratedVaultProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedMaterials, setSelectedMaterials] = useState<Record<string, string>>({});

  const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'];

  const filteredProducts =
    activeCategory === 'All'
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter((p) => p.category === activeCategory);

  const handleMaterialChange = (productId: string, mat: string) => {
    setSelectedMaterials((prev) => ({ ...prev, [productId]: mat }));
  };

  return (
    <section
      id="vault"
      className="relative w-full min-h-screen bg-[#050505] py-28 px-6 md:px-12 flex flex-col justify-center select-none"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-[#D4AF37] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase tracking-[0.35em] font-medium">
                The Curated Vault
              </span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl tracking-wide text-white font-light">
              FEATURED <span className="text-gold-gradient italic font-normal">CREATIONS</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
            <Filter className="w-3.5 h-3.5 text-white/40 mr-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.25em] transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#D4AF37] text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'border border-white/10 text-white/60 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => {
            const currentMat = selectedMaterials[product.id] || product.materials[0];

            return (
              <div
                key={product.id}
                onMouseEnter={() => onHoverCursor?.('INSPECT', true)}
                onMouseLeave={() => onHoverCursor?.('', false)}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 p-5 flex flex-col justify-between space-y-5 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-xl"
              >
                {/* Image Stage */}
                <div
                  className="relative h-72 rounded-xl overflow-hidden bg-[#080808] cursor-pointer"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.primaryImage}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top New/Badge Tag */}
                  {product.isNew && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#D4AF37] text-black text-[9px] uppercase tracking-widest font-bold shadow-md">
                      Atelier Reserve
                    </div>
                  )}

                  {/* Hover Quick Action */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-widest">
                      Inquire Piece
                    </span>
                    <Eye className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                </div>

                {/* Meta & Title */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#D4AF37]">
                    <span>{product.collection}</span>
                    <span>{product.caratWeight}</span>
                  </div>

                  <h3
                    className="font-serif-luxury text-2xl text-white font-light group-hover:text-[#FFF1C5] transition-colors cursor-pointer line-clamp-1"
                    onClick={() => onSelectProduct(product)}
                  >
                    {product.name}
                  </h3>

                  <p className="text-sm font-serif text-gold-gradient font-medium">
                    {currency === 'USD' ? `$${product.priceUSD.toLocaleString()}` : product.priceINR}
                  </p>
                </div>

                {/* Material Swatch Selector */}
                <div className="space-y-1.5 pt-2 border-t border-white/10">
                  <span className="text-[9px] uppercase tracking-widest text-white/40 block">
                    Available Metal
                  </span>
                  <div className="flex gap-2">
                    {product.materials.map((mat) => (
                      <button
                        key={mat}
                        onClick={() => handleMaterialChange(product.id, mat)}
                        className={`text-[9px] px-2.5 py-1 rounded-full uppercase tracking-wider transition-all ${
                          currentMat === mat
                            ? 'bg-white/20 border border-[#D4AF37] text-[#FFF1C5]'
                            : 'bg-white/5 text-white/50 hover:text-white'
                        }`}
                      >
                        {mat.replace('18K ', '')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <button
                  onClick={() => onSelectProduct(product)}
                  className="w-full py-2.5 rounded-full border border-white/10 hover:border-[#D4AF37] bg-white/5 hover:bg-[#D4AF37]/10 text-xs uppercase tracking-[0.2em] text-[#FFF1C5] font-medium transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bespoke Custom Commission Callout */}
        <div className="rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-r from-black via-[#0d0c0a] to-black p-8 sm:p-12 shadow-[0_0_80px_rgba(212,175,55,0.15)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold block">
              Private Commission Service
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-5xl text-white font-light">
              Bespoke <span className="text-gold-gradient italic font-normal">Atelier Creations</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-sans tracking-wider leading-relaxed uppercase">
              Collaborate directly with our Paris master gemologists to source rare gemstones and forge one-of-a-kind heirloom pieces.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-full bg-gold-gradient text-black font-semibold uppercase tracking-[0.2em] text-xs shadow-xl shadow-[#D4AF37]/20 hover:opacity-95 transition-opacity whitespace-nowrap flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Commission Bespoke Piece</span>
          </button>
        </div>
      </div>
    </section>
  );
}
