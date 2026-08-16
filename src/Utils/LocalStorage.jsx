const employee = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Complete Dashboard UI",
        taskDescription: "Build the employee dashboard interface according to the design.",
        taskDate: "2026-08-15",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Validation",
        taskDescription: "Fix email and password validation issues on the login page.",
        taskDate: "2026-08-16",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Navbar",
        taskDescription: "Create a responsive navigation bar for the application.",
        taskDate: "2026-08-12",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update API Documentation",
        taskDescription: "Update the API documentation with the latest endpoints.",
        taskDate: "2026-08-13",
        category: "Documentation"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a clean and responsive login page design.",
        taskDate: "2026-08-15",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create User Cards",
        taskDescription: "Create reusable employee card components.",
        taskDate: "2026-08-17",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Color Scheme",
        taskDescription: "Update the application colors according to the new branding.",
        taskDate: "2026-08-11",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Create Mobile Layout",
        taskDescription: "Create the mobile responsive layout for the dashboard.",
        taskDate: "2026-08-10",
        category: "Responsive"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Task Cards",
        taskDescription: "Design cards for displaying employee tasks.",
        taskDate: "2026-08-18",
        category: "UI Design"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup Database",
        taskDescription: "Create the database structure required for the EMS project.",
        taskDate: "2026-08-15",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Employee API",
        taskDescription: "Create API endpoints for employee management.",
        taskDate: "2026-08-16",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Database Tables",
        taskDescription: "Create tables for employees and tasks.",
        taskDate: "2026-08-12",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Authentication",
        taskDescription: "Test employee and admin authentication functionality.",
        taskDate: "2026-08-13",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix API Errors",
        taskDescription: "Fix errors occurring in employee API requests.",
        taskDate: "2026-08-09",
        category: "Bug Fix"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Test Cases",
        taskDescription: "Create test cases for the employee dashboard.",
        taskDate: "2026-08-15",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test Login System",
        taskDescription: "Test login functionality with different credentials.",
        taskDate: "2026-08-16",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Task Creation",
        taskDescription: "Test the task creation and assignment functionality.",
        taskDate: "2026-08-12",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Dashboard Bug",
        taskDescription: "Investigate and fix the dashboard loading issue.",
        taskDate: "2026-08-11",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance Testing",
        taskDescription: "Check the performance of the application on different devices.",
        taskDate: "2026-08-19",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Browser Testing",
        taskDescription: "Test the application across Chrome, Edge and Firefox.",
        taskDate: "2026-08-14",
        category: "Testing"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Reports",
        taskDescription: "Create the employee performance reports section.",
        taskDate: "2026-08-15",
        category: "Reports"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Employee Data",
        taskDescription: "Update employee information in the system.",
        taskDate: "2026-08-17",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Generate Monthly Report",
        taskDescription: "Generate the monthly employee performance report.",
        taskDate: "2026-08-10",
        category: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Organize Employee Records",
        taskDescription: "Organize and verify employee records.",
        taskDate: "2026-08-12",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Backup Employee Data",
        taskDescription: "Create a backup of employee records.",
        taskDate: "2026-08-08",
        category: "Database"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Weekly Report",
        taskDescription: "Prepare the weekly employee activity report.",
        taskDate: "2026-08-20",
        category: "Reports"
      }
    ]
  }
];

const admin = [
{
    id: 1,
    email: "admin@example.com",
    password: "123"
}];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employee))
}
export const getLocalStorage = () => {
    
}