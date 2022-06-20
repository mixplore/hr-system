import { IEmployee } from '../@types.employee';
import { getAvgAgeByIndustry, getAvgSalaryByIndustry, getAvgSalaryByYOE } from './statistics';

const mockIndustries = ['Books', 'Banks', 'Software'];
const mockSalaries = [1000, 2000, 3000, 4000, 5000];
const mockYOE = [2, 5, 6];

const mockData = [
  {
    id: 1,
    first_name: 'Abed',
    last_name: 'Aldus',
    email: 'aaldus@test.test',
    date_of_birth: '20/11/1980',
    industry: mockIndustries[0],
    salary: mockSalaries[0],
    years_of_experience: mockYOE[0]
  },
  {
    id: 2,
    first_name: 'Ben',
    last_name: 'Biden',
    email: 'bbiden@test.test',
    date_of_birth: '18/03/1982',
    industry: mockIndustries[1],
    salary: mockSalaries[1],
    years_of_experience: mockYOE[1]
  },
  {
    id: 3,
    first_name: 'Clara',
    last_name: 'Cole',
    email: 'ccole@test.test',
    date_of_birth: '11/08/1967',
    industry: mockIndustries[2],
    salary: mockSalaries[2],
    years_of_experience: mockYOE[2]
  },
  {
    id: 4,
    first_name: 'Dora',
    last_name: 'Darcy',
    email: 'ddarcy@test.test',
    date_of_birth: '07/12/1992',
    industry: mockIndustries[2],
    salary: mockSalaries[3],
    years_of_experience: mockYOE[1]
  },
  {
    id: 5,
    first_name: 'Elon',
    last_name: 'Emery',
    email: 'eemery@test.test',
    date_of_birth: '05/07/1971',
    industry: mockIndustries[0],
    salary: mockSalaries[4],
    years_of_experience: mockYOE[2]
  }
] as IEmployee[];

const mockDataWithNullValues = [
  ...mockData,
  { id: 6, industry: null, salary: null, years_of_experience: null }
] as IEmployee[];

describe('#getAvgAgeByIndustry', () => {
  test('given an employees array, it returns average age by industry as an object', () => {
    const employees = mockData;
    const result = getAvgAgeByIndustry(employees);
    expect(result).toEqual({ Banks: 40, Books: 45.5, Software: 41.5 });
  });

  test('given an employees array, it returns average age by industry as an object ignoring null values', () => {
    const employees = mockDataWithNullValues;
    const result = getAvgAgeByIndustry(employees);
    expect(result).toEqual({ Banks: 40, Books: 45.5, Software: 41.5 });
  });
});

describe('#getAvgSalaryByIndustry', () => {
  test('given an employees array, it returns average salary by industry as an object', () => {
    const employees = mockData;
    const result = getAvgSalaryByIndustry(employees);
    expect(result).toEqual({ Banks: 2000, Books: 3000, Software: 3500 });
  });
  test('given an employees array, it returns average salary by industry as an object ignoring null values', () => {
    const employees = mockDataWithNullValues;
    const result = getAvgSalaryByIndustry(employees);
    expect(result).toEqual({ Banks: 2000, Books: 3000, Software: 3500 });
  });
});

describe('#getAvgSalaryByYOE', () => {
  test('given an employees array, it returns average salary by years of experience as an object', () => {
    const employees = mockData;
    const result = getAvgSalaryByYOE(employees);
    expect(result).toEqual({ '2': 1000, '5': 3000, '6': 4000 });
  });
  test('given an employees array, it returns average salary by years of experience as an object ignoring null values', () => {
    const employees = mockDataWithNullValues;
    const result = getAvgSalaryByYOE(employees);
    expect(result).toEqual({ '2': 1000, '5': 3000, '6': 4000 });
  });
});
