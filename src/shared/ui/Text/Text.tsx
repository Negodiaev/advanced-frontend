import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
    DEFAULT = 'default',
    ERROR = 'error'
}

interface ITextProps {
    title?: string;
    text?: string;
    theme?: TextTheme;
    className?: string;
}

export function Text({
  title, text, theme = TextTheme.DEFAULT, className,
}: ITextProps) {
  const isErrorTheme = theme === TextTheme.ERROR;

  return (
    <div className={classNames(styles.root, {}, [className])}>
      {title && <p className={classNames(styles.title, { [styles.text_error]: isErrorTheme })}>{title}</p>}
      {text && <p className={classNames(styles.text, { [styles.text_error]: isErrorTheme })}>{text}</p>}
    </div>
  );
}
