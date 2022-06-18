import { useEffect, useState } from 'react';
import { getEmployees } from '../api/requests';
import './Employees.scss';

type Employee = {
  id: number;
  first_name: string;
  last_name: string | null;
  email: string | null;
  date_of_birth: string;
  industry: string;
  salary: number;
  years_of_experience: number;
};

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>();
  useEffect(() => {
    const getData = async () => {
      const employeesData = await getEmployees();
      setEmployees(employeesData);
    };
    getData();
  }, []);

  return (
    <>
      <h2>Employees List</h2>
      {employees && employees.length ? (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Date of birth</th>
                <th>Industry</th>
                <th>Years of Experience</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td data-label={'ID'}>{employee.id}</td>
                  <td data-label={'First Name'}> {employee.first_name}</td>
                  <td data-label={'Last Name'}>{employee.last_name}</td>
                  <td data-label={'Email'}>{employee.email}</td>
                  <td data-label={'Date of Birth'}>{employee.date_of_birth}</td>
                  <td data-label={'Industry'}>{employee.industry}</td>
                  <td data-label={'Years of Experience'}>{employee.years_of_experience}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty-state-text">No data found</div>
      )}
    </>
  );
};
export default Employees;
