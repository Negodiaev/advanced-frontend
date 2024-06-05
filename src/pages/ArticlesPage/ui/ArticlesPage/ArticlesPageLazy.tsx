import { lazy } from 'react';

export const ArticlesPageLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // DO NOT DO THAT WAY IN REAL PROJECTS (this is only for the course)
  setTimeout(() => resolve(import('./ArticlesPage')), 1000);
}));
