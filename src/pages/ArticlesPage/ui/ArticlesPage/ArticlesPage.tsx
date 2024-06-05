import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlesPage.module.scss';

interface IArticlesPageProps {
    className?: string;
}

function ArticlesPage({ className }: IArticlesPageProps) {
  const { t } = useTranslation('articles');

  return (
    <div className={classNames(styles.root, {}, [className])}>{t('Articles content')}</div>
  );
}

export default memo(ArticlesPage);
