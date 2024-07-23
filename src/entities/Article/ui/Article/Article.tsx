import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks';
import { Text, TextTheme } from 'shared/ui/Text';
import { TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { ArticleBlockType, TArticleBlock } from '../../model/types/article';
import { ArticleText } from '../ArticleText/ArticleText';
import { ArticleImage } from '../ArticleImage/ArticleImage';
import { ArticleCode } from '../ArticleCode/ArticleCode';
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/articleSelectors';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleReducer } from '../../model/slice/articleSlice';
import styles from './Article.module.scss';

interface IArticleProps {
    id: string;
    className?: string;
}

const reducers: TReducersList = {
  article: articleReducer,
};

export const Article = memo(({ id, className }: IArticleProps) => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleIsLoading);
  const error = useSelector(getArticleError);
  const article = useSelector(getArticleData);
  let content;

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  const renderBlock = useCallback((block: TArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.TEXT:
      return <ArticleText content={block} key={block.id} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImage content={block} key={block.id} />;
    case ArticleBlockType.CODE:
      return <ArticleCode content={block} key={block.id} />;
    default:
      return null;
    }
  }, []);

  if (isLoading) {
    content = (
      <div className={styles.skeletons}>
        <Skeleton width={200} height={200} borderRadius="50%" className={styles.avatar} />
        <Skeleton width={400} height={48} />
        <Skeleton width={800} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
      </div>
    );
  } else if (error) {
    content = (
      <Text
        title={t('An error occurred while uploading the article')}
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
      />
    );
  } else if (article) {
    content = (
      <>
        <div className={classNames(styles.intro, {}, [styles.root__intro])}>
          <Avatar src={article.img} size={200} className={styles.avatar} />
          <Text title={article.title} text={article.subtitle} size={TextSize.LG} align={TextAlign.CENTER} />
          <div className={styles.intro__details}>
            <div className={styles.row}>
              <Icon Svg={CalendarIcon} className={styles.icon} />
              <Text text={article.createdAt} />
            </div>
            <div className={styles.row}>
              <Icon Svg={EyeIcon} className={styles.icon} />
              <Text text={String(article.views)} />
            </div>
          </div>
        </div>
        <div className={styles.content}>{article.content.map(renderBlock)}</div>
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.root, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
