export interface Stock {
  ticker: string;
  name: string;
  price: number;
  change: number; // percentage
  changeAmount: number; // dollar change
  volume: number;
  avgVolume: number;
  open: number;
  high: number;
  low: number;
  previousClose: number;
  marketCap: number;
  sector?: string;
}

export interface PelicanPrompt {
  id: string;
  text: string;
  response: string;
  stocks?: Stock[];
}

export interface EmailSignup {
  email: string;
  timestamp: Date;
  source: 'dashboard-cta';
}

export type Theme = 'light' | 'dark';

