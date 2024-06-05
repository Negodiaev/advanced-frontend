import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig, TAppRouteProps } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

function AppRouter() {
  const renderWithWrapper = useCallback(({ path, authOnly, element: routeEl }: TAppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {routeEl}
      </Suspense>
    );

    return (
      <Route
        path={path}
        element={authOnly ? <RequireAuth>{element}</RequireAuth> : element}
        key={path}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
}

export default memo(AppRouter);
