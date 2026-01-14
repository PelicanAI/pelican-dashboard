import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-mono font-medium',
    'transition-all duration-200 uppercase tracking-wide',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-purple)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none'
  );

  const variantStyles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: cn(
      'bg-transparent text-[var(--text-secondary)]',
      'hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]',
      'border-none'
    ),
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs rounded-[var(--radius-xs)]',
    md: 'px-4 py-2 text-sm rounded-[var(--radius-sm)]',
    lg: 'px-6 py-3 text-sm rounded-[var(--radius-sm)]',
  };

  // For primary and secondary, use the CSS classes from index.css
  if (variant === 'primary' || variant === 'secondary') {
    return (
      <button
        className={cn(variantStyles[variant], className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
