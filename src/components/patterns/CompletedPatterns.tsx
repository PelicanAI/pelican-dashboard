import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { PatternRow } from './PatternRow';
import { mockCompletedPatterns } from '../../data/mockPatterns';
import { formatDuration } from '../../utils/formatters';

export function CompletedPatterns() {
  const hits = mockCompletedPatterns.filter(p => p.status === 'hit').length;
  const misses = mockCompletedPatterns.filter(p => p.status === 'missed').length;
  const invalidated = mockCompletedPatterns.filter(p => p.status === 'invalidated').length;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--text-muted)]" />
            <h3 className="font-semibold text-[var(--text-primary)]">
              Completed (Last 24h)
            </h3>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="flex items-center gap-1 text-[var(--color-positive)]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {hits} Hit
            </span>
            <span className="flex items-center gap-1 text-[var(--color-negative)]">
              <XCircle className="w-3.5 h-3.5" />
              {misses} Missed
            </span>
            <span className="flex items-center gap-1 text-[var(--text-muted)]">
              <AlertCircle className="w-3.5 h-3.5" />
              {invalidated} Invalid
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {/* Header Row */}
        <div className="grid items-center gap-2 py-2 px-5 text-[11px] font-mono font-medium text-[var(--text-muted)] uppercase tracking-[0.1em] border-b border-[var(--border-default)] grid-cols-[60px_1fr_80px_70px_70px_80px] md:grid-cols-[60px_1fr_100px_80px_80px_80px_100px]">
          <span>Ticker</span>
          <span>Pattern</span>
          <span>Dir</span>
          <span className="text-right">Entry</span>
          <span className="text-right">Target</span>
          <span>Result</span>
          <span className="text-right hidden md:block">Duration</span>
        </div>

        {/* Pattern Rows */}
        <div className="divide-y divide-[var(--border-default)]/50 px-3">
          {mockCompletedPatterns.map((pattern, index) => (
            <motion.div
              key={pattern.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <PatternRow
                ticker={pattern.ticker}
                companyName={pattern.companyName}
                pattern={pattern.pattern}
                direction={pattern.direction}
                entryPrice={pattern.entryPrice}
                targetPrice={pattern.targetPrice}
                exitPrice={pattern.exitPrice}
                status={pattern.status}
                percentGain={pattern.percentGain}
                timeToHit={formatDuration(pattern.identifiedAt, pattern.resolvedAt)}
                isActive={false}
              />
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
