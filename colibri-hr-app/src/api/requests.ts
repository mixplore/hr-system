/* eslint-disable no-undef */
import { IEmployee } from '../@types.employee';

export const getEmployees = () =>
  fetch(`${process.env.REACT_APP_API_URL}/api/employees`)
    .then((res) => res.json())
    .catch((err) => err);

export const updateEmployee = (data: IEmployee) =>
  fetch(`${process.env.REACT_APP_API_URL}/api/employees/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .catch((err) => err);
