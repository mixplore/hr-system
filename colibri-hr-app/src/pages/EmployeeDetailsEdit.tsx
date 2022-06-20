import { useContext } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { IEmployee } from '../@types.employee';
import { updateEmployee } from '../api/requests';
import EmployeeForm from '../components/EmployeeForm';
import { EmployeesContext } from '../context/EmployeesContext';

const EmployeeDetails = () => {
  const { state, setState } = useContext(EmployeesContext);
  const navigate = useNavigate();
  const location = useLocation();
  const employeeDetails = location.state as IEmployee;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const updated = await updateEmployee(data as IEmployee);
    navigate(`/employees/${updated.id}`, { state: updated });
    const newEmployeesData: IEmployee[] = state?.employeesData.map((employee) => {
      if (employee.id === updated.id) return updated as IEmployee;
      return employee;
    });
    setState({
      ...state,
      employeesData: newEmployeesData
    });
  };

  return (
    <>
      <h2>Edit Employee Details</h2>
      <EmployeeForm defaultValues={employeeDetails} onSubmit={onSubmit} />
    </>
  );
};

export default EmployeeDetails;
