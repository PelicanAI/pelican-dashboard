import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';
import type { PelicanPrompt } from '../../types';

interface PromptDisplayProps {
  prompt: PelicanPrompt;
}

export function PromptDisplay({ prompt }: PromptDisplayProps) {
  return (
    <div className="card-gradient-border">
      <div className="p-5 pl-6">
        <div className="flex items-center gap-2 mb-3">
          <Terminal className="w-4 h-4 text-[var(--accent-purple)]" />
          <span className="label-uppercase">User Prompt</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={prompt.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <p className="text-lg md:text-xl text-[var(--text-primary)] font-medium leading-relaxed">
              "{prompt.text}"
              <span className="inline-block w-0.5 h-5 ml-1 bg-[var(--accent-purple)] cursor-blink align-middle" />
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
