import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { ActivePatterns } from './ActivePatterns';
import { CompletedPatterns } from './CompletedPatterns';
import { AccuracyBadge } from './AccuracyBadge';
import { mockPatternStats } from '../../data/mockPatterns';

export function PatternsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="badge-label">
              <TrendingUp className="w-3.5 h-3.5" />
              Patterns in Play
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-[var(--text-primary)] mb-2">
            Real-Time Pattern Recognition
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl">
            Pelican identifies chart patterns with entry points, price targets, and tracks their outcomes.
          </p>
        </div>
        <AccuracyBadge
          hitRate={mockPatternStats.hitRate}
          period="30d"
          totalPatterns={mockPatternStats.totalPatterns}
        />
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card-gradient-border">
          <div className="p-4 pl-5">
            <p className="text-sm text-[var(--text-muted)] mb-1 font-mono uppercase text-xs tracking-wider">Total Patterns</p>
            <p className="stat-number-cyan">
              {mockPatternStats.totalPatterns}
            </p>
          </div>
        </div>
        <div className="card-gradient-border">
          <div className="p-4 pl-5">
            <p className="text-sm text-[var(--text-muted)] mb-1 font-mono uppercase text-xs tracking-wider">Avg Time to Target</p>
            <p className="font-display text-3xl text-[var(--text-primary)]">
              {mockPatternStats.avgTimeToTarget}
            </p>
          </div>
        </div>
        <div className="card-gradient-border">
          <div className="p-4 pl-5">
            <p className="text-sm text-[var(--text-muted)] mb-1 font-mono uppercase text-xs tracking-wider">Hits (30d)</p>
            <p className="font-display text-3xl text-[var(--color-positive)]">
              {mockPatternStats.last30Days.hits}
            </p>
          </div>
        </div>
        <div className="card-gradient-border">
          <div className="p-4 pl-5">
            <p className="text-sm text-[var(--text-muted)] mb-1 font-mono uppercase text-xs tracking-wider">Misses (30d)</p>
            <p className="font-display text-3xl text-[var(--color-negative)]">
              {mockPatternStats.last30Days.misses}
            </p>
          </div>
        </div>
      </div>

      {/* Pattern Tables */}
      <div className="space-y-6">
        <ActivePatterns />
        <CompletedPatterns />
      </div>
    </motion.div>
  );
}
