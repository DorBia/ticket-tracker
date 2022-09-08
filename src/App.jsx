import { useState } from 'react';
import './App.scss';
import AddNewEmployee from './components/AddNewEmployee';
import Card from './components/Card';
import Header from './components/Header';
import team from "./data/team";

function App() {
  const [isActive, setIsActive] = useState(false)
  const [employees, setEmployees] = useState(team)
  const [searchText, setSearchText] = useState("")
  const [page, setPage] = useState(0);

  // pages logic
  const employeesPerPage = 10;
  const seenEmployees = page * employeesPerPage;

  const displayEmployees = employees.slice(seenEmployees, seenEmployees + employeesPerPage)

  const pageCount = Math.ceil(employees.length / employeesPerPage);

  const handlePageChange = (e) => setPage(e.selected);

  // add employee logic
  const addEmployee = (employee) => setEmployees((employees) => [...employees, employee])

  // search logic
  const handleInput = (e) => setSearchText(e.target.value.toLowerCase())

  const filteredEmployees = employees.filter((employee) => {
    return employee.name.toLowerCase().includes(searchText) || employee.role.toLowerCase().includes(searchText);
  });

  const searchPageCount = Math.ceil(filteredEmployees.length / employeesPerPage);

  // delete logic
  const handleDelete = (id) => setEmployees(employees.filter((e) => e.id !== id))

  return (
    <div className="app">
      <Header setIsActive={setIsActive} handleInput={handleInput}/>
      {isActive && <AddNewEmployee addEmployee={addEmployee} setIsActive={setIsActive}/>}
      {!searchText && <Card employees={displayEmployees} handleDelete={handleDelete} handlePageChange={handlePageChange} pageCount={pageCount}/>}
      {searchText && <Card employees={filteredEmployees} handleDelete={handleDelete} handlePageChange={handlePageChange} pageCount={searchPageCount}/>}
    </div>
  );
}

export default App;
