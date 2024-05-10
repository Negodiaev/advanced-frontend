import { IStateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

const error = 'Some error...';

describe('getLoginError', () => {
  test('should return an error', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        error,
      },
    };

    expect(getLoginError(state as IStateSchema)).toEqual(error);
  });

  test('should work with an empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getLoginError(state as IStateSchema)).toEqual(undefined);
  });
});
