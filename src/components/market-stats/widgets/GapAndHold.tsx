import { IntelligenceCard } from '../IntelligenceCard';
import { ColumnHeaders } from '../ColumnHeaders';
import { mockGapAndHold } from '../../../data/mockStocks';

export function GapAndHold() {
  const stocks = mockGapAndHold;

  return (
    <IntelligenceCard
      emoji="🚀"
      label="Gap & Hold"
      badge={{ text: "POWER OPEN", variant: "live" }}
      isEmpty={stocks.length === 0}
    >
      <ColumnHeaders columns={[
        { label: '' },
        { label: 'Ticker' },
        { label: 'Price', align: 'right' },
        { label: 'Gap', align: 'right' },
        { label: 'vs Open', align: 'right' },
      ]} />
      <tbody>
        {stocks.map((stock, i) => (
          <tr key={stock.ticker} className="hover:bg-[var(--bg-tertiary)] transition-colors">
            <td className="py-2.5 px-2 text-xs text-[var(--text-muted)] font-mono tabular-nums">
              {i + 1}
            </td>
            <td className="py-2.5 px-2 font-mono font-semibold text-sm text-[var(--text-primary)]">
              {stock.ticker}
            </td>
            <td className="py-2.5 px-2 text-right font-mono text-sm text-[var(--text-secondary)] tabular-nums">
              ${stock.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </td>
            <td className="py-2.5 px-2 text-right font-mono text-sm font-medium tabular-nums text-[var(--color-positive)]">
              +{stock.gapPct.toFixed(2)}%
            </td>
            <td className="py-2.5 px-2 text-right text-xs text-[var(--text-secondary)] font-mono tabular-nums">
              {stock.currentVsOpen}
            </td>
          </tr>
        ))}
      </tbody>
    </IntelligenceCard>
  );
}

