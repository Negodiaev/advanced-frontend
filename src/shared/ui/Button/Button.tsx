import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonVariant {
    DEFAULT = 'default',
    CLEAR = 'clear',
    OUTLINED = 'outlined',
    CONTAINED = 'contained',
    CONTAINED_INVERTED = 'containedInverted',
}

export enum ButtonSize {
    SM = 'sm',
    MD = 'md',
    LG = 'lg',
    XL = 'xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    isSquare?: boolean;
    size?: ButtonSize;
    className?: string;
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    type = 'button', variant = ButtonVariant.DEFAULT, isSquare = false, size = ButtonSize.MD, disabled = false, className, children, ...rest
  } = props;

  const mods: Record<string, boolean> = {
    [styles.root_squared]: isSquare,
    [styles[`root_squared_${size}`]]: isSquare,
    [styles.root_disabled]: disabled,
  };

  const additional: string[] = [className, styles[`root_${variant}`], styles[`root_size_${size}`]];

  return (
    <button
      {...rest}
      type={type}
      disabled={disabled}
      className={classNames(styles.root, mods, additional)}
    >
      {children}
    </button>
  );
};
