import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { IStateSchema } from './StateSchema';

export function createReduxStore(initialState?: IStateSchema) {
  const rootReducers: ReducersMapObject<IStateSchema> = { counter: counterReducer, user: userReducer };

  return configureStore<IStateSchema>({ reducer: rootReducers, devTools: __IS_DEV__, preloadedState: initialState });
}
