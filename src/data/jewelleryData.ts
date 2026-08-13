import { JewelleryItem, CollectionCard, CraftStep } from '../types';

export const HERO_IMAGES = {
  heroMain: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2000&auto=format&fit=crop', // High end diamond ring close up
  heroZoomDetail: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=2000&auto=format&fit=crop', // Macro diamond facets
  story1: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1600&auto=format&fit=crop', // Elegant necklace dark background
  story2: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1600&auto=format&fit=crop', // Gold ring close up
  story3: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop', // Sparkle gemstone close up
  story4: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1600&auto=format&fit=crop', // High end luxury jewellery set
};

export const FEATURED_COLLECTIONS_DATA = [
  {
    id: 'rings',
    title: 'ETERNAL RINGS',
    subtitle: 'THE SIGNATURE COLLECTION',
    description: 'Masterpieces of proportions and light refractions. Designed around flawless central solitaire diamonds and sculptured 18K solid gold bands.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1800&auto=format&fit=crop',
    tag: '01 / RINGS'
  },
  {
    id: 'necklaces',
    title: 'TIMELESS NECKLACES',
    subtitle: 'HIGH JEWELLERY ATELIER',
    description: 'Cascading rows of brilliance engineered to drape like liquid silk over the collarbone.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1800&auto=format&fit=crop',
    tag: '02 / NECKLACES'
  },
  {
    id: 'earrings',
    title: 'SCULPTED EARRINGS',
    subtitle: 'THE LIGHT HARVEST',
    description: 'Emerald and diamond drops designed to catch every ray of ambient room light with subtle motion.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1800&auto=format&fit=crop',
    tag: '03 / EARRINGS'
  },
  {
    id: 'bracelets',
    title: 'HERITAGE BRACELETS',
    subtitle: 'ARCHITECTURAL GOLD',
    description: 'Interlocking structural links hand-engraved with micro-pave detailing and signature atelier hallmarks.',
    image: 'https://images.unsplash.com/photo-1611591475155-4282faa7c2e7?q=80&w=1800&auto=format&fit=crop',
    tag: '04 / BRACELETS'
  }
];

export const HORIZONTAL_GALLERY: CollectionCard[] = [
  {
    id: 'solitaire',
    number: '01',
    title: 'SOLITAIRE',
    tagline: 'Pure Radiance Uncut',
    description: 'Designed around the beauty of absolute simplicity. A single flawless central stone held in invisible prongs.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1600&auto=format&fit=crop',
    highlightPiece: 'Aurelia Crown Diamond',
    year: '2026 Edition'
  },
  {
    id: 'celestial',
    number: '02',
    title: 'CELESTIAL',
    tagline: 'Light, Movement & Starlight',
    description: 'Inspired by light refraction, orbital planetary movement, and the infinite brilliance of the deep night sky.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop',
    highlightPiece: 'Cosmic Emerald Pendant',
    year: 'Atelier Private Reserve'
  },
  {
    id: 'heritage',
    number: '03',
    title: 'HERITAGE',
    tagline: 'Timeless Heirloom Art',
    description: 'Master craftsmanship designed to outlive fleeting trends, passed down through generations with enduring value.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1600&auto=format&fit=crop',
    highlightPiece: 'Imperial Gold Choker',
    year: 'Geneva Archive'
  },
  {
    id: 'nocturne',
    number: '04',
    title: 'NOCTURNE',
    tagline: 'Shadow & Velvet Flame',
    description: 'Deep black diamonds set against polished rose gold and midnight sapphire accents.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1600&auto=format&fit=crop',
    highlightPiece: 'Noir Diamond Bangle',
    year: 'Limited 12 Pieces'
  }
];

export const CRAFTSMANSHIP_STEPS: CraftStep[] = [
  {
    id: 1,
    title: 'Designed With Intention',
    subtitle: 'The Architectural Sketch',
    description: 'Every creation begins in our Paris atelier as a raw gouache watercolor painting, balancing stone geometry, light physics, and weight distribution.',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1200&auto=format&fit=crop',
    detail: '48 Hours of Drafting & Proportions Study'
  },
  {
    id: 2,
    title: 'Crafted By Hand',
    subtitle: 'Liquid Gold Casting & Forging',
    description: 'Sustainably sourced 18K solid gold is melted at 1,064°C, hand-hammered, and meticulously sculpted to form seamless organic structural curves.',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop',
    detail: 'Over 120 Hours of Artisan Bench Work'
  },
  {
    id: 3,
    title: 'Made To Stay With You',
    subtitle: 'Microscope Gem Setting & Polishing',
    description: 'Master setters position each stone under 40x magnification, securing pavé diamonds with hand-beaded prongs and mirror-like buffing.',
    image: 'https://images.unsplash.com/photo-1611591475155-4282faa7c2e7?q=80&w=1200&auto=format&fit=crop',
    detail: 'Zero Tolerance Defect Hallmark Certification'
  }
];

export const FEATURED_PRODUCTS: JewelleryItem[] = [
  {
    id: 'aurora-solitaire',
    name: 'Aurora Solitaire Ring',
    category: 'Rings',
    collection: 'Signature Solitaire',
    priceUSD: 14500,
    priceINR: '₹12,15,000',
    primaryImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop',
    materials: ['18K Yellow Gold', 'Platinum', 'Rose Gold'],
    caratWeight: '2.50 Carats',
    gemstone: 'Flawless Cut Diamond',
    description: 'A striking oval-cut solitaire diamond mounted on an ultra-slim 18K solid gold band with a hidden pavé halo foundation.',
    craftingHours: 94,
    specs: {
      cut: 'Oval Brilliant',
      clarity: 'VVS1',
      color: 'D Flawless',
      goldKarat: '18K Recycled Gold',
      origin: 'Ethically Mined Botswana / GIA Certified'
    },
    isNew: true
  },
  {
    id: 'astral-pendant',
    name: 'Astral Emerald Drop Necklace',
    category: 'Necklaces',
    collection: 'Celestial',
    priceUSD: 22800,
    priceINR: '₹19,10,000',
    primaryImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
    materials: ['18K Yellow Gold', 'Platinum'],
    caratWeight: '3.80 Carats',
    gemstone: 'Colombian Emerald & Marquise Diamonds',
    description: 'An exceptional deep verdant Colombian emerald suspended from a hand-articulated diamond lattice chain.',
    craftingHours: 140,
    specs: {
      cut: 'Emerald Cut',
      clarity: 'Minor Oil Natural Gem',
      color: 'Vivid Green',
      goldKarat: '18K Solid Gold',
      origin: 'Muzo Mines, Colombia'
    }
  },
  {
    id: 'sculpted-luminary-earrings',
    name: 'Luminary Pavé Drop Earrings',
    category: 'Earrings',
    collection: 'The Light Harvest',
    priceUSD: 9800,
    priceINR: '₹8,20,000',
    primaryImage: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
    materials: ['18K Yellow Gold', 'Rose Gold'],
    caratWeight: '1.90 Carats Total',
    gemstone: 'Round Brilliant Diamonds',
    description: 'Sculptural architectural curves embedded with 142 micro-pavé set diamonds that move fluidly with every step.',
    craftingHours: 68,
    specs: {
      cut: 'Ideal Round Brilliant',
      clarity: 'VS1',
      color: 'E Colorless',
      goldKarat: '18K Yellow Gold',
      origin: 'Conflict-Free Atelier Sourced'
    }
  },
  {
    id: 'heritage-bangle',
    name: 'Imperial Interlocking Bangle',
    category: 'Bracelets',
    collection: 'Heritage',
    priceUSD: 16200,
    priceINR: '₹13,55,000',
    primaryImage: 'https://images.unsplash.com/photo-1611591475155-4282faa7c2e7?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop',
    materials: ['18K Yellow Gold', 'Platinum'],
    caratWeight: '2.10 Carats',
    gemstone: 'Baguette Cut Diamonds',
    description: 'Dual interlocking ribbons of solid gold hand-carved with subtle atelier geometric motifs and invisible clasp lock.',
    craftingHours: 110,
    specs: {
      cut: 'Baguette Channel Set',
      clarity: 'VVS2',
      color: 'F Near-Colorless',
      goldKarat: '18K Heavy Gold',
      origin: 'Geneva Atelier Assembly'
    },
    isNew: true
  }
];

export const ATELIER_LOCATIONS = [
  { city: 'Paris', address: '12 Place Vendôme, 75001 Paris', phone: '+33 1 42 68 00 00' },
  { city: 'Milan', address: 'Via Montenapoleone 8, 20121 Milano', phone: '+39 02 7600 1234' },
  { city: 'New York', address: '712 Fifth Avenue, New York, NY 10019', phone: '+1 212 555 0199' },
  { city: 'Tokyo', address: '5-7-1 Ginza, Chuo-ku, Tokyo 104-0061', phone: '+81 3 3567 8900' }
];
