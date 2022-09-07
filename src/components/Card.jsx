import Counter from "./Counter"

import "./Card.scss"

const Card = ({employees}) => {

  return (
    <div className="card-container"> 
        {employees.map((event) => (
            <div key={event.id} className="card">
                <h2>{event.name}</h2>
                <h3>{event.role}</h3>
                <Counter id={event.id}/>
            </div>
        ))}
    </div>

  )
}

export default Card