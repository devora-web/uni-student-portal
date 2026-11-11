
import React from "react";
import "../styles/Dashboard.css";

function Dashboard({ student, pageData }) {
  const courses = pageData?.courses || [];
  const grades = pageData?.grades || [];
  const assignments = pageData?.assignments || [];
  const announcements = pageData?.announcements || [];

  const average =
    grades.length > 0
      ? grades.reduce((sum, grade) => sum + grade.total, 0) /
        grades.length
      : 0;

  const gpa = ((average / 100) * 4).toFixed(2);

  const pendingAssignments = assignments.filter(
    (assignment) => assignment.status !== "Completed"
  );

  return (
    <div className="dashboard-page">

      <div className="dashboard-welcome">
        <div>
          <p className="dashboard-subtitle">STUDENT OVERVIEW</p>
          <h1>Welcome back, {student.name}!</h1>
          <p>
            Here's an overview of your academic progress and activities.
          </p>
        </div>

        <div className="welcome-major">
          <span>Your Major</span>
          <strong>{student.major}</strong>
        </div>
      </div>

      <div className="dashboard-stats">

        <div className="stat-card">
          <div className="stat-icon blue">📚</div>
          <div>
            <p>Enrolled Courses</p>
            <h2>{courses.length}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">🎓</div>
          <div>
            <p>Current GPA</p>
            <h2>{gpa}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">📝</div>
          <div>
            <p>Pending Assignments</p>
            <h2>{pendingAssignments.length}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">📢</div>
          <div>
            <p>Announcements</p>
            <h2>{announcements.length}</h2>
          </div>
        </div>

      </div>

      <div className="dashboard-grid">

        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <h2>My Courses</h2>
              <p>Your major-related courses</p>
            </div>
          </div>

          {courses.length === 0 ? (
            <p className="empty-message">No courses available.</p>
          ) : (
            <div className="dashboard-course-list">
              {courses.slice(0, 4).map((course) => (
                <div className="dashboard-course" key={course.id}>
                  <div className="course-small-icon">📖</div>
                  <div>
                    <h3>{course.name}</h3>
                    <p>{course.code} · {course.credits} Credits</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <h2>Upcoming Assignments</h2>
              <p>Keep track of your tasks</p>
            </div>
          </div>

          {assignments.length === 0 ? (
            <p className="empty-message">No assignments available.</p>
          ) : (
            <div className="dashboard-assignment-list">
              {assignments.slice(0, 4).map((assignment) => (
                <div className="dashboard-assignment" key={assignment.id}>
                  <div>
                    <h3>{assignment.title}</h3>
                    <p>{assignment.course}</p>
                    <small>Due: {assignment.dueDate}</small>
                  </div>

                  <span className={`status ${assignment.status.toLowerCase().replace(" ", "-")}`}>
                    {assignment.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>

      <section className="dashboard-section announcements-preview">
        <div className="section-heading">
          <div>
            <h2>Recent Announcements</h2>
            <p>Latest university updates</p>
          </div>
        </div>

        {announcements.slice(0, 3).map((announcement) => (
          <div className="announcement-preview" key={announcement.id}>
            <div className="announcement-dot"></div>
            <div>
              <h3>{announcement.title}</h3>
              <p>{announcement.message}</p>
              <small>{announcement.date}</small>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}

export default Dashboard;
