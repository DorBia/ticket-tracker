import { useState } from 'react';
import './App.scss';
import AddNewEmployee from './components/AddNewEmployee/AddNewEmployee';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import team from "./data/team";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [employees, setEmployees] = useState(team);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(0);

  // add employee logic - set employees to old employees with new employee
  const addEmployee = (employee) => setEmployees(employees => [...employees, employee]);

  // delete logic - check target of clicked employee, and if id matches, delete
  const handleDelete = (id) => setEmployees(employees.filter(e => e.id !== id));


  // search logic - set search text to input's value (lower case), then create new list for filtered employees
  const handleInput = (e) => setSearchText(e.target.value.toLowerCase());

  const filteredEmployees = employees.filter((employee) => {
    return employee.name.toLowerCase().includes(searchText) || employee.role.toLowerCase().includes(searchText);
  });

  // pages logic, shortest and least repetitive version, create const variables for employees per page and seen employees
  // created empty variables for displaying and page counting, to pass values from the function - to make it DRY
  const employeesPerPage = 10;
  const seenEmployees = page * employeesPerPage;
  let displayEmployees;
  let pageCount;

  const handleDisplay = (list) => {
    displayEmployees = list.slice(seenEmployees, seenEmployees + employeesPerPage);
    pageCount = Math.ceil(list.length / employeesPerPage);
  }

  searchText ? handleDisplay(filteredEmployees) : handleDisplay(employees);
  const handlePageChange = (e) => setPage(e.selected);

  return (
    <div className="app">
      <Nav setIsActive={setIsActive} handleInput={handleInput}/>
      {isActive && <AddNewEmployee addEmployee={addEmployee} setIsActive={setIsActive}/>}
      <Cards employees={displayEmployees} handleDelete={handleDelete} handlePageChange={handlePageChange} pageCount={pageCount}/>
    </div>
  );
}

export default App;
