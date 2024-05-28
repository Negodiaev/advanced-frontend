import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Currency } from '../../../../Currency/model/types/currency';
import { Country } from '../../../../Country/model/types/country';

const userData = {
  name: 'Alex',
  lastname: 'Negodiaev',
  age: 32,
  currency: Currency.USD,
  country: Country.USA,
  city: 'San Francisco',
  username: 'admin',
};

describe('getProfileData', () => {
  test('should return the profile data', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: { data: userData },
    };

    expect(getProfileData(state as IStateSchema)).toEqual(userData);
  });

  test('should work with an empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileData(state as IStateSchema)).toEqual(undefined);
  });
});
