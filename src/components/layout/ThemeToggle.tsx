import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-purple)]"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 text-[var(--text-secondary)]" />
        ) : (
          <Sun className="w-5 h-5 text-[var(--text-secondary)]" />
        )}
      </motion.div>
    </button>
  );
}
