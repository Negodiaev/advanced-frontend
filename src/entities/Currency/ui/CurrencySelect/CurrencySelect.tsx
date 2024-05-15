import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { ISelectOption, Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface ICurrencySelectProps {
    value?: Currency;
    readonly?: boolean;
    className?: string;
    onChange?: (value: Currency) => void;
}

const options: ISelectOption[] = [
  { value: Currency.USD, text: Currency.USD },
  { value: Currency.EUR, text: Currency.EUR },
  { value: Currency.AUD, text: Currency.AUD },
  { value: Currency.CAD, text: Currency.CAD },
  { value: Currency.JPY, text: Currency.JPY },
  { value: Currency.RUB, text: Currency.RUB },
];

export const CurrencySelect = memo(
  ({
    value, readonly, className, onChange,
  }: ICurrencySelectProps) => {
    const { t } = useTranslation();

    const handleChange = useCallback((value: string) => {
      onChange?.(value as Currency);
    }, [onChange]);

    return (
      <Select
        name="currency"
        options={options}
        value={value}
        readonly={readonly}
        label={t('Select currency')}
        className={classNames('', {}, [className])}
        onChange={handleChange}
      />
    );
  },
);
