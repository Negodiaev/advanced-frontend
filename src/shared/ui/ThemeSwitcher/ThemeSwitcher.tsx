import { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button';

import SunIcon from 'shared/assets/icons/sun.svg';
import MoonIcon from 'shared/assets/icons/moon.svg';
import SalmonIcon from 'shared/assets/icons/salmon.svg';

import styles from './ThemeSwitcher.module.scss';

interface IThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  const Icon = {
    [Theme.LIGHT]: <MoonIcon className={styles.icon} />,
    [Theme.DARK]: <SalmonIcon className={styles.icon} />,
    [Theme.SALMON]: <SunIcon className={styles.icon} />,
  };

  return (
    <Button variant={ButtonVariant.CLEAR} className={classNames('', {}, [className])} onClick={toggleTheme}>
      {Icon[theme]}
    </Button>
  );
});
