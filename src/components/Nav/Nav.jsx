import "./Nav.scss"
import SearchBar from "../SearchBar/SearchBar"

const Header = ({setIsActive, handleInput}) => {
  return (
    <div className="header">
        <button className="header__add-button" onClick={() => setIsActive(true)}>Add employee</button>
        <h1>Ticket Tracker</h1>
        <SearchBar handleInput={handleInput}/>
    </div>
  );
}

export default Header;