import { ICounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
  test('Checks increment', () => {
    const state: ICounterSchema = { value: 10 };

    expect(counterReducer(state as ICounterSchema, counterActions.increment)).toEqual({ value: 11 });
  });

  test('Checks decrement', () => {
    const state: ICounterSchema = { value: 10 };

    expect(counterReducer(state as ICounterSchema, counterActions.decrement)).toEqual({ value: 9 });
  });

  test('Should work with an empty state', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
  });
});
