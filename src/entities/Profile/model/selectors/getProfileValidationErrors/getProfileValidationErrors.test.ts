import { IStateSchema } from 'app/providers/StoreProvider';
import { ProfileValidationError } from '../../types/profile';
import { getProfileValidationErrors } from './getProfileValidationErrors';

const validationErrors = [ProfileValidationError.INCORRECT_USER_DATA, ProfileValidationError.SERVER_ERROR];

describe('getProfileValidationErrors', () => {
  test('should return validation errors', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: { validationErrors },
    };

    expect(getProfileValidationErrors(state as IStateSchema)).toEqual(validationErrors);
  });

  test('should work with an empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileValidationErrors(state as IStateSchema)).toEqual(undefined);
  });
});
