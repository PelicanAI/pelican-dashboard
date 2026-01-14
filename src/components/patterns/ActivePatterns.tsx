import { motion } from 'framer-motion';
import { Crosshair } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { PatternRow } from './PatternRow';
import { mockActivePatterns } from '../../data/mockPatterns';
import { formatTimeAgo, calculateProgress } from '../../utils/formatters';

export function ActivePatterns() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Crosshair className="w-4 h-4 text-[var(--accent-purple)]" />
          <h3 className="font-semibold text-[var(--text-primary)]">
            Active Patterns
          </h3>
          <span className="badge-live ml-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-positive)] animate-pulse" />
            {mockActivePatterns.length} Live
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {/* Header Row */}
        <div className="grid items-center gap-2 py-2 px-5 text-[11px] font-mono font-medium text-[var(--text-muted)] uppercase tracking-[0.1em] border-b border-[var(--border-default)] grid-cols-[60px_1fr_80px_70px_70px_1fr_70px] md:grid-cols-[60px_1fr_100px_80px_80px_80px_1fr_80px]">
          <span>Ticker</span>
          <span>Pattern</span>
          <span>Dir</span>
          <span className="text-right">Entry</span>
          <span className="text-right">Target</span>
          <span className="text-right hidden md:block">Current</span>
          <span>Progress</span>
          <span className="text-right">Time</span>
        </div>

        {/* Pattern Rows */}
        <div className="divide-y divide-[var(--border-default)]/50 px-3">
          {mockActivePatterns.map((pattern, index) => (
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
                currentPrice={pattern.currentPrice}
                progress={calculateProgress(
                  pattern.entryPrice,
                  pattern.targetPrice,
                  pattern.currentPrice,
                  pattern.direction
                )}
                timeActive={formatTimeAgo(pattern.identifiedAt)}
                confidence={pattern.confidence}
                isActive={true}
              />
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
