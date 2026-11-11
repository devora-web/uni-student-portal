
import React, { useState } from "react";
import "../styles/Auth.css";

function Login({ onLogin, onGoToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please fill in all fields.");
      return;
    }

    let accounts = [];

    try {
      accounts = JSON.parse(
        localStorage.getItem("studentAccounts") || "[]"
      );

      if (!Array.isArray(accounts)) {
        accounts = [];
      }
    } catch {
      setError("Unable to read saved accounts. Please try again.");
      return;
    }

    const student = accounts.find(
      (account) =>
        account.email?.toLowerCase() === email.trim().toLowerCase() &&
        account.password === password
    );

    if (!student) {
      setError("Incorrect email or password.");
      return;
    }

    onLogin(student);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          <div className="auth-logo-icon">U</div>
          <h2>Student Portal</h2>
          <p>Your academic journey starts here</p>
        </div>

        <div className="auth-heading">
          <h1>Welcome Back</h1>
          <p>Sign in to access your student account.</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="auth-input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="auth-input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="auth-error">{error}</p>
          )}

          <button type="submit" className="auth-button">
            Sign In
          </button>

        </form>

        <div className="auth-switch">
          Don't have an account?

          <button
            type="button"
            onClick={onGoToSignup}
          >
            Create Account
          </button>
        </div>

        <p className="auth-footer">
          Student Portal © 2026
        </p>

      </div>
    </div>
  );
}

export default Login;

