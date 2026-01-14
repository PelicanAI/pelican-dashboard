import { Activity } from 'lucide-react';
import { StatCard } from '../StatCard';
import { StockRow } from '../StockRow';
import { mockStocks, getUnusualVolume } from '../../../data/mockStocks';

export function UnusualVolume() {
  const unusual = getUnusualVolume(mockStocks, 10);

  return (
    <StatCard title="Unusual Volume" icon={Activity} badge="Alert" badgeType="alert">
      <div className="space-y-0.5">
        {unusual.map((stock, index) => (
          <StockRow
            key={stock.ticker}
            rank={index + 1}
            ticker={stock.ticker}
            price={stock.price}
            change={stock.change}
            additionalMetric={{
              label: 'Ratio',
              value: `${(stock.volume / stock.avgVolume).toFixed(1)}x`,
            }}
          />
        ))}
      </div>
    </StatCard>
  );
}
