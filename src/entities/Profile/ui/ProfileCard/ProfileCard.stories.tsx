import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { Country, Currency } from 'shared/const/common';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { ProfileCard } from './ProfileCard';

const profileData = {
  name: 'Alex',
  lastname: 'Negodiaev',
  age: 32,
  currency: Currency.USD,
  country: Country.USA,
  city: 'San Francisco',
  username: 'admin',
  avatar: 'https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg',
};

const meta: Meta<typeof ProfileCard> = {
  title: 'shared/ProfileCard',
  component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  decorators: [StoreDecorator({ profile: { data: profileData, isLoading: false, readonly: false } })],

};

export const DefaultDark: Story = {
  decorators: [StoreDecorator({ profile: { data: profileData, isLoading: false, readonly: false } }), ThemeDecorator(Theme.DARK)],
};
