import { useEffect } from 'react';
import { useAppStore } from '../store/appStore';

export function useTheme() {
  const { theme, toggleTheme, setTheme } = useAppStore();

  useEffect(() => {
    const root = document.documentElement;
    // Dark mode is now the default, so we add 'light' class for light mode
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  return { theme, toggleTheme, setTheme };
}
