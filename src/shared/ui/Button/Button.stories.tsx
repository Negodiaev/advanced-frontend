import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonVariant } from './Button';

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

export const Contained: Story = {
  args: {
    children: 'Contained',
    variant: ButtonVariant.CONTAINED,
  },
};

export const ContainedInverted: Story = {
  args: {
    children: 'Contained Inverted',
    variant: ButtonVariant.CONTAINED_INVERTED,
  },
};

export const SquareSm: Story = {
  args: {
    children: '>',
    variant: ButtonVariant.CONTAINED_INVERTED,
    isSquare: true,
    size: ButtonSize.SM,
  },
};

export const SquareMd: Story = {
  args: {
    children: '>',
    variant: ButtonVariant.CONTAINED_INVERTED,
    isSquare: true,
    size: ButtonSize.MD,
  },
};

export const SquareLg: Story = {
  args: {
    children: '>',
    variant: ButtonVariant.CONTAINED_INVERTED,
    isSquare: true,
    size: ButtonSize.LG,
  },
};

export const SquareXL: Story = {
  args: {
    children: '>',
    variant: ButtonVariant.CONTAINED_INVERTED,
    isSquare: true,
    size: ButtonSize.XL,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    variant: ButtonVariant.CONTAINED,
    disabled: true,
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

export const ContainedDark: Story = {
  args: {
    children: 'Contained',
    variant: ButtonVariant.CONTAINED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ContainedInvertedDark: Story = {
  args: {
    children: 'Contained Inverted',
    variant: ButtonVariant.CONTAINED_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSmDark: Story = {
  args: {
    children: '>',
    variant: ButtonVariant.CONTAINED_INVERTED,
    isSquare: true,
    size: ButtonSize.SM,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareMdDark: Story = {
  args: {
    children: '>',
    variant: ButtonVariant.CONTAINED_INVERTED,
    isSquare: true,
    size: ButtonSize.MD,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareLgDark: Story = {
  args: {
    children: '>',
    variant: ButtonVariant.CONTAINED_INVERTED,
    isSquare: true,
    size: ButtonSize.LG,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareXLDark: Story = {
  args: {
    children: '>',
    variant: ButtonVariant.CONTAINED_INVERTED,
    isSquare: true,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DisabledDark: Story = {
  args: {
    children: 'Disabled dark',
    variant: ButtonVariant.CONTAINED,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
