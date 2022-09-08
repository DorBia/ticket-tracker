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

  // add employee logic
  const addEmployee = (employee) => setEmployees((employees) => [...employees, employee]);

  // delete logic
  const handleDelete = (id) => setEmployees(employees.filter((e) => e.id !== id));


  // search logic
  const handleInput = (e) => setSearchText(e.target.value.toLowerCase());

  const filteredEmployees = employees.filter((employee) => {
    return employee.name.toLowerCase().includes(searchText) || employee.role.toLowerCase().includes(searchText);
  });

  // pages logic 
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
