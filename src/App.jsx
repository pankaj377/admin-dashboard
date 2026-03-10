import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Products from './pages/Products';
import Settings from './pages/Settings';

import './App.css';

function App() {
  return (
    <Router>
      <div className="mainLayout">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/settings" element={<Settings />} /> 
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            {/* Add Products and Settings routes similarly */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;