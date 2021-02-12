import {Link} from 'react-router-dom'

function NavBar({user}) {

    return (
      
      <nav className="NavBar">
        {user ? (
          <>
            <Link to="/breweries"> Breweries </Link>
            <Link to="/profile"> Profile </Link>
            <button> Logout </button>
          </>
        ) : ( 
          <>
            <Link to="/login"> Login </Link>
            <Link to="/signup"> Signup </Link>
          </>
        )}
       
        
      </nav>
    
    );
  }
  
  export default NavBar;