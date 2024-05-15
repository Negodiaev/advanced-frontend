import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { ISelectOption, Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface ICountrySelectProps {
    value?: Country;
    readonly?: boolean;
    className?: string;
    onChange?: (value: Country) => void;
}

const options: ISelectOption[] = [
  { value: Country.USA, text: Country.USA },
  { value: Country.Australia, text: Country.Australia },
  { value: Country.Canada, text: Country.Canada },
  { value: Country.England, text: Country.England },
  { value: Country.Ireland, text: Country.Ireland },
  { value: Country.Switzerland, text: Country.Switzerland },
  { value: Country.Germany, text: Country.Germany },
  { value: Country.Italy, text: Country.Italy },
  { value: Country.Russia, text: Country.Russia },
];

export const CountrySelect = memo(
  ({
    value, readonly, className, onChange,
  }: ICountrySelectProps) => {
    const { t } = useTranslation();

    const handleChange = useCallback((value: string) => {
      onChange?.(value as Country);
    }, [onChange]);

    return (
      <Select
        name="country"
        options={options}
        value={value}
        readonly={readonly}
        label={t('Select your country')}
        className={classNames('', {}, [className])}
        onChange={handleChange}
      />
    );
  },
);
