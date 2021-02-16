import BrewerySearch from "./BrewerySearch"
import NavBar from './NavBar.js'
import beerlogo from '../pics/beerlogo4.png'


function Header({search, setSearch, user, setUser}) {

    return (
      <div className="Header">
        <img id='logo' src={beerlogo} alt='beer logo'/>
        <BrewerySearch search={search} setSearch={setSearch} />
        <NavBar user={user} setUser={setUser}/>
      </div>
    );
  }
  
  export default Header;