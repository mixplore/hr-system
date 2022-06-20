import { IEmployee } from '../@types.employee';
import { formatDateString } from './dataParsers';

const groupBy = <TItemType>(
  items: TItemType[],
  prop: keyof TItemType
): { [key: string]: TItemType[] } =>
  items.reduce((itemsMap, item) => {
    const key = item[prop] as unknown as string;
    if (!itemsMap[key]) {
      itemsMap[key] = [];
    }
    itemsMap[key].push(item);
    return itemsMap;
  }, {} as { [key: string]: TItemType[] });

const avg = (arr: number[]) => {
  return arr.reduce((sum: number, el: number) => sum + el, 0) / arr.length;
};

const getAgeFromBirthdate = (dateString: string) => {
  const birthday = new Date(formatDateString(dateString) || '');
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const filterByMissingData = <TItemType>(items: TItemType[], prop: keyof TItemType) =>
  items.filter((item) => !!item[prop]);

const groupByIndustry = (employees: IEmployee[]) => {
  return groupBy<IEmployee>(employees, 'industry');
};

const groupyByYOE = (employees: IEmployee[]) => {
  return groupBy<IEmployee>(employees, 'years_of_experience');
};

export const getAvgAgeByIndustry = (employees: IEmployee[]) => {
  const employeesByIndustry = groupByIndustry(filterByMissingData(employees, 'industry'));
  const avgAgeByIndustry: { [key: string]: number } = {};
  Object.entries(employeesByIndustry).forEach(([key, value]) => {
    avgAgeByIndustry[key] = avg(value.map((item) => getAgeFromBirthdate(item.date_of_birth)));
  });
  return avgAgeByIndustry;
};

export const getAvgSalaryByIndustry = (employees: IEmployee[]) => {
  const employeesByIndustry = groupByIndustry(filterByMissingData(employees, 'industry'));
  const avgAgeByIndustry: { [key: string]: number } = {};
  Object.entries(employeesByIndustry).forEach(([key, value]) => {
    avgAgeByIndustry[key] = avg(value.map((item) => item.salary));
  });
  return avgAgeByIndustry;
};

export const getAvgSalaryByYOE = (employees: IEmployee[]) => {
  const employeesByIndustry = groupyByYOE(filterByMissingData(employees, 'years_of_experience'));
  const avgAgeByIndustry: { [key: string]: number } = {};
  Object.entries(employeesByIndustry).forEach(([key, value]) => {
    avgAgeByIndustry[key] = avg(value.map((item) => item.salary));
  });
  return avgAgeByIndustry;
};
