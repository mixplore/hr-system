import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import { EmployeesProvider } from './context/EmployeesContext';
import EmployeeDetails from './pages/EmployeeDetails';
import EmployeeDetailsEdit from './pages/EmployeeDetailsEdit';
import Employees from './pages/Employees';
import Statistics from './pages/Statistics';

function App() {
  return (
    <div className="App">
      <EmployeesProvider>
        <Layout>
          <Routes>
            <Route path="*" element={<Navigate to="/employees" replace />} />
            <Route path="/employees">
              <Route index element={<Employees />} />
              <Route path=":employeeId" element={<EmployeeDetails />} />
              <Route path=":employeedId/edit" element={<EmployeeDetailsEdit />} />
            </Route>
            <Route path="statistics" element={<Statistics />} />
          </Routes>
        </Layout>
      </EmployeesProvider>
    </div>
  );
}

export default App;
