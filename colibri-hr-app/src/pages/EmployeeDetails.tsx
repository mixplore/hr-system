import { useLocation, useNavigate } from 'react-router-dom';
import { IEmployee } from '../@types.employee';
import EmployeeForm from '../components/EmployeeForm';

const EmployeeDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const employeeDetails = location.state as IEmployee;

  return (
    <>
      <h2>Employee Details</h2>
      <EmployeeForm
        defaultValues={employeeDetails}
        isReadOnly={true}
        onSubmit={() => navigate('/employees/edit', { state: location.state })}
      />
    </>
  );
};

export default EmployeeDetails;
