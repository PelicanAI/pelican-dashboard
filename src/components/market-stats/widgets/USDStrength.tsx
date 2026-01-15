import { IntelligenceCard } from '../IntelligenceCard';
import { ColumnHeaders } from '../ColumnHeaders';
import { mockUSDStrength } from '../../../data/mockStocks';

export function USDStrength() {
  const pairs = mockUSDStrength;

  return (
    <IntelligenceCard
      emoji="💵"
      label="USD Strength"
      badge={{ text: "DOLLAR BID", variant: "live" }}
      isEmpty={pairs.length === 0}
    >
      <ColumnHeaders columns={[
        { label: '' },
        { label: 'Pair' },
        { label: 'Price', align: 'right' },
        { label: 'Chg', align: 'right' },
      ]} />
      <tbody>
        {pairs.map((pair, i) => (
          <tr key={pair.pair} className="hover:bg-[var(--bg-tertiary)] transition-colors">
            <td className="py-2.5 px-2 text-xs text-[var(--text-muted)] font-mono tabular-nums">
              {i + 1}
            </td>
            <td className="py-2.5 px-2 font-mono font-semibold text-sm text-[var(--text-primary)]">
              {pair.pair}
            </td>
            <td className="py-2.5 px-2 text-right font-mono text-sm text-[var(--text-secondary)] tabular-nums">
              {pair.price.toFixed(4)}
            </td>
            <td className="py-2.5 px-2 text-right font-mono text-sm font-medium tabular-nums text-[var(--color-positive)]">
              +{pair.change.toFixed(2)}%
            </td>
          </tr>
        ))}
      </tbody>
    </IntelligenceCard>
  );
}

