import React from "react";
import "../styles/Header.css";

function Header({ student, onMenuClick }) {
  const studentName = student?.name || "Student";
  const firstLetter = studentName.charAt(0).toUpperCase();

  return (
    <header className="portal-header">
      <div className="header-left">
        <button
          className="mobile-menu-button"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="header-welcome">
          <h2>Welcome back!</h2>
          <p>Here's your university overview.</p>
        </div>
      </div>

      <div className="header-right">
        <div className="header-student-info">
          <span className="header-student-name">{studentName}</span>
          <span className="header-student-major">
            {student?.major || "University Student"}
          </span>
        </div>

        <div className="header-avatar">
          {firstLetter}
        </div>
      </div>
    </header>
  );
}

export default Header;