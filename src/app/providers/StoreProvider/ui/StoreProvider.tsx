import { FC } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

import { IStateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface IStoreProviderProps {
  initialState?: DeepPartial<IStateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
}

export const StoreProvider: FC<IStoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props;
  const store = createReduxStore(initialState as IStateSchema, asyncReducers as ReducersMapObject<IStateSchema>);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
