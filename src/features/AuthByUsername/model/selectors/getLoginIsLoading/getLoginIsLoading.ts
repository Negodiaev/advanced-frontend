import { IStateSchema } from 'app/providers/StoreProvider';

export function getLoginIsLoading(state: IStateSchema) {
  return state?.loginForm?.isLoading || false;
}
