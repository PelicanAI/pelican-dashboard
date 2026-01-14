import { Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-default)] bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Pelican" className="w-6 h-6" />
            <span className="text-sm text-[var(--text-secondary)] font-mono">
              Pelican AI Trading Agent
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[var(--text-muted)] hover:text-[var(--accent-purple)] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-[var(--text-muted)] hover:text-[var(--accent-purple)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-[var(--text-muted)] font-mono">
            &copy; {new Date().getFullYear()} Pelican. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
