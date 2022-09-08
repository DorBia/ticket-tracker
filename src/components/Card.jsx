import Counter from "./Counter"

import "./Card.scss"

const Card = ({employees, handleDelete}) => {

  return (
    <div className="card-container"> 
        {employees.map((event) => (
            <div key={event.id} className="card">
                <p className="delete" onClick={() => handleDelete(event.id)}>x</p>
                <h2>{event.name}</h2>
                <h3 className="role">{event.role}</h3>
                <Counter id={event.id}/>
            </div>
        ))}
    </div>

  )
}

export default Card