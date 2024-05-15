import { memo } from 'react';
import { classNames, TMods } from '../../lib/classNames/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
    DEFAULT = 'default',
    ERROR = 'error'
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'left',
}

interface ITextProps {
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    className?: string;
}

export const Text = memo(({
  title, text, theme = TextTheme.DEFAULT, align = TextAlign.LEFT, className,
}: ITextProps) => {
  const isErrorTheme = theme === TextTheme.ERROR;
  const mods: TMods = {
    [styles.root_right]: align === TextAlign.RIGHT,
    [styles.root_center]: align === TextAlign.CENTER,
  };

  return (
    <div className={classNames(styles.root, mods, [className])}>
      {title && <p className={classNames(styles.title, { [styles.text_error]: isErrorTheme })}>{title}</p>}
      {text && <p className={classNames(styles.text, { [styles.text_error]: isErrorTheme })}>{text}</p>}
    </div>
  );
});
