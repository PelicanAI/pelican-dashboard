import type { PelicanPrompt } from '../types';

export const PELICAN_PROMPTS: PelicanPrompt[] = [
  {
    id: '1',
    text: "Show me stocks down more than 5% today with volume over 1 million",
    response: `Found 8 stocks matching your criteria...

Here are stocks down significantly on heavy volume:

| Ticker | Price | Change | Volume |
|--------|-------|--------|--------|
| SMCI | $42.30 | -12.8% | 18.4M |
| COIN | $178.30 | -8.7% | 12.2M |
| MARA | $18.40 | -13.2% | 8.5M |
| RIOT | $12.80 | -11.7% | 6.8M |
| INTC | $42.80 | -5.3% | 24.2M |
| PLUG | $3.28 | -14.8% | 15.6M |
| NKLA | $0.82 | -13.7% | 4.2M |
| ZS | $198.30 | -5.5% | 2.8M |

These high-volume selloffs could indicate institutional distribution. Watch for potential bounce plays near key support levels, especially SMCI and COIN which have shown resilience in past dips.`
  },
  {
    id: '2',
    text: "What stocks are trading near their low of the day right now?",
    response: `Found 12 stocks within 1% of their daily low...

| Ticker | Price | % from LOD | Day Change |
|--------|-------|------------|------------|
| TSLA | $248.90 | 0.3% | -3.7% |
| INTC | $42.80 | 0.5% | -5.3% |
| BA | $198.40 | 0.4% | -3.4% |
| HD | $345.60 | 0.6% | -2.0% |
| NKE | $108.20 | 0.2% | -3.7% |
| SCHW | $68.20 | 0.4% | -3.1% |
| LYFT | $14.80 | 0.5% | -5.1% |
| SNOW | $168.40 | 0.3% | -3.9% |

These names are showing weakness and could continue lower, but they're also prime bounce candidates if they find support. Consider setting alerts for any break below LOD for short entries, or watch for volume-supported reversals.`
  },
  {
    id: '3',
    text: "Find me high-priced stocks above $200 that are up more than 3% today",
    response: `Found 9 high-priced stocks with strong momentum...

| Ticker | Price | Change | Volume |
|--------|-------|--------|--------|
| AVGO | $912.40 | +1.9% | 2.8M |
| NOW | $712.30 | +2.4% | 1.5M |
| INTU | $578.40 | +2.9% | 1.2M |
| ADBE | $578.90 | +2.4% | 2.4M |
| BLK | $812.40 | +1.7% | 0.8M |
| MA | $448.30 | +1.4% | 1.8M |
| SPGI | $425.60 | +1.7% | 0.9M |
| GS | $385.60 | +1.9% | 2.1M |
| MSFT | $378.90 | +1.7% | 18.4M |

High-priced momentum names often attract institutional buying. AVGO and NOW showing particular strength with clean breakouts. Watch for continuation patterns above today's highs.`
  },
  {
    id: '4',
    text: "Show me penny stocks under $5 with unusual volume",
    response: `Found 10 penny stocks with volume spikes...

| Ticker | Price | Change | Vol vs Avg |
|--------|-------|--------|------------|
| SOUN | $4.85 | +15.5% | 4.2x |
| QUBT | $3.42 | +7.5% | 3.8x |
| BBAI | $2.45 | +7.5% | 3.2x |
| PLUG | $3.28 | -14.8% | 2.8x |
| RGTI | $1.85 | +7.6% | 2.5x |
| BLNK | $2.85 | -8.7% | 2.3x |
| GEVO | $1.24 | -14.5% | 2.1x |
| FCEL | $1.45 | -13.7% | 1.9x |
| NKLA | $0.82 | -13.7% | 1.8x |

Penny stocks with unusual volume can signal big moves. SOUN leading with AI momentum, while clean energy names like PLUG and FCEL seeing heavy selling. High risk, high reward - size positions accordingly.`
  },
  {
    id: '5',
    text: "What's moving on heavy volume right now?",
    response: `Top 15 stocks by volume today...

| Ticker | Price | Change | Volume |
|--------|-------|--------|--------|
| AAPL | $178.50 | +1.9% | 45.2M |
| NVDA | $495.80 | +3.7% | 38.6M |
| TSLA | $248.90 | -3.7% | 32.4M |
| AMD | $124.60 | +5.4% | 28.8M |
| INTC | $42.80 | -5.3% | 24.2M |
| MSFT | $378.90 | +1.7% | 18.4M |
| SMCI | $42.30 | -12.8% | 18.4M |
| META | $505.20 | +1.4% | 16.2M |
| PLUG | $3.28 | -14.8% | 15.6M |
| AMZN | $178.30 | +2.0% | 14.8M |

Big tech dominating volume today. Semiconductor names AMD and NVDA seeing strong institutional interest on AI tailwinds, while TSLA and INTC facing pressure. Watch for late-day volume surges.`
  },
  {
    id: '6',
    text: "Find stocks that gapped up more than 4% and are still holding above their open",
    response: `Found 7 gap-and-go setups holding gains...

| Ticker | Gap % | Current vs Open | Volume |
|--------|-------|-----------------|--------|
| SOUN | +8.2% | +6.8% | 12.4M |
| AMD | +4.8% | +0.5% | 28.8M |
| UPST | +6.2% | +3.6% | 4.2M |
| AFRM | +5.8% | +3.2% | 3.8M |
| IONQ | +7.5% | +3.4% | 5.2M |
| SQ | +4.2% | +0.9% | 6.8M |
| SHOP | +4.5% | +0.4% | 4.5M |

Gap-and-go patterns showing follow-through strength. SOUN leading with massive momentum - watch for VWAP holds for continuation entries. AMD consolidating nicely above the gap, potential for afternoon push.`
  },
  {
    id: '7',
    text: "Show me beaten down stocks near their lows with at least 500k volume - potential bounce candidates",
    response: `Found 11 oversold bounce candidates...

| Ticker | Price | % from LOD | Day Change | Volume |
|--------|-------|------------|------------|--------|
| PLUG | $3.28 | 0.8% | -14.8% | 15.6M |
| COIN | $178.30 | 1.2% | -8.7% | 12.2M |
| SMCI | $42.30 | 0.9% | -12.8% | 18.4M |
| MARA | $18.40 | 0.6% | -13.2% | 8.5M |
| RIOT | $12.80 | 0.5% | -11.7% | 6.8M |
| BA | $198.40 | 0.4% | -3.4% | 4.2M |
| NKE | $108.20 | 0.2% | -3.7% | 3.8M |
| SNOW | $168.40 | 0.3% | -3.9% | 2.8M |

Oversold conditions with volume support - watch for reversal candles. SMCI and COIN have strong dip-buying history. Set tight stops below LOD and look for quick 2-3% scalps on any bounce.`
  },
  {
    id: '8',
    text: "What stocks are trading above VWAP with strong momentum today?",
    response: `Found 14 stocks showing VWAP strength...

| Ticker | Price | vs VWAP | Momentum |
|--------|-------|---------|----------|
| NVDA | $495.80 | +2.1% | Strong |
| AMD | $124.60 | +1.8% | Strong |
| CRWD | $285.60 | +1.5% | Strong |
| NFLX | $485.30 | +1.4% | Strong |
| CRM | $265.40 | +1.2% | Strong |
| PANW | $312.80 | +1.1% | Strong |
| DIS | $112.30 | +1.0% | Strong |
| NET | $78.90 | +0.9% | Moderate |
| DDOG | $128.40 | +0.8% | Moderate |
| UBER | $62.40 | +0.7% | Moderate |

Stocks holding above VWAP typically show institutional accumulation. NVDA and AMD leading with clear uptrends - consider buying dips to VWAP for continuation plays. Avoid chasing extended names.`
  },
  {
    id: '9',
    text: "Find me stocks between $20 and $100 that are down more than 3% on high volume",
    response: `Found 9 mid-priced stocks under pressure...

| Ticker | Price | Change | Volume |
|--------|-------|--------|--------|
| INTC | $42.80 | -5.3% | 24.2M |
| ROKU | $68.40 | -5.4% | 4.8M |
| SCHW | $68.20 | -3.1% | 5.2M |
| CMCSA | $42.80 | -1.6% | 12.4M |
| SQ | $72.40 | +5.1% | 6.8M |
| PLTR | $24.80 | +6.0% | 42.5M |
| RTX | $92.40 | -1.9% | 3.8M |
| MS | $92.30 | +1.7% | 4.2M |

Mid-cap weakness often signals sector rotation. INTC facing semiconductor headwinds while ROKU continues streaming sector pressure. These levels could offer value for swing traders with longer timeframes.`
  },
  {
    id: '10',
    text: "Show me the biggest losers today that aren't penny stocks",
    response: `Top 12 losers with price > $10...

| Ticker | Price | Change | Volume |
|--------|-------|--------|--------|
| SMCI | $42.30 | -12.8% | 18.4M |
| MARA | $18.40 | -13.2% | 8.5M |
| RIOT | $12.80 | -11.7% | 6.8M |
| COIN | $178.30 | -8.7% | 12.2M |
| ROKU | $68.40 | -5.4% | 4.8M |
| INTC | $42.80 | -5.3% | 24.2M |
| LYFT | $14.80 | -5.1% | 3.2M |
| SNOW | $168.40 | -3.9% | 2.8M |
| TSLA | $248.90 | -3.7% | 32.4M |
| NKE | $108.20 | -3.7% | 3.8M |

Crypto-related names SMCI, MARA, RIOT, COIN leading the decline. Tech weakness spreading to INTC and SNOW. Watch for oversold bounces but respect the trend - these names could see continued selling pressure.`
  },
  {
    id: '11',
    text: "What mid-cap stocks ($50-150) are breaking out with volume?",
    response: `Found 8 mid-cap breakout candidates...

| Ticker | Price | Change | Volume vs Avg |
|--------|-------|--------|---------------|
| AMD | $124.60 | +5.4% | 2.1x |
| DDOG | $128.40 | +3.1% | 1.8x |
| NET | $78.90 | +4.6% | 1.9x |
| UBER | $62.40 | +2.6% | 1.5x |
| SHOP | $78.30 | +5.0% | 1.7x |
| SQ | $72.40 | +5.1% | 1.6x |
| ROKU | $68.40 | -5.4% | 1.9x |
| CSCO | $52.40 | +1.2% | 1.3x |

Strong mid-cap momentum in cloud and fintech names. AMD leading the charge with AI tailwinds. NET and DDOG showing cybersecurity strength. Volume confirmation suggests institutional participation.`
  },
  {
    id: '12',
    text: "Find stocks that gapped down but have recovered and are now trading near their high of day",
    response: `Found 6 gap-down reversals near HOD...

| Ticker | Gap Down | Recovery % | vs HOD |
|--------|----------|------------|--------|
| DIS | -2.8% | +6.3% | 0.4% |
| CVX | -1.5% | +3.2% | 0.6% |
| GE | -2.1% | +4.9% | 0.5% |
| BAC | -1.2% | +2.9% | 0.3% |
| SOFI | -3.2% | +11.3% | 0.8% |
| HOOD | -2.8% | +9.9% | 0.7% |

Gap-fill reversals showing strong buying interest. DIS leading traditional names while fintech SOFI and HOOD showing impressive V-shaped recoveries. These patterns often continue momentum into the close.`
  },
  {
    id: '13',
    text: "Show me stocks with at least 2x their normal volume that are up today",
    response: `Found 11 stocks with unusual volume to the upside...

| Ticker | Price | Change | Vol Ratio |
|--------|-------|--------|-----------|
| SOUN | $4.85 | +15.5% | 4.2x |
| PLTR | $24.80 | +6.0% | 3.5x |
| AMD | $124.60 | +5.4% | 2.1x |
| IONQ | $12.40 | +10.7% | 2.8x |
| UPST | $42.30 | +9.9% | 2.4x |
| AFRM | $38.60 | +9.0% | 2.2x |
| RBLX | $42.80 | +6.5% | 2.0x |
| SQ | $72.40 | +5.1% | 2.1x |

Unusual volume with positive price action signals strong conviction. AI names SOUN, PLTR, IONQ leading with 3x+ normal volume. These moves often have follow-through - watch for consolidation patterns for entries.`
  },
  {
    id: '14',
    text: "What stocks under $50 are up more than 10% right now?",
    response: `Found 6 low-priced stocks with explosive moves...

| Ticker | Price | Change | Volume |
|--------|-------|--------|--------|
| SOUN | $4.85 | +15.5% | 12.4M |
| MARA | $18.40 | -13.2% | 8.5M |
| IONQ | $12.40 | +10.7% | 5.2M |
| UPST | $42.30 | +9.9% | 4.2M |
| SOFI | $8.45 | +8.1% | 18.5M |
| HOOD | $12.80 | +7.1% | 8.2M |

Small-cap momentum names seeing explosive moves. SOUN leading the AI penny stock rally while IONQ benefits from quantum computing hype. High volatility - use proper position sizing and tight risk management.`
  },
  {
    id: '15',
    text: "Find me wide-range day stocks where today's high-low spread is more than 5%",
    response: `Found 14 stocks with wide trading ranges today...

| Ticker | Price | Range % | High | Low |
|--------|-------|---------|------|-----|
| SOUN | $4.85 | 18.2% | $5.12 | $4.18 |
| SMCI | $42.30 | 15.4% | $48.50 | $41.20 |
| MARA | $18.40 | 14.8% | $21.20 | $18.05 |
| IONQ | $12.40 | 12.5% | $13.20 | $11.40 |
| COIN | $178.30 | 10.2% | $195.40 | $175.80 |
| RIOT | $12.80 | 9.8% | $14.50 | $12.65 |
| UPST | $42.30 | 8.5% | $43.80 | $39.20 |

Wide-range days indicate high volatility and trading opportunity. These names are ideal for intraday momentum strategies. Watch for mean reversion plays as prices often retrace to mid-range levels.`
  },
  {
    id: '16',
    text: "Show me stocks trading below VWAP that are down more than 2% - potential short continuation",
    response: `Found 10 weak stocks below VWAP...

| Ticker | Price | vs VWAP | Change |
|--------|-------|---------|--------|
| SMCI | $42.30 | -3.2% | -12.8% |
| TSLA | $248.90 | -1.8% | -3.7% |
| INTC | $42.80 | -2.1% | -5.3% |
| BA | $198.40 | -1.5% | -3.4% |
| COIN | $178.30 | -2.8% | -8.7% |
| SNOW | $168.40 | -1.2% | -3.9% |
| ROKU | $68.40 | -1.9% | -5.4% |
| NKE | $108.20 | -1.4% | -3.7% |

Stocks below VWAP with negative momentum often see continued selling. SMCI and COIN showing persistent weakness - potential short continuation setups. Look for rallies to VWAP for short entries with stops above.`
  },
  {
    id: '17',
    text: "What are the top 20 highest volume stocks today regardless of price direction?",
    response: `Top 20 stocks by total volume...

| Rank | Ticker | Price | Change | Volume |
|------|--------|-------|--------|--------|
| 1 | AAPL | $178.50 | +1.9% | 45.2M |
| 2 | PLTR | $24.80 | +6.0% | 42.5M |
| 3 | NVDA | $495.80 | +3.7% | 38.6M |
| 4 | TSLA | $248.90 | -3.7% | 32.4M |
| 5 | AMD | $124.60 | +5.4% | 28.8M |
| 6 | INTC | $42.80 | -5.3% | 24.2M |
| 7 | SOFI | $8.45 | +8.1% | 18.5M |
| 8 | MSFT | $378.90 | +1.7% | 18.4M |
| 9 | SMCI | $42.30 | -12.8% | 18.4M |
| 10 | META | $505.20 | +1.4% | 16.2M |
| 11 | PLUG | $3.28 | -14.8% | 15.6M |
| 12 | AMZN | $178.30 | +2.0% | 14.8M |
| 13 | SOUN | $4.85 | +15.5% | 12.4M |
| 14 | CMCSA | $42.80 | -1.6% | 12.4M |
| 15 | COIN | $178.30 | -8.7% | 12.2M |

Volume is the ultimate confirmation of price moves. Big tech and AI names dominating today's action. Watch these names for late-day institutional positioning.`
  },
];

export const PROMPT_ROTATION_INTERVAL = 1800000; // 30 minutes
