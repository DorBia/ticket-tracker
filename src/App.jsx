import { useState } from 'react';
import './App.scss';
import AddNewEmployee from './components/AddNewEmployee';
import Card from './components/Card';
import Header from './components/Header';
import team from "./data/team";

function App() {
  const [isActive, setIsActive] = useState(false)

  const [employees, setEmployees] = useState(team)

const addEmployee = (employee) => {
  setEmployees((employees) => {
    return [...employees, employee]
  })
}

  return (
    <div className="app">
      <Header setIsActive={setIsActive}/>
      {isActive && <AddNewEmployee addEmployee={addEmployee} setIsActive={setIsActive}/>}
      <Card employees={employees}/>
    </div>
  );
}

export default App;
