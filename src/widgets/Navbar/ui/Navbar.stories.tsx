import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  decorators: [StoreDecorator({})],
};

export const LoggedIn: Story = {
  decorators: [StoreDecorator({ user: { authData: {} } })],
};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const LoggedInDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })],
};
