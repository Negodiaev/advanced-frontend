import { lazy } from 'react';

export const AboutPageLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // DO NOT DO THAT WAY IN REAL PROJECTS (this is only for the course)
  setTimeout(() => resolve(import('./AboutPage')), 2000);
}));
