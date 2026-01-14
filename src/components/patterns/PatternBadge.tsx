import { cn } from '../../utils/cn';
import type { PatternType, PatternDirection } from '../../types';

interface PatternBadgeProps {
  pattern: PatternType;
  direction: PatternDirection;
}

const BULLISH_PATTERNS: PatternType[] = [
  'Bull Flag',
  'Ascending Triangle',
  'Inverse H&S',
  'Double Bottom',
  'Cup & Handle',
];

const BEARISH_PATTERNS: PatternType[] = [
  'Bear Flag',
  'Descending Triangle',
  'Head & Shoulders',
  'Double Top',
];

export function PatternBadge({ pattern, direction }: PatternBadgeProps) {
  const isBullish = BULLISH_PATTERNS.includes(pattern) || direction === 'Long';
  const isBearish = BEARISH_PATTERNS.includes(pattern) || direction === 'Short';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-[var(--radius-sm)] text-xs font-mono font-medium',
        isBullish && 'bg-[var(--color-positive-dim)] text-[var(--color-positive)]',
        isBearish && 'bg-[var(--color-negative-dim)] text-[var(--color-negative)]',
        !isBullish && !isBearish && 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]'
      )}
    >
      {isBullish && '▲'} {isBearish && '▼'} {pattern}
    </span>
  );
}
