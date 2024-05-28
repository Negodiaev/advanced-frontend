import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
// Don't import this function from the public api due to a strange error about jest in Storybook
import { noop } from 'shared/lib/noop/noop';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'feature/LoginForm',
  component: LoginForm,
  args: {
    onSuccess: noop,
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  decorators: [StoreDecorator({ loginForm: { username: 'querty', password: '12345' } })],
};

export const WithError: Story = {
  decorators: [StoreDecorator({
    loginForm: {
      username: 'querty',
      password: '12345',
      error: 'Incorrect login or password',
    },
  })],
};

export const Loading: Story = {
  decorators: [StoreDecorator({ loginForm: { username: 'querty', password: '12345', isLoading: true } })],
};

export const DefaultDark: Story = {
  decorators: [StoreDecorator({ loginForm: { username: 'querty', password: '12345' } }), ThemeDecorator(Theme.DARK)],
};

export const WithErrorDark: Story = {
  decorators: [StoreDecorator({
    loginForm: {
      username: 'querty',
      password: '12345',
      error: 'Incorrect login or password',
    },
  }), ThemeDecorator(Theme.DARK)],
};

export const isLoadingDark: Story = {
  decorators: [StoreDecorator({
    loginForm: {
      username: 'querty',
      password: '12345',
      isLoading: true,
    },
  }), ThemeDecorator(Theme.DARK)],
};
