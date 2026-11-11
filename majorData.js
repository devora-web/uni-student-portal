export const majorData = {
  "Computer Science": {
    courses: [
      {
        id: 1,
        code: "CS201",
        name: "Data Structures",
        credits: 3,
        instructor: "Dr. Ahmad",
        day: "Monday",
        time: "09:00 AM - 10:30 AM",
        room: "Lab 201",
        enrolled: true
      },
      {
        id: 2,
        code: "CS202",
        name: "Object Oriented Programming",
        credits: 3,
        instructor: "Dr. Sarah",
        day: "Tuesday",
        time: "11:00 AM - 12:30 PM",
        room: "Room 105",
        enrolled: true
      },
      {
        id: 3,
        code: "CS203",
        name: "Database Systems",
        credits: 3,
        instructor: "Dr. John",
        day: "Wednesday",
        time: "09:00 AM - 10:30 AM",
        room: "Lab 103",
        enrolled: true
      },
      {
        id: 4,
        code: "CS204",
        name: "Computer Networks",
        credits: 3,
        instructor: "Dr. Maya",
        day: "Thursday",
        time: "01:00 PM - 02:30 PM",
        room: "Room 202",
        enrolled: true
      }
    ],

    grades: [
      {
        id: 1,
        courseCode: "CS201",
        courseName: "Data Structures",
        midterm: 85,
        final: 90,
        total: 88,
        letter: "A"
      },
      {
        id: 2,
        courseCode: "CS202",
        courseName: "Object Oriented Programming",
        midterm: 78,
        final: 84,
        total: 81,
        letter: "B"
      },
      {
        id: 3,
        courseCode: "CS203",
        courseName: "Database Systems",
        midterm: 92,
        final: 88,
        total: 90,
        letter: "A"
      },
      {
        id: 4,
        courseCode: "CS204",
        courseName: "Computer Networks",
        midterm: 80,
        final: 86,
        total: 83,
        letter: "B"
      }
    ],

    assignments: [
      {
        id: 1,
        title: "Data Structures Project",
        course: "Data Structures",
        dueDate: "2026-11-15",
        status: "Pending"
      },
      {
        id: 2,
        title: "Java Programming Exercise",
        course: "Object Oriented Programming",
        dueDate: "2026-11-18",
        status: "Pending"
      },
      {
        id: 3,
        title: "Database Design",
        course: "Database Systems",
        dueDate: "2026-11-20",
        status: "Completed"
      }
    ],

    announcements: [
      {
        id: 1,
        title: "Programming Lab",
        message: "The next programming lab will take place in Lab 201.",
        date: "2026-11-08",
        type: "Academic"
      },
      {
        id: 2,
        title: "Project Submission",
        message: "Submit your Data Structures project before the deadline.",
        date: "2026-11-10",
        type: "Important"
      }
    ],

    books: [
      {
        id: 1,
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        category: "Programming",
        description: "A comprehensive guide to algorithms and problem solving."
      },
      {
        id: 2,
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Software Development",
        description: "Learn how to write readable and maintainable code."
      },
      {
        id: 3,
        title: "Computer Networking",
        author: "James Kurose",
        category: "Networking",
        description: "An introduction to computer networking concepts."
      }
    ]
  },

  "Business": {
    courses: [
      {
        id: 1,
        code: "BUS201",
        name: "Principles of Management",
        credits: 3,
        instructor: "Dr. Ali",
        day: "Monday",
        time: "09:00 AM - 10:30 AM",
        room: "Room 101",
        enrolled: true
      },
      {
        id: 2,
        code: "BUS202",
        name: "Marketing Management",
        credits: 3,
        instructor: "Dr. Lina",
        day: "Tuesday",
        time: "11:00 AM - 12:30 PM",
        room: "Room 104",
        enrolled: true
      },
      {
        id: 3,
        code: "BUS203",
        name: "Financial Accounting",
        credits: 3,
        instructor: "Dr. Sam",
        day: "Wednesday",
        time: "09:00 AM - 10:30 AM",
        room: "Room 205",
        enrolled: true
      },
      {
        id: 4,
        code: "BUS204",
        name: "Business Statistics",
        credits: 3,
        instructor: "Dr. Noor",
        day: "Thursday",
        time: "01:00 PM - 02:30 PM",
        room: "Room 202",
        enrolled: true
      }
    ],

    grades: [
      { id: 1, courseCode: "BUS201", courseName: "Principles of Management", midterm: 85, final: 90, total: 88, letter: "A" },
      { id: 2, courseCode: "BUS202", courseName: "Marketing Management", midterm: 80, final: 85, total: 83, letter: "B" },
      { id: 3, courseCode: "BUS203", courseName: "Financial Accounting", midterm: 90, final: 92, total: 91, letter: "A" },
      { id: 4, courseCode: "BUS204", courseName: "Business Statistics", midterm: 78, final: 82, total: 80, letter: "B" }
    ],

    assignments: [
      { id: 1, title: "Marketing Strategy", course: "Marketing Management", dueDate: "2026-11-15", status: "Pending" },
      { id: 2, title: "Accounting Exercise", course: "Financial Accounting", dueDate: "2026-11-18", status: "Pending" },
      { id: 3, title: "Management Report", course: "Principles of Management", dueDate: "2026-11-20", status: "Completed" }
    ],

    announcements: [
      { id: 1, title: "Business Seminar", message: "A business seminar will be held next week.", date: "2026-11-08", type: "Academic" },
      { id: 2, title: "Marketing Assignment", message: "Remember to submit your marketing strategy.", date: "2026-11-10", type: "Important" }
    ],

    books: [
      { id: 1, title: "Principles of Marketing", author: "Philip Kotler", category: "Marketing", description: "A guide to modern marketing principles." },
      { id: 2, title: "Financial Accounting", author: "Jerry Weygandt", category: "Accounting", description: "An introduction to financial accounting." },
      { id: 3, title: "Management", author: "Stephen Robbins", category: "Management", description: "Explore management theories and practices." }
    ]
  },

  "Engineering": {
    courses: [
      { id: 1, code: "ENG201", name: "Engineering Mathematics", credits: 3, instructor: "Dr. Omar", day: "Monday", time: "09:00 AM - 10:30 AM", room: "Room 301", enrolled: true },
      { id: 2, code: "ENG202", name: "Physics for Engineers", credits: 3, instructor: "Dr. Rana", day: "Tuesday", time: "11:00 AM - 12:30 PM", room: "Lab 202", enrolled: true },
      { id: 3, code: "ENG203", name: "Electrical Circuits", credits: 3, instructor: "Dr. Karim", day: "Wednesday", time: "09:00 AM - 10:30 AM", room: "Lab 105", enrolled: true },
      { id: 4, code: "ENG204", name: "Technical Drawing", credits: 3, instructor: "Dr. Hadi", day: "Thursday", time: "01:00 PM - 02:30 PM", room: "Room 203", enrolled: true }
    ],

    grades: [
      { id: 1, courseCode: "ENG201", courseName: "Engineering Mathematics", midterm: 85, final: 90, total: 88, letter: "A" },
      { id: 2, courseCode: "ENG202", courseName: "Physics for Engineers", midterm: 78, final: 82, total: 80, letter: "B" },
      { id: 3, courseCode: "ENG203", courseName: "Electrical Circuits", midterm: 90, final: 88, total: 89, letter: "A" },
      { id: 4, courseCode: "ENG204", courseName: "Technical Drawing", midterm: 80, final: 85, total: 83, letter: "B" }
    ],

    assignments: [
      { id: 1, title: "Mathematics Problem Set", course: "Engineering Mathematics", dueDate: "2026-11-15", status: "Pending" },
      { id: 2, title: "Circuit Analysis", course: "Electrical Circuits", dueDate: "2026-11-18", status: "Pending" },
      { id: 3, title: "Technical Drawing Project", course: "Technical Drawing", dueDate: "2026-11-20", status: "Completed" }
    ],

    announcements: [
      { id: 1, title: "Engineering Lab", message: "The engineering laboratory will be open for extra practice.", date: "2026-11-08", type: "Academic" },
      { id: 2, title: "Project Deadline", message: "Submit your technical drawing project on time.", date: "2026-11-10", type: "Important" }
    ],

    books: [
      { id: 1, title: "Engineering Mechanics", author: "R. C. Hibbeler", category: "Mechanics", description: "Fundamental engineering mechanics concepts." },
      { id: 2, title: "Engineering Mathematics", author: "K. A. Stroud", category: "Mathematics", description: "Mathematical methods for engineering students." },
      { id: 3, title: "Electric Circuits", author: "James W. Nilsson", category: "Electrical", description: "A practical introduction to circuit analysis." }
    ]
  },

  "Arts": {
    courses: [
      { id: 1, code: "ART201", name: "Art History", credits: 3, instructor: "Dr. Maya", day: "Monday", time: "09:00 AM - 10:30 AM", room: "Room 110", enrolled: true },
      { id: 2, code: "ART202", name: "Visual Design", credits: 3, instructor: "Dr. Sara", day: "Tuesday", time: "11:00 AM - 12:30 PM", room: "Studio 2", enrolled: true },
      { id: 3, code: "ART203", name: "Digital Illustration", credits: 3, instructor: "Dr. Layla", day: "Wednesday", time: "09:00 AM - 10:30 AM", room: "Lab 104", enrolled: true },
      { id: 4, code: "ART204", name: "Color Theory", credits: 3, instructor: "Dr. Rami", day: "Thursday", time: "01:00 PM - 02:30 PM", room: "Studio 1", enrolled: true }
    ],

    grades: [
      { id: 1, courseCode: "ART201", courseName: "Art History", midterm: 85, final: 90, total: 88, letter: "A" },
      { id: 2, courseCode: "ART202", courseName: "Visual Design", midterm: 80, final: 85, total: 83, letter: "B" },
      { id: 3, courseCode: "ART203", courseName: "Digital Illustration", midterm: 90, final: 92, total: 91, letter: "A" },
      { id: 4, courseCode: "ART204", courseName: "Color Theory", midterm: 78, final: 82, total: 80, letter: "B" }
    ],

    assignments: [
      { id: 1, title: "Art History Research", course: "Art History", dueDate: "2026-11-15", status: "Pending" },
      { id: 2, title: "Digital Illustration", course: "Digital Illustration", dueDate: "2026-11-18", status: "Pending" },
      { id: 3, title: "Visual Design Portfolio", course: "Visual Design", dueDate: "2026-11-20", status: "Completed" }
    ],

    announcements: [
      { id: 1, title: "Art Exhibition", message: "Student artwork will be displayed in the university gallery.", date: "2026-11-08", type: "Academic" },
      { id: 2, title: "Portfolio Submission", message: "Remember to submit your design portfolio.", date: "2026-11-10", type: "Important" }
    ],

    books: [
      { id: 1, title: "The Story of Art", author: "E. H. Gombrich", category: "Art History", description: "An introduction to the history of art." },
      { id: 2, title: "Interaction of Color", author: "Josef Albers", category: "Design", description: "Explore color theory and visual perception." },
      { id: 3, title: "The Elements of Graphic Design", author: "Alex W. White", category: "Graphic Design", description: "Learn the foundations of graphic design." }
    ]
  },

  "Education": {
    courses: [
      { id: 1, code: "EDU201", name: "Educational Psychology", credits: 3, instructor: "Dr. Noor", day: "Monday", time: "09:00 AM - 10:30 AM", room: "Room 101", enrolled: true },
      { id: 2, code: "EDU202", name: "Teaching Methods", credits: 3, instructor: "Dr. Hala", day: "Tuesday", time: "11:00 AM - 12:30 PM", room: "Room 102", enrolled: true },
      { id: 3, code: "EDU203", name: "Classroom Management", credits: 3, instructor: "Dr. Samir", day: "Wednesday", time: "09:00 AM - 10:30 AM", room: "Room 103", enrolled: true },
      { id: 4, code: "EDU204", name: "Curriculum Development", credits: 3, instructor: "Dr. Rima", day: "Thursday", time: "01:00 PM - 02:30 PM", room: "Room 104", enrolled: true }
    ],

    grades: [
      { id: 1, courseCode: "EDU201", courseName: "Educational Psychology", midterm: 85, final: 90, total: 88, letter: "A" },
      { id: 2, courseCode: "EDU202", courseName: "Teaching Methods", midterm: 80, final: 85, total: 83, letter: "B" },
      { id: 3, courseCode: "EDU203", courseName: "Classroom Management", midterm: 90, final: 92, total: 91, letter: "A" },
      { id: 4, courseCode: "EDU204", courseName: "Curriculum Development", midterm: 78, final: 82, total: 80, letter: "B" }
    ],

    assignments: [
      { id: 1, title: "Learning Theory Report", course: "Educational Psychology", dueDate: "2026-11-15", status: "Pending" },
      { id: 2, title: "Lesson Plan", course: "Teaching Methods", dueDate: "2026-11-18", status: "Pending" },
      { id: 3, title: "Classroom Observation", course: "Classroom Management", dueDate: "2026-11-20", status: "Completed" }
    ],

    announcements: [
      { id: 1, title: "Teaching Workshop", message: "A teaching workshop will be held for education students.", date: "2026-11-08", type: "Academic" },
      { id: 2, title: "Lesson Plan Deadline", message: "Submit your lesson plan before the deadline.", date: "2026-11-10", type: "Important" }
    ],

    books: [
      { id: 1, title: "Educational Psychology", author: "Anita Woolfolk", category: "Psychology", description: "Explore how students learn and develop." },
      { id: 2, title: "The Skillful Teacher", author: "Stephen Brookfield", category: "Teaching", description: "Practical approaches to effective teaching." },
      { id: 3, title: "Curriculum Development", author: "Peter Oliva", category: "Education", description: "Understand curriculum planning and design." }
    ]
  }
};