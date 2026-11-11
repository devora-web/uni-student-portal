
import React, { useState } from "react";
import "../styles/Announcements.css";

function Announcements({ student, pageData }) {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const announcements = pageData?.announcements || [];

  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesSearch =
      announcement.title.toLowerCase().includes(search.toLowerCase()) ||
      announcement.message.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      selectedType === "All" ||
      announcement.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="announcements-page">

      <div className="page-intro">
        <div>
          <span className="page-label">STAY INFORMED</span>
          <h1>Announcements</h1>
          <p>Important updates and information for your academic program.</p>
        </div>

        <div className="major-label">
          <span>Current Major</span>
          <strong>{student.major}</strong>
        </div>
      </div>

      <section className="announcements-container">

        <div className="announcement-controls">

          <input
            type="text"
            placeholder="Search announcements..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="University">University</option>
            <option value="Academic">Academic</option>
            <option value="Library">Library</option>
          </select>

        </div>

        <div className="announcements-list">

          {filteredAnnouncements.length > 0 ? (
            filteredAnnouncements.map((announcement) => (
              <article
                className="announcement-card"
                key={announcement.id}
              >

                <div className="announcement-icon">📢</div>

                <div className="announcement-content">

                  <div className="announcement-card-top">
                    <span className="announcement-category">
                      {announcement.type}
                    </span>

                    <small>{announcement.date}</small>
                  </div>

                  <h3>{announcement.title}</h3>

                  <p>{announcement.message}</p>

                  <span className="announcement-major">
                    For {student.major} students
                  </span>

                </div>

              </article>
            ))
          ) : (
            <p className="empty-message">
              No announcements found.
            </p>
          )}

        </div>

      </section>

    </div>
  );
}

export default Announcements;
