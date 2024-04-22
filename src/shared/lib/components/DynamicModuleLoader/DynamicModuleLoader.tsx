import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { IReduxStoreWithManager, TStateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

export type TReducersList = {
  [name in TStateSchemaKey]?: Reducer
}

type TReducersListEntry = [TStateSchemaKey, Reducer];

interface IDynamicModuleLoaderProps {
    reducers: TReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = (props) => {
  const {
    children, reducers, removeAfterUnmount = true,
  } = props;
  const store = useStore() as IReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: TReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: TReducersListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
