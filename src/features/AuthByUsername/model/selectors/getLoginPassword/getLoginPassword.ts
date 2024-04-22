import { IStateSchema } from 'app/providers/StoreProvider';

export function getLoginPassword(state: IStateSchema) {
  return state?.loginForm?.password || '';
}
