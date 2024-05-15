import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { CountrySelect } from './CountrySelect';

const meta: Meta<typeof CountrySelect> = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Default: Story = {};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
