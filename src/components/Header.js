import BrewerySearch from "./BrewerySearch"

function Header({search, setSearch}) {

    return (
      <div className="Header">
        <h1>Header</h1>
        <BrewerySearch search={search} setSearch={setSearch} />
      </div>
    );
  }
  
  export default Header;