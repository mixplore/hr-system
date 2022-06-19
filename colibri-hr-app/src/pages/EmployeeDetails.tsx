import { useLocation } from 'react-router-dom';
import { IEmployee } from '../@types.employee';
import './EmployeeDetails.scss';

const EmployeeDetails = () => {
  const location = useLocation();
  const { id, first_name, last_name, email, date_of_birth, industry, salary, years_of_experience } =
    location.state as IEmployee;

  return (
    <div>
      <h2>Employee Details</h2>
      <div className="detail-field">
        <label>ID</label>
        <span>{id}</span>
      </div>
      <div className="detail-field">
        <label>First Name</label>
        <span>{first_name}</span>
      </div>
      <div className="detail-field">
        <label>Last Name</label>
        <span>{last_name}</span>
      </div>
      <div className="detail-field">
        <label>Email</label>
        <span>{email}</span>
      </div>
      <div className="detail-field">
        <label>Date of birth</label>
        <span>{date_of_birth}</span>
      </div>
      <div className="detail-field">
        <label>Industry</label>
        <span>{industry}</span>
      </div>
      <div className="detail-field">
        <label>Salary</label>
        <span>{salary}</span>
      </div>
      <div className="detail-field">
        <label>Years of Experience</label>
        <span>{years_of_experience}</span>
      </div>
    </div>
  );
};

export default EmployeeDetails;
