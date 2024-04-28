import type { IStateSchema } from './config/StateSchema';
import { TAppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
  IStateSchema, TAppDispatch, createReduxStore, StoreProvider,
};
