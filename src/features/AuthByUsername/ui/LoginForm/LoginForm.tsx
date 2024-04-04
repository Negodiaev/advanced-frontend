import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';

import styles from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string;
}

export function LoginForm({ className }: ILoginFormProps) {
  const { t } = useTranslation('auth');

  return (
    <form className={classNames(styles.root, {}, [className])}>
      <Input name="username" placeholder={t('Username')} autoFocus />
      <Input name="password" placeholder={t('Password')} />
      <Button variant={ButtonVariant.CONTAINED_INVERTED} className={styles.root__btn}>{t('Submit')}</Button>
    </form>
  );
}
