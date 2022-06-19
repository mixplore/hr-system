import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Employees from './pages/Employees';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="employees" element={<Employees />} />
          <Route path="statistics" element={<></>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
