import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonVariant } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Clear: Story = {
  args: {
    children: 'Clear',
    variant: ButtonVariant.CLEAR,
  },
};

export const Outlined: Story = {
  args: {
    children: 'Outlined',
    variant: ButtonVariant.OUTLINED,
  },
};

export const DefaultDark: Story = {
  args: {
    children: 'Default dark',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ClearDark: Story = {
  args: {
    children: 'Clear dark',
    variant: ButtonVariant.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlinedDark: Story = {
  args: {
    children: 'Outlined dark',
    variant: ButtonVariant.OUTLINED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
