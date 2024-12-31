import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (savedUser) {
        setUser(savedUser);
      }
      setLoading(false);
    }
  }, [navigate]);

  if (loading) return <div className="loading-screen">Loading...</div>;
  if (!user) return <div className="error-message">User data is not available.</div>;

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <h1 className="logo">KYN Dashboard</h1>
        <div className="nav-links">
          <button onClick={() => navigate("/profile")}>Profile</button>
          <button onClick={() => navigate("/settings")}>Settings</button>
          <button onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}>Logout</button>
        </div>
      </nav>
      <div className="dashboard-content">
        <div className="user-card">
          <h2>Welcome, {user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone Number: {user.phoneNumber}</p>
        </div>
        <div className="user-activity">
          <h3>Your Recent Activity</h3>
          <div className="activity-list">
            <p>Event 1: Attended Web Development Workshop</p>
            <p>Event 2: Joined KYN Community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
