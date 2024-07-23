import { Decorator } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { articleReducer } from 'entities/Article/model/slice/articleSlice';
import { TReducersList } from '../../../lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: TReducersList = { loginForm: loginReducer, profile: profileReducer, article: articleReducer };

export const StoreDecorator: (state: DeepPartial<IStateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>) => Decorator = (state, asyncReducers) => (Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);
