export interface Product {
  id: string;
  name: string;
  category: 'Modern Italian' | 'Mid-Century' | 'American' | 'European' | 'French';
  price: number;
  image: string;
  isNew?: boolean;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ViewState {
  HOME = 'HOME',
  CATALOG = 'CATALOG',
  ABOUT = 'ABOUT'
}