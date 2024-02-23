import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button';

import SunIcon from 'shared/assets/icons/icon-sun.svg';
import MoonIcon from 'shared/assets/icons/icon-moon.svg';

import styles from './ThemeSwitcher.module.scss';

interface IThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher({ className }: IThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant={ButtonVariant.CLEAR} className={classNames('', {}, [className])} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <MoonIcon className={styles.icon} /> : <SunIcon className={styles.icon} />}
    </Button>
  );
}
