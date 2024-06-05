import { IStateSchema } from 'app/providers/StoreProvider';

export const getUserInitiated = (state: IStateSchema) => state.user._initiated;
