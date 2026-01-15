import { memo } from 'react';

interface StockRowProps {
  rank?: number;
  ticker: string;
  price: number;
  change: number;
  volume?: string;
  extraValue?: string; // For things like "2.2x" volume ratio
  extraLabel?: string;
}

export const StockRow = memo(function StockRow({ 
  rank, 
  ticker, 
  price, 
  change, 
  volume,
  extraValue,
}: StockRowProps) {
  const isPositive = change >= 0;
  
  return (
    <tr className="hover:bg-[var(--bg-tertiary)] transition-colors">
      {/* Rank */}
      {rank !== undefined && (
        <td className="py-2.5 px-2 text-xs text-[var(--text-muted)] font-mono tabular-nums">
          {rank}
        </td>
      )}
      
      {/* Ticker */}
      <td className="py-2.5 px-2 font-mono font-semibold text-sm text-[var(--text-primary)]">
        {ticker}
      </td>
      
      {/* Price */}
      <td className="py-2.5 px-2 text-right font-mono text-sm text-[var(--text-secondary)] tabular-nums">
        ${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </td>
      
      {/* Change */}
      <td className={`py-2.5 px-2 text-right font-mono text-sm font-medium tabular-nums ${
        isPositive ? 'text-[var(--color-positive)]' : 'text-[var(--color-negative)]'
      }`}>
        {isPositive ? '+' : ''}{change.toFixed(2)}%
      </td>
      
      {/* Volume or Extra Value */}
      {(volume || extraValue) && (
        <td className="py-2.5 px-2 text-right font-mono text-xs text-[var(--text-muted)] tabular-nums">
          {extraValue || volume}
        </td>
      )}
    </tr>
  );
});
