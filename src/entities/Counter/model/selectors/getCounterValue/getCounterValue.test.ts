import { IStateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('Should return the counter value', () => {
    const state: DeepPartial<IStateSchema> = {
      counter: { value: 10 },
    };

    expect(getCounterValue(state as IStateSchema)).toEqual(10);
  });
});
