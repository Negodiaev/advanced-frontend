import { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator: (theme: Theme) => Decorator = (theme) => (Story) => (
  <ThemeProvider initialTheme={theme}>
    <div
      className={`app ${theme}`}
      style={{ padding: 16, ...{ ...(theme !== Theme.LIGHT && { margin: '-1rem' }) } }}
    >
      <Story />
    </div>
  </ThemeProvider>
);
