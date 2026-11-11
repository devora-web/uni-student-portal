import { majorData } from "./majorData";

export const defaultStudentData = {
  name: "",
  email: "",
  studentId: "",
  major: "Computer Science",
  year: "First Year",
  semester: "Fall 2026"
};

// Returns the default portal data for the student's major
export const getMajorData = (major) => {
  const selectedMajor = majorData[major] || majorData["Computer Science"];

  return {
    courses: selectedMajor.courses.map(course => ({ ...course })),
    grades: selectedMajor.grades.map(grade => ({ ...grade })),
    assignments: selectedMajor.assignments.map(assignment => ({
      ...assignment
    })),
    announcements: selectedMajor.announcements.map(announcement => ({
      ...announcement
    }))
  };
};