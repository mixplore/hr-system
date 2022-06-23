import { useContext } from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import EmployeesTable from '../components/EmployeesTable';
import { EmployeesContext } from '../context/EmployeesContext';
import './Employees.scss';

const Employees = () => {
  const { state } = useContext(EmployeesContext);
  const isMatch = useMatch(`/employees/:employeeId`);

  const renderEmployeesList = () =>
    state?.isLoading ? (
      <div className="empty-state-text">Loading...</div>
    ) : (
      <>
        <h1>Employees List</h1>
        <EmployeesTable employeesData={state.employeesData} />
      </>
    );

  return isMatch ? <Outlet /> : renderEmployeesList();
};
export default Employees;
