import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown, Check, X, Slash } from 'lucide-react';
import { cn } from '../../utils/cn';
import { formatCurrency } from '../../utils/formatters';
import { PatternBadge } from './PatternBadge';
import type { PatternType, PatternDirection, PatternStatus } from '../../types';

interface PatternRowProps {
  ticker: string;
  companyName?: string;
  pattern: PatternType;
  direction: PatternDirection;
  entryPrice: number;
  targetPrice: number;
  currentPrice?: number;
  exitPrice?: number;
  status?: PatternStatus;
  progress?: number;
  timeActive?: string;
  timeToHit?: string;
  percentGain?: number;
  confidence?: number;
  isActive?: boolean;
}

export const PatternRow = memo(function PatternRow({
  ticker,
  companyName,
  pattern,
  direction,
  entryPrice,
  targetPrice,
  currentPrice,
  exitPrice,
  status,
  progress = 0,
  timeActive,
  timeToHit,
  percentGain,
  isActive = true,
}: PatternRowProps) {
  const isLong = direction === 'Long';
  const displayPrice = isActive ? currentPrice : exitPrice;

  const getStatusIcon = () => {
    switch (status) {
      case 'hit':
        return <Check className="w-4 h-4" />;
      case 'missed':
        return <X className="w-4 h-4" />;
      case 'invalidated':
        return <Slash className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getRowBgClass = () => {
    if (!status || isActive) return '';
    switch (status) {
      case 'hit':
        return 'bg-[var(--color-positive)]/5';
      case 'missed':
        return 'bg-[var(--color-negative)]/5';
      case 'invalidated':
        return 'opacity-60';
      default:
        return '';
    }
  };

  return (
    <div
      className={cn(
        'grid items-center gap-2 py-2.5 px-3 -mx-3 rounded-[var(--radius-sm)]',
        'hover:bg-[var(--bg-tertiary)] transition-colors duration-100',
        'text-sm',
        getRowBgClass(),
        isActive
          ? 'grid-cols-[60px_1fr_80px_70px_70px_1fr_70px] md:grid-cols-[60px_1fr_100px_80px_80px_80px_1fr_80px]'
          : 'grid-cols-[60px_1fr_80px_70px_70px_80px] md:grid-cols-[60px_1fr_100px_80px_80px_80px_100px]'
      )}
    >
      {/* Ticker */}
      <div className="min-w-0">
        <span className="font-mono font-bold text-[var(--text-primary)]">
          {ticker}
        </span>
        {companyName && (
          <p className="text-xs text-[var(--text-muted)] truncate hidden md:block">
            {companyName}
          </p>
        )}
      </div>

      {/* Pattern Badge */}
      <div className="min-w-0">
        <PatternBadge pattern={pattern} direction={direction} />
      </div>

      {/* Direction */}
      <div
        className={cn(
          'flex items-center gap-1 font-mono font-medium',
          isLong ? 'text-[var(--color-positive)]' : 'text-[var(--color-negative)]'
        )}
      >
        {isLong ? (
          <ArrowUp className="w-4 h-4" />
        ) : (
          <ArrowDown className="w-4 h-4" />
        )}
        <span className="hidden md:inline">{direction}</span>
      </div>

      {/* Entry Price */}
      <div className="text-right font-mono text-[var(--text-secondary)]">
        {formatCurrency(entryPrice)}
      </div>

      {/* Target Price */}
      <div className="text-right font-mono text-[var(--text-primary)]">
        {formatCurrency(targetPrice)}
      </div>

      {/* Current/Exit Price - only on md+ for active */}
      {isActive && displayPrice && (
        <div className="text-right font-mono text-[var(--text-primary)] hidden md:block">
          {formatCurrency(displayPrice)}
        </div>
      )}

      {/* Progress Bar (Active) or Result (Completed) */}
      {isActive ? (
        <div className="flex items-center gap-2">
          <div className="progress-bar-track flex-1">
            <motion.div
              className={cn(
                progress >= 0
                  ? 'progress-bar-fill-positive'
                  : 'progress-bar-fill-negative'
              )}
              style={{ width: `${Math.abs(progress)}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${Math.abs(progress)}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
          <span className="text-xs text-[var(--text-muted)] font-mono w-10 text-right">
            {progress.toFixed(0)}%
          </span>
        </div>
      ) : (
        <div
          className={cn(
            'flex items-center gap-1.5 font-mono font-medium',
            status === 'hit' && 'text-[var(--color-positive)]',
            status === 'missed' && 'text-[var(--color-negative)]',
            status === 'invalidated' && 'text-[var(--text-muted)]'
          )}
        >
          {getStatusIcon()}
          <span>
            {status === 'hit' && percentGain
              ? `+${percentGain.toFixed(1)}%`
              : status === 'missed'
              ? 'Stopped'
              : 'Invalid'}
          </span>
        </div>
      )}

      {/* Time */}
      <div className="text-right text-xs text-[var(--text-muted)] font-mono">
        {isActive ? timeActive : timeToHit}
      </div>
    </div>
  );
});
