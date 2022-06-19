export interface IEmployee {
  id: number;
  first_name: string;
  last_name: string | null;
  email: string | null;
  date_of_birth: string;
  industry: string;
  salary: number;
  years_of_experience: number;
}

export type EmployeeContextType = {
  employeesData: IEmployee[] | null;
  isLoading: boolean;
};
