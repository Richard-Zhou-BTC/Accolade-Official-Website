import { Product } from './types';

export const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop", // Modern Italian Living Room
  "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2000&auto=format&fit=crop", // Mid-century
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Verona Modular Sofa',
    category: 'Modern Italian',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    isNew: true,
    description: 'Low profile, deep seating Italian leather modular system.'
  },
  {
    id: '2',
    name: 'Lusso Marble Dining Table',
    category: 'Modern Italian',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1533090368676-1fd25485db88?q=80&w=800&auto=format&fit=crop',
    description: 'Carrara marble top with sculptural matte black metal base.'
  },
  {
    id: '3',
    name: 'Eames Style Lounge',
    category: 'Mid-Century',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop',
    description: 'Classic mid-century silhouette in walnut and black leather.'
  },
  {
    id: '4',
    name: 'Milano Accent Chair',
    category: 'Modern Italian',
    price: 890,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800&auto=format&fit=crop',
    isNew: true,
    description: 'Velvet upholstery with brass tipped legs.'
  },
  {
    id: '5',
    name: 'Nordic Teak Sideboard',
    category: 'Mid-Century',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop',
    description: 'Restored teak wood finish with sliding doors.'
  },
  {
    id: '6',
    name: 'Roma Bed Frame',
    category: 'Modern Italian',
    price: 2100,
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop',
    description: 'Floating platform bed with oversized tufted headboard.'
  }
];

export const SYSTEM_INSTRUCTION = `You are the AI Concierge for Accolade Furniture (ACCOLADE FURNITURE), a premium furniture brand based in China specializing in mid-to-high-end furniture.
Your goal is to assist customers in finding the perfect furniture for their homes.
The brand focuses heavily on "Modern Italian" (minimalist, luxury materials like leather/marble) and "Mid-Century Modern" (warm woods, retro silhouettes) styles, but also offers American, European, and French styles.
You are knowledgeable about interior design. When a user asks for advice, suggest specific styles from our catalog (Modern Italian or Mid-Century) that fit their needs.
Be polite, professional, and evoke a sense of luxury. Keep responses concise and helpful.
If asked about the factory, emphasize "Direct from Factory" pricing and "Master Craftsmanship".`;
