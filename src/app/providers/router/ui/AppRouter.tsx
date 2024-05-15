import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getUserAuthData } from 'entities/User';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

function AppRouter() {
  const isAuth = useSelector(getUserAuthData);
  const routes = useMemo(() => Object.values(routeConfig).filter((route) => !(route.authOnly && !isAuth)), [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default memo(AppRouter);
