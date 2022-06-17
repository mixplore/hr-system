import './Employees.scss';

type Employee = {
  id: number;
  first_name: string;
  last_name: string | null;
  email: string | null;
  date_of_birth: Date;
  industry: string;
  salary: number;
  years_of_experience: number;
};

type EmployeesPropsType = {
  data: Employee[];
};

const Employees = ({ data }: EmployeesPropsType) => (
  <>
    <h2>Employees List</h2>
    {data && data.length ? (
      <table className="table-container">
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
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.email}</td>
              <td>{employee.date_of_birth.toLocaleDateString()}</td>
              <td>{employee.industry}</td>
              <td>{employee.years_of_experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <div className="empty-state-text">No data found</div>
    )}
  </>
);

export default Employees;
