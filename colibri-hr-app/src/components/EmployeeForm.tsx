import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { IEmployee } from '../@types.employee';
import * as constants from '../utils/constants';
import { formatDateString } from '../utils/dataParsers';
import './EmployeeForm.scss';

type EmployeeFormPropsType = {
  defaultValues: IEmployee;
  onSubmit?: SubmitHandler<FieldValues>;
  isReadOnly?: boolean;
};

const maxLengthValidation = {
  maxLength: { value: 100, message: constants.MAX_100_CHARS_ERROR }
};

const EmployeeForm = ({ defaultValues, onSubmit, isReadOnly }: EmployeeFormPropsType) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      ...defaultValues,
      date_of_birth: formatDateString(defaultValues.date_of_birth)
    }
  });
  const { isSubmitting, errors } = formState;

  return (
    <form className="employee-form" {...(onSubmit ? { onSubmit: handleSubmit(onSubmit) } : {})}>
      <div className="form-field">
        <label htmlFor="id">ID</label>
        <input readOnly disabled {...register('id')} />
      </div>

      <div className="form-field">
        <label htmlFor="first_name">First Name</label>
        <input
          className={errors.first_name && 'error-input'}
          disabled={isReadOnly}
          {...register('first_name', {
            ...maxLengthValidation
          })}
        />
        {errors.first_name && <span className="error">{errors.first_name.message}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="last_name">Last Name</label>
        <input
          className={errors.last_name && 'error-input'}
          disabled={isReadOnly}
          {...register('last_name', {
            ...maxLengthValidation
          })}
        />
        {errors.last_name && <span className="error">{errors.last_name.message}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          className={errors.email && 'error-input'}
          disabled={isReadOnly}
          type="email"
          {...register('email', {
            pattern: {
              value: constants.EMAIL_REGEX,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="date_of_birth">Date of Birth</label>
        <input
          className={errors.date_of_birth && 'error-input'}
          disabled={isReadOnly}
          type="date"
          min={'1900-01-01'}
          max={new Date().toISOString().split('T')[0]}
          {...register('date_of_birth')}
        />
      </div>

      <div className="form-field">
        <label htmlFor="industry">Industry</label>
        <input
          className={errors.industry && 'error-input'}
          disabled={isReadOnly}
          {...register('industry', {
            ...maxLengthValidation
          })}
        />
        {errors.industry && <span className="error">{errors.industry.message}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="salary">Salary</label>
        <input disabled={isReadOnly} type="number" step="any" {...register('salary')} />
      </div>

      <div className="form-field">
        <label htmlFor="years_of_experience">Years of Experience</label>
        <input
          className={errors.years_of_experience && 'error-input'}
          disabled={isReadOnly}
          type="number"
          step="any"
          {...register('years_of_experience', {
            max: { value: 100, message: constants.MAX_100_VALUE_ERROR }
          })}
        />
        {errors.years_of_experience && (
          <span className="error">{errors.years_of_experience.message}</span>
        )}
      </div>

      <button disabled={isSubmitting} className="submit-btn" type="submit">
        {isReadOnly ? `Edit` : `Save`}
      </button>
    </form>
  );
};

export default EmployeeForm;
