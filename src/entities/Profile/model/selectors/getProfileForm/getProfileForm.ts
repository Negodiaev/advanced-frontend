import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileForm = (state: IStateSchema) => state.profile?.form;
