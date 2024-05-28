import { ProfileValidationError } from '../../types/profile';
import { Currency } from '../../../../Currency';
import { Country } from '../../../../Country';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData', () => {
  test('successful validation', async () => {
    const result = validateProfileData(userData);

    expect(result).toEqual([]);
  });

  test('without the first and/or the last name', async () => {
    const result = validateProfileData({ ...userData, name: '', lastname: '' });

    expect(result).toEqual([ProfileValidationError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...userData, age: 0 });

    expect(result).toEqual([ProfileValidationError.INCORRECT_AGE]);
  });

  test('incorrect city', async () => {
    const result = validateProfileData({ ...userData, city: '' });

    expect(result).toEqual([ProfileValidationError.INCORRECT_CITY]);
  });

  test('empty form', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([ProfileValidationError.INCORRECT_USER_DATA, ProfileValidationError.INCORRECT_AGE, ProfileValidationError.INCORRECT_CITY]);
  });
});
