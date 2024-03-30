import { screen, fireEvent } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { Counter } from './Counter';

describe('Counter', () => {
  test('Test render', () => {
    renderComponent(<Counter />);
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });

  test('Should contain a value in the title', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('counter_title')).toHaveTextContent('10');
  });

  test('Checks increment', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
    fireEvent.click(screen.getByTestId('counter_increment-btn'));
    expect(screen.getByTestId('counter_title')).toHaveTextContent('11');
  });

  test('Checks decrement', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
    fireEvent.click(screen.getByTestId('counter_decrement-btn'));
    expect(screen.getByTestId('counter_title')).toHaveTextContent('9');
  });
});
