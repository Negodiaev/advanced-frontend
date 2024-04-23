import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

const username = 'user1';

describe('getLoginUsername', () => {
  test('should return a username', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        username,
      },
    };

    expect(getLoginUsername(state as IStateSchema)).toEqual(username);
  });

  test('should work with an empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getLoginUsername(state as IStateSchema)).toEqual('');
  });
});
