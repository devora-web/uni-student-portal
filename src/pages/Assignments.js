
import React, { useState } from "react";
import "../styles/Assignments.css";

function Assignments({ student, pageData, setPageData }) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const assignments = pageData?.assignments || [];

  const updateStatus = (id) => {
    const updatedAssignments = assignments.map((assignment) =>
      assignment.id === id
        ? {
            ...assignment,
            status:
              assignment.status === "Completed"
                ? "Pending"
                : "Completed"
          }
        : assignment
    );

    setPageData({
      ...pageData,
      assignments: updatedAssignments
    });
  };

  const filteredAssignments = assignments.filter((assignment) => {
    const matchesFilter =
      filter === "All" || assignment.status === filter;

    const matchesSearch =
      assignment.title.toLowerCase().includes(search.toLowerCase()) ||
      assignment.course.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const completed = assignments.filter(
    (item) => item.status === "Completed"
  ).length;

  const pending = assignments.length - completed;

  return (
    <div className="assignments-page">

      <div className="page-intro">
        <div>
          <span className="page-label">ACADEMIC TASKS</span>
          <h1>My Assignments</h1>
          <p>Organize and follow your academic responsibilities.</p>
        </div>

        <div className="major-label">
          <span>Current Major</span>
          <strong>{student.major}</strong>
        </div>
      </div>

      <div className="assignment-summary">

        <div className="assignment-stat">
          <span>Total Assignments</span>
          <h2>{assignments.length}</h2>
        </div>

        <div className="assignment-stat">
          <span>Pending</span>
          <h2>{pending}</h2>
        </div>

        <div className="assignment-stat">
          <span>Completed</span>
          <h2>{completed}</h2>
        </div>

      </div>

      <section className="assignments-container">

        <div className="assignment-controls">

          <input
            type="text"
            placeholder="Search assignments or courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Assignments</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

        </div>

        <div className="assignments-list">

          {filteredAssignments.length > 0 ? (
            filteredAssignments.map((assignment) => (
              <div className="assignment-card" key={assignment.id}>

                <div className="assignment-info">
                  <h3>{assignment.title}</h3>
                  <p>{assignment.course}</p>
                  <small>Due date: {assignment.dueDate}</small>
                </div>

                <div className="assignment-actions">

                  <span
                    className={`assignment-status ${assignment.status.toLowerCase().replace(" ", "-")}`}
                  >
                    {assignment.status}
                  </span>

                  <button
                    onClick={() => updateStatus(assignment.id)}
                    className="assignment-button"
                  >
                    {assignment.status === "Completed"
                      ? "Mark Pending"
                      : "Mark Completed"}
                  </button>

                </div>

              </div>
            ))
          ) : (
            <p className="empty-message">
              No assignments found.
            </p>
          )}

        </div>

      </section>

    </div>
  );
}

export default Assignments;
