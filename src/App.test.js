import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage', () => {
  render(<App />);
  const element = screen.getByText(/home/i); 
  expect(element).toBeInTheDocument();
});
