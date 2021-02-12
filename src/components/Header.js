import BrewerySearch from "./BrewerySearch"
import NavBar from './NavBar.js'

function Header({search, setSearch, user, setUser}) {

    return (
      <div className="Header">
        <h1>sweet fucking beer app</h1>
        <BrewerySearch search={search} setSearch={setSearch} />
        <NavBar user={user} setUser={setUser}/>
      </div>
    );
  }
  
  export default Header;