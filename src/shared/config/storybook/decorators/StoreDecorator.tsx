import { Decorator } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = { loginForm: loginReducer, profile: profileReducer };

export const StoreDecorator: (state: DeepPartial<IStateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>) => Decorator = (state, asyncReducers) => (Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);
