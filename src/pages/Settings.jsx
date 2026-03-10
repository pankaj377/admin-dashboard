import { useState } from 'react';
import { User, Lock, Bell } from 'lucide-react';
import '../App.css';

const Settings = () => {

  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@dashboard.com");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  /* Change Profile Name */
  const updateProfile = () => {
    alert("Profile updated successfully!");
  };

  /* Update Password */
  const updatePassword = () => {
    if(password.length < 6){
      alert("Password must be at least 6 characters");
    } else {
      alert("Password updated successfully");
      setPassword("");
    }
  };

  /* Toggle Dark Mode */
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("darkMode");
  };

  return (
    <div className={`settingsWrapper ${darkMode ? "dark" : ""}`}>
      <h2>Account Settings</h2>

      {/* Profile Section */}
      <section className="section">
        <div className="sectionHeader">
          <User size={20} />
          <h3>Profile Information</h3>
        </div>

        <div className="formGroup">
          <label>Display Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="formGroup">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="saveBtn" onClick={updateProfile}>
          Save Profile
        </button>
      </section>

      {/* Security Section */}
      <section className="section">
        <div className="sectionHeader">
          <Lock size={20} />
          <h3>Security</h3>
        </div>

        <div className="formGroup">
          <label>New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="saveBtn" onClick={updatePassword}>
          Update Password
        </button>
      </section>

      {/* Preferences Section */}
      <section className="section">
        <div className="sectionHeader">
          <Bell size={20} />
          <h3>Preferences</h3>
        </div>

        <div className="toggleRow">
          <span>Enable Dark Mode</span>

          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider"></span>
          </label>
        </div>
      </section>
    </div>
  );
};

export default Settings;