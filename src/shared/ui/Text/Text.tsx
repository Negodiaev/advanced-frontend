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
    CENTER = 'center',
    JUSTIFY = 'justify',
}

export enum TextSize {
    SM = 'sizeSM',
    MD = 'sizeMD',
    LG = 'sizeLG',
}

interface ITextProps {
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    className?: string;
}

export const Text = memo(({
  title,
  text,
  theme = TextTheme.DEFAULT,
  align = TextAlign.LEFT,
  size = TextSize.MD,
  className,
}: ITextProps) => {
  const isErrorTheme = theme === TextTheme.ERROR;
  const mods: TMods = {
    // [styles[`root_${align}`]]: align === TextAlign.RIGHT,
    // [styles.root_center]: align === TextAlign.CENTER,
    // [styles.root_justify]: align === TextAlign.JUSTIFY,
  };

  return (
    <div className={classNames(styles.root, mods, [styles[`root_${align}`], className])}>
      {title && (
        <p className={classNames(styles.title, {
          [styles.text_error]: isErrorTheme,
          [styles[`title_${size}`]]: true,
        })}
        >
          {title}
        </p>
      )}
      {text && (
        <p className={classNames(styles.text, {
          [styles.text_error]: isErrorTheme,
          [styles[`text_${size}`]]: true,
        })}
        >
          {text}
        </p>
      )}
    </div>
  );
});
