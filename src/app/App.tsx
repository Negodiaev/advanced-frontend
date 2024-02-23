import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';

export function App() {
  const { theme } = useTheme();

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
