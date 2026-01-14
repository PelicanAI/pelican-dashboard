import { memo } from 'react';
import { cn } from '../../utils/cn';
import { formatCurrency, formatPercent, formatVolume } from '../../utils/formatters';
import type { StockRowProps } from '../../types';

export const StockRow = memo(function StockRow({
  ticker,
  name,
  price,
  change,
  volume,
  additionalMetric,
  rank,
}: StockRowProps) {
  const isPositive = change >= 0;

  return (
    <div className="stock-row">
      {rank !== undefined && (
        <span className="w-5 text-xs text-[var(--text-muted)] font-mono text-right">
          {rank}
        </span>
      )}

      <div className="min-w-[52px]">
        <span className="stock-ticker">{ticker}</span>
      </div>

      {name && (
        <span className="flex-1 text-sm text-[var(--text-secondary)] truncate hidden sm:block">
          {name}
        </span>
      )}

      <span className="stock-price w-20 text-right">
        {formatCurrency(price)}
      </span>

      <span
        className={cn(
          'font-mono text-sm w-16 text-right font-medium',
          isPositive ? 'stock-change-positive' : 'stock-change-negative'
        )}
      >
        {formatPercent(change)}
      </span>

      {volume !== undefined && (
        <span className="stock-volume w-14 text-right hidden md:block">
          {formatVolume(volume)}
        </span>
      )}

      {additionalMetric && (
        <span className="text-sm text-[var(--text-secondary)] font-mono w-16 text-right">
          {additionalMetric.value}
        </span>
      )}
    </div>
  );
});
