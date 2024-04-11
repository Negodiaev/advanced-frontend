import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Default: Story = {
  decorators: [StoreDecorator({})],
};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
