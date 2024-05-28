import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileValidationErrors = (state: IStateSchema) => state.profile?.validationErrors;
