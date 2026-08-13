export interface JewelleryItem {
  id: string;
  name: string;
  category: 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets' | 'High Fine Jewellery';
  collection: string;
  priceUSD: number;
  priceINR: string;
  primaryImage: string;
  secondaryImage: string;
  materials: string[];
  caratWeight?: string;
  gemstone?: string;
  description: string;
  craftingHours: number;
  specs: {
    cut?: string;
    clarity?: string;
    color?: string;
    goldKarat: string;
    origin: string;
  };
  isNew?: boolean;
}

export interface CollectionCard {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlightPiece: string;
  year: string;
}

export interface CraftStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  detail: string;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  preferredDate: string;
  interest: string;
  notes: string;
}
