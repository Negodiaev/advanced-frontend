import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Article } from 'entities/Article';
import styles from './ArticlePage.module.scss';

interface IArticlePageProps {
    className?: string;
}

function ArticlePage({ className }: IArticlePageProps) {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div className={classNames(styles.root, {}, [className])}>{t('An article is not found')}</div>;
  }

  return (
    <div className={classNames(styles.root, {}, [className])}><Article id={id} /></div>
  );
}

export default memo(ArticlePage);
