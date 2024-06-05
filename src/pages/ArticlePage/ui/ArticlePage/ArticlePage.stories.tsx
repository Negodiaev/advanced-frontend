import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticlePage from './ArticlePage';

const meta: Meta<typeof ArticlePage> = {
  title: 'shared/ArticlePage',
  component: ArticlePage,
};

export default meta;
type Story = StoryObj<typeof ArticlePage>;

export const Default: Story = {};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
