import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlePage.module.scss';

interface IArticlePageProps {
    className?: string;
}

function ArticlePage({ className }: IArticlePageProps) {
  const { t } = useTranslation('articles');

  return (
    <div className={classNames(styles.root, {}, [className])}>{t('Article content')}</div>
  );
}

export default memo(ArticlePage);
