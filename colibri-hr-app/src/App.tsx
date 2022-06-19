import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import { EmployeesProvider } from './context/EmployeesContext';
import EmployeeDetails from './pages/EmployeeDetails';
import Employees from './pages/Employees';

function App() {
  return (
    <div className="App">
      <EmployeesProvider>
        <Layout>
          <Routes>
            <Route path="employees" element={<Employees />}>
              <Route path=":employeeId" element={<EmployeeDetails />} />
              <Route path="edit" element={<></>} />
            </Route>
            <Route path="statistics" element={<></>} />
          </Routes>
        </Layout>
      </EmployeesProvider>
    </div>
  );
}

export default App;
