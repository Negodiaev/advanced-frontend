import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { TextAlign } from 'shared/ui/Text/Text';
import { IArticleImageBlock } from '../../model/types/article';
import styles from './ArticleImage.module.scss';

interface IArticleImageProps {
    content: IArticleImageBlock;
    className?: string;
}

export const ArticleImage = memo(({ content, className }: IArticleImageProps) => {
  const { src, title } = content;

  return (
    <div className={classNames(styles.root, {}, [className])}>
      <img src={src} className={styles.img} alt={title} />
      {title && <Text text={title} align={TextAlign.CENTER} />}
    </div>
  );
});
