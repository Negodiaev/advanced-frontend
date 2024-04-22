import { FC, lazy } from 'react';
import { ILoginFormProps } from './LoginForm';

export const LoginFormLazy = lazy<FC<ILoginFormProps>>(() => import('./LoginForm'));
