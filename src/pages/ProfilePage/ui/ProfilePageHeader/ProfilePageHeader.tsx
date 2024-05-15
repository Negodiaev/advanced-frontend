import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Button, ButtonVariant } from 'shared/ui/Button';
import {
  getProfileIsLoading, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/hooks';
import styles from './ProfilePageHeader.module.scss';

interface IProfilePageHeaderProps {
    className?: string;
}

export function ProfilePageHeader({ className }: IProfilePageHeaderProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  const isLoading = useSelector(getProfileIsLoading);

  const onClickEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.root, {}, [className])}>
      <Text title={t('Profile')} />
      {isLoading ? null : readonly
        ? <Button variant={ButtonVariant.OUTLINED} onClick={onClickEdit}>{t('Edit')}</Button>
        : (
          <div className={styles.buttons}>
            <Button variant={ButtonVariant.OUTLINED_DANGER} onClick={onCancel}>{t('Cancel')}</Button>
            <Button variant={ButtonVariant.OUTLINED} onClick={onSave}>{t('Save')}</Button>
          </div>
        )}
    </div>
  );
}
