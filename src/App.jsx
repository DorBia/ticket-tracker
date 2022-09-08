import { useState } from 'react';
import './App.scss';
import AddNewEmployee from './components/AddNewEmployee';
import Card from './components/Card';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import team from "./data/team";

function App() {
  const [isActive, setIsActive] = useState(false)
  const [employees, setEmployees] = useState(team)
  const [searchText, setSearchText] = useState("")

  const addEmployee = (employee) => {
    setEmployees((employees) => [...employees, employee])
  }

  const handleInput = (e) => {
    setSearchText(e.target.value.toLowerCase()); 
  }

  const filteredEmployees = employees.filter((employee) => {
    return employee.name.toLowerCase().includes(searchText) || employee.role.toLowerCase().includes(searchText);
  });

  const handleDelete = (id) => {
    setEmployees(employees.filter((e) => e.id !== id))
  }

  return (
    <div className="app">
      <Header setIsActive={setIsActive}/>
      {isActive && <AddNewEmployee addEmployee={addEmployee} setIsActive={setIsActive}/>}
      {!searchText && <Card employees={employees} handleDelete={handleDelete}/>}
      {searchText && <Card employees={filteredEmployees} handleDelete={handleDelete}/>}
      <SearchBar handleInput={handleInput}/>
    </div>
  );
}

export default App;
