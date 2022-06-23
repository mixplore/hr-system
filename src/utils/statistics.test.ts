import { IEmployee } from '../@types.employee';
import {
  getAvgAgeByIndustry,
  getAvgSalaryByIndustry,
  getAvgSalaryByYOE,
  getCountByIndustry
} from './statistics';

const mockIndustries = ['Books', 'Banks', 'Software'];
const mockSalaries = [1000, 2000, 3000, 4000, 5000];
const mockYOE = [2, 0.7, 6];

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

const testCases = [
  {
    getFn: getAvgAgeByIndustry,
    expectedKeys: ['Banks', 'Software', 'Books'],
    expectedValues: [40, 41.5, 45.5],
    returnsStat: 'average age by industry',
    sortedBy: 'average age'
  },
  {
    getFn: getAvgSalaryByIndustry,
    expectedKeys: ['Banks', 'Books', 'Software'],
    expectedValues: [2000, 3000, 3500],
    returnsStat: 'average salary by industry',
    sortedBy: 'average salary'
  },
  {
    getFn: getAvgSalaryByYOE,
    expectedKeys: [0.7, 2, 6],
    expectedValues: [3000, 1000, 4000],
    returnsStat: 'average salary by years of experience',
    sortedBy: 'years of experience '
  },
  {
    getFn: getCountByIndustry,
    expectedKeys: ['Banks', 'Books', 'Software'],
    expectedValues: [1, 2, 2],
    returnsStat: 'number of employees by industry',
    sortedBy: 'count of employees'
  }
];

describe('Statistics', () => {
  test.each(testCases)(
    'given an employees array, it returns $returnsStat as a map sorted by $sortedBy',
    ({ getFn, expectedKeys, expectedValues }) => {
      const result = getFn(mockData);
      expect(Array.from(result.keys() as IterableIterator<string | number>)).toEqual(expectedKeys);
      expect(Array.from(result.values())).toEqual(expectedValues);
    }
  );

  test.each(testCases)(
    'given an employees array, it returns $returnsStat as a map sorted by $sortedBy - ignoring null values from data set',
    ({ getFn, expectedKeys, expectedValues }) => {
      const result = getFn(mockDataWithNullValues);
      expect(Array.from(result.keys() as IterableIterator<string | number>)).toEqual(expectedKeys);
      expect(Array.from(result.values())).toEqual(expectedValues);
    }
  );
});
