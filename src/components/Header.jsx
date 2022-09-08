import "./Header.scss"
import SearchBar from "./SearchBar"

const Header = ({setIsActive, handleInput}) => {
  return (
    <div className="header">
        <button className="add-button" onClick={() => setIsActive(true)}>Add employee</button>
        <h1>Ticket Tracker</h1>
        <SearchBar handleInput={handleInput}/>
    </div>
  )
}

export default Header