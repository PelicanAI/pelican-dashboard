import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { cn } from '../../utils/cn';

interface StatCardProps {
  title: string;
  icon: LucideIcon;
  badge?: string;
  badgeType?: 'live' | 'alert' | 'filter';
  children: React.ReactNode;
  isLoading?: boolean;
}

export function StatCard({
  title,
  icon: Icon,
  badge,
  badgeType = 'filter',
  children,
  isLoading
}: StatCardProps) {
  const getBadgeClass = () => {
    switch (badgeType) {
      case 'live':
        return 'badge-live';
      case 'alert':
        return 'badge-alert';
      default:
        return 'badge-filter';
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-[var(--accent-purple)]" />
            <h3 className="font-semibold text-sm text-[var(--text-primary)]">
              {title}
            </h3>
          </div>
          {badge && (
            <span className={cn(getBadgeClass())}>
              {badgeType === 'live' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-positive)] animate-pulse" />
              )}
              {badge}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden p-0">
        <div className="h-full max-h-[280px] overflow-y-auto px-5 py-3">
          {isLoading ? (
            <div className="animate-pulse space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-8 bg-[var(--bg-tertiary)] rounded-[var(--radius-sm)]" />
              ))}
            </div>
          ) : (
            children
          )}
        </div>
      </CardContent>
    </Card>
  );
}
