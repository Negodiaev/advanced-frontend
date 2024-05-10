import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileError = (state: IStateSchema) => state.profile?.error;
