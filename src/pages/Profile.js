
import React, { useState, useEffect } from "react";
import "../styles/Profile.css";

function Profile({ student, updateStudent }) {
  const majors = [
    "Computer Science",
    "Business",
    "Engineering",
    "Arts",
    "Education"
  ];

  const [formData, setFormData] = useState({
    name: student?.name || "",
    email: student?.email || "",
    studentId: student?.studentId || "",
    major: student?.major || "Computer Science",
    year: student?.year || "First Year",
    semester: student?.semester || "Fall 2026"
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    setFormData({
      name: student?.name || "",
      email: student?.email || "",
      studentId: student?.studentId || "",
      major: student?.major || "Computer Science",
      year: student?.year || "First Year",
      semester: student?.semester || "Fall 2026"
    });

    setMessage("");
    setMessageType("");
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));

    setMessage("");
    setMessageType("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.studentId.trim()
    ) {
      setMessage("Please complete all required fields.");
      setMessageType("error");
      return;
    }

    if (!majors.includes(formData.major)) {
      setMessage("Please select a valid major.");
      setMessageType("error");
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
      setMessage("Unable to read account information.");
      setMessageType("error");
      return;
    }

    const normalizedEmail = formData.email.trim().toLowerCase();
    const normalizedStudentId = formData.studentId.trim();

    const emailExists = accounts.some(
      (account) =>
        account.email?.toLowerCase() === normalizedEmail &&
        account.id !== student.id
    );

    if (emailExists) {
      setMessage("This email is already used by another account.");
      setMessageType("error");
      return;
    }

    const idExists = accounts.some(
      (account) =>
        account.studentId === normalizedStudentId &&
        account.id !== student.id
    );

    if (idExists) {
      setMessage("This student ID is already used.");
      setMessageType("error");
      return;
    }

    const updatedStudent = {
      ...student,
      name: formData.name.trim(),
      email: normalizedEmail,
      studentId: normalizedStudentId,
      major: formData.major,
      year: formData.year,
      semester: formData.semester
    };

    updateStudent(updatedStudent);

    setMessage("Your profile has been updated successfully.");
    setMessageType("success");
  };

  return (
    <div className="profile-page">

      <div className="page-intro">
        <div>
          <span className="page-label">
            PERSONAL INFORMATION
          </span>

          <h1>My Profile</h1>

          <p>
            View and manage your student account information.
          </p>
        </div>
      </div>

      <div className="profile-layout">

        <section className="profile-summary">

          <div className="profile-avatar">
            {(student?.name || "S").charAt(0).toUpperCase()}
          </div>

          <h2>{student?.name || "Student"}</h2>

          <p>{student?.major || "University Student"}</p>

          <div className="profile-divider"></div>

          <div className="profile-detail">
            <span>Student ID</span>
            <strong>{student?.studentId || "Not provided"}</strong>
          </div>

          <div className="profile-detail">
            <span>Academic Year</span>
            <strong>{student?.year || "First Year"}</strong>
          </div>

          <div className="profile-detail">
            <span>Semester</span>
            <strong>{student?.semester || "Fall 2026"}</strong>
          </div>

        </section>

        <section className="profile-form-section">

          <div className="profile-form-heading">
            <h2>Edit Personal Information</h2>
            <p>Update your student details below.</p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="profile-input-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="profile-input-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="profile-input-group">
              <label>Student ID</label>

              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                required
              />
            </div>

            <div className="profile-input-group">
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

              <small>
                Changing your major will update your academic information.
              </small>
            </div>

            {message && (
              <p
                className={
                  messageType === "success"
                    ? "profile-success"
                    : "profile-error"
                }
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              className="profile-save-button"
            >
              Save Changes
            </button>

          </form>

        </section>

      </div>

    </div>
  );
}

export default Profile;
