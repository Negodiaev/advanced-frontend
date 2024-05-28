import { IProfile, ProfileValidationError } from '../../types/profile';

export function validateProfileData(profile?: IProfile) {
  if (!profile) {
    return [ProfileValidationError.NO_DATA];
  }

  const {
    name, lastname, age, city,
  } = profile;
  const errors: ProfileValidationError[] = [];

  if (!name || !lastname) {
    errors.push(ProfileValidationError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ProfileValidationError.INCORRECT_AGE);
  }

  if (!city) {
    errors.push(ProfileValidationError.INCORRECT_CITY);
  }

  return errors;
}
