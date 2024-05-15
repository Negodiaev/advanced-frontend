import { ChangeEvent, memo, useMemo } from 'react';

import { classNames } from '../../lib/classNames/classNames';
import styles from './Select.module.scss';

export interface ISelectOption {
    value: string;
    text: string;
}

interface ISelectProps {
    name: string;
    options: ISelectOption[];
    value?: string;
    readonly?: boolean;
    label?: string;
    className?: string;
    onChange?: (value: string) => void;
}

export const Select = memo((props: ISelectProps) => {
  const {
    name, options, value, readonly, label, className, onChange,
  } = props;

  const optionsList = useMemo(() => options.map(({ value, text }) => (
    <option
      value={value}
      className={styles.option}
      key={value}
    >
      {text}
    </option>
  )), [options]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(styles.root, {}, [className])}>
      {label && <label htmlFor={name} className={styles.label}>{label}</label>}
      <select
        id={name}
        name={name}
        value={value}
        disabled={readonly}
        className={classNames(styles.select, { [styles.select_disabled]: readonly })}
        onChange={handleChange}
      >
        {optionsList}
      </select>
    </div>
  );
});
