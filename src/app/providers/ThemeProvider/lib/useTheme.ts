import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface IUseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    let newTheme;

    switch (theme) {
    case Theme.LIGHT:
      newTheme = Theme.DARK;
      break;
    case Theme.DARK:
      newTheme = Theme.SALMON;
      break;
    case Theme.SALMON:
    default:
      newTheme = Theme.LIGHT;
    }

    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return { theme: theme || Theme.LIGHT, toggleTheme };
}
