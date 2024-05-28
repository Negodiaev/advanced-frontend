import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatarImg from 'shared/assets/tests/avatar.jpeg';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

const formData = {
  name: 'Alex',
  lastname: 'Negodiaev',
  age: 32,
  currency: Currency.USD,
  country: Country.USA,
  city: 'San Francisco',
  username: 'admin',
  avatar: avatarImg,
};

export const Default: Story = {
  decorators: [StoreDecorator({
    profile: {
      form: formData,
    },
  })],
};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ profile: { form: formData } })],
};
