import { IStateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };

    expect(getLoginIsLoading(state as IStateSchema)).toEqual(true);
  });

  test('should return false', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        isLoading: false,
      },
    };

    expect(getLoginIsLoading(state as IStateSchema)).toEqual(false);
  });
});
