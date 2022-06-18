const baseUrl = 'http://localhost:3001';

export const getEmployees = () =>
  fetch(`${baseUrl}/api/employees`)
    .then((res) => res.json())
    .catch((err) => err);
