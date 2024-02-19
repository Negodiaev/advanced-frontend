import { lazy } from 'react';

export const MainPageLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // DO NOT DO THAT WAY IN REAL PROJECTS (this is only for the course)
  setTimeout(() => resolve(import('./MainPage')), 1000);
}));
