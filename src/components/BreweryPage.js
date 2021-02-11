import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReviewList from './ReviewList.js'
import BeerList from './BeerList.js'

function BreweryPage(){

    const [brewery, setBrewery] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const { id } = useParams();

 

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries/${id}`)
      .then((r) => r.json())
      .then((brewery) => {
        setBrewery(brewery);
        setIsLoaded(true);
      });
    }, [id]);

  if (!isLoaded) return <h2>Loading...</h2>;

  const { name, brewery_type, street, city, state, postal_code, country, phone, website_url } = brewery;



    return(
        <div className='BreweryPage'>
            <h1>{name}</h1>
            <p>{brewery_type}</p>
            <p>{street}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{postal_code}</p>
            <p>{country}</p>
            <p>{phone}</p>
            <p>{website_url}</p>

            <ReviewList/>
            <BeerList/> 
        </div>
    )
}

export default BreweryPage;