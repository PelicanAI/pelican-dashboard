import { IntelligenceCard } from '../IntelligenceCard';
import { ColumnHeaders } from '../ColumnHeaders';
import { mockNearLOD } from '../../../data/mockStocks';

export function NearLOD() {
  const stocks = mockNearLOD;

  return (
    <IntelligenceCard
      emoji="🔽"
      label="Near Low of Day"
      badge={{ text: "BOUNCE WATCH", variant: "info" }}
      isEmpty={stocks.length === 0}
    >
      <ColumnHeaders columns={[
        { label: '' },
        { label: 'Ticker' },
        { label: 'Price', align: 'right' },
        { label: 'Chg', align: 'right' },
        { label: 'From LOD', align: 'right' },
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
            <td className="py-2.5 px-2 text-right font-mono text-sm font-medium tabular-nums text-[var(--color-negative)]">
              {stock.change.toFixed(2)}%
            </td>
            <td className="py-2.5 px-2 text-right text-xs text-[var(--text-muted)] font-mono tabular-nums">
              +{stock.distanceFromLOD.toFixed(2)}%
            </td>
          </tr>
        ))}
      </tbody>
    </IntelligenceCard>
  );
}

