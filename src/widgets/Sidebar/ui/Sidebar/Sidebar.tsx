import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import styles from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}

export function Sidebar({ className }: ISidebarProps) {
  const { t } = useTranslation('sidebar');
  const [isCollapsed, setCollapsed] = useState<boolean>(false);

  async function handleToggle() {
    setCollapsed((prevState) => !prevState);
  }

  return (
    <div
      className={classNames(styles.root, { [styles.root_collapsed]: isCollapsed }, [className])}
      data-testid="sidebar"
    >
      <button data-testid="sidebar-toggle" onClick={handleToggle}>{t('Toggle')}</button>
      <div className={classNames(styles.switchers, { [styles.switchers_collapsed]: isCollapsed })}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
}
