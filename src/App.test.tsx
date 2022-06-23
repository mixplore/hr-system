import { render, screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { EmployeesContext } from './context/EmployeesContext';
import App from './App';

const history = createMemoryHistory();

beforeEach(() => {
  fetchMock.resetMocks();
});

test('renders title', async () => {
  render(
    <Router location={'/employees'} navigator={history}>
      <EmployeesContext.Provider
        value={{ state: { employeesData: [], isLoading: false }, setState: () => {} }}>
        <App />
      </EmployeesContext.Provider>
    </Router>
  );
  const titleElement = await screen.findByText(/Employees List/i);
  expect(titleElement).toBeInTheDocument();
});
