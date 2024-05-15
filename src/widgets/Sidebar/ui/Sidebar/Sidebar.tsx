import { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { getUserAuthData } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ButtonSize } from 'shared/ui/Button/Button';
import { sidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: ISidebarProps) => {
  const isAuth = useSelector(getUserAuthData);
  const [isCollapsed, setCollapsed] = useState<boolean>(false);

  const handleToggle = async () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      className={classNames(styles.root, { [styles.root_collapsed]: isCollapsed }, [className])}
      data-testid="sidebar"
    >
      <Button
        variant={ButtonVariant.CONTAINED_INVERTED}
        isSquare
        size={ButtonSize.XL}
        className={styles.toggleButton}
        data-testid="sidebar-toggle"
        onClick={handleToggle}
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <nav>
        <ul className={styles.menu}>
          {sidebarItemsList.filter(({ authOnly }) => !(authOnly && !isAuth)).map((item) => (
            <li key={item.path}>
              <SidebarItem item={item} collapsed={isCollapsed} />
            </li>
          ))}
        </ul>
      </nav>
      <div className={classNames(styles.switchers, { [styles.switchers_collapsed]: isCollapsed })}>
        <ThemeSwitcher />
        <LangSwitcher isShort={isCollapsed} />
      </div>
    </div>
  );
});
