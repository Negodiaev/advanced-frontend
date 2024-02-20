import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export function AppRouter() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={(
      <div>
        {t('Loading')}
        ...
      </div>
    )}
    >
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Suspense>
  );
}
