import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => (
  <nav aria-label="Sidebar menu" className="sidebar">
    <h2 className="logo">HR System</h2>
    <Link to="employees">Employees</Link>
    <Link to="statistics">Statistics</Link>
  </nav>
);

export default Sidebar;
