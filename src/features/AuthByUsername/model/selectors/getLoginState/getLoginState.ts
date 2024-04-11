import { IStateSchema } from 'app/providers/StoreProvider';

export function getLoginState(state: IStateSchema) {
  return state?.loginForm;
}
