import './App.scss';
import Layout from './components/Layout';
import Employees from './pages/Employees';

function App() {
  return (
    <div className="App">
      <Layout>
        <Employees />
      </Layout>
    </div>
  );
}

export default App;
