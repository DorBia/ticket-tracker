import "./Header.scss"

const Header = ({changeState}) => {
  return (
    <div className="header">
        <button className="add-button"onClick={() => changeState(true)}>Add employee</button>
        <h1>Ticket Tracker</h1>
    </div>
  )
}

export default Header