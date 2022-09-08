import Counter from "../Counter/Counter"
import ReactPaginate from "react-paginate";

import "./Cards.scss"

const Card = ({employees, handleDelete, handlePageChange, pageCount}) => {

  return (
    <>
      <div className="cards-container"> 
        {employees.map((event) => (
          <div key={event.id} className="card">
            <p className="card__delete" onClick={() => handleDelete(event.id)}>x</p>
            <h2>{event.name}</h2>
            <h3 className="card__role">{event.role}</h3>
            <Counter id={event.id}/>
          </div>
        ))}
      </div>
      
      <ReactPaginate
        className={"pagination"}
        pageCount={pageCount}
        previousLabel={"Previous"}
        previousLinkClassName={"previous"}
        nextLabel={"Next"}
        nextLinkClassName={"next"}
        onPageChange={handlePageChange}
        activeClassName={"active"}
      />
    </>
  )
}

export default Card