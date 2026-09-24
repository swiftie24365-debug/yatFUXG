export type PackTier = 'gold' | 'platinum' | 'silver';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'baklava' | 'kaak-warka' | 'dattes' | 'amande-pistache' | 'coffrets' | 'petits-fours';
  categoryLabel: string;
  description: string;
  details: string;
  image: string;
  ingredients: string[];
  allergens: string[];
  piecesOrWeight?: string;
  startingPrice?: string; // Formatted with currency or "Sur devis"
  isSignature?: boolean;
  featuredInPack?: PackTier[];
}

export interface CollectionCategory {
  id: string;
  name: string;
  scriptAccent: string;
  tagline: string;
  description: string;
  image: string;
  productCount: number;
  featuredItem: string;
}

export interface PackPetiteFete {
  id: string;
  tier: PackTier;
  title: string;
  scriptBadge: string;
  edition: string;
  tagline: string;
  description: string;
  backgroundClass: string;
  accentBorderClass: string;
  badgeBg: string;
  textAccentClass: string;
  image: string;
  pieceCount: string;
  recommendedFor: string;
  selectionItems: {
    name: string;
    description: string;
    portion?: string;
  }[];
  packagingDetails: string;
  priceNote: string;
}

export interface CelebrationOccasion {
  id: string;
  title: string;
  scriptLabel: string;
  subtitle: string;
  description: string;
  image: string;
  curatedOfferings: string[];
}

export interface InstagramFeedItem {
  id: string;
  postUrl: string;
  imageUrl: string;
  caption: string;
  likes: string;
  tag: string;
  date: string;
}

export interface OrderInquiry {
  fullName: string;
  phone: string;
  email?: string;
  selectedItem: string;
  quantityOrGuests: string;
  desiredDate: string;
  serviceType: 'retrait' | 'livraison';
  deliveryAddress?: string;
  specialRequests: string;
}
