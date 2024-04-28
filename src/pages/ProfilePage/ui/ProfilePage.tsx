import { useTranslation } from 'react-i18next';
import { profileReducer } from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: TReducersList = {
  profile: profileReducer,
};

interface IProfilePageProps {
    className?: string;
}

export default function ProfilePage({ className }: IProfilePageProps) {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>{t('Profile page')}</div>
    </DynamicModuleLoader>
  );
}
