import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { userActions } from 'entities/User';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme === Theme.DARK ? Theme.DARK : ''])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content">
          <Sidebar />
          <div className="main">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
