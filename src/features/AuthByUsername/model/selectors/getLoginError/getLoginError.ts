import { IStateSchema } from 'app/providers/StoreProvider';

export function getLoginError(state: IStateSchema) {
  return state?.loginForm?.error;
}
