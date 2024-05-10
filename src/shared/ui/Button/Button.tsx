import { ButtonHTMLAttributes, memo } from 'react';
import { classNames, TMods } from '../../lib/classNames/classNames';
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

export const Button = memo((props: IButtonProps) => {
  const {
    type = 'button', variant = ButtonVariant.DEFAULT, isSquare = false, size = ButtonSize.MD, disabled = false, className = '', children, ...rest
  } = props;

  const mods: TMods = {
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
});
