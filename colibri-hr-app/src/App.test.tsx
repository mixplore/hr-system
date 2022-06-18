import { act, render, screen } from '@testing-library/react';
import App from './App';
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
  fetchMock.resetMocks();
});

test('renders title', async () => {
  render(<App />);
  await act(async () => {
    const titleElement = await screen.findByText(/Employees List/i);
    expect(titleElement).toBeInTheDocument();
  });
});
