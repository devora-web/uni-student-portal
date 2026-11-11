
import React from "react";
import "../styles/Grades.css";

function Grades({ student, pageData }) {
  const grades = pageData?.grades || [];

  const average =
    grades.length > 0
      ? grades.reduce((sum, grade) => sum + grade.total, 0) /
        grades.length
      : 0;

  const getGradeColor = (letter) => {
    if (letter === "A") return "grade-a";
    if (letter === "B") return "grade-b";
    if (letter === "C") return "grade-c";
    return "grade-d";
  };

  return (
    <div className="grades-page">

      <div className="page-intro">
        <div>
          <span className="page-label">ACADEMIC PERFORMANCE</span>
          <h1>My Grades</h1>
          <p>Track your academic achievements and progress.</p>
        </div>

        <div className="major-label">
          <span>Major</span>
          <strong>{student.major}</strong>
        </div>
      </div>

      <div className="grades-overview">

        <div className="grade-overview-card">
          <span>Overall Average</span>
          <h2>{average.toFixed(1)}%</h2>
          <p>Across all courses</p>
        </div>

        <div className="grade-overview-card">
          <span>Courses Graded</span>
          <h2>{grades.length}</h2>
          <p>Current semester</p>
        </div>

        <div className="grade-overview-card">
          <span>Academic Standing</span>
          <h2>
            {average >= 85
              ? "Excellent"
              : average >= 70
              ? "Good"
              : average >= 60
              ? "Average"
              : "Needs Improvement"}
          </h2>
          <p>Based on current grades</p>
        </div>

      </div>

      <section className="grades-table-section">

        <div className="grades-heading">
          <div>
            <h2>Course Results</h2>
            <p>Grades for your major-related courses</p>
          </div>
        </div>

        <div className="grades-table-wrapper">
          <table className="grades-table">

            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Midterm</th>
                <th>Final</th>
                <th>Total</th>
                <th>Grade</th>
              </tr>
            </thead>

            <tbody>
              {grades.map((grade) => (
                <tr key={grade.id}>
                  <td>{grade.courseCode}</td>
                  <td>{grade.courseName}</td>
                  <td>{grade.midterm}%</td>
                  <td>{grade.final}%</td>
                  <td>
                    <strong>{grade.total}%</strong>
                  </td>
                  <td>
                    <span className={`grade-badge ${getGradeColor(grade.letter)}`}>
                      {grade.letter}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {grades.length === 0 && (
          <p className="empty-message">No grades available yet.</p>
        )}

      </section>

    </div>
  );
}

export default Grades;
