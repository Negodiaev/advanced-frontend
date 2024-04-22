import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ICounterSchema } from 'entities/Counter';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';

export interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;

    // async reducers
    loginForm?: ILoginSchema;
}

export type TStateSchemaKey = keyof IStateSchema;

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>,
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>,
    add: (key: TStateSchemaKey, reducer: Reducer) => void,
    remove: (key: TStateSchemaKey) => void,
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager
}
