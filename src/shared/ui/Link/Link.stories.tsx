import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Link, LinkTheme } from './Link';

const meta: Meta<typeof Link> = {
  title: 'widgets/Link',
  component: Link,
  tags: ['autodocs'],
  args: { to: '/', children: 'link' },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    theme: LinkTheme.SECONDARY,
  },
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    theme: LinkTheme.SECONDARY,
  },
};
