import { NavigateOptions, To } from 'react-router';
import {
  CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { createReducerManager } from './reducerManager';
import { IStateSchema, IThunkExtraArgs } from './StateSchema';

export function createReduxStore(initialState?: IStateSchema, asyncReducers?: ReducersMapObject<IStateSchema>, navigate?: (to: To, options?: NavigateOptions) => void) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArgs: IThunkExtraArgs = { api: $api, navigate };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: { extraArgument: extraArgs },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type TAppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
