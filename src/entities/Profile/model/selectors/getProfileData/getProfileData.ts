import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileData = (state: IStateSchema) => state.profile?.data;
