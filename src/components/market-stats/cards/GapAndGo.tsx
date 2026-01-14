import { ArrowUpRight } from 'lucide-react';
import { StatCard } from '../StatCard';
import { StockRow } from '../StockRow';
import { mockStocks, getGapAndGo } from '../../../data/mockStocks';
import { formatPercent } from '../../../utils/formatters';

export function GapAndGo() {
  const gappers = getGapAndGo(mockStocks, 2, 10);

  return (
    <StatCard title="Gap & Go" icon={ArrowUpRight} badge="2%+ Gap" badgeType="filter">
      <div className="space-y-0.5">
        {gappers.map((stock, index) => (
          <StockRow
            key={stock.ticker}
            rank={index + 1}
            ticker={stock.ticker}
            price={stock.price}
            change={stock.change}
            additionalMetric={{
              label: 'Gap',
              value: formatPercent(((stock.open - stock.previousClose) / stock.previousClose) * 100),
            }}
          />
        ))}
        {gappers.length === 0 && (
          <div className="flex flex-col items-center justify-center h-32 gap-2 text-[var(--text-muted)]">
            <span className="text-2xl opacity-50">∅</span>
            <span className="text-sm font-mono">No setups found</span>
          </div>
        )}
      </div>
    </StatCard>
  );
}
