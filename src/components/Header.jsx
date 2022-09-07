import "./Header.scss"

const Header = ({setIsActive}) => {
  return (
    <div className="header">
        <button className="add-button" onClick={() => setIsActive(true)}>Add employee</button>
        <h1>Ticket Tracker</h1>
    </div>
  )
}

export default Header