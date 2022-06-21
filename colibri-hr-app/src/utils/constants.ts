// form validation
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const MAX_100_CHARS_ERROR = 'Field value must not exceed 100 characters';
const MAX_100_VALUE_ERROR = 'Field value must be under 100';

// employee details
const ID = 'ID';
const FIRST_NAME = 'First Name';
const LAST_NAME = 'Last Name';
const EMAIL = 'Email';
const DATE_OF_BIRTH = 'Date of birth';
const INDUSTRY = 'Industry';
const SALARY = 'Salary';
const YEARS_OF_EXPERIENCE = 'Years of Experience';

const employeeDetails = {
  ID,
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  DATE_OF_BIRTH,
  INDUSTRY,
  SALARY,
  YEARS_OF_EXPERIENCE
};

export { EMAIL_REGEX, MAX_100_CHARS_ERROR, MAX_100_VALUE_ERROR, employeeDetails };
