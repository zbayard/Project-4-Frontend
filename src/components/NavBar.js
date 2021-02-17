import {Link} from 'react-router-dom'

function NavBar({user, setUser}) {

  function handleLogout(){
    setUser(null)

  }

    return (
      
      <nav className="NavBar">
        {user ? (
          <>
            <Link to="/breweries"> Breweries </Link>
            <Link to="/profile"> Profile </Link>
            <Link to='/login' onClick={handleLogout}> Logout </Link>
          </>
        ) : null }
        
      </nav>
    
    );
  }
  
  export default NavBar;