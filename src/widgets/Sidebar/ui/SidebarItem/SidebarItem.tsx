import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'shared/ui/Link';
import { ISidebarItem } from '../../model/items';
import styles from './SidebarItem.module.scss';

interface ISidebarItemProps {
    item: ISidebarItem;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item: { path, text, Icon }, collapsed }: ISidebarItemProps) => {
  const { t } = useTranslation('sidebar');

  return (
    <Link to={path} className={classNames(styles.root, {}, [])}>
      <Icon className={styles.icon} />
      <span
        className={classNames(styles.text, { [styles.text_hidden]: collapsed })}
      >
        {t(text)}
      </span>
    </Link>
  );
});
