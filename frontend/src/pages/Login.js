import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    const userData = { email, password };

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("token", result.token);
        navigate("/dashboard"); 
      } else {
        setError(result.error || "Invalid credentials.");
      }
    } catch (error) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-bg">
        <p className="logo-text">Express, Engage, Empower: Your Local World</p>
        <div className="content-box">
          <input
            className="input-field"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input-field"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

          <button className="button-continue" onClick={handleLogin}>
            Login
          </button>

          <div className="login-divider">
            <span className="or-text">OR</span>
          </div>

          <div className="auth-options-container">
            <div className="button-google"></div>
            <div className="button-apple"></div>
          </div>

          <p className="better-exp">
            Don't have an account? <span className="signup-link">Sign Up</span>
          </p>

          <div className="skip-for-now">
            <h1 className="skip-text-login">Skip for now</h1>
            <svg width="7.5" height="15" xmlns="http://www.w3.org/2000/svg">
              <use href="/sprite/sprite.svg#next" fill="" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
