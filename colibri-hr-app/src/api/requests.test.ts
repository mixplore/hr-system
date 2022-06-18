import { getEmployees } from './requests';
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('#getEmployees', () => {
  test('returns an error when data could not be retrieved', async () => {
    const mockError = new Error('Mock Error');
    fetchMock.mockRejectOnce(mockError);
    const response = await getEmployees();
    expect(response).toEqual(mockError);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
  test('returns an empty array when no employees are found in db', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([]));
    const employees = await getEmployees();
    expect(employees).toEqual([]);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
  test('returns an array of employees when data is found in db', async () => {
    const employeesData = [
      {
        id: 1,
        first_name: 'Dave'
      },
      {
        id: 2,
        first_name: 'Joe'
      }
    ];
    fetchMock.mockResponseOnce(JSON.stringify(employeesData));
    const employees = await getEmployees();
    expect(employees).toEqual(employeesData);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
