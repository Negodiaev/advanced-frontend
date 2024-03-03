import { PropsWithChildren, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface IThemeProviderProps {
  initialTheme?: Theme;
}

export function ThemeProvider({ initialTheme = defaultTheme, children }: PropsWithChildren<IThemeProviderProps>) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
  );
}
