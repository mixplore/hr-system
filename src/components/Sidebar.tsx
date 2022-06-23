import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => (
  <nav aria-label="Sidebar menu" className="sidebar">
    <h1 className="logo">HR System</h1>
    <NavLink className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="employees">
      Employees
    </NavLink>
    <NavLink className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="statistics">
      Statistics
    </NavLink>
  </nav>
);

export default Sidebar;
