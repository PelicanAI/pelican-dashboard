import { ArrowDownRight } from 'lucide-react';
import { StatCard } from '../StatCard';
import { StockRow } from '../StockRow';
import { mockStocks, getGapAndFade } from '../../../data/mockStocks';
import { formatPercent } from '../../../utils/formatters';

export function GapAndFade() {
  const faders = getGapAndFade(mockStocks, 2, 10);

  return (
    <StatCard title="Gap & Fade" icon={ArrowDownRight} badge="Fading" badgeType="alert">
      <div className="space-y-0.5">
        {faders.map((stock, index) => (
          <StockRow
            key={stock.ticker}
            rank={index + 1}
            ticker={stock.ticker}
            price={stock.price}
            change={stock.change}
            additionalMetric={{
              label: 'Fade',
              value: formatPercent(-((stock.open - stock.price) / stock.open) * 100),
            }}
          />
        ))}
        {faders.length === 0 && (
          <div className="flex flex-col items-center justify-center h-32 gap-2 text-[var(--text-muted)]">
            <span className="text-2xl opacity-50">∅</span>
            <span className="text-sm font-mono">No setups found</span>
          </div>
        )}
      </div>
    </StatCard>
  );
}
