import { cn } from '../../utils/cn';
import { Target } from 'lucide-react';

interface AccuracyBadgeProps {
  hitRate: number;
  period: string;
  totalPatterns?: number;
}

export function AccuracyBadge({ hitRate, period, totalPatterns }: AccuracyBadgeProps) {
  const getColorClass = () => {
    if (hitRate >= 70) return 'text-[var(--color-positive)] bg-[var(--color-positive-dim)]';
    if (hitRate >= 50) return 'text-yellow-400 bg-yellow-400/10';
    return 'text-[var(--color-negative)] bg-[var(--color-negative-dim)]';
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-full)] text-sm font-mono font-medium',
        getColorClass()
      )}
      title={totalPatterns ? `Based on ${totalPatterns} patterns` : undefined}
    >
      <Target className="w-4 h-4" />
      <span>{hitRate}% Accuracy</span>
      <span className="opacity-70">({period})</span>
    </div>
  );
}
