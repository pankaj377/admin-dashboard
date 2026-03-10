import { useState } from 'react';
import { Trash2, Search } from 'lucide-react';
import '../App.css';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Inactive' },
  ]);

  const deleteUser = (id) => setUsers(users.filter(user => user.id !== id));

  return (
    <div className="userPage">
      <div className="header">
        <input type="text" placeholder="Search users..." />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td><button onClick={() => deleteUser(user.id)}><Trash2 size={18} /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Users;