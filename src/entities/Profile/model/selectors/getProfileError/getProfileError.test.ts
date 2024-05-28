import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

const profileError = 'Some error';

describe('getProfileError', () => {
  test('should return the profile data', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: { error: profileError },
    };

    expect(getProfileError(state as IStateSchema)).toEqual(profileError);
  });

  test('should work with an empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileError(state as IStateSchema)).toEqual(undefined);
  });
});
