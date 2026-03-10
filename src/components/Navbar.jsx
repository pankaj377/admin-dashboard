import { Bell, Search, UserCircle } from 'lucide-react';
import '../App.css';

const Navbar = ({ pageTitle }) => {
  return (
    <header className="navbar">
      <div className="left">
        <h2>{pageTitle || "Overview"}</h2>
      </div>

      <div className="right">
        <div className="searchBox">
          <Search size={18} />
          <input type="text" placeholder="Search data..." />
        </div>

        <div className="iconBtn">
          <Bell size={20} />
          <span className="badge">3</span>
        </div>

        <div className="profile">
          <span>Admin User</span>
          <UserCircle size={28} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;