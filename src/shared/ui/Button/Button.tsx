import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Button.module.scss';

export enum ButtonVariant {
    CLEAR = 'clear'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    className?: string;
}

export const Button: FC<IButtonProps> = (props) => {
    const {variant = ButtonVariant.CLEAR, className, children, ...rest} = props;

    return (
        <button {...rest} className={classNames(styles.root, {}, [className, styles[variant]])}>
            {children}
        </button>
    );
}