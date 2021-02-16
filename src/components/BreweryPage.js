import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewList from './ReviewList.js'
import BeerList from './BeerList.js'

function BreweryPage({user}){

    const [brewery, setBrewery] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [reviews, setReviews] = useState([])

    const { id } = useParams();


  useEffect(() => {
    fetch(`http://localhost:3000/breweries/${id}`)
      .then((r) => r.json())
      .then((brewery) => {
        setBrewery(brewery);
        setIsLoaded(true);
      });
    }, [id]);


  useEffect (() => {
    fetch(`http://localhost:3000/reviews`)
    .then(r=>r.json())
    .then(reviewsArr => setReviews(reviewsArr))
  }, [])

  const filteredReviews = reviews.filter(review=> {
    if(review.brewery_id == id){
      return true
    } else {
      return null
    }
  })

  function onAddReview(newReview){
    setReviews([...reviews, newReview])
  }

  function handleDeleteReview(id){
    const updatedReviews = reviews.filter((review) => review.id !== id)
    setReviews(updatedReviews)
  }

  if (!isLoaded) return <h2>Loading...</h2>;

  const { name, brewery_type, street, city, state, postal_code, country, phone, website_url } = brewery;



    return(
        <div className='BreweryPage'>
            <h1>{name}</h1>
            <p><strong>Type:</strong> {brewery_type}</p>
            <p><strong>Address</strong>  {street} - {city}, {state} {postal_code}</p>
            <p><strong>Phone:</strong>  {phone} </p>
            <a href={website_url} target='_blank'>Visit Website</a>

            <ReviewList id={id} user={user} reviews={filteredReviews} onAddReview={onAddReview} onDeleteReview={handleDeleteReview}/>
            <BeerList id={id} user={user}/> 
        </div>
    )
}

export default BreweryPage;