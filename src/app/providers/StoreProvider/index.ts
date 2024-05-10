import type { IStateSchema, IThunkConfig } from './config/StateSchema';
import { TAppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
  IStateSchema, TAppDispatch, IThunkConfig, createReduxStore, StoreProvider,
};
