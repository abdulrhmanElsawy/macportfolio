import { create } from 'zustand';

const STORAGE_KEY = 'macportfolio-theme';

const getStoredTheme = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch (_) {}
  return 'light';
};

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (_) {}
};

// Apply on load so flash is minimized
applyTheme(getStoredTheme());

const useThemeStore = create((set) => ({
  theme: getStoredTheme(),

  setTheme: (theme) => {
    const value = theme === 'dark' ? 'dark' : 'light';
    set({ theme: value });
    applyTheme(value);
  },

  toggleTheme: () => {
    set((state) => {
      const next = state.theme === 'light' ? 'dark' : 'light';
      applyTheme(next);
      return { theme: next };
    });
  },
}));

export default useThemeStore;
