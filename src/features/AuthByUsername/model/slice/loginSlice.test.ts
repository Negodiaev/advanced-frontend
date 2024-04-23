import { DeepPartial } from '@reduxjs/toolkit';
import { ILoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('test setting a username', () => {
    const state: DeepPartial<ILoginSchema> = { username: 'user1' };
    expect(loginReducer(state as ILoginSchema, loginActions.setUsername('user2'))).toEqual({ username: 'user2' });
  });

  test('test setting a password', () => {
    const state: DeepPartial<ILoginSchema> = { password: '12345' };
    expect(loginReducer(state as ILoginSchema, loginActions.setPassword('1234567'))).toEqual({ password: '1234567' });
  });
});
