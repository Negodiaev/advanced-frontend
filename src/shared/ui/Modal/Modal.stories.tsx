import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  args: {
    children: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi consequuntur dolor, dolore doloremque, eaque eos est possimus qui, rem ullam vero voluptatum!</p>,
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
