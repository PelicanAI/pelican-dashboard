import { ArrowUp } from 'lucide-react';
import { StatCard } from '../StatCard';
import { StockRow } from '../StockRow';
import { mockStocks, getNearHOD } from '../../../data/mockStocks';

export function NearHOD() {
  const nearHigh = getNearHOD(mockStocks, 1, 10);

  return (
    <StatCard title="Near HOD" icon={ArrowUp} badge="Strength" badgeType="live">
      <div className="space-y-0.5">
        {nearHigh.map((stock, index) => (
          <StockRow
            key={stock.ticker}
            rank={index + 1}
            ticker={stock.ticker}
            price={stock.price}
            change={stock.change}
            additionalMetric={{
              label: '% HOD',
              value: `${(((stock.high - stock.price) / stock.high) * 100).toFixed(2)}%`,
            }}
          />
        ))}
        {nearHigh.length === 0 && (
          <p className="text-sm text-[var(--text-muted)] text-center py-4">
            No stocks near high of day
          </p>
        )}
      </div>
    </StatCard>
  );
}
