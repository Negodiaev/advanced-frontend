import { render, screen } from '@testing-library/react';
import { Button, ButtonVariant } from './Button';

describe('Button', () => {
  test('Test render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Test the "clear" variant', () => {
    render(<Button variant={ButtonVariant.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass(`root_${ButtonVariant.CLEAR}`);
  });
});
