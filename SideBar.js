import React from "react";
import "../styles/SideBar.css";

function Sidebar({
  activePage,
  setActivePage,
  onLogout,
  isOpen,
  setIsOpen
}) {
  const menuItems = [
    { name: "Dashboard", icon: "⌂" },
    { name: "Courses", icon: "▤" },
    { name: "Grades", icon: "▥" },
    { name: "Schedule", icon: "▦" },
    { name: "Assignments", icon: "✎" },
    { name: "Announcements", icon: "▧" },
    { name: "Books", icon: "▣" },
    { name: "Profile", icon: "♙" }
  ];

  const handleNavigation = (page) => {
    setActivePage(page);

    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <div className="brand-icon">U</div>

          <div className="brand-text">
            <h2>UniPortal</h2>
            <span>Student Space</span>
          </div>
        </div>

        <button
          className="sidebar-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
      </div>

      <div className="sidebar-section-title">
        MAIN MENU
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`sidebar-link ${
              activePage === item.name ? "active" : ""
            }`}
            onClick={() => handleNavigation(item.name)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-divider"></div>

        <button className="sidebar-link logout-link" onClick={onLogout}>
          <span className="sidebar-icon">↪</span>
          <span>Log Out</span>
        </button>

        <div className="sidebar-footer-text">
          <span>UniPortal</span>
          <small>Student Portal © 2026</small>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;