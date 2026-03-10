import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import styles from '../styles/Dashboard.module.css';
import '../App.css';

const data = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
];

const Dashboard = () => {
  return (
    <div className="container">
      <div className="statsGrid">
        <div className="card"><h3>Total Users</h3><p>1,250</p></div>
        <div className="card"><h3>Revenue</h3><p>$45,200</p></div>
        <div className="card"><h3>Growth</h3><p>+12.5%</p></div>
      </div>
      
      <div className="hartContainer">
        <h3>Revenue Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Dashboard;