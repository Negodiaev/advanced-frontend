import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

const readonly = true;

describe('getProfileReadonly', () => {
  test('should work with the filled state', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: { readonly },
    };

    expect(getProfileReadonly(state as IStateSchema)).toEqual(readonly);
  });

  test('should work with an empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileReadonly(state as IStateSchema)).toEqual(true);
  });
});
