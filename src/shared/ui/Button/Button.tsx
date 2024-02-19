import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonVariant {
    CLEAR = 'clear'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    className?: string;
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    type = 'button', variant = ButtonVariant.CLEAR, className, children, ...rest
  } = props;

  return (
    <button
      {...rest}
      type={type}
      className={classNames(styles.root, {}, [className, styles[variant]])}
    >
      {children}
    </button>
  );
};
