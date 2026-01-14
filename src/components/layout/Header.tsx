import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg-primary)]/80 border-b border-[var(--border-default)]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Pelican" className="h-8 w-auto" />
          <span className="font-display text-2xl tracking-wide text-[var(--text-primary)]">
            PELICAN
          </span>
        </div>

        {/* Theme toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}
