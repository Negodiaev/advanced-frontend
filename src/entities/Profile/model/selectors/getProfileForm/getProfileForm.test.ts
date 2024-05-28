import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
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

describe('getProfileForm', () => {
  test('should return the profile form', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: { form: userData },
    };

    expect(getProfileForm(state as IStateSchema)).toEqual(userData);
  });

  test('should work with an empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileForm(state as IStateSchema)).toEqual(undefined);
  });
});
