import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { useInput } from 'shared/hooks';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

function InputComponent() {
  const { value, handleChange } = useInput('');

  return <Input value={value} placeholder="Username" onChange={handleChange} />;
}

export const Default: Story = {
  render: InputComponent,
};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: InputComponent,
};
