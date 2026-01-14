import type { Stock } from '../types';

const STOCK_DATA: Omit<Stock, 'change' | 'changeAmount' | 'volume' | 'avgVolume' | 'open' | 'high' | 'low'>[] = [
  { ticker: 'AAPL', name: 'Apple Inc.', price: 178.50, previousClose: 175.20, marketCap: 2800000000000, sector: 'Technology' },
  { ticker: 'MSFT', name: 'Microsoft Corp.', price: 378.90, previousClose: 372.40, marketCap: 2810000000000, sector: 'Technology' },
  { ticker: 'GOOGL', name: 'Alphabet Inc.', price: 141.20, previousClose: 138.50, marketCap: 1780000000000, sector: 'Technology' },
  { ticker: 'AMZN', name: 'Amazon.com Inc.', price: 178.30, previousClose: 174.80, marketCap: 1850000000000, sector: 'Consumer Cyclical' },
  { ticker: 'NVDA', name: 'NVIDIA Corp.', price: 495.80, previousClose: 478.20, marketCap: 1220000000000, sector: 'Technology' },
  { ticker: 'META', name: 'Meta Platforms', price: 505.20, previousClose: 498.10, marketCap: 1300000000000, sector: 'Technology' },
  { ticker: 'TSLA', name: 'Tesla Inc.', price: 248.90, previousClose: 258.40, marketCap: 790000000000, sector: 'Consumer Cyclical' },
  { ticker: 'BRK.B', name: 'Berkshire Hathaway', price: 362.40, previousClose: 358.90, marketCap: 790000000000, sector: 'Financial' },
  { ticker: 'JPM', name: 'JPMorgan Chase', price: 195.60, previousClose: 192.30, marketCap: 565000000000, sector: 'Financial' },
  { ticker: 'V', name: 'Visa Inc.', price: 275.40, previousClose: 271.80, marketCap: 565000000000, sector: 'Financial' },
  { ticker: 'UNH', name: 'UnitedHealth', price: 528.30, previousClose: 535.20, marketCap: 490000000000, sector: 'Healthcare' },
  { ticker: 'XOM', name: 'Exxon Mobil', price: 104.50, previousClose: 102.80, marketCap: 420000000000, sector: 'Energy' },
  { ticker: 'JNJ', name: 'Johnson & Johnson', price: 156.70, previousClose: 158.40, marketCap: 378000000000, sector: 'Healthcare' },
  { ticker: 'WMT', name: 'Walmart Inc.', price: 165.20, previousClose: 162.50, marketCap: 445000000000, sector: 'Consumer Defensive' },
  { ticker: 'PG', name: 'Procter & Gamble', price: 152.80, previousClose: 154.30, marketCap: 360000000000, sector: 'Consumer Defensive' },
  { ticker: 'MA', name: 'Mastercard Inc.', price: 448.30, previousClose: 442.10, marketCap: 420000000000, sector: 'Financial' },
  { ticker: 'HD', name: 'Home Depot', price: 345.60, previousClose: 352.80, marketCap: 345000000000, sector: 'Consumer Cyclical' },
  { ticker: 'CVX', name: 'Chevron Corp.', price: 151.20, previousClose: 148.70, marketCap: 285000000000, sector: 'Energy' },
  { ticker: 'MRK', name: 'Merck & Co.', price: 108.40, previousClose: 112.30, marketCap: 274000000000, sector: 'Healthcare' },
  { ticker: 'ABBV', name: 'AbbVie Inc.', price: 154.20, previousClose: 156.80, marketCap: 272000000000, sector: 'Healthcare' },
  { ticker: 'KO', name: 'Coca-Cola Co.', price: 59.80, previousClose: 58.90, marketCap: 258000000000, sector: 'Consumer Defensive' },
  { ticker: 'PEP', name: 'PepsiCo Inc.', price: 168.50, previousClose: 170.20, marketCap: 231000000000, sector: 'Consumer Defensive' },
  { ticker: 'AVGO', name: 'Broadcom Inc.', price: 912.40, previousClose: 895.20, marketCap: 378000000000, sector: 'Technology' },
  { ticker: 'COST', name: 'Costco Wholesale', price: 572.30, previousClose: 568.90, marketCap: 254000000000, sector: 'Consumer Defensive' },
  { ticker: 'TMO', name: 'Thermo Fisher', price: 528.70, previousClose: 535.40, marketCap: 206000000000, sector: 'Healthcare' },
  { ticker: 'ADBE', name: 'Adobe Inc.', price: 578.90, previousClose: 565.20, marketCap: 265000000000, sector: 'Technology' },
  { ticker: 'CRM', name: 'Salesforce Inc.', price: 265.40, previousClose: 258.30, marketCap: 257000000000, sector: 'Technology' },
  { ticker: 'ACN', name: 'Accenture plc', price: 348.20, previousClose: 352.40, marketCap: 218000000000, sector: 'Technology' },
  { ticker: 'NFLX', name: 'Netflix Inc.', price: 485.30, previousClose: 472.80, marketCap: 213000000000, sector: 'Communication Services' },
  { ticker: 'AMD', name: 'Advanced Micro', price: 124.60, previousClose: 118.20, marketCap: 201000000000, sector: 'Technology' },
  { ticker: 'LIN', name: 'Linde plc', price: 412.50, previousClose: 408.30, marketCap: 200000000000, sector: 'Basic Materials' },
  { ticker: 'INTC', name: 'Intel Corp.', price: 42.80, previousClose: 45.20, marketCap: 180000000000, sector: 'Technology' },
  { ticker: 'CSCO', name: 'Cisco Systems', price: 52.40, previousClose: 51.80, marketCap: 213000000000, sector: 'Technology' },
  { ticker: 'DIS', name: 'Walt Disney', price: 112.30, previousClose: 108.50, marketCap: 205000000000, sector: 'Communication Services' },
  { ticker: 'QCOM', name: 'Qualcomm Inc.', price: 145.80, previousClose: 142.30, marketCap: 162000000000, sector: 'Technology' },
  { ticker: 'TXN', name: 'Texas Instruments', price: 172.40, previousClose: 175.80, marketCap: 157000000000, sector: 'Technology' },
  { ticker: 'NKE', name: 'Nike Inc.', price: 108.20, previousClose: 112.40, marketCap: 163000000000, sector: 'Consumer Cyclical' },
  { ticker: 'CMCSA', name: 'Comcast Corp.', price: 42.80, previousClose: 43.50, marketCap: 170000000000, sector: 'Communication Services' },
  { ticker: 'VZ', name: 'Verizon Comm.', price: 38.90, previousClose: 39.40, marketCap: 164000000000, sector: 'Communication Services' },
  { ticker: 'PM', name: 'Philip Morris', price: 94.60, previousClose: 93.20, marketCap: 147000000000, sector: 'Consumer Defensive' },
  { ticker: 'ORCL', name: 'Oracle Corp.', price: 118.30, previousClose: 115.40, marketCap: 325000000000, sector: 'Technology' },
  { ticker: 'IBM', name: 'IBM Corp.', price: 168.70, previousClose: 172.30, marketCap: 154000000000, sector: 'Technology' },
  { ticker: 'INTU', name: 'Intuit Inc.', price: 578.40, previousClose: 562.30, marketCap: 162000000000, sector: 'Technology' },
  { ticker: 'NOW', name: 'ServiceNow', price: 712.30, previousClose: 695.80, marketCap: 147000000000, sector: 'Technology' },
  { ticker: 'SPGI', name: 'S&P Global', price: 425.60, previousClose: 418.30, marketCap: 133000000000, sector: 'Financial' },
  { ticker: 'BA', name: 'Boeing Co.', price: 198.40, previousClose: 205.30, marketCap: 119000000000, sector: 'Industrials' },
  { ticker: 'GE', name: 'GE Aerospace', price: 125.80, previousClose: 122.40, marketCap: 137000000000, sector: 'Industrials' },
  { ticker: 'CAT', name: 'Caterpillar Inc.', price: 285.30, previousClose: 278.90, marketCap: 142000000000, sector: 'Industrials' },
  { ticker: 'RTX', name: 'RTX Corp.', price: 92.40, previousClose: 94.20, marketCap: 136000000000, sector: 'Industrials' },
  { ticker: 'AMAT', name: 'Applied Materials', price: 158.90, previousClose: 152.40, marketCap: 132000000000, sector: 'Technology' },
  // High movers / volatile stocks
  { ticker: 'SMCI', name: 'Super Micro Computer', price: 42.30, previousClose: 48.50, marketCap: 24000000000, sector: 'Technology' },
  { ticker: 'MARA', name: 'Marathon Digital', price: 18.40, previousClose: 21.20, marketCap: 5800000000, sector: 'Technology' },
  { ticker: 'RIOT', name: 'Riot Platforms', price: 12.80, previousClose: 14.50, marketCap: 3800000000, sector: 'Technology' },
  { ticker: 'COIN', name: 'Coinbase Global', price: 178.30, previousClose: 195.40, marketCap: 43000000000, sector: 'Financial' },
  { ticker: 'PLTR', name: 'Palantir Tech', price: 24.80, previousClose: 23.40, marketCap: 54000000000, sector: 'Technology' },
  { ticker: 'SNOW', name: 'Snowflake Inc.', price: 168.40, previousClose: 175.20, marketCap: 54000000000, sector: 'Technology' },
  { ticker: 'CRWD', name: 'CrowdStrike', price: 285.60, previousClose: 278.30, marketCap: 68000000000, sector: 'Technology' },
  { ticker: 'DDOG', name: 'Datadog Inc.', price: 128.40, previousClose: 124.50, marketCap: 42000000000, sector: 'Technology' },
  { ticker: 'ZS', name: 'Zscaler Inc.', price: 198.30, previousClose: 205.60, marketCap: 29000000000, sector: 'Technology' },
  { ticker: 'PANW', name: 'Palo Alto Networks', price: 312.80, previousClose: 305.40, marketCap: 102000000000, sector: 'Technology' },
  // Mid-cap stocks
  { ticker: 'ROKU', name: 'Roku Inc.', price: 68.40, previousClose: 72.30, marketCap: 9800000000, sector: 'Technology' },
  { ticker: 'SNAP', name: 'Snap Inc.', price: 11.20, previousClose: 10.80, marketCap: 18000000000, sector: 'Communication Services' },
  { ticker: 'PINS', name: 'Pinterest Inc.', price: 32.80, previousClose: 31.40, marketCap: 22000000000, sector: 'Communication Services' },
  { ticker: 'SQ', name: 'Block Inc.', price: 72.40, previousClose: 68.90, marketCap: 44000000000, sector: 'Technology' },
  { ticker: 'SHOP', name: 'Shopify Inc.', price: 78.30, previousClose: 74.60, marketCap: 98000000000, sector: 'Technology' },
  { ticker: 'UBER', name: 'Uber Technologies', price: 62.40, previousClose: 60.80, marketCap: 130000000000, sector: 'Technology' },
  { ticker: 'LYFT', name: 'Lyft Inc.', price: 14.80, previousClose: 15.60, marketCap: 5800000000, sector: 'Technology' },
  { ticker: 'ABNB', name: 'Airbnb Inc.', price: 138.50, previousClose: 142.30, marketCap: 88000000000, sector: 'Consumer Cyclical' },
  { ticker: 'DASH', name: 'DoorDash Inc.', price: 125.40, previousClose: 121.80, marketCap: 50000000000, sector: 'Technology' },
  { ticker: 'NET', name: 'Cloudflare Inc.', price: 78.90, previousClose: 75.40, marketCap: 26000000000, sector: 'Technology' },
  // Small-cap / penny stocks
  { ticker: 'SOUN', name: 'SoundHound AI', price: 4.85, previousClose: 4.20, marketCap: 1500000000, sector: 'Technology' },
  { ticker: 'BBAI', name: 'BigBear.ai', price: 2.45, previousClose: 2.28, marketCap: 580000000, sector: 'Technology' },
  { ticker: 'IONQ', name: 'IonQ Inc.', price: 12.40, previousClose: 11.20, marketCap: 2600000000, sector: 'Technology' },
  { ticker: 'RGTI', name: 'Rigetti Computing', price: 1.85, previousClose: 1.72, marketCap: 450000000, sector: 'Technology' },
  { ticker: 'QUBT', name: 'Quantum Computing', price: 3.42, previousClose: 3.18, marketCap: 280000000, sector: 'Technology' },
  { ticker: 'GEVO', name: 'Gevo Inc.', price: 1.24, previousClose: 1.45, marketCap: 290000000, sector: 'Energy' },
  { ticker: 'PLUG', name: 'Plug Power', price: 3.28, previousClose: 3.85, marketCap: 2400000000, sector: 'Industrials' },
  { ticker: 'FCEL', name: 'FuelCell Energy', price: 1.45, previousClose: 1.68, marketCap: 680000000, sector: 'Industrials' },
  { ticker: 'BLNK', name: 'Blink Charging', price: 2.85, previousClose: 3.12, marketCap: 280000000, sector: 'Industrials' },
  { ticker: 'NKLA', name: 'Nikola Corp.', price: 0.82, previousClose: 0.95, marketCap: 650000000, sector: 'Consumer Cyclical' },
  // Big movers up
  { ticker: 'UPST', name: 'Upstart Holdings', price: 42.30, previousClose: 38.50, marketCap: 3600000000, sector: 'Financial' },
  { ticker: 'SOFI', name: 'SoFi Technologies', price: 8.45, previousClose: 7.82, marketCap: 8200000000, sector: 'Financial' },
  { ticker: 'HOOD', name: 'Robinhood Markets', price: 12.80, previousClose: 11.95, marketCap: 11000000000, sector: 'Financial' },
  { ticker: 'AFRM', name: 'Affirm Holdings', price: 38.60, previousClose: 35.40, marketCap: 12000000000, sector: 'Financial' },
  { ticker: 'PATH', name: 'UiPath Inc.', price: 18.40, previousClose: 17.20, marketCap: 10400000000, sector: 'Technology' },
  { ticker: 'U', name: 'Unity Software', price: 28.40, previousClose: 26.80, marketCap: 11200000000, sector: 'Technology' },
  { ticker: 'RBLX', name: 'Roblox Corp.', price: 42.80, previousClose: 40.20, marketCap: 26000000000, sector: 'Technology' },
  { ticker: 'TTWO', name: 'Take-Two Interactive', price: 158.40, previousClose: 154.80, marketCap: 27000000000, sector: 'Communication Services' },
  { ticker: 'EA', name: 'Electronic Arts', price: 142.30, previousClose: 138.90, marketCap: 38000000000, sector: 'Communication Services' },
  { ticker: 'ATVI', name: 'Activision Blizzard', price: 82.40, previousClose: 80.50, marketCap: 65000000000, sector: 'Communication Services' },
  // Traditional value stocks
  { ticker: 'T', name: 'AT&T Inc.', price: 17.40, previousClose: 17.80, marketCap: 124000000000, sector: 'Communication Services' },
  { ticker: 'WFC', name: 'Wells Fargo', price: 48.30, previousClose: 47.50, marketCap: 175000000000, sector: 'Financial' },
  { ticker: 'BAC', name: 'Bank of America', price: 34.80, previousClose: 34.20, marketCap: 275000000000, sector: 'Financial' },
  { ticker: 'C', name: 'Citigroup Inc.', price: 52.40, previousClose: 51.80, marketCap: 100000000000, sector: 'Financial' },
  { ticker: 'GS', name: 'Goldman Sachs', price: 385.60, previousClose: 378.40, marketCap: 124000000000, sector: 'Financial' },
  { ticker: 'MS', name: 'Morgan Stanley', price: 92.30, previousClose: 90.80, marketCap: 152000000000, sector: 'Financial' },
  { ticker: 'AXP', name: 'American Express', price: 218.40, previousClose: 214.30, marketCap: 158000000000, sector: 'Financial' },
  { ticker: 'BLK', name: 'BlackRock Inc.', price: 812.40, previousClose: 798.50, marketCap: 122000000000, sector: 'Financial' },
  { ticker: 'SCHW', name: 'Charles Schwab', price: 68.20, previousClose: 70.40, marketCap: 124000000000, sector: 'Financial' },
  { ticker: 'USB', name: 'U.S. Bancorp', price: 42.80, previousClose: 43.40, marketCap: 67000000000, sector: 'Financial' },
];

function generateRandomVolume(avgVolume: number, volatility: number = 0.5): number {
  const multiplier = 1 + (Math.random() - 0.5) * volatility * 4;
  return Math.floor(avgVolume * multiplier);
}

function generateStock(baseStock: typeof STOCK_DATA[0]): Stock {
  const avgVolume = Math.floor(Math.random() * 50000000) + 1000000;
  const volatility = Math.random() * 0.3 + 0.1;
  const volume = generateRandomVolume(avgVolume, volatility);

  const changeAmount = baseStock.price - baseStock.previousClose;
  const change = ((changeAmount) / baseStock.previousClose) * 100;

  const dayRange = baseStock.price * (Math.random() * 0.05 + 0.01);
  const isUp = change > 0;

  let high: number, low: number, open: number;

  if (isUp) {
    high = baseStock.price + (Math.random() * dayRange * 0.3);
    low = baseStock.previousClose - (Math.random() * dayRange * 0.2);
    open = baseStock.previousClose + (Math.random() * changeAmount * 0.5);
  } else {
    high = baseStock.previousClose + (Math.random() * dayRange * 0.2);
    low = baseStock.price - (Math.random() * dayRange * 0.3);
    open = baseStock.previousClose - (Math.random() * Math.abs(changeAmount) * 0.5);
  }

  return {
    ...baseStock,
    change,
    changeAmount,
    volume,
    avgVolume,
    open,
    high,
    low,
  };
}

export const mockStocks: Stock[] = STOCK_DATA.map(generateStock);

// Helper functions for filtering stocks
export function getTopGainers(stocks: Stock[], minPrice: number = 20, limit: number = 10): Stock[] {
  return stocks
    .filter(s => s.price >= minPrice && s.change > 0)
    .sort((a, b) => b.change - a.change)
    .slice(0, limit);
}

export function getTopLosers(stocks: Stock[], minPrice: number = 20, limit: number = 10): Stock[] {
  return stocks
    .filter(s => s.price >= minPrice && s.change < 0)
    .sort((a, b) => a.change - b.change)
    .slice(0, limit);
}

export function getVolumeLeaders(stocks: Stock[], limit: number = 10): Stock[] {
  return stocks
    .sort((a, b) => b.volume - a.volume)
    .slice(0, limit);
}

export function getUnusualVolume(stocks: Stock[], limit: number = 10): Stock[] {
  return stocks
    .map(s => ({ ...s, volumeRatio: s.volume / s.avgVolume }))
    .sort((a, b) => b.volumeRatio - a.volumeRatio)
    .slice(0, limit);
}

export function getGapAndGo(stocks: Stock[], minGap: number = 2, limit: number = 10): Stock[] {
  return stocks
    .filter(s => {
      const gapPercent = ((s.open - s.previousClose) / s.previousClose) * 100;
      return gapPercent >= minGap && s.price > s.open;
    })
    .map(s => ({
      ...s,
      gapPercent: ((s.open - s.previousClose) / s.previousClose) * 100,
    }))
    .sort((a, b) => b.gapPercent - a.gapPercent)
    .slice(0, limit);
}

export function getGapAndFade(stocks: Stock[], minGap: number = 2, limit: number = 10): Stock[] {
  return stocks
    .filter(s => {
      const gapPercent = ((s.open - s.previousClose) / s.previousClose) * 100;
      return gapPercent >= minGap && s.price < s.open;
    })
    .map(s => ({
      ...s,
      gapPercent: ((s.open - s.previousClose) / s.previousClose) * 100,
      fadePercent: ((s.open - s.price) / s.open) * 100,
    }))
    .sort((a, b) => b.gapPercent - a.gapPercent)
    .slice(0, limit);
}

export function getNearHOD(stocks: Stock[], threshold: number = 1, limit: number = 10): Stock[] {
  return stocks
    .filter(s => {
      const distanceFromHigh = ((s.high - s.price) / s.high) * 100;
      return distanceFromHigh <= threshold && s.change > 0;
    })
    .map(s => ({
      ...s,
      distanceFromHOD: ((s.high - s.price) / s.high) * 100,
    }))
    .sort((a, b) => b.change - a.change)
    .slice(0, limit);
}

export function getNearLOD(stocks: Stock[], threshold: number = 1, limit: number = 10): Stock[] {
  return stocks
    .filter(s => {
      const distanceFromLow = ((s.price - s.low) / s.low) * 100;
      return distanceFromLow <= threshold && s.change < 0;
    })
    .map(s => ({
      ...s,
      distanceFromLOD: ((s.price - s.low) / s.low) * 100,
    }))
    .sort((a, b) => a.change - b.change)
    .slice(0, limit);
}
