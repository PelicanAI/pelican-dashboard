import type { ReactNode } from 'react';

interface IntelligenceCardProps {
  emoji: string;
  label: string;
  description?: string;
  badge?: {
    text: string;
    variant: 'live' | 'alert' | 'info';
  };
  children: ReactNode;
  isEmpty?: boolean;
  emptyMessage?: string;
}

export function IntelligenceCard({
  emoji,
  label,
  description,
  badge,
  children,
  isEmpty,
  emptyMessage = "No matches found"
}: IntelligenceCardProps) {
  return (
    <div className="card-gradient-border h-full min-h-[280px] flex flex-col">
      <div className="p-5 pl-6 flex flex-col flex-1">
        {/* Header - cleaner layout */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span className="text-xl leading-none">{emoji}</span>
            <div>
              <h4 className="font-display text-base leading-tight">{label}</h4>
            </div>
          </div>
          {badge && (
            <span className={`badge-${badge.variant} shrink-0`}>
              {badge.text}
            </span>
          )}
        </div>
        
        {/* Description (optional) */}
        {description && (
          <p className="text-xs text-[var(--text-muted)] mb-3 font-mono">
            {description}
          </p>
        )}
        
        {/* Content with more breathing room */}
        <div className="flex-1">
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center h-32 gap-2 text-[var(--text-muted)]">
              <span className="text-2xl opacity-50">∅</span>
              <span className="text-sm font-mono">{emptyMessage}</span>
            </div>
          ) : (
            <table className="w-full text-sm">
              {children}
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

