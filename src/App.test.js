import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders homepage', () => {
  render(
    <MemoryRouter initialEntries={['/ecommerce']}>
      <App />
    </MemoryRouter>
  );

  const element = screen.getByText(/home/i); // change if needed
  expect(element).toBeInTheDocument();
});
