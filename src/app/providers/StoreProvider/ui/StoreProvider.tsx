import { FC } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';

import { IStateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface IStoreProviderProps {
  initialState?: DeepPartial<IStateSchema>;
}

export const StoreProvider: FC<IStoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState as IStateSchema);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
