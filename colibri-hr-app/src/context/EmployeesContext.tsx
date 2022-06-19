import React, { createContext, useEffect, useState } from 'react';
import { EmployeeContextType } from '../@types.employee';
import { getEmployees } from '../api/requests';

export const EmployeesContext = createContext<EmployeeContextType | null>(null);

export const EmployeesProvider = ({ children }: React.PropsWithChildren) => {
  const [state, setState] = useState({
    employeesData: [],
    isLoading: false
  });

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

  return <EmployeesContext.Provider value={state}>{children}</EmployeesContext.Provider>;
};
