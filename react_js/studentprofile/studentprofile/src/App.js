// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

// A component for rendering a single row of the table
const TableRow = ({ employee, handleEdit, handleDelete }) => {
  return (
    <tr>
      <td>{employee.no}</td>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.email}</td>
      <td>{employee.salary}</td>
      <td>{employee.date}</td>
      <td>
        <button onClick={() => handleEdit(employee.no)}>Edit</button>
        <button onClick={() => handleDelete(employee.no)}>Delete</button>
      </td>
    </tr>
  );
};

// A component for rendering the whole table
const Table = ({ employees, handleEdit, handleDelete }) => {
  return (
    <center>
    <table border={'1px'} cellSpacing={'0px'}>
      <thead>
        <tr>
          <th>No.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <TableRow
            key={employee.no}
            employee={employee}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
    </center>
  );
};

// A component for rendering the add employee button and form
const AddEmployee = ({ handleSubmit }) => {
  // Use state hooks to store the input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');

  // A function to handle the form submission
  const onSubmit = (e) => {
    e.preventDefault(); // Prevent the default behavior of the form
    handleSubmit({ firstName, lastName, email, salary, date }); // Call the handleSubmit function from the props with the input values
    // Reset the input values
    setFirstName('');
    setLastName('');
    setEmail('');
    setSalary('');
    setDate('');
  };

  return (
    <div className="add-employee">
      <button style={{backgroundColor:'blue',color:'white',}}>Add Employee</button> {/* A button to show or hide the form */}
      <button>logout</button>
      <form onSubmit={onSubmit}>
        {/* A form with inputs for each field */}
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Salary:</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Submit</button> {/* A button to submit the form */}
      </form><br/>
    </div>
  );
};

// A component for rendering the main app
const App = () => {
  // Use state hooks to store the employees data
  const [employees, setEmployees] = useState([
    {
      no: 1,
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice@gmail.com',
      salary: 5000,
      date: '2023-01-01',
    },
    {
      no: 2,
      firstName: 'Bob',
      lastName: 'Jones',
      email: 'bob@gmail.com',
      salary: 6000,
      date: '2023-02-02',
    },
    {
      no: 3,
      firstName: 'rolf',
      lastName: 'hegsl',
      email: 'rolf@gmail.com',
      salary: 9000,
      date: '2023-09-02',

    },
    {
      no: 4,
      firstName: 'rofl',
      lastName: 'hesg',
      email: 'rofl@gmail.com',
      salary: 9000,
      date: '2023-09-02',
    },
    {
      no: 5,
      firstName: 'rofl',
      lastName: 'hesg',
      email: 'rofl@gmail.com',
      salary: 9000,
      date: '2023-09-02',
    },
    {
      no: 6,
      firstName: 'rofl',
      lastName: 'hesg',
      email: 'rofl@gmail.com',
      salary: 9000,
      date: '2023-09-02',
    },
    {
      no: 7,
      firstName: 'rofl',
      lastName: 'hesg',
      email: 'rofl@gmail.com',
      salary: 9000,
      date: '2023-09-02',
    },
    {
      no: 8,
      firstName: 'rofl',
      lastName: 'hesg',
      email: 'rofl@gmail.com',
      salary: 9000,
      date: '2023-09-02',
    },
    {
      no: 9,
      firstName: 'rofl',
      lastName: 'hesg',
      email: 'rofl@gmail.com',
      salary: 9000,
      date: '2023-09-02',
    },
    {
      no: 10,
      firstName: 'rofl',
      lastName: 'hesg',
      email: 'rofl@gmail.com',
      salary: 9000,
      date: '2023-09-02',
    },


    // ... more employees
  ]);

  // A function to handle adding a new employee
  const handleAdd = (newEmployee) => {
    // Generate a new employee number by adding one to the last employee number
    const newNo = employees[employees.length - 1].no + 1;
    // Create a new employee object with the new number and the input values
    const employee = { ...newEmployee, no: newNo };
    // Update the employees state by appending the new employee to the existing array
    setEmployees([...employees, employee]);
  };

  // A function to handle editing an existing employee
  const handleEdit = (no) => {
    // Find the index of the employee with the given number
    const index = employees.findIndex((employee) => employee.no === no);
    // Prompt the user to enter the new values for each field
    const firstName = prompt('Enter the new first name', employees[index].firstName);
    const lastName = prompt('Enter the new last name', employees[index].lastName);
    const email = prompt('Enter the new email', employees[index].email);
    const salary = prompt('Enter the new salary', employees[index].salary);
    const date = prompt('Enter the new date', employees[index].date);
    // Create a new employee object with the updated values
    const employee = { no, firstName, lastName, email, salary, date };
    // Update the employees state by replacing the old employee with the new one at the same index
    setEmployees([
      ...employees.slice(0, index),
      employee,
      ...employees.slice(index + 1),
    ]);
  };

  // A function to handle deleting an existing employee
  const handleDelete = (no) => {
    // Confirm with the user before deleting
    if (window.confirm('Are you sure you want to delete this employee?')) {
      // Update the employees state by filtering out the employee with the given number
      setEmployees(employees.filter((employee) => employee.no !== no));
    }
  };

  return (
    <div className="app">
      <h1>Employee Management Software</h1>
      <AddEmployee handleSubmit={handleAdd} />
      <Table employees={employees} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default App;