import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { CurrencySelect } from './CurrencySelect';

const meta: Meta<typeof CurrencySelect> = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Default: Story = {};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
