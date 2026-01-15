import { IntelligenceCard } from '../IntelligenceCard';
import { StockRow } from '../StockRow';
import { ColumnHeaders } from '../ColumnHeaders';
import { mockForcedSelling } from '../../../data/mockStocks';

export function ForcedSelling() {
  const stocks = mockForcedSelling;

  return (
    <IntelligenceCard
      emoji="🔴"
      label="Forced Selling"
      badge={{ text: "STRESS", variant: "alert" }}
      isEmpty={stocks.length === 0}
    >
      <ColumnHeaders columns={[
        { label: '' },
        { label: 'Ticker' },
        { label: 'Price', align: 'right' },
        { label: 'Chg', align: 'right' },
        { label: 'Ratio', align: 'right' },
      ]} />
      <tbody>
        {stocks.map((stock, i) => (
          <StockRow
            key={stock.ticker}
            rank={i + 1}
            ticker={stock.ticker}
            price={stock.price}
            change={stock.change}
            extraValue={stock.volumeRatio}
          />
        ))}
      </tbody>
    </IntelligenceCard>
  );
}

