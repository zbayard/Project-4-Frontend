import {Link} from 'react-router-dom'

function NavBar() {

    return (
      
      <nav className="NavBar">
        <Link to="/breweries"> Breweries </Link>
        <Link to="/profile"> Profile </Link>
        <Link to="/login"> Login </Link>
        <Link to="/logout"> Logout </Link>
      </nav>
    
    );
  }
  
  export default NavBar;