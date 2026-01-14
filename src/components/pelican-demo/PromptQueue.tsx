import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Clock } from 'lucide-react';
import type { PelicanPrompt } from '../../types';
import { formatTime } from '../../utils/formatters';

interface PromptQueueProps {
  nextPrompts: PelicanPrompt[];
  timeUntilNext: number;
  progress: number;
}

export function PromptQueue({ nextPrompts, timeUntilNext, progress }: PromptQueueProps) {
  return (
    <div className="card-gradient-border">
      <div className="p-5 pl-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[var(--text-muted)]" />
            <span className="label-uppercase">Coming Up</span>
          </div>
          <span className="text-xs text-[var(--text-muted)] font-mono">
            Next in {formatTime(timeUntilNext)}
          </span>
        </div>

        {/* Progress bar */}
        <div className="progress-bar-track mb-4">
          <motion.div
            className="progress-bar-fill-purple"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'linear' }}
          />
        </div>

        <AnimatePresence mode="popLayout">
          <div className="space-y-2">
            {nextPrompts.map((prompt, index) => (
              <motion.div
                key={prompt.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="flex items-start gap-2 text-sm"
              >
                <ChevronRight className="w-4 h-4 text-[var(--accent-purple)] mt-0.5 flex-shrink-0" />
                <p className="text-[var(--text-muted)] line-clamp-1">
                  {prompt.text}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
