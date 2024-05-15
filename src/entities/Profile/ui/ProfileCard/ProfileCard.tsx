import { useTranslation } from 'react-i18next';

import { classNames, TMods } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader';
import { TextAlign } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from '../../../Currency/model/types/currency';
import { CurrencySelect } from '../../../Currency/ui/CurrencySelect/CurrencySelect';
import { Country } from '../../../Country/model/types/country';
import { CountrySelect } from '../../../Country/ui/CountrySelect/CountrySelect';
import { IProfile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

interface IProfileCardProps {
    data?: IProfile;
    isLoading?: boolean;
    error?: string;
    readonly: boolean;
    className?: string;
    onChangeName?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
}

export function ProfileCard(props: IProfileCardProps) {
  const {
    data,
    isLoading,
    error,
    readonly,
    className,
    onChangeName,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');
  const mods: TMods = {
    [styles.root_editing]: !readonly,
  };

  return (
    <div className={classNames(styles.root, mods, [className])}>
      {isLoading ? <div className={styles.center}><Loader /></div> : error
        ? (
          <div className={styles.center}>
            <Text
              theme={TextTheme.ERROR}
              title={t('An error occurred while uploading the profile')}
              text={t('Try to reload the page')}
              align={TextAlign.CENTER}
            />
          </div>
        ) : (
          <div className={styles.data}>
            {data?.avatar && <Avatar src={data.avatar} className={styles.avatar} alt="User's avatar" />}
            <Input
              value={data?.name}
              placeholder={t('Your name')}
              readonly={readonly}
              onChange={onChangeName}
            />
            <Input
              value={data?.lastname}
              placeholder={t('Your last name')}
              readonly={readonly}
              onChange={onChangeLastname}
            />
            <Input
              value={data?.age}
              placeholder={t('Your age')}
              readonly={readonly}
              onChange={onChangeAge}
            />
            <Input
              value={data?.city}
              placeholder={t('Your city')}
              readonly={readonly}
              onChange={onChangeCity}
            />
            <Input
              value={data?.username}
              placeholder={t('Your username')}
              readonly={readonly}
              onChange={onChangeUsername}
            />
            <Input
              value={data?.avatar}
              placeholder={t('Avatar URL')}
              readonly={readonly}
              onChange={onChangeAvatar}
            />
            <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
            <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
          </div>
        )}
    </div>
  );
}
