import ReviewList from "./ReviewList"
import BeerList from "./BeerList"



function Brewery ({brewery}) {

  const {name, brewery_type, city, state, street, website_url} = brewery
    return (
      <div className="Brewery">
          <h1>{name}</h1>
          <p>Type: {brewery_type}</p>
          <p>Located: {street}, in {city}, {state}</p>
          <p>Website: {website_url}</p>
          
        <ReviewList/>
        <BeerList/>

      </div>
    );
  }
  
  export default Brewery;