import { lazy } from 'react';

export const ProfilePageLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // DO NOT DO THAT WAY IN REAL PROJECTS (this is only for the course)
  setTimeout(() => resolve(import('./ProfilePage')), 1000);
}));
