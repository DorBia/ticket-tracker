import "./SearchBar.scss"

const SearchBar = ({handleInput}) => {

  return (
    <div className="search-bar">
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input type="text" id="search" onChange={handleInput}/>
        </form>
    </div>
  )
}

export default SearchBar