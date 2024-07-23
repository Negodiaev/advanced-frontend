import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { TextAlign } from 'shared/ui/Text/Text';
import { IArticleTextBlock } from '../../model/types/article';
import styles from './ArticleText.module.scss';

interface IArticleTextProps {
    content: IArticleTextBlock;
    className?: string;
}

export const ArticleText = memo(({ content, className }: IArticleTextProps) => {
  const { title, text } = content;

  return (
    <div className={classNames(styles.root, {}, [className])}>
      {title && <Text title={title} align={TextAlign.CENTER} />}
      {text.map((text) => <Text text={text} align={TextAlign.JUSTIFY} key={text} />)}
    </div>
  );
});
