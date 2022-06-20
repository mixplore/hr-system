import React, { createContext, useEffect, useState } from 'react';
import { EmployeeContextType } from '../@types.employee';
import { getEmployees } from '../api/requests';

const employeeCtxDefaultValue: {
  state: EmployeeContextType;
  // eslint-disable-next-line no-unused-vars
  setState: (state: EmployeeContextType) => void;
} = {
  state: { employeesData: [], isLoading: false },
  setState: () => {}
};

export const EmployeesContext = createContext(employeeCtxDefaultValue);

export const EmployeesProvider = ({ children }: React.PropsWithChildren) => {
  const [state, setState] = useState<EmployeeContextType>(employeeCtxDefaultValue.state);

  useEffect(() => {
    const getData = async () => {
      setState((prevState) => ({
        ...prevState,
        isLoading: true
      }));
      const employeesData = await getEmployees();
      setState((prevState) => ({
        ...prevState,
        employeesData,
        isLoading: false
      }));
    };
    getData();
  }, []);

  return (
    <EmployeesContext.Provider value={{ state, setState }}>{children}</EmployeesContext.Provider>
  );
};
