
import React, { useEffect, useState } from "react";
import "./App.css";

// Components
import Header from "./components/Header";
import Sidebar from "./components/SideBar";

// Authentication pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Main pages
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Grades from "./pages/Grades";
import Schedule from "./pages/Schedule";
import Assignments from "./pages/Assignments";
import Announcements from "./pages/Announcements";
import Books from "./pages/Books";
import Profile from "./pages/Profile";

// Major-based data
import { getMajorData } from "./data/defaultData";

// Safely read saved information
const getSavedStudent = () => {
  try {
    const savedStudent = localStorage.getItem("loggedInStudent");
    return savedStudent ? JSON.parse(savedStudent) : null;
  } catch (error) {
    return null;
  }
};

const getSavedPageData = (student) => {
  if (!student) {
    return null;
  }

  try {
    const savedData = localStorage.getItem(
      `studentData_${student.id}`
    );

    return savedData
      ? JSON.parse(savedData)
      : getMajorData(student.major);
  } catch (error) {
    return getMajorData(student.major);
  }
};

function App() {
  // Authentication
  const [student, setStudent] = useState(getSavedStudent);

  const [authPage, setAuthPage] = useState("login");

  // Main application
  const [activePage, setActivePage] = useState("Dashboard");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Student's academic data
  const [pageData, setPageData] = useState(() =>
    getSavedPageData(getSavedStudent())
  );

  // Save academic data whenever it changes
  useEffect(() => {
    if (student && pageData) {
      localStorage.setItem(
        `studentData_${student.id}`,
        JSON.stringify(pageData)
      );
    }
  }, [student, pageData]);

  // LOGIN
  const handleLogin = (loginData) => {
    const loggedInStudent = {
      ...loginData,
      major: loginData.major || "Computer Science"
    };

    localStorage.setItem(
      "loggedInStudent",
      JSON.stringify(loggedInStudent)
    );

    setStudent(loggedInStudent);
    setPageData(getSavedPageData(loggedInStudent));
    setActivePage("Dashboard");
    setIsSidebarOpen(false);
  };

  // SIGNUP
  const handleSignup = (newStudent) => {
    const registeredStudent = {
      ...newStudent,
      major: newStudent.major || "Computer Science"
    };

    localStorage.setItem(
      "loggedInStudent",
      JSON.stringify(registeredStudent)
    );

    setStudent(registeredStudent);
    setPageData(getMajorData(registeredStudent.major));
    setActivePage("Dashboard");
    setIsSidebarOpen(false);
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("loggedInStudent");

    setStudent(null);
    setPageData(null);
    setActivePage("Dashboard");
    setAuthPage("login");
    setIsSidebarOpen(false);
  };

  // UPDATE PROFILE
  const updateStudent = (updatedStudent) => {
    const oldMajor = student.major;
    const newMajor = updatedStudent.major;

    // Update the registered student account
    const accounts = JSON.parse(
      localStorage.getItem("studentAccounts") || "[]"
    );

    const updatedAccounts = accounts.map((account) =>
      account.id === updatedStudent.id
        ? updatedStudent
        : account
    );

    localStorage.setItem(
      "studentAccounts",
      JSON.stringify(updatedAccounts)
    );

    // Update the currently logged-in student
    localStorage.setItem(
      "loggedInStudent",
      JSON.stringify(updatedStudent)
    );

    setStudent(updatedStudent);

    // If the student changes their major,
    // load the new major's academic information
    if (oldMajor !== newMajor) {
      const newMajorData = getMajorData(newMajor);

      setPageData(newMajorData);

      localStorage.setItem(
        `studentData_${updatedStudent.id}`,
        JSON.stringify(newMajorData)
      );
    }
  };

  // SELECT THE PAGE TO DISPLAY
  const renderPage = () => {
    if (!student || !pageData) {
      return null;
    }

    switch (activePage) {
      case "Dashboard":
        return (
          <Dashboard
            student={student}
            pageData={pageData}
          />
        );

      case "Courses":
        return (
          <Courses
            student={student}
            pageData={pageData}
            setPageData={setPageData}
          />
        );

      case "Grades":
        return (
          <Grades
            student={student}
            pageData={pageData}
          />
        );

      case "Schedule":
        return (
          <Schedule
            student={student}
            pageData={pageData}
          />
        );

      case "Assignments":
        return (
          <Assignments
            student={student}
            pageData={pageData}
            setPageData={setPageData}
          />
        );

      case "Announcements":
        return (
          <Announcements
            student={student}
            pageData={pageData}
          />
        );

      case "Books":
        return (
          <Books
            student={student}
          />
        );

      case "Profile":
        return (
          <Profile
            student={student}
            updateStudent={updateStudent}
          />
        );

      default:
        return (
          <Dashboard
            student={student}
            pageData={pageData}
          />
        );
    }
  };

  // SHOW LOGIN OR SIGNUP WHEN NO STUDENT IS LOGGED IN
  if (!student) {
    return (
      <div className="auth-container">
        {authPage === "login" ? (
          <Login
            onLogin={handleLogin}
            onGoToSignup={() => setAuthPage("signup")}
          />
        ) : (
          <Signup
            onSignup={handleSignup}
            onGoToLogin={() => setAuthPage("login")}
          />
        )}
      </div>
    );
  }

  // MAIN STUDENT PORTAL
  return (
    <div className="app-layout">

      {/* Mobile background overlay */}
      {isSidebarOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        onLogout={handleLogout}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main content */}
      <main className="main-content">

        {/* Header */}
        <Header
          student={student}
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        {/* Selected page */}
        <div className="page-container">
          {renderPage()}
        </div>

      </main>
    </div>
  );
}

export default App;
