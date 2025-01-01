import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchUserProfile = async (userId, token) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/profile/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch user profile");

      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      throw error;
    }
  };

  useEffect(() => {
    const loadUserData = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!token || !userId) {
        navigate("/login");
        return;
      }

      try {
        const userData = await fetchUserProfile(userId, token);
        setUser(userData);
      } catch {
        setError("Unable to load user data. Please login again.");
        localStorage.clear();
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [navigate]);

  if (loading) return <div className="loading-screen">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!user) return <div className="error-message">User data is not available.</div>;

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <h1 className="logo">KYN Dashboard</h1>
        <div className="nav-links">
          <button onClick={() => navigate("/profile")}>Profile</button>
          <button onClick={() => navigate("/settings")}>Settings</button>
          <button onClick={() => navigate("/reedem")}>Reedem Points</button>
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </nav>
      <div className="dashboard-content">
        <div className="user-card">
          <h2>
            Welcome, {user.name}
            <button className="fire-button">
              Streak🔥 {user.streak || 0}
            </button>
          </h2>
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
