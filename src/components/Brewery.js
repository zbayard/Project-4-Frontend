import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// import ReviewList from "./ReviewList"
// import BeerList from "./BeerList"



function Brewery ({brewery}) {

  // const [isClicked, setIsClicked] = useState(false)

  

  const {id, name, brewery_type, city, state, street, website_url} = brewery
    return (
      <div className="Brewery">
          <h1>{name}</h1>
          <p>Type: {brewery_type}</p>
          <p>Located: {street}, in {city}, {state}</p>
          <p>Website: {website_url}</p>
          <p>
            <Link to={`/breweries/${id}`}>{`Check out ${name}`}</Link>
          </p>
        

      </div>
    );
  }
  
  export default Brewery;