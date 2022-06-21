import { useNavigate } from 'react-router-dom';
import { IEmployee } from '../@types.employee';
import { formatDateString } from '../utils/dataParsers';
import { employeeDetails } from './../utils/constants';

const EmployeesTable = ({ employeesData }: { employeesData: IEmployee[] }) => {
  const navigate = useNavigate();
  return employeesData && employeesData.length ? (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>{employeeDetails.ID}</th>
            <th>{employeeDetails.FIRST_NAME}</th>
            <th>{employeeDetails.LAST_NAME}</th>
            <th>{employeeDetails.EMAIL}</th>
            <th>{employeeDetails.DATE_OF_BIRTH}</th>
            <th>{employeeDetails.INDUSTRY}</th>
            <th>{employeeDetails.SALARY}</th>
            <th>{employeeDetails.YEARS_OF_EXPERIENCE}</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((employee: IEmployee) => (
            <tr
              key={employee.id}
              onClick={() =>
                navigate(`/employees/${employee.id}`, {
                  state: employee
                })
              }>
              <td data-label={employeeDetails.ID}>{employee.id}</td>
              <td data-label={employeeDetails.FIRST_NAME}> {employee.first_name}</td>
              <td data-label={employeeDetails.LAST_NAME}>{employee.last_name}</td>
              <td data-label={employeeDetails.EMAIL}>{employee.email}</td>
              <td data-label={employeeDetails.DATE_OF_BIRTH}>
                {formatDateString(employee.date_of_birth)}
              </td>
              <td data-label={employeeDetails.INDUSTRY}>{employee.industry}</td>
              <td data-label={employeeDetails.SALARY}>{employee.salary}</td>
              <td data-label={employeeDetails.YEARS_OF_EXPERIENCE}>
                {employee.years_of_experience}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="empty-state-text">No data found</div>
  );
};

export default EmployeesTable;
