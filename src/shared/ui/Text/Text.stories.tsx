import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../config/storybook/decorators/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    title: 'Title Title Title',
    text: 'Text Text Text Text Text Text Text',
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title Title Title',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'Text Text Text Text Text Text Text',
  },
};

export const Error: Story = {
  args: {
    title: 'Error title Error title',
    text: 'Error text Error text Error text',
    theme: TextTheme.ERROR,
  },
};

export const SizeSM: Story = {
  args: {
    title: 'Title Title Title',
    text: 'Text Text Text Text Text Text Text',
    size: TextSize.SM,
  },
};

export const SizeLG: Story = {
  args: {
    title: 'Title Title Title',
    text: 'Text Text Text Text Text Text Text',
    size: TextSize.LG,
  },
};

export const DefaultDark: Story = {
  args: {
    title: 'Title dark Title dark',
    text: 'Text dark Text dark Text dark Text dark ',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title dark Title dark',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Text dark Text dark Text dark Text dark ',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorDark: Story = {
  args: {
    title: 'Error title Error title',
    text: 'Error text Error text Error text',
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeSMDark: Story = {
  args: {
    title: 'Title Title Title',
    text: 'Text Text Text Text Text Text Text',
    size: TextSize.SM,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeLGDark: Story = {
  args: {
    title: 'Title Title Title',
    text: 'Text Text Text Text Text Text Text',
    size: TextSize.LG,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
