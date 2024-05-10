import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input/Input';
import { ButtonVariant, Button } from 'shared/ui/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import styles from './ProfileCard.module.scss';

interface IProfileCardProps {
    className?: string;
}

export function ProfileCard({ className }: IProfileCardProps) {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(styles.root, {}, [className])}>
      <div className={classNames(styles.header, {}, [styles.root__header])}>
        <Text title="Profile" />
        <Button variant={ButtonVariant.OUTLINED}>{t('Edit')}</Button>
      </div>
      <div className={styles.data}>
        <Input value={data?.name} placeholder={t('Your name')} />
        <Input value={data?.lastname} placeholder={t('Your last name')} />
      </div>
    </div>
  );
}
