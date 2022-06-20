import { IEmployee } from '../@types.employee';

const baseUrl = 'http://localhost:3001';

export const getEmployees = () =>
  fetch(`${baseUrl}/api/employees`)
    .then((res) => res.json())
    .catch((err) => err);

export const updateEmployee = (data: IEmployee) =>
  fetch(`${baseUrl}/api/employees/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .catch((err) => err);
