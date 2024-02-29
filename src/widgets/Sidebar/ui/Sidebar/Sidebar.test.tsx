import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Test render', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    renderComponent(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('root_collapsed');
  });
});
