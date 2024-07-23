import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../config/storybook/decorators/ThemeDecorator';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
  args: {
    content: 'import type { Meta, StoryObj } from \'@storybook/react\';\n'
        + 'import { ThemeDecorator } from \'shared/config/storybook/decorators/ThemeDecorator\';\n'
        + 'import { Theme } from \'app/providers/ThemeProvider\';\n'
        + 'import { Code } from \'./Code\';\n'
        + '\n'
        + 'const meta: Meta<typeof Code> = {\n'
        + '  title: \'shared/Code\',\n'
        + '  component: Code,\n'
        + '};\n'
        + '\n'
        + 'export default meta;\n'
        + 'type Story = StoryObj<typeof Code>;',
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DefaultSalmon: Story = {
  decorators: [ThemeDecorator(Theme.SALMON)],
};
