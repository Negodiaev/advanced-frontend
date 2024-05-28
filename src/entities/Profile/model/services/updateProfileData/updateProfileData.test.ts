import { TestAsyncThunk } from 'shared/lib';
import { ProfileValidationError } from '../../types/profile';
import { Currency } from '../../../../Currency';
import { Country } from '../../../../Country';
import { updateProfileData } from './updateProfileData';

jest.mock('axios');

const userData = {
  name: 'Alex',
  lastname: 'Negodiaev',
  age: 32,
  currency: Currency.USD,
  country: Country.USA,
  city: 'San Francisco',
  username: 'admin',
};

describe('updateProfileData', () => {
  test('successful update', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: userData } });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: userData }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  test('unsuccessful update', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: userData } });
    thunk.api.put.mockReturnValue((Promise.resolve({ status: 403 })));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ProfileValidationError.SERVER_ERROR]);
  });

  test('client validation error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: { ...userData, city: '' } } });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ProfileValidationError.INCORRECT_CITY]);
  });
});
