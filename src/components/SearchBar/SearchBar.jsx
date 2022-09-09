import "./SearchBar.scss";

const SearchBar = ({handleInput}) => {

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search here" onChange={handleInput}/>
    </div>
  );
}

export default SearchBar;