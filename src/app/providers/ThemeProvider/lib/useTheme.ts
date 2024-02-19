import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface IUseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return { theme, toggleTheme };
}
