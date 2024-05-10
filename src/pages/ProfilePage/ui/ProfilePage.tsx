import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks';

const reducers: TReducersList = {
  profile: profileReducer,
};

interface IProfilePageProps {
    className?: string;
}

export default function ProfilePage({ className }: IProfilePageProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}><ProfileCard /></div>
    </DynamicModuleLoader>
  );
}
