import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileReadonly = (state: IStateSchema) => state.profile?.readonly ?? true;
