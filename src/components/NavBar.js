import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

function NavBar({user, setUser}) {

  function handleLogout(){
    setUser(null)
  }

    return (
      
      <nav className="NavBar">
        {user ? (
          <>
            <Button inverted color='black' as={Link} to="/breweries"> Breweries </Button>
            <Button inverted color='black' as={Link} to="/profile"> Profile </Button>
            <Button inverted color='black' as={Link} to='/login' onClick={handleLogout}> Logout </Button>
          </>
        ) : null }
        
      </nav>
    
    );
  }
  
  export default NavBar;