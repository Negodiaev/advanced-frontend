import { TestAsyncThunk } from 'shared/lib';
import { Currency } from '../../../../Currency';
import { Country } from '../../../../Country';
import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData', () => {
  test('successful fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: userData }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  test('unsuccessful fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue((Promise.resolve({ status: 403 })));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
