import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
// import ReviewList from "./ReviewList"
// import BeerList from "./BeerList"



function Brewery ({brewery}) {


  const {id, name, brewery_type, city, state, website_url} = brewery
    return (
      // <div className="Brewery">
      <Card fluid color='black'>
      <Card.Content >
        <Card.Header id='brewName'>{name}</Card.Header>
        <Card.Meta>
          <span className='location'>{city}, {state}</span>
        </Card.Meta>
        <Card.Description>
          <Link to={`/breweries/${id}`}>{`More Info on ${name}`}</Link>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='beer' />
          {brewery_type}
        </a>
      </Card.Content>
  </Card>
    );
  }
  
  export default Brewery;
