import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export function Card({ children, className, gradient = true }: CardProps) {
  if (gradient) {
    return (
      <div className={cn('card-gradient-border', className)}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'bg-[var(--bg-card)] rounded-[var(--radius-lg)] border border-[var(--border-default)]',
        'transition-colors duration-200 hover:border-[var(--border-accent)]',
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: Omit<CardProps, 'gradient'>) {
  return (
    <div className={cn('px-5 py-4 border-b border-[var(--border-default)]', className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: Omit<CardProps, 'gradient'>) {
  return <div className={cn('p-5', className)}>{children}</div>;
}
