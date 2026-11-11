
import React from "react";
import "../styles/Courses.css";

function Courses({ student, pageData, setPageData }) {
  const courses = pageData?.courses || [];

  const toggleEnrollment = (courseId) => {
    const updatedCourses = courses.map((course) => {
      if (course.id === courseId) {
        return {
          ...course,
          enrolled: course.enrolled === false ? true : false
        };
      }

      return course;
    });

    setPageData({
      ...pageData,
      courses: updatedCourses
    });
  };

  const enrolledCount = courses.filter(
    (course) => course.enrolled !== false
  ).length;

  const totalCredits = courses
    .filter((course) => course.enrolled !== false)
    .reduce((total, course) => total + course.credits, 0);

  return (
    <div className="courses-page">

      <div className="page-intro">
        <div>
          <span className="page-label">ACADEMIC INFORMATION</span>
          <h1>My Courses</h1>
          <p>
            Explore and manage the courses available in your major.
          </p>
        </div>

        <div className="major-label">
          <span>Current Major</span>
          <strong>{student.major}</strong>
        </div>
      </div>

      <div className="courses-summary">

        <div className="course-summary-card">
          <span>Total Available Courses</span>
          <h2>{courses.length}</h2>
        </div>

        <div className="course-summary-card">
          <span>Enrolled Courses</span>
          <h2>{enrolledCount}</h2>
        </div>

        <div className="course-summary-card">
          <span>Total Credits</span>
          <h2>{totalCredits}</h2>
        </div>

      </div>

      <div className="courses-list-heading">
        <div>
          <h2>Courses for {student.major}</h2>
          <p>Your academic course selection</p>
        </div>
      </div>

      <div className="courses-grid">

        {courses.map((course) => {
          const enrolled = course.enrolled !== false;

          return (
            <div className="course-card" key={course.id}>

              <div className="course-card-top">
                <span className="course-code">{course.code}</span>

                <span className={`enrollment-status ${enrolled ? "enrolled" : "not-enrolled"}`}>
                  {enrolled ? "Enrolled" : "Not Enrolled"}
                </span>
              </div>

              <div className="course-card-icon">📘</div>

              <h3>{course.name}</h3>

              <div className="course-details">
                <p>
                  <strong>Instructor:</strong> {course.instructor}
                </p>

                <p>
                  <strong>Credits:</strong> {course.credits}
                </p>

                <p>
                  <strong>Day:</strong> {course.day}
                </p>

                <p>
                  <strong>Time:</strong> {course.time}
                </p>

                <p>
                  <strong>Location:</strong> {course.room}
                </p>
              </div>

              <button
                className={enrolled ? "course-remove-button" : "course-enroll-button"}
                onClick={() => toggleEnrollment(course.id)}
              >
                {enrolled ? "Drop Course" : "Enroll Now"}
              </button>

            </div>
          );
        })}

      </div>

      {courses.length === 0 && (
        <p className="empty-message">
          No courses are currently available for this major.
        </p>
      )}

    </div>
  );
}

export default Courses;
