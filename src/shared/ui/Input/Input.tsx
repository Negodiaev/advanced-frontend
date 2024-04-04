import { ChangeEvent, InputHTMLAttributes, memo } from 'react';

import { classNames } from '../../lib/classNames/classNames';

import styles from './Input.module.scss';

type THTMLInputAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface IInputProps extends THTMLInputAttributes {
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props: IInputProps) => {
  const {
    type = 'text', name, placeholder, autoFocus = false, className, onChange, ...rest
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={styles.root}>
      {placeholder && <label htmlFor={name} className={styles.placeholder}>{placeholder}</label>}
      <input
        type={type}
        id={name}
        name={name}
        autoFocus={autoFocus}
        autoComplete="off"
        className={classNames(styles.input, {}, [className])}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
});
