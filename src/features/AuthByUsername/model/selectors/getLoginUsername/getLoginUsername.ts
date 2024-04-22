import { IStateSchema } from 'app/providers/StoreProvider';

export function getLoginUsername(state: IStateSchema) {
  return state?.loginForm?.username || '';
}
