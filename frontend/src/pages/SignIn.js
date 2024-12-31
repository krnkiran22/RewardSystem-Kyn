import React, { useState } from "react";
import "../styles/SignIn.css";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [error, setError] = useState(""); // To display error messages

  // Validates the phone number input
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10 && /^[0-9]*$/.test(value)) {
      setPhoneNumber(value);
      setIsButtonDisabled(value.length !== 10 || !name || !email || !password);
    }
  };

  // Handles the signup process
  const handleSignup = async (e) => {
    e.preventDefault();
  
    if (isButtonDisabled) {
      setError("Please fill out all fields correctly.");
      return;
    }
  
    const userData = { name, email, password, phoneNumber };
  
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert("User registered successfully!");
        // Store the user ID in localStorage
        localStorage.setItem("userId", result._id); // Correctly save the user ID
        
      } else {
        setError(result.message || result.error || "Something went wrong");
      }
    } catch (error) {
      setError("Server error. Please try again later.");
    }
  };
  

  return (
    <div className="signin-container">
      <div className="signin-bg">
        <div><br></br><br></br><br></br><br></br><br></br></div>
        
        <form onSubmit={handleSignup}>
            {/* Full Name */}
            <input
              className="input-field"
              placeholder="Full Name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setIsButtonDisabled(!e.target.value || !email || !password || phoneNumber.length !== 10);
              }}
              required
            />

            {/* Email */}
            <input
              className="input-field"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsButtonDisabled(!e.target.value || !name || !password || phoneNumber.length !== 10);
              }}
              required
            />

            {/* Password */}
            <input
              className="input-field"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setIsButtonDisabled(!e.target.value || !name || !email || phoneNumber.length !== 10);
              }}
              required
            />

            {/* Phone Number */}
            <input
              className="input-field"
              maxLength="10"
              placeholder="Mobile Number"
              type="text"
              value={phoneNumber}
              onChange={handleInputChange}
              required
            />

            {error && <p className="error-text">{error}</p>}

            <div className="terms-container">
              <p>
                By clicking Continue, you agree to the KYN{" "}
                <span className="terms-privacy">Terms</span> and{" "}
                <span className="terms-privacy">Privacy Policy</span>
              </p>
            </div>

            <button
              className={`button-continue ${isButtonDisabled ? "disabled" : ""}`}
              type="submit"
              disabled={isButtonDisabled}
            >
              Signup
            </button>
          </form>

          <div className="signin-divider">
            <span className="or-text">OR</span>
          </div>

          <div className="auth-options-container">
            <div className="button-google"></div>
            <div className="button-apple"></div>
          </div>

          <p className="better-exp">For better experience, download the KYN app now</p>

          <div className="download-app-container">
            <div className="button-app-store"></div>
            <div className="button-google-play"></div>
          </div>

          <div className="skip-for-now">
            <h1 className="skip-text-login">Skip for now</h1>
            <svg width="7.5" height="15" xmlns="http://www.w3.org/2000/svg">
              <use href="/sprite/sprite.svg#next" />
            </svg>
          </div>
      </div>
    </div>
  );
};

export default SignIn;