import { useContext, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip
} from 'chart.js';
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Legend, Tooltip);
import { EmployeesContext } from '../context/EmployeesContext';
import {
  getAvgAgeByIndustry,
  getAvgSalaryByIndustry,
  getAvgSalaryByYOE
} from '../utils/statistics';

const Statistics = () => {
  const { state } = useContext(EmployeesContext);

  const avgAgeByIndustry = useMemo(
    () => getAvgAgeByIndustry(state.employeesData),
    [state.employeesData]
  );
  const avgSalaryByIndustry = useMemo(
    () => getAvgSalaryByIndustry(state.employeesData),
    [state.employeesData]
  );
  const avgSalaryByYOE = useMemo(
    () => getAvgSalaryByYOE(state.employeesData),
    [state.employeesData]
  );

  return (
    <>
      <h2>Employee Statistics</h2>
      <div>
        {/* Average Age By Industry Chart */}
        <Bar
          data={{
            labels: Object.keys(avgAgeByIndustry),
            datasets: [
              {
                label: 'Employees Average Age By Industry',
                data: Object.values(avgAgeByIndustry),
                backgroundColor: '#58508d'
              }
            ]
          }}
        />
        {/* Average Salary By Industry Chart */}
        <Bar
          data={{
            labels: Object.keys(avgSalaryByIndustry),
            datasets: [
              {
                label: 'Employees Average Salary By Industry',
                data: Object.values(avgSalaryByIndustry),
                backgroundColor: '#003f5c'
              }
            ]
          }}
        />
        {/* Average Salary By Years of Experience Chart */}
        <Bar
          data={{
            labels: Object.keys(avgSalaryByYOE),
            datasets: [
              {
                label: 'Employees Average Salary By Years of Experience',
                data: Object.values(avgSalaryByYOE),
                backgroundColor: ['#ffa600', '#003f5c']
              }
            ]
          }}
        />
      </div>
    </>
  );
};

export default Statistics;
