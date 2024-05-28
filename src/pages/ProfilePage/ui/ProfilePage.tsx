import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidationErrors,
  profileActions,
  ProfileCard,
  profileReducer, ProfileValidationError,
} from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { Text, TextTheme } from 'shared/ui/Text';
import { ProfilePageHeader } from '../ui/ProfilePageHeader/ProfilePageHeader';
import styles from './ProfilePage.module.scss';

const reducers: TReducersList = {
  profile: profileReducer,
};

interface IProfilePageProps {
    className?: string;
}

export default function ProfilePage({ className }: IProfilePageProps) {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const formErrors = useSelector(getProfileValidationErrors);
  const formErrorTranslations = {
    [ProfileValidationError.INCORRECT_USER_DATA]: t('Name and last name are required'),
    [ProfileValidationError.INCORRECT_AGE]: t('Incorrect age'),
    [ProfileValidationError.INCORRECT_CITY]: t('Incorrect city'),
    [ProfileValidationError.NO_DATA]: t('No data'),
    [ProfileValidationError.SERVER_ERROR]: t('Server error'),
  };

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const handleChangeName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ name: value }));
  }, [dispatch]);

  const handleChangeLastname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }));
  }, [dispatch]);

  const handleChangeAge = useCallback((value: string) => {
    const numbersPattern = /(^[0-9]+$|^$)/;

    if (!numbersPattern.test(value) || Number(value) > 125) {
      return;
    }

    dispatch(profileActions.updateProfile({ age: Number(value) }));
  }, [dispatch]);

  const handleChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ city: value }));
  }, [dispatch]);

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ username: value }));
  }, [dispatch]);

  const handleChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  }, [dispatch]);

  const handleChangeCurrency = useCallback((value: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  }, [dispatch]);

  const handleChangeCountry = useCallback((value: Country) => {
    dispatch(profileActions.updateProfile({ country: value }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.root, {}, [className])}>
        <ProfilePageHeader className={styles.root__header} />
        {(formErrors && formErrors.length > 0) && formErrors.map((error) => (
          <Text
            theme={TextTheme.ERROR}
            text={formErrorTranslations[error]}
            key={error}
          />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeName={handleChangeName}
          onChangeLastname={handleChangeLastname}
          onChangeAge={handleChangeAge}
          onChangeCity={handleChangeCity}
          onChangeUsername={handleChangeUsername}
          onChangeAvatar={handleChangeAvatar}
          onChangeCurrency={handleChangeCurrency}
          onChangeCountry={handleChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
}
