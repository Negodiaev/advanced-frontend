import { Currency } from '../../../Currency';
import { Country } from '../../../Country';
import { IProfileSchema, ProfileValidationError } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';

const userData = {
  name: 'Alex',
  lastname: 'Negodiaev',
  age: 32,
  currency: Currency.USD,
  country: Country.USA,
  city: 'San Francisco',
  username: 'admin',
};

describe('profileSlice', () => {
  test('test setting a readonly', () => {
    const state: DeepPartial<IProfileSchema> = { readonly: false };
    expect(profileReducer(state as IProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
  });

  test('test the cancellation of an edit', () => {
    const state: DeepPartial<IProfileSchema> = { data: userData, form: { username: '' } };
    expect(profileReducer(state as IProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      validationErrors: undefined,
      data: userData,
      form: userData,
    });
  });

  test('test the update of the profile', () => {
    const state: DeepPartial<IProfileSchema> = { form: { username: '987321' } };
    expect(profileReducer(state as IProfileSchema, profileActions.updateProfile({ username: '123789' }))).toEqual({
      form: { username: '123789' },
    });
  });

  test('test the pending state of the profile update service', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validationErrors: [ProfileValidationError.SERVER_ERROR],
    };
    expect(profileReducer(state as IProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true, validationErrors: undefined,
    });
  });

  test('test the fulfilled state of the profile update service', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(state as IProfileSchema, updateProfileData.fulfilled(userData, ''))).toEqual({
      isLoading: false, readonly: true, validationErrors: undefined, data: userData, form: userData,
    });
  });
});
