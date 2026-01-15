import { IntelligenceCard } from '../IntelligenceCard';
import { ColumnHeaders } from '../ColumnHeaders';
import { mockWideRange } from '../../../data/mockStocks';

export function WideRange() {
  const stocks = mockWideRange;

  return (
    <IntelligenceCard
      emoji="⚡"
      label="Wide Range Day"
      badge={{ text: "VOLATILE", variant: "alert" }}
      isEmpty={stocks.length === 0}
    >
      <ColumnHeaders columns={[
        { label: '' },
        { label: 'Ticker' },
        { label: 'Price', align: 'right' },
        { label: 'Range', align: 'right' },
        { label: 'H/L', align: 'right' },
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
            <td className="py-2.5 px-2 text-right font-mono text-sm font-medium tabular-nums text-[var(--accent-purple)]">
              {stock.rangePct.toFixed(1)}%
            </td>
            <td className="py-2.5 px-2 text-right text-[10px] text-[var(--text-muted)] font-mono tabular-nums leading-tight">
              <div className="flex flex-col">
                <span>{stock.high.toFixed(2)}</span>
                <span>{stock.low.toFixed(2)}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </IntelligenceCard>
  );
}

