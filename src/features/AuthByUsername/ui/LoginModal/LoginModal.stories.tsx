import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { LoginModal } from './LoginModal';

const meta: Meta<typeof LoginModal> = {
  title: 'feature/LoginModal',
  component: LoginModal,
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

const args = { isOpen: true };

export const Default: Story = {
  args,
};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args,
};
