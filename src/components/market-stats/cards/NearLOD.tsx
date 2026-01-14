import { ArrowDown } from 'lucide-react';
import { StatCard } from '../StatCard';
import { StockRow } from '../StockRow';
import { mockStocks, getNearLOD } from '../../../data/mockStocks';

export function NearLOD() {
  const nearLow = getNearLOD(mockStocks, 1, 10);

  return (
    <StatCard title="Near LOD" icon={ArrowDown} badge="Bounce Watch" badgeType="alert">
      <div className="space-y-0.5">
        {nearLow.map((stock, index) => (
          <StockRow
            key={stock.ticker}
            rank={index + 1}
            ticker={stock.ticker}
            price={stock.price}
            change={stock.change}
            additionalMetric={{
              label: '% LOD',
              value: `${(((stock.price - stock.low) / stock.low) * 100).toFixed(2)}%`,
            }}
          />
        ))}
        {nearLow.length === 0 && (
          <p className="text-sm text-[var(--text-muted)] text-center py-4">
            No stocks near low of day
          </p>
        )}
      </div>
    </StatCard>
  );
}
