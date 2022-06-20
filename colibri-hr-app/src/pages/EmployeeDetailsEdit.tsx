import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { IEmployee } from '../@types.employee';
import { updateEmployee } from '../api/requests';
import EmployeeForm from '../components/EmployeeForm';

const EmployeeDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const employeeDetails = location.state as IEmployee;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const updated = await updateEmployee(data as IEmployee);
    navigate(`/employees/${updated.id}`, { state: updated });
  };

  return (
    <>
      <h2>Edit Employee Details</h2>
      <EmployeeForm defaultValues={employeeDetails} onSubmit={onSubmit} />
    </>
  );
};

export default EmployeeDetails;
