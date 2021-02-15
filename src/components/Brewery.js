import React from 'react'
import {Link} from 'react-router-dom'
// import ReviewList from "./ReviewList"
// import BeerList from "./BeerList"



function Brewery ({brewery}) {


  const {id, name, brewery_type, city, state, street, website_url} = brewery
    return (
      // <div className="Brewery">
      <div className='ui four cards'>
        <div className='card'>
          <h1>{name}</h1>
          <p>Type: {brewery_type}</p>
          <p>Located: {street}, in {city}, {state}</p>
          Website: <a href={website_url} target='_blank'> {website_url}</a>
          <p>
            <Link to={`/breweries/${id}`}>{`Check out ${name}`}</Link>
          </p>
        </div>
      </div>
    );
  }
  
  export default Brewery;