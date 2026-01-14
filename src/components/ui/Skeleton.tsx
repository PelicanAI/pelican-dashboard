import { cn } from '../../utils/cn';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-[var(--bg-tertiary)] rounded-[var(--radius-sm)]',
        className
      )}
    />
  );
}

export function StockRowSkeleton() {
  return (
    <div className="flex items-center gap-3 py-2">
      <Skeleton className="w-6 h-4" />
      <Skeleton className="w-12 h-4" />
      <Skeleton className="flex-1 h-4" />
      <Skeleton className="w-16 h-4" />
      <Skeleton className="w-14 h-4" />
    </div>
  );
}
