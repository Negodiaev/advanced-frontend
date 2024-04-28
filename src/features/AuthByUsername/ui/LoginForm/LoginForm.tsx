import { FormEvent, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

const initialReducers: TReducersList = {
  loginForm: loginReducer,
};

export interface ILoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const LoginForm = memo(({ className, onSuccess }: ILoginFormProps) => {
  const { t } = useTranslation('auth');
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handleChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <form className={classNames(styles.root, {}, [className])} onSubmit={handleSubmit}>
        {error && <Text text={t('Incorrect login or password')} theme={TextTheme.ERROR} />}
        <Input
          name="username"
          value={username}
          placeholder={t('Username')}
          autoFocus
          onChange={handleChangeUsername}
        />
        <Input name="password" value={password} placeholder={t('Password')} onChange={handleChangePassword} />
        <Button
          type="submit"
          variant={ButtonVariant.CONTAINED_INVERTED}
          disabled={isLoading}
          className={styles.root__btn}
        >
          {t('Submit')}
        </Button>
      </form>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
