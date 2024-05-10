import { IStateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

const password = '12345';

describe('getLoginPassword', () => {
  test('should return a password', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        password,
      },
    };

    expect(getLoginPassword(state as IStateSchema)).toEqual(password);
  });

  test('should work with an empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getLoginPassword(state as IStateSchema)).toEqual('');
  });
});
