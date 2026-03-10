import { Link } from 'react-router-dom';
import { LayoutDashboard, Users, ShoppingBag, Settings } from 'lucide-react';
import '../App.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>AdminPanel</h2>
      <nav>
        <Link to="/"><LayoutDashboard /> Dashboard</Link>
        <Link to="/users"><Users /> Users</Link>
        <Link to="/products"><ShoppingBag /> Products</Link>
        <Link to="/settings"><Settings /> Settings</Link>
      </nav>
    </div>
  );
};
export default Sidebar;