import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Default: Story = {
  decorators: [StoreDecorator({})],
};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
