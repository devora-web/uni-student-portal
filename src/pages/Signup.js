
import React, { useState } from "react";
import "../styles/Auth.css";

function Signup({ onSignup, onGoToLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    major: "Computer Science",
    studentId: ""
  });

  const [error, setError] = useState("");

  const majors = [
    "Computer Science",
    "Business",
    "Engineering",
    "Arts",
    "Education"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const {
      name,
      email,
      password,
      confirmPassword,
      major,
      studentId
    } = formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !password ||
      !studentId.trim()
    ) {
      setError("Please complete all required fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const accounts = JSON.parse(
      localStorage.getItem("studentAccounts") || "[]"
    );

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedStudentId = studentId.trim();

    const emailExists = accounts.some(
      (account) =>
        account.email.toLowerCase() === normalizedEmail
    );

    if (emailExists) {
      setError("This email is already registered.");
      return;
    }

    const studentIdExists = accounts.some(
      (account) =>
        account.studentId === normalizedStudentId
    );

    if (studentIdExists) {
      setError("This student ID is already registered.");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      email: normalizedEmail,
      password,
      studentId: normalizedStudentId,
      major,
      year: "First Year",
      semester: "Fall 2026"
    };

    accounts.push(newStudent);

    localStorage.setItem(
      "studentAccounts",
      JSON.stringify(accounts)
    );

    onSignup(newStudent);
  };

  return (
    <div className="auth-page">
      <div className="auth-card signup-card">

        <div className="auth-logo">
          <div className="auth-logo-icon">U</div>
          <h2>Student Portal</h2>
          <p>Create your academic account</p>
        </div>

        <div className="auth-heading">
          <h1>Create Account</h1>
          <p>Enter your information to get started.</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="auth-input-group">
            <label>Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="auth-input-group">
            <label>Student ID</label>
            <input
              name="studentId"
              type="text"
              placeholder="Enter your student ID"
              value={formData.studentId}
              onChange={handleChange}
            />
          </div>

          <div className="auth-input-group">
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your university email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="auth-input-group">
            <label>Major</label>
            <select
              name="major"
              value={formData.major}
              onChange={handleChange}
            >
              {majors.map((major) => (
                <option key={major} value={major}>
                  {major}
                </option>
              ))}
            </select>
          </div>

          <div className="auth-input-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="auth-input-group">
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {error && (
            <p className="auth-error">{error}</p>
          )}

          <button type="submit" className="auth-button">
            Create Account
          </button>

        </form>

        <div className="auth-switch">
          Already have an account?
          <button
            type="button"
            onClick={onGoToLogin}
          >
            Sign In
          </button>
        </div>

        <p className="auth-footer">
          Student Portal © 2026
        </p>

      </div>
    </div>
  );
}

export default Signup;
