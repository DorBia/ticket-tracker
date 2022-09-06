

import { useState } from 'react';
import './App.scss';
import AddNewEmployee from './components/AddNewEmployee';
import Card from './components/Card';
import Header from './components/Header';


function App() {
  const [isActive, setIsActive] = useState(false)

  const [names, setNames] = useState([
    { name: "Name a", role: "DevOp", id: 1 },
    { name: "Name b", role: "DevOp", id: 2 },
    { name: "Name c", role: "DevOp", id: 3 },
    { name: "Name d", role: "DevOp", id: 4 },
    { name: "Name e", role: "DevOp", id: 5 },
    { name: "Name f", role: "DevOp", id: 6 },
    { name: "Name g", role: "DevOp", id: 7 },
    { name: "Name h", role: "DevOp", id: 8 },
    { name: "Name i", role: "DevOp", id: 9 },
    { name: "Name j", role: "DevOp", id: 10 },
])

const addEmployee = (name) => {
  setNames((prevNames) => {
    return [...prevNames, name]
  })
}

  return (
    <div className="app">
      <Header changeState={setIsActive}/>
      {isActive && <AddNewEmployee addEmployee={addEmployee} changeState={setIsActive}/>}
      <Card names={names}/>
    </div>
  );
}

export default App;
