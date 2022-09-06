
import { useState } from 'react';
import './App.scss';
import Card from './components/Card';

function App() {

  const [names] = useState([
    { name: "Name a", id: 1 },
    { name: "Name b", id: 2 },
    { name: "Name c", id: 3 },
    { name: "Name d", id: 4 },
    { name: "Name e", id: 5 },
    { name: "Name f", id: 6 },
    { name: "Name g", id: 7 },
    { name: "Name h", id: 8 },
    { name: "Name i", id: 9 },
    { name: "Name j", id: 10 },
])

  return (
    <div className="app">
      <h1>Ticket Tracker</h1>
      <Card names={names}/>
    </div>
  );
}

export default App;
