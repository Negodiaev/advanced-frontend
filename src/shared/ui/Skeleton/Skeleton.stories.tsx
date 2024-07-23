import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../config/storybook/decorators/ThemeDecorator';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
  parameters: { backgrounds: { default: 'gray' } },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

const defaultArgs = {
  width: '100%', height: 400,
};

const circleArgs = {
  width: 100, height: 100, borderRadius: '50%',
};

export const Default: Story = {
  args: defaultArgs,
};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: defaultArgs,
};

export const DefaultSalmon: Story = {
  decorators: [ThemeDecorator(Theme.SALMON)],
  args: defaultArgs,
};

export const Circle: Story = {
  args: circleArgs,
};

export const CircleDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: circleArgs,
};

export const CircleSalmon: Story = {
  decorators: [ThemeDecorator(Theme.SALMON)],
  args: circleArgs,
};
