import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useStreamingText } from '../../hooks/useStreamingText';
import { cn } from '../../utils/cn';

interface ResponseStreamProps {
  response: string;
  promptId: string;
}

export function ResponseStream({ response, promptId }: ResponseStreamProps) {
  const { displayedText, isStreaming } = useStreamingText(response, {
    speed: 20,
    startDelay: 1000,
  });

  const renderFormattedResponse = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];

    lines.forEach((line, idx) => {
      if (line.startsWith('|')) {
        if (line.includes('---')) {
          return;
        }

        const cells = line.split('|').filter(cell => cell.trim());
        const isHeader = idx === 0 || lines[idx - 1]?.includes('---') ||
          (lines[idx + 1]?.includes('---'));

        elements.push(
          <div
            key={idx}
            className={cn(
              'grid gap-2 py-1.5 px-2 text-sm font-mono',
              'border-b border-[var(--border-default)]',
              isHeader && 'font-semibold text-[var(--text-muted)] bg-[var(--bg-tertiary)]/50'
            )}
            style={{
              gridTemplateColumns: `repeat(${cells.length}, minmax(0, 1fr))`
            }}
          >
            {cells.map((cell, cellIdx) => {
              const trimmedCell = cell.trim();
              const isPositive = trimmedCell.startsWith('+') && trimmedCell.includes('%');
              const isNegative = trimmedCell.startsWith('-') && trimmedCell.includes('%');

              return (
                <span
                  key={cellIdx}
                  className={cn(
                    'truncate',
                    isPositive && 'text-[var(--color-positive)]',
                    isNegative && 'text-[var(--color-negative)]',
                    /^[A-Z]{2,5}$/.test(trimmedCell) && 'font-bold text-[var(--text-primary)]'
                  )}
                >
                  {trimmedCell}
                </span>
              );
            })}
          </div>
        );
      } else {
        if (line.trim()) {
          elements.push(
            <p key={idx} className="text-[var(--text-secondary)] leading-relaxed my-2">
              {line}
            </p>
          );
        }
      }
    });

    return elements;
  };

  return (
    <motion.div
      key={promptId}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="card-gradient-border"
    >
      <div className="px-5 py-4 border-b border-[var(--border-default)] flex items-center gap-3 pl-6">
        <img src="/logo.svg" alt="Pelican" className="h-5 w-5" />
        <span className="label-uppercase">Pelican Response</span>
        {isStreaming && (
          <Loader2 className="w-3.5 h-3.5 text-[var(--accent-purple)] animate-spin ml-auto" />
        )}
      </div>

      <div className="p-5 pl-6 max-h-[400px] overflow-y-auto">
        {!displayedText ? (
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="text-sm font-mono">Pelican is thinking...</span>
          </div>
        ) : (
          <div className="space-y-1">
            {renderFormattedResponse(displayedText)}
            {isStreaming && (
              <span className="inline-block w-0.5 h-4 bg-[var(--accent-purple)] cursor-blink" />
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
