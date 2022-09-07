import "./SearchBar.scss"

const SearchBar = ({handleInput}) => {

  return (
    <div className="search-bar">
        <form onSubmit={(e) => e.preventDefault()}>
            {/* <label htmlFor="search">Search</label> */}
            <input type="text" placeholder="Search here" onChange={handleInput}/>
        </form>
    </div>
  )
}

export default SearchBar