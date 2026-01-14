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

export interface StockRowProps {
  ticker: string;
  name?: string;
  price: number;
  change: number;
  changeAmount?: number;
  volume?: number;
  additionalMetric?: {
    label: string;
    value: string | number;
  };
  rank?: number;
}

// Pattern Types
export type PatternType =
  | 'Bull Flag'
  | 'Bear Flag'
  | 'Ascending Triangle'
  | 'Descending Triangle'
  | 'Head & Shoulders'
  | 'Inverse H&S'
  | 'Double Bottom'
  | 'Double Top'
  | 'Cup & Handle'
  | 'Wedge Breakout';

export type PatternDirection = 'Long' | 'Short';

export type PatternStatus = 'active' | 'hit' | 'missed' | 'invalidated';

export interface ActivePattern {
  id: string;
  ticker: string;
  companyName: string;
  pattern: PatternType;
  direction: PatternDirection;
  entryPrice: number;
  targetPrice: number;
  currentPrice: number;
  stopLoss: number;
  identifiedAt: Date;
  confidence: number;
}

export interface CompletedPattern {
  id: string;
  ticker: string;
  companyName: string;
  pattern: PatternType;
  direction: PatternDirection;
  entryPrice: number;
  targetPrice: number;
  exitPrice: number;
  status: 'hit' | 'missed' | 'invalidated';
  identifiedAt: Date;
  resolvedAt: Date;
  percentGain?: number;
}

export interface PatternStats {
  totalPatterns: number;
  hitRate: number;
  avgTimeToTarget: string;
  last30Days: {
    hits: number;
    misses: number;
    invalidated: number;
  };
}
