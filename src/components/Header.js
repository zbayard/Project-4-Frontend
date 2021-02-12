import BrewerySearch from "./BrewerySearch"
import NavBar from './NavBar.js'

function Header({search, setSearch, user}) {

    return (
      <div className="Header">
        <h1>sweet fucking beer app</h1>
        <BrewerySearch search={search} setSearch={setSearch} />
        <NavBar user={user}/>
      </div>
    );
  }
  
  export default Header;