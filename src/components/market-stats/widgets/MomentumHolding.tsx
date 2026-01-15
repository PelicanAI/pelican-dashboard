import { IntelligenceCard } from '../IntelligenceCard';
import { StockRow } from '../StockRow';
import { ColumnHeaders } from '../ColumnHeaders';
import { mockMomentumHolding } from '../../../data/mockStocks';
import { formatVolume } from '../../../utils/formatters';

export function MomentumHolding() {
  const stocks = mockMomentumHolding;

  return (
    <IntelligenceCard
      emoji="🟢"
      label="Momentum Holding"
      badge={{ text: "STRENGTH", variant: "live" }}
      isEmpty={stocks.length === 0}
    >
      <ColumnHeaders columns={[
        { label: '' },
        { label: 'Ticker' },
        { label: 'Price', align: 'right' },
        { label: 'Chg', align: 'right' },
        { label: 'Vol', align: 'right' },
      ]} />
      <tbody>
        {stocks.map((stock, i) => (
          <StockRow
            key={stock.ticker}
            rank={i + 1}
            ticker={stock.ticker}
            price={stock.price}
            change={stock.change}
            volume={formatVolume(stock.volume)}
          />
        ))}
      </tbody>
    </IntelligenceCard>
  );
}

