import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ButtonSize } from 'shared/ui/Button/Button';
import { Link } from 'shared/ui/Link';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import HouseIcon from 'shared/assets/icons/house.svg';
import InfoIcon from 'shared/assets/icons/info.svg';

import styles from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}

export function Sidebar({ className }: ISidebarProps) {
  const { t } = useTranslation('sidebar');
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
          <li>
            <Link to={RoutePath.main} className={styles.link}>
              <HouseIcon className={styles.linkIcon} />
              <span
                className={classNames(styles.linkText, { [styles.linkText_hidden]: isCollapsed })}
              >
                {t('Home')}
              </span>
            </Link>
          </li>
          <li>
            <Link to={RoutePath.about} className={styles.link}>
              <InfoIcon className={styles.linkIcon} />
              <span
                className={classNames(styles.linkText, { [styles.linkText_hidden]: isCollapsed })}
              >
                {t('About')}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classNames(styles.switchers, { [styles.switchers_collapsed]: isCollapsed })}>
        <ThemeSwitcher />
        <LangSwitcher isShort={isCollapsed} />
      </div>
    </div>
  );
}
