import { IEmployee } from '../@types.employee';
import { formatDateString } from './dataParsers';

const groupBy = <TItemType>(items: TItemType[], prop: keyof TItemType): Map<string, TItemType[]> =>
  items.reduce((itemsMap, item) => {
    const key = item[prop];
    if (!itemsMap.has(key)) {
      itemsMap.set(key, []);
    }
    itemsMap.get(key).push(item);
    return itemsMap;
  }, new Map());

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
  return groupBy<IEmployee>(
    employees.sort((a, b) => a.years_of_experience - b.years_of_experience),
    'years_of_experience'
  );
};

const sortMapByValues = (objMap: Map<string, number>) =>
  new Map([...objMap].sort((a, b) => a[1] - b[1]));

export const getAvgAgeByIndustry = (employees: IEmployee[]): Map<string, number> => {
  const employeesByIndustryMap = groupByIndustry(filterByMissingData(employees, 'industry'));
  const avgAgeByIndustry: Map<string, number> = new Map();
  employeesByIndustryMap.forEach((value, key) => {
    avgAgeByIndustry.set(key, avg(value.map((item) => getAgeFromBirthdate(item.date_of_birth))));
  });
  return sortMapByValues(avgAgeByIndustry);
};

export const getAvgSalaryByIndustry = (employees: IEmployee[]) => {
  const employeesByIndustryMap = groupByIndustry(filterByMissingData(employees, 'industry'));
  const avgAgeByIndustry: Map<string, number> = new Map();
  employeesByIndustryMap.forEach((value, key) => {
    avgAgeByIndustry.set(key, avg(value.map((item) => item.salary)));
  });
  return sortMapByValues(avgAgeByIndustry);
};

export const getAvgSalaryByYOE = (employees: IEmployee[]) => {
  const employeesByYOEMap = groupyByYOE(filterByMissingData(employees, 'years_of_experience'));
  const avgSalaryByYOE: Map<number, number> = new Map();
  employeesByYOEMap.forEach((value, key) => {
    avgSalaryByYOE.set(+key, avg(value.map((item) => item.salary)));
  });
  return avgSalaryByYOE;
};
