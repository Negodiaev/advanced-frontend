import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency';
import { ThemeDecorator } from '../../config/storybook/decorators/ThemeDecorator';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  args: {
    name: 'currency',
    options: [
      { value: Currency.USD, text: Currency.USD },
      { value: Currency.EUR, text: Currency.EUR },
      { value: Currency.AUD, text: Currency.AUD },
      { value: Currency.CAD, text: Currency.CAD },
      { value: Currency.JPY, text: Currency.JPY },
      { value: Currency.RUB, text: Currency.RUB },
    ],
    label: 'Select currency',
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
