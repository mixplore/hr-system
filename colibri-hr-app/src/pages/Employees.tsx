import { useContext } from 'react';
import { Outlet, useMatch, useNavigate } from 'react-router-dom';
import { EmployeeContextType, IEmployee } from '../@types.employee';
import { EmployeesContext } from '../context/EmployeesContext';
import './Employees.scss';

const Employees = () => {
  const state: EmployeeContextType | null = useContext(EmployeesContext);
  const navigate = useNavigate();
  const isMatch = useMatch(`/employees/:employeeId`);

  return isMatch ? (
    <Outlet />
  ) : state?.isLoading ? (
    <div className="empty-state-text">Loading...</div>
  ) : (
    <>
      <h2>Employees List</h2>
      {state?.employeesData && state.employeesData.length ? (
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
                <th>Salary</th>
                <th>Years of Experience</th>
              </tr>
            </thead>
            <tbody>
              {state.employeesData.map((employee: IEmployee) => (
                <tr
                  key={employee.id}
                  onClick={() =>
                    navigate(`/employees/${employee.id}`, {
                      state: employee
                    })
                  }>
                  <td data-label={'ID'}>{employee.id}</td>
                  <td data-label={'First Name'}> {employee.first_name}</td>
                  <td data-label={'Last Name'}>{employee.last_name}</td>
                  <td data-label={'Email'}>{employee.email}</td>
                  <td data-label={'Date of Birth'}>{employee.date_of_birth}</td>
                  <td data-label={'Industry'}>{employee.industry}</td>
                  <td data-label={'Salary'}>{employee.salary}</td>
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
