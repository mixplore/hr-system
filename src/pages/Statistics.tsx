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
  getAvgSalaryByYOE,
  getCountByIndustry
} from '../utils/statistics';
import './Statistics.scss';

const Statistics = () => {
  const { state } = useContext(EmployeesContext);

  const avgAgeByIndustry = useMemo<{ labels: string[]; values: number[] }>(() => {
    const avgAgeByIndustryMap = getAvgAgeByIndustry(state.employeesData);
    return {
      labels: Array.from(avgAgeByIndustryMap.keys()),
      values: Array.from(avgAgeByIndustryMap.values())
    };
  }, [state.employeesData]);

  const avgSalaryByIndustry = useMemo<{ labels: string[]; values: number[] }>(() => {
    const avgSalaryByIndustryMap = getAvgSalaryByIndustry(state.employeesData);
    return {
      labels: Array.from(avgSalaryByIndustryMap.keys()),
      values: Array.from(avgSalaryByIndustryMap.values())
    };
  }, [state.employeesData]);

  const avgSalaryByYOE = useMemo<{ labels: number[]; values: number[] }>(() => {
    const avgSalaryByYOEMap = getAvgSalaryByYOE(state.employeesData);
    return {
      labels: Array.from(avgSalaryByYOEMap.keys()),
      values: Array.from(avgSalaryByYOEMap.values())
    };
  }, [state.employeesData]);

  const countByIndustry = useMemo<{ labels: string[]; values: number[] }>(() => {
    const avgSalaryByYOEMap = getCountByIndustry(state.employeesData);
    return {
      labels: Array.from(avgSalaryByYOEMap.keys()),
      values: Array.from(avgSalaryByYOEMap.values())
    };
  }, [state.employeesData]);

  return (
    <>
      <h2>Employee Statistics</h2>
      <div className="charts-container">
        {/* Average Age By Industry Chart */}
        <Bar
          data={{
            labels: avgAgeByIndustry.labels,
            datasets: [
              {
                label: 'Average Age By Industry',
                data: avgAgeByIndustry.values,
                backgroundColor: '#58508d'
              }
            ]
          }}
        />
        {/* Average Salary By Industry Chart */}
        <Bar
          data={{
            labels: avgSalaryByIndustry.labels,
            datasets: [
              {
                label: 'Average Salary By Industry',
                data: avgSalaryByIndustry.values,
                backgroundColor: '#003f5c'
              }
            ]
          }}
        />
        {/* Average Salary By Years of Experience Chart */}
        <Bar
          data={{
            labels: avgSalaryByYOE.labels,
            datasets: [
              {
                label: 'Average Salary By Years of Experience',
                data: avgSalaryByYOE.values,
                backgroundColor: ['#5c5a5b']
              }
            ]
          }}
        />
        {/* Number of Employees by Industry Chart */}
        <Bar
          data={{
            labels: countByIndustry.labels,
            datasets: [
              {
                label: 'Number of employees by industry',
                data: countByIndustry.values,
                backgroundColor: ['#a29cf4']
              }
            ]
          }}
        />
      </div>
    </>
  );
};

export default Statistics;
