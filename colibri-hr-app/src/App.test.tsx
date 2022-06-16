import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const tittleElement = screen.getByText(/Employees List/i);
  expect(tittleElement).toBeInTheDocument();
});
