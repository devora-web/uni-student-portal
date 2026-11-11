
import React from "react";
import "../styles/Schedule.css";

function Schedule({ student, pageData }) {
  const courses = (pageData?.courses || []).filter(
    (course) => course.enrolled !== false
  );

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];

  return (
    <div className="schedule-page">

      <div className="page-intro">
        <div>
          <span className="page-label">WEEKLY PLANNER</span>
          <h1>My Schedule</h1>
          <p>Organize your classes and weekly academic activities.</p>
        </div>

        <div className="major-label">
          <span>Current Major</span>
          <strong>{student.major}</strong>
        </div>
      </div>

      <div className="schedule-summary">

        <div className="schedule-summary-card">
          <span>Weekly Classes</span>
          <h2>{courses.length}</h2>
        </div>

        <div className="schedule-summary-card">
          <span>Class Days</span>
          <h2>
            {new Set(courses.map((course) => course.day)).size}
          </h2>
        </div>

        <div className="schedule-summary-card">
          <span>Enrolled Credits</span>
          <h2>
            {courses.reduce((total, course) => total + course.credits, 0)}
          </h2>
        </div>

      </div>

      <section className="schedule-section">

        <div className="schedule-heading">
          <div>
            <h2>Weekly Timetable</h2>
            <p>Your classes based on your enrolled courses</p>
          </div>
        </div>

        <div className="schedule-grid">

          {days.map((day) => {
            const dayCourses = courses.filter(
              (course) => course.day === day
            );

            return (
              <div className="schedule-day" key={day}>

                <div className="schedule-day-header">
                  {day}
                </div>

                <div className="schedule-day-content">

                  {dayCourses.length > 0 ? (
                    dayCourses.map((course) => (
                      <div className="schedule-course" key={course.id}>
                        <div className="schedule-course-time">
                          {course.time}
                        </div>

                        <h3>{course.name}</h3>

                        <p>{course.code}</p>

                        <div className="schedule-course-location">
                          📍 {course.room}
                        </div>

                        <small>{course.instructor}</small>
                      </div>
                    ))
                  ) : (
                    <div className="schedule-empty">
                      No classes
                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </section>

    </div>
  );
}

export default Schedule;
