import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Theme } from '../types';

interface AppState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'dark',
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
      setTheme: (theme: Theme) => set({ theme }),
    }),
    {
      name: 'pelican-dashboard-storage',
    }
  )
);
