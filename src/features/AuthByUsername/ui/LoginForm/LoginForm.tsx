import { FormEvent, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { TextTheme, Text } from 'shared/ui/Text/Text';

import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: ILoginFormProps) => {
  const { t } = useTranslation('auth');
  const dispatch = useDispatch();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handleChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <form className={classNames(styles.root, {}, [className])} onSubmit={handleSubmit}>
      {error && <Text text={t('Incorrect login or password')} theme={TextTheme.ERROR} />}
      <Input name="username" value={username} placeholder={t('Username')} autoFocus onChange={handleChangeUsername} />
      <Input name="password" value={password} placeholder={t('Password')} onChange={handleChangePassword} />
      <Button type="submit" variant={ButtonVariant.CONTAINED_INVERTED} disabled={isLoading} className={styles.root__btn}>{t('Submit')}</Button>
    </form>
  );
});
