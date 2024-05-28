import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../config/storybook/decorators/ThemeDecorator';
import { Avatar } from './Avatar';
import avatarImg from '../../assets/tests/avatar.jpeg';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: avatarImg,
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Small: Story = {
  args: {
    size: 50,
  },
};

export const SmallDark: Story = {
  args: {
    size: 50,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Large: Story = {
  args: {
    size: 200,
  },
};

export const LargeDark: Story = {
  args: {
    size: 200,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
