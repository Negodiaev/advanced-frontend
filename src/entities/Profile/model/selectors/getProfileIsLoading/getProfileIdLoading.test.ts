import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

const isLoading = true;

describe('getProfileIsLoading', () => {
  test('should work with the filled state', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: { isLoading },
    };

    expect(getProfileIsLoading(state as IStateSchema)).toEqual(isLoading);
  });

  test('should work with an empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileIsLoading(state as IStateSchema)).toEqual(undefined);
  });
});
