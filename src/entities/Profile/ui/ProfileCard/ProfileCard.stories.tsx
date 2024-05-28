import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import avatarImg from 'shared/assets/tests/avatar.jpeg';
import { Currency } from '../../../Currency/model/types/currency';
import { Country } from '../../../Country/model/types/country';
import { ProfileCard } from './ProfileCard';

const profileData = {
  name: 'Alex',
  lastname: 'Negodiaev',
  age: 32,
  currency: Currency.USD,
  country: Country.USA,
  city: 'San Francisco',
  username: 'admin',
  avatar: avatarImg,
};

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  decorators: [StoreDecorator({ profile: { data: profileData, isLoading: false, readonly: false } })],
  args: { data: profileData },
};

export const DefaultDark: Story = {
  decorators: [StoreDecorator({
    profile: {
      data: profileData,
      isLoading: false,
      readonly: false,
    },
  }), ThemeDecorator(Theme.DARK)],
  args: { data: profileData },
};

export const IsLoading: Story = {
  decorators: [StoreDecorator({ profile: { data: profileData, isLoading: true, readonly: false } })],
  args: { isLoading: true },
};

export const IsLoadingDark: Story = {
  decorators: [StoreDecorator({
    profile: {
      data: profileData,
      isLoading: false,
      readonly: false,
    },
  }), ThemeDecorator(Theme.DARK)],
  args: { isLoading: true },
};

export const WithError: Story = {
  decorators: [StoreDecorator({ profile: { data: profileData, isLoading: true, readonly: false } })],
  args: { error: 'Some error' },
};

export const WithErrorDark: Story = {
  decorators: [StoreDecorator({
    profile: {
      data: profileData,
      isLoading: false,
      readonly: false,
    },
  }), ThemeDecorator(Theme.DARK)],
  args: { error: 'Some error' },
};
