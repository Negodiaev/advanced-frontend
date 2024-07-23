import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import { IArticleCodeBlock } from '../../model/types/article';
import styles from './ArticleCode.module.scss';

interface IArticleCodeProps {
    content: IArticleCodeBlock;
    className?: string;
}

export const ArticleCode = memo(({ content, className }: IArticleCodeProps) => (
  <div className={classNames(styles.root, {}, [className])}><Code content={content.code} /></div>
));
